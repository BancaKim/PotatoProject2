<template>
 <section class="vh-100" style="background-color: #FFFF;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">
            
            <div style="display: flex; align-items: center;">
                <img src="@/assets/potato.jpg" alt="Potato" width="70px" height="40px"><br>
                <h3 style="margin-left: 10px;">로그인을 해주세요. </h3>
            </div>


            <br>
            <div data-mdb-input-init class="form-outline mb-4">
              <label class="form-label" for="typeid-2" style="text-align: left; display: block;" >아이디</label>
              <input type="ID" id="typeid-2" class="form-control form-control-lg" style="color: pink;" />
            </div>


            <div data-mdb-input-init class="form-outline mb-4">
              <label class="form-label" for="typePasswordX-2" style="text-align: left; display: block;" >비밀번호</label>
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" style="color: pink;" />
            </div>

            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> &nbsp; 자동 로그인 </label>
            </div>

            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" 
             type="submit" style="background-color: #FFCC99; border: none; color: black;"> 로그인하러가기</button>

      
            <hr class="my-4">
            <!-- <a href="/kakao"></a> -->
           <img src="@/assets/potato.jpg" style="cursor: pointer;" width="80" @click="loginStart">
            <img :src="require('@/assets/potato.jpg')" width="80" alt="네이버 로고">
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
