<template>
  <div class="p-5 bg-image" style="
        background: #F5ECCE;
        /* width: 100%; */
        height: 450px;
        background-repeat: repeat-x;
        background-position: center 50%;
        "></div>
  <section class="vh-100" style="background-color: #FFFF;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
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
                <h3 style="margin-left: 10px;">로그인을 해주세요. </h3>
              </div>
              <br>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="typeid-2" style="text-align: left; display: block;">아이디</label>
                <input v-model="userId" type="ID" id="typeid-2" class="form-control form-control-lg"
                  style="color: pink;" />
              </div>


              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="typePasswordX-2" style="text-align: left; display: block;">비밀번호</label>
                <input v-model="userPwd" type="password" id="typePasswordX-2" class="form-control form-control-lg"
                  style="color: pink;" />
              </div>

              <!-- Checkbox -->
              <div class="form-check d-flex justify-content-start mb-4">
                <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                <label class="form-check-label" for="form1Example3"> &nbsp; 자동 로그인 </label>
              </div>

              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" type="submit"
                style="background-color: #FFCC99; border: none; color: black;" @click="bt_login"> 로그인하러가기</button>


              <hr class="my-4">
              <!-- <a href="/kakao"></a> -->
              <img :src="require('@/assets/카카오.jpg')" style="cursor: pointer;" width="80" @click="loginStart">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img :src="require('@/assets/네이버.png')" width="80" alt="네이버 로고">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>

import {ref} from 'vue'
import axios from 'axios';
import {useUserStore} from '@/store/userstore'
import { useRouter } from 'vue-router';
const router = useRouter();

let store = useUserStore();
let userId=ref('');
let userPwd=ref('');

const loginStart=()=>{
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:8080/kakaoLogin",
      // prompt: 'select_account'
    })};

const bt_login=()=>{
  if (userId.value.length < 4 || userId.value.length > 12) {
      alert("아이디를 4자리 이상, 12자리 이하로 입력하세요");
      return;
    }
  if (userPwd.value.length < 4 || userPwd.value.length > 12) {
      alert("비밀번호를 4자리 이상, 12자리 이하로 입력하세요");
      return;
    }
    let url = "http://localhost:4000/login";
    
    let obj = {
      id: userId.value,
      pwd: userPwd.value,
    }
    axios
      .post(url, {
        params: obj,
      }).then((res) => {
        let data = res.data;
        // console.log(res);
        // console.log(data.info);
        // console.log("state: " + data.state);
        if (res.data.state == "none") {
          alert("아이디 또는 비밀번호 오류입니다.");
        } else {
          let obj1 = new Object();
          obj1.user_id = data.info.user_id;
          obj1.user_name = data.info.user_name;
          obj1.user_email = data.info.user_email;
          obj1.user_adrs = data.info.user_adrs;
          obj1.user_pw = data.info.user_pw;
          obj1.is_admin = data.info.is_admin;
          // console.log(obj1.id);
          // console.log(obj1.pw);

          store.addInfo(obj1);
          store.onOff();
          alert(obj1.user_name + "님 환영합니다.");
          router.push('/');
        }
      })
  }
</script>


<style scoped>

</style>
