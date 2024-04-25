<template>
  <div class="long-height-div">
    <hr class="my-4">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="require('@/assets/advertisement_1.png')" class="d-block w-100" alt="Advertisement Image">
    </div>
    <div class="carousel-item">
      <img :src="require('@/assets/advertisement_2.png')" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="require('@/assets/advertisement_3.png')" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="require('@/assets/advertisement_4.png')" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="require('@/assets/advertisement_5.png')" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="require('@/assets/advertisement_6.png')" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<hr class="my-4">
<!-- <div class="container">
  <div class="rounded-rectangle"></div>
</div> -->
    <h1 style="color: #5F4C0B;">공 지 사 항</h1>
    <p style="color: #F79F81;">감자마켓의 새소식을 알립니다.</p>
    <hr style="width: 40%; margin: 0 auto;">
    <div class="rectangle" >
    <div id="app">
    <transition-group name="fade" tag="div">
      <div v-for="(item, index) in currentSentence" :key="index" class="Notice">
        {{ item }}
      </div>
    </transition-group>
  </div>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <span style="font-size: 30px; color: #FAAC58;">#</span>&nbsp;&nbsp;
       <span style="font-size: 25px; color: #5F4C0B;">감</span> <span style="font-size: 18px;">동이 있는 </span> &nbsp;<span style="font-size: 25px; color: #5F4C0B;">자</span> <span style="font-size: 18px;">리 </span> &nbsp;&nbsp;
       <span style="font-size: 25px; color: #5F4C0B;">마켓</span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <span style="font-size: 30px; color: #FAAC58;">#</span> &nbsp;<span style="font-size: 18px;"> </span>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <span style="font-size: 30px; color: #FAAC58;">#</span> &nbsp;<span style="font-size: 18px;"> </span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
</div>
<br>
<hr>
</template>

<script>
export default {
  data() {
    return {
      sentences: [
        "[안내] 앱푸시 알림센터 서비스 오픈(2025.04.25)",
        "[이벤트] 4/18 조 말론 런던 라이브 당첨자 안내",
        "[이벤트] 5/11 아베다 라이브 구매인증시 사은품 증정",
        "[안내] 4월 하루배송 휴무 일정안내 (2024.04.27)"
      ],
      currentSentenceIndex: 0,
      
    };
  },
  computed: {
    currentSentence() {
      return [this.sentences[this.currentSentenceIndex]];
    }
  },
  mounted() {
    setInterval(() => {
      this.currentSentenceIndex = (this.currentSentenceIndex + 1) % this.sentences.length;
    }, 3000); // 3000ms 마다 문장 변경
     

  },

    
  }
  
</script>

<style>
.rectangle {
  width: 1300px;          /* 너비 */
  height: 80px;         /* 높이 */
  background-color:#F6E3CE; /* 배경 색상 */
  border: none; /* 테두리 설정 */
  border-radius: 15px; 
  text-align: center;
  margin-top: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.site-footer {
  background-color: #f8f8f8;
  color: #333;
  padding: 20px 0;
}

.footer-service {
  text-align: center;
}

.footer-service h2 {
  margin: 0;
  color: #000;
}

.service-number {
  font-size: 1.5rem;
  font-weight: bold;
}

.service-hours {
  margin: 10px 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
}
.Notice{
  font-size: 25px;
  color: #DBA901;
  height: 100px;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.site-footer{
  position: fixed; /* 고정 위치 */
  left: 0; /* 왼쪽에서 0px의 위치 */
  bottom: 0; /* 하단에서 0px의 위치 */
  width: 100%; /* 화면 너비에 맞춤 */
}
.long-height-div {
  height: 110vh; /* 뷰포트 높이의 150% */
  /* 기타 스타일 속성 */
}
</style>