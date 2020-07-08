<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/home/Home.vue'
import Login from "@/views/login/Login";
export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: { HelloWorld , Home,Login}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
  border:0
}
body{
  margin: 0;
}
</style>
