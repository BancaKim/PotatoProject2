<template>
  <div>
    <h1>내 근처</h1>
    <hr>
    <div
      class="my-8 border 7px border-8 solid border-zinc-200"
      id="map"
      style="
        width: 1200px;
        height: 500px;
        background: gray;
        border-radius: 26px;
        box-shadow: 0 11px 15px rgba(1, 2, 1, 0.2);
      "
    >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
mounted() {
  if (window.kakao && window.kakao.maps) {
    this.initMap();
  } else {
    const script = document.createElement('script');
    script.onload = () => kakao.maps.load(this.initMap);
    script.src =
      'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=198fae9257e3a2b5af3086644a5de975';
    document.head.appendChild(script);
  }
},
  methods: {
    initMap() {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.564343, 126.947613), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
    var map = new kakao.maps.Map(mapContainer, mapOption);
    var positions = [
  {
    latlng: new kakao.maps.LatLng(37.562632898194835, 126.9454282268269),
  },
  {
    latlng: new kakao.maps.LatLng(37.56195884514403, 126.94922601468826),
  },
];
  //마커를 생성합니다.
  positions.forEach((pos)=>{
    var marker = new kakao.maps.Marker({
      position: pos.lating,//마커의 위치
    });
    //마커가 지도 위에 표시되도록 설정합니다.
    marker.setMap(map);
  })
    },
  }
};
</script>

<style scoped>
</style>