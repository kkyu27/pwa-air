<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link to="/">PWAir</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/main">메인</router-link><span class="sr-only">(current)</span>
          </li>
          <li class="nav-item">
            <router-link to="/status">미세먼지</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chart">주간차트</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login">로그인</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Home from './components/Home.vue';
// import Login from './components/Login.vue';
// import Status from './components/Status.vue';
// import Chart from './components/Chart.vue';
// import VueRouter from 'vue-router';
// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     { path:'/', component: Home},
//     { path:'/home', component: Home},
//     { path:'/status', component: Status},
//     { path:'/chart', component: Chart},
//     { path:'/login', component: Login}
//   ]
// })

export default {
  
}
</script>

<style>
body {
  background-color: #157efb;
  color: #fff;
  font-size: 14px;
}
html {
  background-color: #157efb;
}
.container { 
  padding-top:50px;
}
.navbar a {
  color: rgba(255,255,255,.75);
}
</style>
