<template>
  <nav class="navbar">
    <ul class="navbar-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/graphs">Graphs</router-link></li>
      <li><router-link to="/tables">Tables</router-link></li>
      <li><router-link to="/data-visualization">Data Visualization</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
});
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navbar-links li {
  color: white;
}

.navbar-links a {
  text-decoration: none;
  color: white;
}

.navbar-links a:hover {
  text-decoration: underline;
}
</style>