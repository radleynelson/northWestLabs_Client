<template>
    <div>
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-4 is-offset-4">
                        <h3 class="title has-text-grey">Sign Up</h3>
                        <p class="subtitle has-text-grey">Please register to proceed.</p>
                        <div class="box">
                            <figure class="avatar">
                                <img src="https://placehold.it/128x128">
                            </figure>
                            <div>
                                
                                <div class="field">
                                    <div class="control">
                                        <input v-model="userEmail" class="input is-large" type="email" placeholder="Your Email" autofocus="">
                                    </div>
                                </div>
                                

                                <div class="field">
                                    <div class="control">
                                        <input v-model="userPass" class="input is-large" type="password" placeholder="Your Password">
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input v-model="userConfirmPass" class="input is-large" type="password" placeholder="Confirm Password">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="checkbox">                
                    </label>
                                </div>
                                <button @click="registerUser" class="button is-block is-info is-large is-fullwidth">Register</button>
                            </div>
                        </div>
                        <p class="has-text-grey">
                            <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                userEmail: '',
                userPass: '',
                userConfirmPass: '',
            }
        },
        methods: {
            registerUser(){
                let user = {
                    email: this.userEmail,
                    pass: this.userPass,
                    confirmPass: this.userConfirmPass
                }
                this.$store.dispatch('registerUser', user);
            }
        },
        created() {
            // axios.get('/api/Invoices').then(res => {
            //     console.log(res);
            // }).catch(err => {
            //     console.log(err);
            // })
        },
    }
</script>

<style scoped>

</style>