<template>
  <div id="">
    <ParticleVue/>
  </div>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
import ParticleVue from './components/ParticleVue.vue'
export default {
  name: 'App',
  components: { ParticleVue }
}
</script>

<!-- Only for this component, file -->
<style scoped>
  .main {
    padding-top: 0px;
  }

</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e6e6e6;
}

body{
  margin: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
