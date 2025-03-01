<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/charts">Charts</router-link> |
      <router-link to="/tables">Tables</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
