<template>
	<!-- Section: Design Block -->
<section class="text-center">
  <!-- Background image -->
  <div class="p-5 bg-image" style="
        background: hsla(30, 100%, 80%, 1.0);
        height: 300px;
        "></div>
  <!-- Background image -->

  <div class="card mx-4 mx-md-5 shadow-5-strong" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; margin-bottom: -50px;">
    <img src="@/assets/potato.jpg" alt="Potato" style="width: 70px; height: 40px;">
    <h2 style="margin-left: 10px;">회원가입을 해주세요.</h2> </div>
          <form>
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row">
              <div class="col-md-6 mb-4">
                <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="form3Example1" style="text-align: left; display: block;">성</label>
                  <input type="text" id="form3Example1" class="form-control" style="color: pink;" />
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="form3Example2" style="text-align: left; display: block;">이름</label>
                  <input type="text" id="form3Example2" class="form-control" style="color: pink;"/>

                </div>
              </div>
            </div>

            <!-- Email input -->
            <div data-mdb-input-init class="form-outline mb-4" style="text-align: left; display: block;">
              <label class="form-label" for="form3Example3">Email</label>
              <input type="email" id="form3Example3" class="form-control" style="color: pink;" />
            </div>

            <!-- Password input -->
            <div data-mdb-input-init class="form-outline mb-4" style="text-align: left; display: block;">
              <label class="form-label" for="form3Example4">비밀번호</label>
              <input type="password" id="form3Example4" class="form-control" style="color: pink;"/>

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
              <!-- <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button> -->
            </div>
          </form>
        </div>
    </div>
  </div>
</section>
<!-- Section: Design Block -->
</template>
