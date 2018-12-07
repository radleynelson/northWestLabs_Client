<template>
    <div>
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-4 is-offset-4">
                        <h3 class="title has-text-grey">Login</h3>
                        <p class="subtitle has-text-grey">Please login to proceed.</p>
                        <div class="box">
                            <figure class="avatar">
                                <img src="https://placehold.it/128x128">
                            </figure>
                            <div>
                                <div class="field">
                                    <div class="control">
                                        <input v-model="user.email" class="input is-large" type="text" placeholder="User Name" autofocus="">
                                    </div>
                                </div>

                                <div class="field">
                                    <div class="control">
                                        <input v-model="user.pass" class="input is-large" type="password" placeholder="Your Password">
                                    </div>
                                </div>
                                <div class="field">
                                    
                                </div>
                                <button @click="logIn" class="button is-block is-info is-large is-fullwidth">Login</button>
                            </div>
                        </div>
                        <p class="has-text-grey">
                            <a href="../">Sign Up</a> &nbsp;·&nbsp;
                            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                            <a href="../">Need Help?</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    email: '',
                    pass: '',
                }
            }
        },
        methods: {
            logIn(){
                this.$store.dispatch('logInUser',this.user);
            }
        }
    }
</script>

<style scoped>

</style>