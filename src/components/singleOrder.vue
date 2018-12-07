<template>
  <div>
    <div class="custom-container card">
        
        <div class="field">
            <label class="label">Compound LT Number</label>
            <div class="control">
                <input readonly v-model="singleWorkOrder.LTNumber" class="input" type="text" :placeholder="workOrder.assayType">
            </div>
        </div>
        <div class="field">
            <label class="label">Compound Name</label>
            <div class="control">
                <input readonly v-model="singleWorkOrder.compoundName" class="input" type="text" :placeholder="workOrder.assayType">
            </div>
        </div>
        <div class="field">
            <label class="label">Compound Weight</label>
            <div class="control">
                <input v-model="singleWorkOrder.weight" class="input" type="number" placeholder="Compound Weight">
            </div>
        </div>


        <div class="field">
            <label class="label">Special Comments/Instructions</label>
            <div class="control">
                <textarea v-model="singleWorkOrder.workOrderStatus" class="textarea" placeholder="Textarea"></textarea>
            </div>
            </div>

            <div class="field is-grouped">
            <div class="control">
                <button @click="updateWorkOrder" class="button is-link">Change</button>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleOrder',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      singleWorkOrder: '',
    }
  },
  computed: {
      workOrder: function(){
          this.singleWorkOrder = this.$store.getters.singleWorkOrder;
          return this.$store.getters.singleWorkOrder;
      }
  },
  created() {
      this.$store.dispatch('getSingleWorkOrder',this.$route.params.id);
  },
  methods: {
      updateWorkOrder(){
          this.$store.dispatch('updateWorkOrder', this.singleWorkOrder)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-container{
    width: 50%;
    padding: 15px;
    margin: auto;
    margin-top: 25px;
        
    }
</style>
