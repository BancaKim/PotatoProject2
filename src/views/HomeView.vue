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
        <strong style="font-size: 18px;">'중고 거래의 새로운 경험을 통해 생활 속 작은 감동'</strong> 단순한 거래의 공간을 넘어 감동이 있는 자리를 창조합니다. 저희는 중고 물품의 단순한 매매를 넘어 물건에 담긴 이야기와 추억을 공유하는 곳입니다. <br>
        사용했던 아이템 하나하나가 각자의 이야기를 가지고 있으며, 감동을 주고받을 수 있는 커뮤니티를 중시하는 감자 마켓 <br> 하나의 거래가 단순한 물건의 교환을 넘어, <code>감동과 가치</code>를 나누는 경험이 되시길 바랍니다
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <span style="font-size: 30px; color: #FAAC58;">#</span> &nbsp; <span style="font-size: 25px; color: #5F4C0B;">감자마켓을 만든 이들 </span>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong style="font-size: 18px;">김건 </strong>대표  <code>back-end</code> &nbsp;&nbsp;회원의 소중한 정보를 안전하게 보관하고 다양한 기능을 구현한 데이터 총괄 담당자 <br>
        <strong style="font-size: 18px;">이상준 </strong>대표 <code>back-end</code> &nbsp;&nbsp;"감자 마켓"에서 회원들의 정보와 포인트 적립을 관리하고, 지도의 위치 관리 담당자 <br>
        <strong style="font-size: 18px;">반수희 </strong> 대표 <code>front-end</code>&nbsp;&nbsp; 웹사이트의 디자인과 구조를 사용자 인터페이스로 만들어내며 회원 프로필 수정 담당자 <br>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <span style="font-size: 30px; color: #FAAC58;">#</span>&nbsp;&nbsp;
       <span style="font-size: 25px; color: #5F4C0B;">저희만의 서비스</span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>감자로 물건 사고파는 재밌는 중고거래</strong> &nbsp;&nbsp;감자를 주화로 사용하는 유니크한 방식으로 사용자들은 감자를 매개체로 하여 다양한 물품을 사고팔 수 있습니다.
        더불어, 감자마켓은 중고 거래뿐만 아니라 로컬 맛집 추천 서비스도 제공하여 사용자가 자신의 위치 주변에서 맛있는 음식을 즐길 수 있도록 정보를 제공합니다.
        중요한 보안 정책으로는 사용자 정보의 변경이 이루어질 때마다 재로그인을 요구하는 것을 포함하고 있습니다. 이는 사용자 계정의 보안 강화를 위하여 사용자 정보의 변경이 이루어질 때마다 재로그인하여 누구나 계정을 안전하게 관리할 수 있도록 돕습니다. 
      </div>
    </div>
  </div>
</div>

<hr class="my-4">
<img :src="require('@/assets/back.png')" class="d-block w-100" alt="Advertisement Image" style="height: 200px;">
<div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-2">
        <h5>구성</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">홈 화면 </a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">특징</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">가격</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">자주 묻는 질문</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">소개</a></li>
        </ul>
      </div>
      
      <div class="col-2">
        <h5>고객 지원</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">문의하기</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">도움말 센터</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">피드백</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">실시간 채팅</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">서비스 상태</a></li>
        </ul>
      </div>
    
      <div class="col-2">
        <h5>커뮤니티</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">블로그</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">포럼</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">이용 후기</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">이벤트</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">제휴 프로그램</a></li>
        </ul>
      </div>

      <div class="col-4 offset-1">
        <form>
          <h5>고객 문의 사항</h5>
          <p>감자마켓의 궁금한 점을 문의해주세요.</p>
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Please enter your questions</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Please enter your questions">
            <button class="btn btn-primary" type="button" style="background-color:#e5c89e; border: none;">Raise</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex justify-content-between py-4 my-4 border-top">
      <p>&copy; 2024 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
</div>
</div>
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
  background-color:#e5c89e; /* 배경 색상 */
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
  color: #af7626;
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