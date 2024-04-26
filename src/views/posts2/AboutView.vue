<template>
  <div>
    <hr>
    <h1>내 근처</h1>
    <hr>
    <div class="my-8 border 7px border-8 solid border-zinc-200" id="map" style="
        width: auto;
        height: 500px;
        background: gray;
        border-radius: 26px;
        box-shadow: 0 11px 15px rgba(1, 2, 1, 0.2);
      ">
    </div>
  </div>
  <v-col cols="auto">
    <!-- <v-btn size="large" @click="displayRestaurant()">맛집위치</v-btn> -->
    <v-btn size="large" @click="hideMarkers()">표시 숨기기</v-btn>
    <v-btn size="large" @click="showMarkers()">표시 보기</v-btn>
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
      longitude: 0,
      restaurant: []

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
      console.log(pos);
      

      if (window.kakao && window.kakao.maps) {
        this.initMap();
        console.log('========')
        console.log(this.markers)
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
      // this.displayMarker([[this.latitude, this.longitude]]);
      const initialPositions = [
     // [37.494280903178534, 127.02813455185938],  여기에 열개 추가하면 시작할 때 보이고
        [37.494280903178534, 127.02813455185938], //백소정
        [37.49462337141015, 127.02777281949419], //오늘의 통닭
        [37.495291998092895, 127.0293081622762], //창고43
        [37.495851048035355, 127.027538626143], //일일향
        [37.49154145258068, 127.02972225424185], //신마웨이마라탕
        [37.49012432634367, 127.03086092060117], //맥도날드
        [37.49511659844687, 127.02808680539347], //김명자굴국밥
        [37.49662154815925, 127.02693390687239], //매드포갈릭
        [37.4948187956838, 127.03000060341184], //청기와타운
        [37.495096501530846, 127.02733762813554], //청기와타운
      [this.latitude, this.longitude]
    ]; 
    this.displayMarker(initialPositions);
    console.log(this.latitude);
    console.log(this.longitude);
    console.log(this.markers);


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
      this.markers.forEach((marker) => { // 인덱스 변수 i 제거
        marker.setMap(map);
      });
    },
    showMarkers() {
      this.setMarkers(this.map);
    },
    hideMarkers() {
      this.setMarkers(null);
    },
    displayRestaurant() {

      let restList = [

      ]
      this.displayMarker(restList);
      console.log(this.markers);
    }


  }
}



// export default {
//   components: { PostListView2 },
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
//           center: new kakao.maps.LatLng(127.02777281949419, 37.49462337141015), // 지도의 중심좌표
//           level: 3, // 지도의 확대 레벨
//         };
//     var map = new kakao.maps.Map(mapContainer, mapOption);
//     var positions = [
//   {
//     latlng: new kakao.maps.LatLng(127.02813455185938, 37.494280903178534),
//   },
//    {
//     latlng: new kakao.maps.LatLng(127.0293081622762, 37.495291998092895),
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

<style scoped></style>