<template>
  <div>
    <h1>내 근처</h1>
    <hr>
    <img src="@/assets/map.jpg">

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
}}
</script>

<style lang="scss" scoped></style>