import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Demo from '../views/Demo.vue';
import FirstSection from '../views/FirstSection.vue';
import Assignments from '../views/Assignments.vue';

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
  },
  {
    path: '/assignments',
    name: 'Assignments',
    component: Assignments
  }
];

const router = new VueRouter({
  routes,
});

export default router;
