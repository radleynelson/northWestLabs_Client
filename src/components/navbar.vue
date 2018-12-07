<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="/static/NWL.jpeg" width="150" height="156">
    </router-link>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">
        Home
      </router-link>

      <a class="navbar-item">
        Order
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <router-link v-if="this.$store.getters.role == 'Client' " to="/workOrders" class="navbar-item">
            View Orders
          </router-link>
          <router-link v-else to="/openWorkOrders" class="navbar-item">
            View All Orders
          </router-link>
          <router-link to="addWorkOrder" class="navbar-item">
            Order
          </router-link>
          
          
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/signUp" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link to="/logIn" class="button is-light">
            Log in
          </router-link>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                test: 3,
            }
        },
    }
</script>

<style scoped>
.navbar-item img {
    max-height: none;
}
</style>