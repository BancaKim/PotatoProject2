<template>
  <div>
    <h1>내 근처</h1>
    <hr>
    <div
      class="my-8 border 7px border-8 solid border-zinc-200"
      id="map"
      style="
        width: auto;
        height: 500px;
        background: gray;
        border-radius: 26px;
        box-shadow: 0 11px 15px rgba(1, 2, 1, 0.2);
      "
    >
    </div>
  </div>
  <v-col cols="auto">
        <v-btn size="large" @click ="hideMarkers()">Marker 숨기기</v-btn>
        <v-btn size="large" @click ="showMarkers()">Marker 보기</v-btn>
  </v-col>
  <PostListView2></PostListView2>
</template>


  
<script>
import PostListView2 from '@/views/posts2/PostListView2.vue';

export default {
  components: { PostListView2 },
  name: "kakaoMap",
  data() {
    return {
      map: null,
      markers: [],
      latitude: 0,
      longitude: 0
    }
  },
  created() {
    if (!("geolocation" in navigator)) {
      return;
    }

    // get position
    navigator.geolocation.getCurrentPosition(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;

      if (window.kakao && window.kakao.maps) {

        this.initMap();

      } else {
        const script = document.createElement("script");
        
        script.onload = () => kakao.maps.load(this.initMap);
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=2b7ea4f4b6284836b0c03acbecf1272b";
        document.head.appendChild(script);
      }

    }, err => {
      alert(err.message);
    })
  },

  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
      this.displayMarker([[this.latitude, this.longitude]]);
      kakao.maps.event.addListener(this.map, 'click', (mouseEvent) => {              // 클릭시 마커 생성
                this.addMarker(mouseEvent.latLng);
            });
      
    },

    displayMarker(markerPositions) {                                
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
          (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
            (position) =>
                new kakao.maps.Marker({
                  map: this.map,
                  position,
                })
        );

        const bounds = positions.reduce(
            (bounds, latlng) => bounds.extend(latlng),
            new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },

    addMarker(position) {                                         //추가
            const marker = new kakao.maps.Marker({
                position: position
            });
            marker.setMap(this.map);
            this.markers.push(marker);
        },
        setMarkers(map) {
            for (let i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(map);
            }
        },
        showMarkers() {
            this.setMarkers(this.map);
        },
        hideMarkers() {
            this.setMarkers(null);
        }




  }
}







// export default {
//   data() {
//     return {
//         markers:[]
//     };
//   },
// mounted() {
//   if (window.kakao && window.kakao.maps) {
//     this.initMap();
//   } else {
//     const script = document.createElement('script');
//     script.onload = () => kakao.maps.load(this.initMap);
//     script.src =
//       'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=2b7ea4f4b6284836b0c03acbecf1272b';
//     document.head.appendChild(script);
//   }
// },
//   methods: {
//     initMap() {
//         var mapContainer = document.getElementById('map'), // 지도를 표시할 div
//         mapOption = {
//           center: new kakao.maps.LatLng(37.564343, 126.947613), // 지도의 중심좌표
//           level: 3, // 지도의 확대 레벨
//         };
//     var map = new kakao.maps.Map(mapContainer, mapOption);
//     var positions = [
//   {
//     latlng: new kakao.maps.LatLng(37.562632898194835, 126.9454282268269),
//   },
//    {
//     latlng: new kakao.maps.LatLng(37.56195884514403, 126.94922601468826),
//    },
// ];
//    //마커를 생성합니다.
//    positions.forEach((pos)=>{
//     var marker = new kakao.maps.Marker({
//      position: pos.lating,//마커의 위치
//      });
//      //마커가 지도 위에 표시되도록 설정합니다.
//      marker.setMap(map);
//    })
//     },


//   }
// };
</script>

<style scoped>
</style>