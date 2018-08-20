<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link to="/" @click.native="closeMenu()">PWAir</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active ">
            <router-link to="/main" @click.native="closeMenu()">메인</router-link><span class="sr-only">(current)</span>
          </li>
          <li class="nav-item">
            <router-link to="/status" @click.native="closeMenu()">미세먼지</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chart" @click.native="closeMenu()">주간차트</router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/" @click.native="closeMenu(),logOut()" v-if="loginCheck != 1">로그인</router-link>
            <router-link to="/" @click.native="closeMenu(),logOut()" v-else>로그아웃</router-link>
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
  export default {
    computed : {
      loginCheck() {
        return this.$store.state.loginStatus
      }
    },
    methods:{
      closeMenu() {
        $('#navbarNav').collapse('hide');
      },
      logOut(event) {
        this.$store.state.loginStatus = 0;
        var self = this;
        firebase.auth().signOut()
        .then(function() {
          console.log("you have been logged out")
          self.$router.push({path : '/'});
        }, function(error) {
          console.log("error : ", error);
        });
      }
    }
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
