<template>
    <div class="custom-container card">
        <div class="field">
            <label class="label">Compound Name</label>
            <div class="control">
                <input v-model="userCompoundName" class="input" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Compound Weight</label>
            <div class="control">
                <input v-model="userCompoundWeight" class="input" type="number" placeholder="Compound Weight">
            </div>
        </div>
        <div class="field">
            <label class="label">Due Date</label>
            <div class="control">
                <input v-model="userDueDate" class="input" type="date" placeholder="Due Date">
            </div>
        </div>

        

            <div class="field">
            <label class="label">Assay</label>
            <div class="control">
                <div class="select">
                <select v-model="userAssaySelected">
                    <option>Select dropdown</option>
                    <option v-for="(assay, index) in assays" :key="index" >{{index + 1}}. {{assay.assayType}} | Quote:(${{assay.maxPriceQuote.toFixed(2)}} - ${{assay.maxPriceQuote.toFixed(2)}}) </option>
                </select>
                </div>
            </div>
            </div>

            <div class="field">
            <label class="label">Special Comments/Instructions</label>
            <div class="control">
                <textarea v-model="userComments" class="textarea" placeholder="Textarea"></textarea>
            </div>
            </div>

            <div class="field">
            <div class="control">
                <label class="checkbox">
                <input v-model="userTermsConditons" type="checkbox">
                I agree to the <a href="#">terms and conditions</a>

                </label>
            </div>
            </div>

            

            <div class="field is-grouped">
            <div class="control">
                <button @click="addWorkOrder" class="button is-link">Submit</button>
            </div>
            <div class="control">
                <button class="button is-text">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                test: '',
                userComments: '',
                userAssaySelected: 'Select dropdown',
                userTermsConditons: false,
                userCompoundName: '',
                userCompoundWeight: '',
                userDueDate: '',
            }
        },
        computed: {
            assays: function(){
                return this.$store.getters.assays;
            },
            assayID: function() {
               let assayNumber = parseInt(this.userAssaySelected.charAt(0));
               return this.assays[assayNumber - 1].assayID;
            }
        },
        methods: {
            addWorkOrder(){
                this.$store.dispatch('addWorkOrder', {datedue: this.userDueDate, comments: this.userComments, assay: this.assayID, compoundname: this.userCompoundName, compoundweight: this.userCompoundWeight})
            },
        },
        created() {
            this.$store.dispatch('getAssays');
        },
    }
</script>

<style scoped>
    .custom-container{
        width: 50%;
        padding: 15px;
        margin: auto;
        margin-top: 25px;
        
    }
</style>