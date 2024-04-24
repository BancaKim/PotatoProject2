<template>
    <hr class="my-4">
    <div id="carouselExampleIndicators" class="carousel slide">
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
    <hr style="width: 40%; margin: 0 auto;"><br>
    <div class="rectangle"></div>
</template>

<script>
</script>

<style>
.rectangle {
  width: 1300px;          /* 너비 */
  height: 250px;         /* 높이 */
  background-color:#F6E3CE; /* 배경 색상 */
  border: none; /* 테두리 설정 */
  border-radius: 15px; 
}
</style>