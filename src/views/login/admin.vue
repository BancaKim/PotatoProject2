<template>
    <div class="p-5 bg-image" style="
          background: #F3E2A9;
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
                  <img src="@/assets/potato.jpg" alt="Potato" width="70px" height="40px"><br>
                  <h3 style="margin-left: 10px;"> 관리자 로그인 </h3>
              </div>
  
  
              <br>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="typeid-2" style="text-align: left; display: block;" >아이디</label>
                <input type="ID" id="typeid-2" class="form-control form-control-lg" style="color: gray;" />
              </div>
  
  
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="typePasswordX-2" style="text-align: left; display: block;" >비밀번호</label>
                <input type="password" id="typePasswordX-2" class="form-control form-control-lg" style="color: gray;" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  </template>
  
  <script>
  export default {
    name: 'loginComponent',
    methods: {
      loginStart() {
        window.Kakao.Auth.authorize({
          redirectUri: "http://localhost:8080/kakaoLogin",
          // prompt: 'select_account'
        });
      }
    }
  };
  </script>
  <style scoped>
  
  </style>
  