<template>
    <div class="card shadow-2-strong" 
      style=" width: 600px;border-radius: 1rem;position: absolute; top: 44%;  left: 50%; transform: translate(-50%, -30%);
      background: hsla(0, 0%, 100%, 0.8); backdrop-filter: blur(30px);">
    <h1 style="margin-top: 10%; margin-bottom: -3%;"> 프로필 수정 </h1>
    <div class="profile-page">
      <div class="profile-image">
      
      <img src="http://bootdey.com/img/Content/avatar/avatar1.png" style="margin-top: 60px; margin-right: 30px;" alt="프로필 사진"/>
      <br><br>
      <hr style="width: 100%; margin: 0 auto;">
      <br>


      <div class="input-group">
    <label for="nickname" class="input-label" style="font-size: 24px;">아이디 </label> &nbsp;&nbsp;&nbsp;
    <input type="text" id="user_id" class="styled-input" style="font-size: 18px; color: #B18904;" v-model="memberId" placeholder="변경할 아이디를 입력해주세요." />
    </div>
    <div class="input-group">
    <label for="nickname" class="input-label" style="font-size: 24px;">비밀번호 </label> &nbsp;&nbsp;&nbsp;
    <input type="password" id="user_pw" class="styled-input" style="font-size: 18px; color: #B18904;" v-model="memberPw" placeholder="변경할 비밀번호를 입력해주세요." />
    </div>
    <div class="input-group">
    <label for="nickname" class="input-label" style="font-size: 24px;">주소 </label> &nbsp;&nbsp;&nbsp;
    <input type="text" id="user_adrs" class="styled-input" style="font-size: 18px; color: #B18904;" v-model="memberAddress" placeholder="변경할 주소를 입력해주세요." />
    </div>
      <button style="margin-right: 30px; font-size: 20px;" @click="Back">이전</button>
      <button style="margin-right: 30px; font-size: 20px;" @click="updatePofile">편집</button>
    </div>
</div>
</div>
  </template>
  
  <script>
  import { useUserStore } from '@/store/userstore.js';
  import axios from 'axios';


  export default {
    name: 'ProfilePage,StyledInput',
    data() {
      return {
        memberId: '', //ID 입력 창
        memberPw: '', // PW
        memberAddress: ''
      }
    },
    methods: {
       Back(){
         this.$router.push('/profileback');
        },

        //사용자 프로필 정보 불러오기
        startProfile() {
        let store = useUserStore();

        //정보가 없을 경우. alert 호출 후 return
        if(store.getUserInfo.length == 0) {
          alert('가입 된 정보가 없습니다.');
          return ;
        }
        
        //사용자 정보 profile 보여주기
        let detailUser = store.getUserInfo[0];

        this.memberId = detailUser.user_id;
        this.memberPw = detailUser.user_pw;
        this.memberAddress = detailUser.user_adrs;
      },

      //사용자 정보 수정하기
      updatePofile() {


        let profileObj = {};
        profileObj.memberId = this.memberId;
        profileObj.memberPw = this.memberPw;
        profileObj.memberAddress = this.memberAddress;
        axios.post('http://localhost:4000/updateUser', profileObj)
        .then(res => {
          console.log(res);
          alert('성공');
        })
      }
    },
    created() {
      this.startProfile();
    },

  }
  </script>
  
<style scoped>
  .input-group {
  display: flex;
  align-items: center; /* 세로 방향 가운데 정렬 */
  justify-content: center; /* 가로 방향 가운데 정렬 */
}

.input-label {
  margin: 0; /* 필요한 경우 여백 조정 */
  margin-right: 16px;
  white-space: nowrap; /* 라벨이 줄 바꿈되지 않도록 설정 */
}
  .styled-input {
  padding: 10px;
  border: 2px solid transparent; /* 입력 필드 테두리가 기본적으로 보이지 않게 설정 */
  background-color: white; /* 입력 필드 배경을 흰색으로 설정 */
  outline: none; /* 포커스 아웃라인 제거 */
  transition: border-color 0.3s; /* 테두리 색상 변경에 애니메이션 효과 적용 */
  width: 90%; /* 필요에 따라 입력 필드 너비 조정 */
}
.styled-input:hover {
  border-color: #F3E2A9; /* 마우스 오버 시 입력 필드 테두리 색상 변경 */
}

.styled-input:focus {
  border-color: #F3E2A9; /* 입력 필드에 포커스 됐을 때 테두리 색상 유지 */
}
  .profile-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .profile-image {
    margin-bottom: 20px;
  }
  
  .profile-image img {
    width: 100px; /* 필요에 따라 조정하세요 */
    height: auto;
  }
  
  input {
    margin: 10px 0;
    width: 300px; /* 필요에 따라 조정하세요 */
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #f0f0f0; /* 버튼 색상을 원하는대로 설정하세요 */
    border: none;
    cursor: pointer;
  }
  </style>