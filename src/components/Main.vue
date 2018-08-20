<template>
  <div class="main">
    <h1>강남구의 미세먼지 농도는</h1>
    <h2>{{AirInfo.IDEX_NM}} 입니다</h2>
    <img src="../assets/images/bad.png" v-if="AirInfo.IDEX_NM=='나쁨'"/>
    <img src="../assets/images/soso.png" v-else-if="AirInfo.IDEX_NM =='보통'"/>
    <img src="../assets/images/good.png" v-else-if="AirInfo.IDEX_NM =='좋음'"/>
    <div>
      <div class="row bottom">
        <div class="col-4 col-md-4">
          <!-- <img src="../assets/images/bad.png" v-if="AirInfo.IDEX_NM=='나쁨'"/>
          <img src="../assets/images/soso.png" v-else-if="AirInfo.IDEX_NM =='보통'"/>
          <img src="../assets/images/good.png" v-else-if="AirInfo.IDEX_NM =='좋음'"/> -->
          <img src="../assets/images/good.png"/>
          <p>미세먼지</p>
          {{AirInfo.PM10}}
        </div>
        <div class="col-4 col-md-4">
          <!-- <img src="../assets/images/bad.png" v-if="AirInfo.IDEX_NM=='나쁨'"/>
          <img src="../assets/images/soso.png" v-else-if="AirInfo.IDEX_NM =='보통'"/>
          <img src="../assets/images/good.png" v-else-if="AirInfo.IDEX_NM =='좋음'"/> -->
          <img src="../assets/images/soso.png">
          <p>오존</p>
           {{AirInfo.O3}}
        </div>
        <div class="col-4 col-md-4">
          <!-- <img src="../assets/images/bad.png" v-if="AirInfo.IDEX_NM=='나쁨'"/>
          <img src="../assets/images/soso.png" v-else-if="AirInfo.IDEX_NM =='보통'"/>
          <img src="../assets/images/good.png" v-else-if="AirInfo.IDEX_NM =='좋음'"/> -->
          <img src="../assets/images/bad.png">
          <p>초미세먼지</p>
           {{AirInfo.PM25}}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'main',
  data () {
    return {
      // Toast on the bottom
      vertical: 'bottom',
      horizontal: 'center',
      duration: 3000,
      snackbar_msg: "",
      // Geolocation
      geoLocation : {
        currentLocation: null,
        currentLocationLat: null,
        currentLocationLon: null,
        currentDistrict: null
      },
      // Air status info
      AirInfo : {
        MSRDT: '201706291700',
        IDEX_NM: '나쁨',
        PM10: 10.0,
        PM25: 27.0,
        O3: 0.024
      },
      appStyle : {
        background: '#2772DB',
        height: '100%'
      }
    }
  },
  methods: {
    // Get User's Location Info
    getGeo() {
      navigator.geolocation.getCurrentPosition(function(position){
        console.log('latitude: ', position.coords.latitude);
        console.log('longitude: ', position.coords.longitude);
        this.innerlat = position.coords.latitude;
        this.innerlong = position.coords.longitude;
     });
    },
    getUserLocation() {
      this.getGeo();
      return navigator.geolocation.getCurrentPosition(function(position) {
        this.geoLocation.currentLocation = position.coords;
        this.geoLocation.currentLocationLon = position.coords.longitude;
        this.geoLocation.currentLocationLat = position.coords.latitude;
        console.log("유저로케이션~~", position.coords)
        this.geoInfoToDistrictName(position.coords.latitude, position.coords.longitude);
      }.bind(this), function (error) { // getCurrentPosition 비동기 실행 결과 값을 컴포넌트에 매핑
        console.log('Error occurred. Error code: ' + error.code);
        switch (error.code) {
          case 0:
            console.log("Geolocation unknown error");
            break;
          case 1:
            console.log("Geolocation permission denied");
            break;
          case 2:
            console.log("Geolocation position unavailble");
            break;
          case 3:
            console.log("Getting location info timed out");
            break;
          default:
            console.log("Track the error");
        }
      }, { maximumAge: 5 * 60 * 1000 });
    },
    // naver from coord to address -- https://navermaps.github.io/maps.js/docs/tutorial-3-geocoder-geocoding.example.html
    geoInfoToDistrictName(lat, lng) {
      var self = this;
      // console.log(this.lat);
      // console.log(this.long);
      naver.maps.Service.reverseGeocode({
        // 역삼역 고정값
        location: new naver.maps.LatLng(lat, lng),
      }, function(status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert('Something wrong!');
        }
        var result = response.result, // 검색 결과의 컨테이너
            items = result.items; // 검색 결과의 배열
        // console.log(items[0].addrdetail.sigugun);
        self.geoLocation.currentDistrict = items[0].addrdetail.sigugun;
      });
    },
    // Toast Log messages
    openToast(msg) {
      this.$refs.snackbar.open();
      this.snackbar_msg = msg;
    }
  },
  created() {
    // Get geolocation info
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');
      this.getUserLocation();
    } else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }
  }
}
</script>

<style scoped>
  .main { font-size: 20px; text-align: center;}
  img { width: 200px; padding: 20px;}
  .bottom {
    background:rgba(255, 255, 255, 0.35);
    padding: 20px 0;
    font-size: 12px;
    margin-top: 50px;
  }
  .top{
    z-index: 10;
  }
</style>
