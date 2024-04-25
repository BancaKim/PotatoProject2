<template>
  <h1 style="margin-top: 5%">포인트 충전</h1>
  <hr>
  <div class="container">
    <div class="point-charging-page">
      <div class="current-points" style=" margin-top: 60px">
        <span style="font-size: 35px;">현재 포인트</span>

        <br><br>
        <div class="rectangle-container">
          <div>
            {{ currentPotato }} 현재 감자
          </div>
          <div class="row" v-for="row in 2" :key="row">
            <img v-for="n in 8" :key="`potato-${row}-${n}`" :src="require('@/assets/potato.jpg')" alt="Potato"
              class="potato-image" />
          </div>
        </div>
      </div>
      <br><br>
      <div class="recharge">
        <h2 style="font-size: 35px;">충전할 포인트</h2>
        <br>
      </div>
      <div class="info-box" style="display: flex; align-items: center; justify-content: flex-start;">
        <span class="points" style="font-size: 40px; flex-shrink: 0;">충전 포인트: </span>
        <img :src="require('@/assets/potato.jpg')" alt="Cookie" class="img-cookie"
          style="width: 100px; height: 80px; margin-left: 10px;" />
        <div class="inline-container" style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 30px;">x</span>
          <input type="text" v-model="inputPotato"
            style="width: 50px; height: 50px; background-color: #E6E6E6; font-size: 30px; text-align: center; ">
          <span style="font-size: 30px;">개</span>
        </div>
      </div>
      <br><br>
      <div class="amount">
        <!-- <h2 style="font-size: 35px;">금액</h2> -->
        <button @click="submitValue" class="Calculating">계산하기</button>
        <br><br>
        <div class="info-box" style="display: flex; align-items: center; justify-content: center;">
          <div v-if="inputMoney !== null" class="Result">
            금 액: {{ calResult }} 원
          </div>
        </div>
      </div>
      <br>
      <div class="payment-methods">
        <br><br>
        <h2 style="font-size: 35px;">결제 수단 선택</h2>
        <br>
        <input type="checkbox" id="payment-checkbox" v-model="showAccount">&nbsp;
        <label for="payment-checkbox" class="payment-label">계좌 결제</label>
        <p v-if="showAccount" style="font-size: 18px;">
          계좌번호: (국민) 697601-01-649999 <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (신한) 110-331-722587</p>


      </div>
    </div>
    <br><br>
    <div>
      <button class="btn-edit" style="width: 300px; height: 80px; font-size: 30px" @click="profileBack">이
        &nbsp;&nbsp;&nbsp; 전</button> &nbsp;
      <button class="btn-edit" style="width: 300px; height: 80px; font-size: 30px" @click="addPotato">결
        &nbsp;&nbsp;&nbsp; 제</button>
    </div>
  </div>
</template>


<script setup>
import {ref, computed} from 'vue';
import { useUserStore } from '@/store/userstore'
import { useRouter } from 'vue-router';
import { chargePotato } from '@/api/posts'

const router = useRouter();
const store = useUserStore();

let currentPotato = store.getUserInfo[0].sumPotato;
let inputPotato= ref(0);
let inputMoney = ref(0);
let showAccount = ref(false);

const profileBack=()=>{
  router.push('/profileBack')
};

const addPotato = async () =>{
  try {
    console.log('addpotato start');
    let data={
      user_id: store.getUserInfo[0].user_id, 
      unit_potato: inputPotato.value,
      potato_pay: inputMoney.value,
    }
    console.log(data);
    await chargePotato(data);
    console.log('vuedata:'+ data);
  } catch(error){
    console.error(error);
  }
  //
}
const calResult = computed(()=>{
  if (inputMoney.value !== null) {
    return new Intl.NumberFormat('ko-KR').format(inputMoney.value);
  }
  return null;
});

const submitValue = ()=> {
  inputMoney.value = inputPotato.value * 5000;// 이 메소드가 호출될 때 inputValue의 현재 값을 확인할 수 있습니다.
};

// const groupedPotatoes=()=>{
//   let result = [];
//   const potatoes = [...Array(this.potatoCnt).keys()];
//   for (let i = 0; i < potatoes.length; i += 8) {
//     result.push(potatoes.slice(i, i + 8));
//   }
//   return result;
// }
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120vh;
  background-color: #E0F8E6;
}.rectangle-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f4e1c1; /* 조정 필요한 배경색 */
  border-radius: 20px; /* 둥근 모서리 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  margin: auto; /* 페이지 중앙에 위치 */
}
.rectangle {
  width: 700px; /* 너비 */
  height: 100px; /* 높이 */
  background-color: #F6E3CE; /* 배경 색상 */
  border: 1px solid none; /* 테두리 */
}
.row {
  display: flex;
  justify-content: center;
  margin-bottom: 10px; /* 이미지 행 사이의 간격 */
}

.potato-image {
  width: 60px; /* 감자 이미지의 크기 */
  height: auto; /* 이미지의 높이를 자동으로 조정하여 비율 유지 */
  margin-right: 10px; /* 이미지 사이의 간격 */
}
.btn-edit {
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 20px;
  background-color: #eaeaea;
  cursor: pointer;
}
.info-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* 필요에 따라 조절하세요 */
  padding: 25px;
  margin-bottom: 20px;
  margin-right: 50px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.points {
  margin-left: 100px;
}
.Calculating{
  width: 40%;
  height: 60px;
  font-size: 30px;
  background-color: #f4e1c1;
  border-radius: 10px;
}
.Result{
  font-size: 30px;
  flex-shrink: 0;
}
#payment-checkbox {
    width: 24px; /* 체크박스 너비 조절 */
    height: 24px; /* 체크박스 높이 조절 */
    cursor: pointer; /* 마우스 커서를 손가락 모양으로 변경 */
}

.payment-label {
    font-size: 24px; /* 텍스트 크기 조절 */
    cursor: pointer; /* 마우스 커서를 손가락 모양으로 변경 */
}

</style>