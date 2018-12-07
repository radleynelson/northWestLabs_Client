<template>
    <div >
        <div v-if="orders.length >= 1" class="holder">
        <h1 style="text-align: center;" class="is-size-3 holder">Your Work Orders</h1>
        <table class="table is-bordered holder">
            <thead>
                <tr>
                    <th>Assay Name</th>
                    <th>Compound Name</th>
                    <th>Status</th>
                    <th>Comments</th>
                    <th>Weight</th>
                    <th>Min Price Quote</th>
                    <th>Max Price Quote</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in orders" :key="index">
                    <td>{{item.assayType}}</td>
                    <td>{{item.compoundName}}</td>
                    <td>{{item.workOrderStatus}}</td>
                    <td>{{item.comments}}</td>
                    <td>{{item.weight}} mg</td>
                    <td>${{item.minPriceQuote.toFixed(2)}}</td>
                    <td>${{item.maxPriceQuote.toFixed(2)}}</td>
                    <td>{{item.dateDue}}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
    <div v-else>
        <h1 style="text-align: center;" class="is-size-3 holder">Your Currently Have No Orders</h1>
    </div>
    <div class="newHolder">
            <h3 class="is-size-3 newOrder"><router-link to="/addWorkOrder">Add New Work Order</router-link></h3>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                test: '3',
            }
        },
        computed: {
            orders: function(){
                return this.$store.getters.Work_Orders
            }
        },
        created() {
            this.$store.dispatch('GetCustomerWorkOrders');
        },
        
    }
</script>

<style scoped>
    .holder{
        margin: auto;
        margin-top: 25px;
    }
    .newOrder{
        text-align: center;
    }
    .newHolder{
        margin-top: 25px;
    }
</style>