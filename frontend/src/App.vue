<template>
  <div id="app">
    <h1>Data Monitoring Web Components</h1>
    <MyComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyComponent from './components/MyComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    MyComponent
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  padding: 20px;
}
</style>