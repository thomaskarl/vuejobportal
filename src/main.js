import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './HomePage.vue'
import JobListing from './JobListingPage.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobListing
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
