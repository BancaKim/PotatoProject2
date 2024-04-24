<template>
<h1 style="margin-top: 5%">포인트 결제</h1>
<hr>
  <div class="container">
    <div class="form-group">
    <label for="nickname" class="form-label">송금 받는 사람 : </label>
    <input type="text" id="nickname" class="input-box" placeholder="닉네임을 입력해주세요.">
  </div>

    <div class="info-box">
      <img :src="require('@/assets/potato.jpg')" alt="Cookie" class="img-cookie" /> <!-- 이미지 경로는 프로젝트 구조에 맞게 조정하세요 -->
      <span style="font-size: 18px;">X 2</span>
      <span class="points" style="font-size: 18px;">현재 포인트: ● 4개</span>
    </div>

    <button class="btn-edit">프로필 수정</button>
  </div>
</template>

<script>
export default {
  name: 'UserProfile'
  // 컴포넌트 데이터와 메서드를 여기에 추가합니다.
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f6fc;
}

.input-box {
  border: 1px solid #ccc;
  padding: 10px 15px;
  margin-bottom: 20px;
  margin-right: -%;
  width: 300px; /* 입력 필드의 너비를 조절하세요 */
}

.info-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%; /* 필요에 따라 조절하세요 */
  padding: 10px;
  margin-bottom: 20px;
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
  margin-left: 5px;
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
