<template>
    <div class="p-5 bg-image" style="
          background: #F8ECE0;
          /* width: 100%; */
          height: 450px;
          background-repeat: repeat-x;
          background-position: center 50%;
          "></div>
      <section class="vh-100" style="background-color: #FFFF;">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5" >
               <div class="card shadow-2-strong" style="border-radius: 1rem;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -20%);
                  background: hsla(0, 0%, 100%, 0.8);
                  backdrop-filter: blur(30px);
                  ">
            <div class="card-body p-5 text-center">
              
              <div style="display: flex; align-items: center;">
                  <img :src="require('@/assets/potato.jpg')" alt="Potato" width="70px" height="40px"><br>
                  <h3 style="margin-left: 10px;"> 관리자 로그인 </h3>
              </div>
  
              <br>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="typeid-2" style="text-align: left; display: block;" >아이디</label>
                <input type="ID" id="typeid-2" class="form-control form-control-lg" style="color: gray;" v-model="user_id" />
              </div>
  
  
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="typePasswordX-2" style="text-align: left; display: block;" >비밀번호</label>
                <input type="password" id="typePasswordX-2" class="form-control form-control-lg" style="color: gray;" v-model="user_pw"/>
              </div>

              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" 
             type="submit" style="background-color: #FFCC99; border: none; color: black;" @click="adminCheck()"> 로그인</button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'loginComponent',

    data() {
      return {
        user_id:'',
        user_pw:''
      }
    },

    methods: {
      loginStart() {
        // window.Kakao.Auth.authorize({
        //   redirectUri: "http://localhost:8080/kakaoLogin",
        //   // prompt: 'select_account'
        // });
      },

      adminCheck() {
        let obj = {};
        obj.user_id = this.user_id  // 여기에 입력한 아이디 갖다 붙이기
        obj.user_pw = this.user_pw  // 여기에 입력한 비밀번호 갖다 붙이기
        axios.post("http://localhost:4000/admincheck",obj)
         .then(res => {
           console.log(res)
           console.log(res.data.state)
            if(res.data.state == 'Admin') { 
              alert('hi admin'),
              this.$router.push({ path: 'nested/dashboard' }) } else { alert('아이디 및 비밀번호를 다시 확인하세요')} // server2에 저장되있는 admin id가 맞으면 nested/dashboard로 이동
           
0         })
      }


      
    }
  };
  </script>
  <style scoped>
  
  </style>
  