<template>
	<!-- Section: Design Block -->
<section class="text-center">
  <div class="p-5 bg-image" style="
        background: #F5ECCE;
        /* width: 100%; */
        height: 500px;
        background-repeat: repeat-x;
        background-position: center 50%;
        "></div>

  <div class="card mx-4 mx-md-5 shadow-5-strong" style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-55%, -20%);
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div style="display: flex; justify-content: center; align-items: center; height: 20vh; margin-bottom: -50px;">
    <img :src="require('@/assets/potato.jpg')" alt="Potato" style="width: 70px; height: 40px;">
    <h2 style="margin-left: 10px; font-size: 45px;">회원가입을 해주세요.</h2> </div>
          <form @submit.prevent="doSignIn">
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row">
              <div class="col-md-6 mb-4">
                <div data-mdb-input-init class="form-outline mb-4" style="text-align: left; display: block;">
              <label class="form-label" for="userName">이름</label>
              <input v-model="userName" id="userName" class="form-control" style="color: pink;" />
            </div>
              </div>
              <div class="col-md-6 mb-4">
                <div data-mdb-input-init class="form-outline mb-4" style="text-align: left; display: block;">
              <label class="form-label" for="userId">아이디</label>
              <input v-model="userId" id="userId" class="form-control" style="color: pink;" />
            </div>
              </div>
            </div>
            <div data-mdb-input-init class="form-outline mb-4" style="text-align: left; display: block;">
              <label class="form-label" for="userPassword">비밀번호</label>
              <input v-model="userPwd" type="password" id="userPassword" class="form-control" style="color: pink;"/>
            </div>
            <div data-mdb-input-init class="form-outline mb-4" style="text-align: left; display: block;">
              <label class="form-label" for="userEmail">Email</label>
              <input v-model="userEmail" type="email" id="userEmail" class="form-control" style="color: pink;" />
            </div>
            <div data-mdb-input-init class="form-outline mb-4" style="text-align: left; display: block;">
              <label class="form-label" for="userAddress">주소</label>
              <input v-model="userAddress" id="userAddress" class="form-control" style="color: pink;" />
            </div>
            
            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-center mb-4" >
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
              <label class="form-check-label" for="form2Example33" >
                개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>

            <!-- Submit button -->
            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" 
             type="submit" style="background-color: #FFCC99; border: none; color: black;">회원가입</button>
            

            <!-- Register buttons -->
            <div class="text-center">
              
              <p>저희와 함께 해주세요 :)</p>

            </div>
          </form>
        </div>
    </div>
  </div>
</section>
<!-- Section: Design Block -->
</template>

<script setup>
import { ref } from "vue";
import {createId} from '@/api/posts';
import { useRouter } from 'vue-router';

let userName = ref("");
let userId = ref("");
let userPwd = ref("");
let userEmail = ref("");
let userAddress =ref("");

const router =useRouter();

const doSignIn= async ()=>{
    try{
        const userData = {
        userName : userName.value,
        userId : userId.value,
        userPwd : userPwd.value,
        userEmail : userEmail.value,
        userAddress : userAddress.value,
        };
        await createId(userData);
        alert('회원가입이 완료되었습니다!')
        router.push('/');
    } catch (err){
        alert('회원가입이 실패하였습니다.')
        console.error(err);
    } 
}
</script>

<style lang="scss" scoped>

</style>import { router } from "json-server";
