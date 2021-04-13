<template>
  <div id="app">
    <h1>Hola Rufo</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/">
            Prueba
          </router-link>
      </li>
      <li>
        <router-link to="/user">
            User
          </router-link>
        </li>
        </ul></nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import prueba from './components/prueba.vue';
import User from './components/user.vue';

export default {
  name: 'App',
  components: {
    prueba,
    User
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
