<template>
  <div id="app">
    <navbar/>
    <div class="container"><router-view/></div>
    <botomFooter/>
  </div>
</template>

<script>
import navbar from './components/navbar';
import botomFooter from './components/botomFooter';


export default {
  name: 'App',
  components: {navbar, botomFooter},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
</style>
