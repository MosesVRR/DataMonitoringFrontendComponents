import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from '../pages/Home.vue';
import Charts from '../pages/Charts.vue';
import Tables from '../pages/Tables.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/charts', component: Charts },
  { path: '/tables', component: Tables }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
