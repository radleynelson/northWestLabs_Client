import Vue from 'vue';
import Vuex from 'vuex';
import router from './router/index'
import axios from 'axios';

import VuexPersistence from 'vuex-persist'
import qs from 'qs';

Vue.use(Vuex);


export default new Vuex.Store({
   
  state:{
    user: {
      token: '',
      role: '',
      userID: '',
    },
    assays: [],
    Work_Orders: [],
    openWorkOrders: [],
    singleWorkOrder: '',

  },
  getters: {
    token: state => state.user.token,
    assays: state => state.assays,
    Work_Orders: state => state.Work_Orders,
    userID: state => state.user.userID,
    role: state => state.user.role,
    openOrders: state => state.openWorkOrders,
    singleWorkOrder: state => state.singleWorkOrder,
  },
  mutations: {
    setToken(state, token){
      state.user.token = token;
      console.log('token', token);
    },
    setAssays(state, assays){
      state.assays = assays;
    },
    SetUserOrders(state, orders){
      state.Work_Orders = orders;
    },
    setUserRole(state, user){
      state.user.role = user.role;
      state.user.userID = user.userID;
    },
    setOpenWorkOrders(state, orders){
      state.openWorkOrders = orders;
    },
    setSingleWorkOrder(state, order){
      state.singleWorkOrder = order
    }
  },
  actions: {
    registerUser(context, user){  
      console.log(user);
        axios({
            method: 'post',
            url: '/api/Account/Register',
            headers: {
              'Content-type': 'application/x-www-form-urlencoded'
            },
             data: qs.stringify({
                "Email": user.email,
                "Password": user.pass,
                "ConfirmPassword": user.confirmPass
            })
        }).then(res => {
           console.log(res);
           router.push('/logIn');
          
        }).catch(err => {
            console.log(err);
        })
    },
    logInUser(context, user){
      console.log(user.email);
      axios({
        method: 'post',
        url: '/Token',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        },
         data: qs.stringify({
            "userName": user.email,
            "password": user.pass,
            "grant_type": "password"
        })
    }).then(res => {
       console.log(res);
       context.commit('setToken', res.data.access_token);
       axios.get('/api/User',{headers: {'Authorization': "bearer " + context.getters.token}}).then(res => {
         context.commit('setUserRole',{role: res.data[0], userID: res.data[1]});
         if(res.data[0] == "Client")
         {
           router.push('/workOrders');
         }
         else
         {
           router.push('/openWorkOrders')
         }
       }).catch(err => {
         console.log("Error setting user role", err);
         alert("Try Loggin in again");
       })
      
    }).catch(err => {
        console.log(err);
    })
    }, 
    getAssays(context){
      axios.get('/api/Assays',{headers: {'Authorization': "bearer " + context.getters.token}}).then(res => {
        context.commit('setAssays', res.data);
      }).catch(err => {
        console.log('Error getting Assays', err);
        
      })
    },
    addWorkOrder(context, wo){
      axios({
        method: 'post',
        url: '/api/Client_W_O',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          'Authorization': "bearer " + context.getters.token
        },
         data: qs.stringify({
            "comments": wo.comments,
            "assayID": wo.assay,
            "dateDue": wo.datedue,
            "compoundName": wo.compoundname,
            "weight": wo.compoundweight
            
        })
    }).then(res => {
      console.log('Response  from posting work order', res);
      if(res.data = "Good"){
        router.push('/workOrders');
        
      }
    }).catch(err => {
      console.log(err);
      alert('Please try again');
    })
    },
    GetCustomerWorkOrders(context){
      axios.get('/api/Client_W_O',{headers:{'Authorization': "bearer " + context.getters.token}}).then(res => {
        context.commit('SetUserOrders',res.data);
      }).catch(err => {
        console.log("Error getting orders", err);
      })
    },
    getOpenWorkOrders(context){
      axios.get('api/OpenWorkOrders',{headers:{'Authorization': "bearer " + context.getters.token}}).then(res => {
        context.commit('setOpenWorkOrders', res.data);
      }).catch(err => {
        console.log(err);
      })
    },
    getSingleWorkOrder(context, LTNumber){
      let url = '/api/Work_Orders/' + LTNumber
      axios.get(url,{headers:{'Authorization': "bearer " + context.getters.token}}).then(res => {
        console.log(res.data);
        context.commit('setSingleWorkOrder', res.data)
      }).catch(err => {
        console.log("Error getting single order", err);
      })
    },
    updateWorkOrder(context, workOrder){
      axios({
        method: 'put',
        url: '/api/Work_Orders/5',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          'Authorization': "bearer " + context.getters.token
        },
         data: qs.stringify({
            "weight": workOrder.weight,
            "workOrderStatus": workOrder.workOrderStatus,
            "workOrderID": workOrder.workOrderID,
            "LTNumber": workOrder.LTNumber,
            
        })
    }).then(res => {
      console.log(res);
      router.push('/openWorkOrders');
      console.log('test');
    }).catch(err => {
      console.log(err);
    })
    }
  },
  plugins:[new VuexPersistence().plugin]
});
