import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Demo from '../views/Demo.vue';
import FirstSection from '../views/FirstSection.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/first-section',
    name: 'FirstSection',
    component: FirstSection
  }
];

const router = new VueRouter({
  routes,
});

export default router;
