// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-Router';
Vue.use(VueRouter);

import Prueba from './components/prueba';
import User from './components/user';
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
    path:'/',
    component: Prueba
  },{
    path:'/user',
    component: User
  }
]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
