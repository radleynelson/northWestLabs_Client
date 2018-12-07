import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import logIn from '@/components/logIn'
import signUp from '@/components/signUp';
import addWorkOrder from '@/components/addWorkOrder';
import workOrders from '@/components/workOrders';
import openWorkOrders from '@/components/openWorkOrders';
import singleOrder from '@/components/singleOrder';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/LogIn',
      name: 'logIn',
      component: logIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/addWorkOrder',
      name: 'addWorkOrder',
      component: addWorkOrder
    },
    {
      path: '/workOrders',
      name: 'workOrders',
      component: workOrders
    },
    {
      path: '/openWorkOrders',
      name: 'openWorkOrders',
      component: openWorkOrders
    },
    {
      path: '/openWorkOrders/:id',
      name: 'singleOrder',
      component: singleOrder
    }
    
  ]
})
