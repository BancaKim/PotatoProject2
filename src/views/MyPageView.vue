<template>
    <div>
        <br>
        <p style="float:left">
            <img src="@/assets/프로필.png" style="float: left; width:150px; margin-top: 100px; margin-left: 30px;">
        </p> 
        <div style="float: left; font-size: 25px; margin-left: 40px; margin-top: 160px;">닉네임</div>


    </div>
    <div style="display: flex; justify-content: center; width: 100%;">
    <button style="width: 1200px; height: 80px; font-size: 27px; border: none;">프로필 수정</button></div>

    <!-- <div style="float: left; font-size: 23px; text-decoration: underline; margin-top: 30px; text-align: left;">
    <span>매너온도</span><img src="@/assets/information.png" style="float: left; width:50px;"></div> -->
    <div style="display: flex; align-items: center;" >
    <p style="float: left; font-size: 24px; text-decoration: underline; margin-top: 30px; margin-left: 50px; text-align: left;" >매너온도</p> &nbsp;&nbsp;
    <button aria-label="Information" style="border: 1px solid #000; border-radius: 50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;
      font-family: Arial, sans-serif;">i</button>
    </div>
    <div style="text-align: center; width: 100%;">
    <img src="@/assets/Menner.png" style="width: 780px; height: 87px; margin-bottom: 50px; margin-top: -30px; margin-left: 30px;" >
    </div >
    <div class="potato-container">
    <div class="potato-row" v-for="(group, index) in groupedPotatoes" :key="index">
      <img v-for="potato in group" :key="potato" src="@/assets/potato.jpg" alt="Potato" class="potato-image"/>
    </div>
    </div>
   <p>
    <button style="width: 300px; height: 90px; font-size:30px; border: none; background-color: #D2B48C; margin-top: 30px;">포인트 결제</button> 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button style="width: 300px; height: 90px; font-size:30px; border: none; background-color: #D2B48C; margin-top: 30px;">포인트 충전</button></p>
    
    <div class="button-container">
    <!-- 플래너 버튼 -->
    <button class="icon-button">
      <img src="@/assets/planner-icon.png" alt="플래너" class="icon"/>
      <span style="font-size: 20px;">플래너 보기</span>
    </button>

    <!-- 구매 버튼 -->
    <button class="icon-button">
      <img src="@/assets/shopping-icon.png" alt="구매" class="icon"/>
      <span style="font-size: 20px;">구매 보기</span>
    </button>

    <!-- 좋아요 버튼 -->
    <button class="icon-button">
      <img src="@/assets/heart-icon.png" alt="좋아요" class="icon"/>
      <span style="font-size: 20px;">관심 목록</span>
    </button>
  </div>

  <input type="button" value="test" @click="test">

</template>

<script>
// import { reactive, toRefs } from 'vue'

export default {
    name: 'PotatoImages,IconButtons',
    data() {
        return {
            potatoCnt: 16
        }
    },
    computed: {
    groupedPotatoes() {
      let result = [];
      const potatoes = [...Array(this.potatoCnt).keys()]; // 20개의 감자 이미지를 가진 배열 생성
      for (let i = 0; i < potatoes.length; i += 8) {
        result.push(potatoes.slice(i, i + 8)); // 배열을 10개 단위로 쪼개어 result에 추가
      }
      return result;
    }
  },
    methods: {
        test() {

            this.potatoCnt = 8; //DB가 저장된 갯수가 10개.

        }
    }
    // setup () {
    //     const state = reactive({
    //         count: 0,
    //     })
    
    //     return {
    //         ...toRefs(state),
    //     }
    // }
}
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
</style>