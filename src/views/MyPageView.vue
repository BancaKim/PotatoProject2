<template>
  <h1 style="margin-top: 5%">나의 감자</h1>
  <hr>
  <h2>{{ userId }}님 안녕하세요!</h2>
  <hr>
  <div class="row">
    <div class="col-xl-4">
      <!-- Profile picture card-->
      <div class="card mb-4 mb-xl-0">
        <div class="card-header">Profile Picture</div>
        <div class="card-body text-center">
          <!-- Profile picture image-->
          <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png"
            alt="">
          <!-- Profile picture help block-->
          <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
          <!-- Profile picture upload button-->
          <button class="btn btn-primary" type="button" style="background-color: #D2B48C; border: none; "
            @click="goToProfile">프로필 수정</button>
        </div>
      </div>
    </div>
  </div>
  <br>
  <!-- <div style="display: flex; justify-content: center; width: 100%;">
    <button style="width: 1300px; height: 83px; background-color: #D8D8D8; font-size: 29px; border: none; color: #848484;" @click="goToProfile">프로필 수정</button>
    </div> -->

  <!-- <div style="float: left; font-size: 23px; text-decoration: underline; margin-top: 30px; text-align: left;">
    <span>매너온도</span><img src="@/assets/information.png" style="float: left; width:50px;"></div> -->
  <div style="display: flex; align-items: center;">
    <p
      style="float: left; font-size: 24px; text-decoration: underline; margin-top: 30px; margin-left: 50px; text-align: left;">
      매너온도</p> &nbsp;&nbsp;
    <button aria-label="Information" style="border: 1px solid #000; border-radius: 50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;
      font-family: Arial, sans-serif;">i</button>
    <div class="tooltip" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
      <slot></slot>
      <transition name="fade">
        <div class="tooltiptext" v-if="showTooltip">{{ text }}</div>
      </transition>
    </div>
  </div>
  <div style="text-align: center; width: 100%;">
    <img :src="require('@/assets/Menner.png')"
      style="width: 780px; height: 87px; margin-bottom: 50px; margin-top: -30px; margin-left: 30px;">
  </div>
  <div class="potato-container">
    <div class="potato-row" v-for="(group, index) in groupedPotatoes" :key="index">
      <div style="font-size:40px;">
        나의 감자 : {{ potatoCnt }}
        <img v-for="potato in group" :key="potato" :src="require('@/assets/potato.jpg')" alt="Potato"
          class="potato-image" />
      </div>
    </div>
  </div>
  <p>
    <button
      style="width: 300px; height: 90px; font-size:30px; color: #FFFFFF; border: none; background-color: #D2B48C; margin-top: 30px;"
      @click="pointpay">포인트 결제</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button
      style="width: 300px; height: 90px; font-size:30px; color:#FFFFFF; border: none; background-color: #D2B48C; margin-top: 30px;"
      @click="pointcharge">포인트 충전</button>
  </p>

  <div class="button-container">
    <!-- 플래너 버튼 -->
    <button class="icon-button" @click="salelist">
      <img :src="require('@/assets/planner-icon.png')" alt="판매" class="icon" />
      <span style="font-size: 20px;"> 판매내역</span>
    </button>

    <!-- 구매 버튼 -->
    <button class="icon-button" @click="buylist">
      <img :src="require('@/assets/shopping-icon.png')" alt="구매" class="icon" />
      <span style="font-size: 20px;">구매 보기</span>
    </button>

    <!-- 좋아요 버튼 -->
    <button class="icon-button" @click="like">
      <img :src="require('@/assets/heart-icon.png')" alt="좋아요" class="icon" />
      <span style="font-size: 20px;">관심 목록</span>
    </button>
  </div>

  <input type="button" value="test" @click="setPotato">

</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/store/userstore'
import { useRouter } from 'vue-router';
// import { getPotato } from '@/api/posts'
const router = useRouter();
const store = useUserStore();

// let potatoCnt = store.userInfo[0].sumPotato;
// let potatoCnt = getPotato(store.getUserInfo[0].user_id);
let potatoCnt = store.getUserInfo[0].sum_potato;
let userId = store.getUserInfo[0].user_id;

const groupedPotatoes=computed(()=> {
  let result = [];
  const potatoes = [...Array(potatoCnt).keys()];
  for (let i = 0; i < potatoes.length; i += 8) {
    result.push(potatoes.slice(i, i + 8));
  }
  return result;
});

const goToProfile=()=>{
  router.push('/profile');
};

const pointpay=()=>{
  router.push('/userPay');
};

const pointcharge=()=>{
  router.push('/charge');
};

const salelist=()=>{
  router.push('/sale');
};

const buylist=()=>{
  router.push('/buy');
};
const like=()=>{
  router.push('/like');
};

</script>

<style>
.potato-container {
  display: flex;
  justify-content: space-around;
  background-color: #F3E2A9; /* 밝은 갈색 배경 */
  padding: 20px;
  border-radius: 15px;
}
.potato-image {
  width: 80px; /* 이미지 너비 */
  height: auto; /* 이미지 높이 */
  margin: 0 6px; /* 이미지 사이의 간격 */
}
.potato-row {
  display: flex;
  justify-content: center; /* 각 줄의 감자 이미지를 가운데 정렬 */
  margin-bottom: 25px; /* 줄 사이의 간격 */
  
}
.potato-container {
  display: flex;
  flex-wrap: wrap; /* 한 줄에 표시할 수 있는 갯수를 넘어가면 다음 줄로 */
  justify-content: center; /* 가운데 정렬 */
  gap: 10px; /* 이미지 사이의 간격 */
  padding: 20px; /* 컨테이너 내부 여백 */
  background-color: #F3E2A9; /* 직사각형 배경색 */
  border-radius: 10px; /* 모서리 둥글게 */
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.icon-button {
  width: 1500px;
  height: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.icon-button .icon {
  margin-top: 10px;
  margin-bottom: 5px;
  width: 200px; /* 아이콘 크기 조정 */
  height: 160px; /* 아이콘 크기 조정 */
}

.icon-button span {
  font-size: 14px;
  color: #666;
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 160px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.row {
  display: flex; /* Flexbox를 활성화합니다. */
  justify-content: center; /* 수평 중앙 정렬 */
}
body{margin-top:20px;
background-color:#f2f6fc;
color:#69707a;
justify-content: center;
}
.img-account-profile {
    height: 10rem;
}
.rounded-circle {
    border-radius: 50% !important;
}
.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
.card .card-header {
    font-weight: 500;
}
.card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
</style>