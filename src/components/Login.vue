<template>
  <div class="login">
    <h1> PWAir </h1>
    <form>
      <div class="form-group">
        <label for="account" >Email address</label>
        <input type="email" class="form-control" id="account" placeholder="name@example.com" v-model="email">
      </div>
      <div class="form-group">
        <label for="password" >Password</label>
        <input type="password" class="form-control" id="password" placeholder="password" v-model="password">
      </div>
      <button type="submit" class="btn btn-default basic" @click='loginWithInfo'>Sign in</button>
      <!-- <a href=""><img src="../assets/images/google.png"></a>
      <a href=""><img src="../assets/images/facebook.png"></a> -->
      <button type="submit" class="btn btn-primary" @click='loginWithInfo'>Sign in with Google</button>
      <button type="submit" class="btn btn-primary" @click='loginWithInfo'>Sign in with Facebook</button>
    </form>
  </div>
</template>

<style scoped>
  .login { width: 90%; height: 400px; margin: 0 auto; text-align: center;}
  .login h1 { padding-bottom:40px; margin-top:-50px;}
  .login .form-group .form-control { width: 250px; margin: 0 auto;}
  .login form .basic { display: block; margin: 0 auto; margin-bottom: 10px; background-color: #fff;}
  .login form .basic .btn-primary { border-color: #fff; color: #fff; }
  .login form .basic:hover { opacity: 0.8;}
  .login form img { width: 170px; }
</style>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      loginWithInfo(event) {
        var self = this;
        if (this.loginExceptionHandler()) return true;
        return firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
          if (error.code === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(error.message);
          }
          console.log(error);
        }).then(function (user) {
          console.log(user, "has been logged");
          self.$router.push({path: '/main'});
          // location.href = "/home";
        });
      },
      loginExceptionHandler() {
        if ( this.email === "" || this.password === "") {
          alert("enter the email and password");
          return true;
        }
        return false;
      },
    }
  }
</script>
