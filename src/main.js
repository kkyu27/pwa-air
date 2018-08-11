import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue';
import Status from './components/Status.vue';
import Chart from './components/Chart.vue';
import Main from './components/Main.vue';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path:'/', component: Login},
    { path:'/main', component: Main},
    { path:'/status', component: Status},
    { path:'/chart', component: Chart},
    { path:'/login', component: Login}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('서비스워커 등록성공! ServiceWorker registration successful with scope: ', registration.scope);
//     }).catch(function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }
