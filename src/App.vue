<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/charts">Charts</router-link> |
    <router-link to="/tables">Tables</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-active {
  color: #42b983;
}
</style>
