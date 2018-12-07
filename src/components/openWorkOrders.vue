<template>
  <div>
    <h1 style="text-align: center;" class="is-size-3 holder">Open Work Orders</h1>
        <table class="table is-bordered holder">
            <thead>
                <tr>
                    <th>LT Number</th>
                    <th>Customer ID</th>
                    <th>Assay Name</th>
                    <th>Compound Name</th>
                    <th>Status</th>
                    <th>Comments</th>
                    <th>Weight</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in orders" :key="index">
                    <td><router-link :to="{ name: 'singleOrder', params: {id: item.LTNumber}}" >{{item.LTNumber}}</router-link></td>
                    <td>{{item.clientID}}</td>
                    <td>{{item.assayType}}</td>
                    <td>{{item.compoundName}}</td>
                    <td>{{item.workOrderStatus}}</td>
                    <td>{{item.comments}}</td>
                    <td>{{item.weight}} mg</td>
                    <td>{{item.dateDue}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: 'openWorkOrders',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
      orders: function(){
          return this.$store.getters.openOrders;
      }
  },
  created() {
      this.$store.dispatch('getOpenWorkOrders');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    color: black;
}
a:hover{
    text-decoration: underline;
}
</style>
