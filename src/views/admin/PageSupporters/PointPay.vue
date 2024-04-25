<template>
<h1 style="margin-top: 5%">포인트 결제</h1>
<hr>
  <div class="container">
    <div class="form-group" style="" >
    <label for="nickname" class="form-label" style="font-size: 50px; ">송금 받는 사람  </label> &nbsp;&nbsp;
    <input type="text" id="nickname" class="input-box"  style="font-size:30px;" placeholder="받는 분 닉네임을 입력해주세요.">
  </div>
  <br><br><br>
  <div class="form-group" >
    <label for="nickname" class="form-label" style="font-size: 50px; ">송금 포인트  </label>
  <div>
    <div style="display: flex; align-items: center; gap: 20px;"> <!-- 이 div가 두 info-box를 감싸는 부모 컨테이너입니다. -->
  <div class="info-box" style="display: flex; align-items: center; justify-content: flex-start;">
    <span class="points" style="font-size: 40px; flex-shrink: 0;">송금 포인트: </span>
    <img :src="require('@/assets/potato.jpg')" alt="Cookie" class="img-cookie" style="width: 100px; height: 80px; margin-left: 10px;"/>
    <div class="inline-container" style="display: flex; align-items: center; gap: 10px;">
      <span style="font-size: 30px;">x</span>
      <input type="text" style="width: 50px; height: 50px; background-color: #E6E6E6; font-size: 30px; text-align: center; ">
      <span style="font-size: 30px;">개</span>
    </div>
  </div>
  <div class="info-box" style="display: flex; align-items: center; justify-content: flex-start;">
    <span class="points" style="font-size: 40px; flex-shrink: 0;">현재 포인트: </span>
    <img :src="require('@/assets/potato.jpg')" alt="Cookie" class="img-cookie" style="width: 100px; height: 80px; margin-left: 10px;"/>
    <div class="inline-container" style="display: flex; align-items: center; gap: 10px;">
      <span style="font-size: 30px;">x</span>
      <span style="font-size: 30px;">{{ accrue }}</span>
      <span style="font-size: 30px;">개</span>
    </div>
    </div>
    </div>
  </div>
</div>
    <br><br><br>
    <div>
    <button class="btn-edit" style="width: 300px; height: 80px; font-size: 30px" @click="Back">이  &nbsp;&nbsp;&nbsp; 전</button> &nbsp;
    <button class="btn-edit" style="width: 300px; height: 80px; font-size: 30px">결  &nbsp;&nbsp;&nbsp; 제</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return{
      accrue : '2'
    }
},
methods: {
      Back(){
        this.$router.push('/profileback')
      },
  },
}
</script>

<style scoped>
.inline-container {
  display: flex;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #E0F2F7;
}

.input-box {
  border: 1px solid #ccc;
  padding: 10px 40px;
  margin-bottom: 20px;
  margin-right: -30%;
  width: 500px; /* 입력 필드의 너비를 조절하세요 */
  height: 60px;
}
.input-box:hover {
  border-color: #F3E2A9; /* 마우스 오버 시 입력 필드 테두리 색상 변경 */
}

.input-box:focus {
  border-color: #F3E2A9; /* 입력 필드에 포커스 됐을 때 테두리 색상 유지 */
}
.info-box {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 75%; /* 필요에 따라 조절하세요 */
  padding: 30px;
  margin-bottom: 20px;
  margin-right: 50px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.img-cookie {
  width: 30px; /* 쿠키 이미지의 크기를 조절하세요 */
  height: 30px;
  margin-right: 5px;
}

.points {
  margin-left: 100px;
}

.btn-edit {
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 20px;
  background-color: #eaeaea;
  cursor: pointer;
}
</style>
