<template>
    <div class="inner">
        <nav class="navbar navbar-expand-sm navbar-dark bg-custom">

            <div class="container-fluid">
                <img :src="require('@/assets/potato_logo_back.png')" width="80" aspect-ratio="5/5">
                <!-- <img src="@/assets/potato_logo_back.png" id="potatologo" alt="STARBUCKS"> -->
                <!-- <a class="navbar-brand" href="#">감자마켓</a> -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <router-link class="nav-link active" to="/">홈</router-link>
                            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/posts">동네생활</router-link>
                            <!-- <a class="nav-link" href="#">Link</a> -->
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">내 근처</router-link>
                            <!-- <a class="nav-link" href="#">Link</a> -->
                        </li>
                        <!-- <li class="nav-item"> -->
                            <!-- <router-link class="nav-link" to="/mypage">나의감자</router-link> -->
                            <!-- <a class="nav-link" href="#">Link</a> -->
                        <!-- </li> -->
                        <!--게시글-->
                        <!-- <li class="nav-item"> -->
                            <!-- <router-link class="nav-link" to="/posts">게시글</router-link> -->
                            <!-- <a class="nav-link" href="#">Link</a> -->
                        <!-- </li>-->
                        <li class="nav-item">
                            <router-link class="nav-link" to="/nested">나의감자</router-link> 
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/admin">관리자화면</router-link> 
                        </li>
                        <!--게시글-->
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                나의감자
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> -->
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-3" type="search" placeholder="물품이나 동네를 검색해보세요"
                            aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">
                            <span class="material-symbols-outlined"> <!--검색 돋보기-->
                                search
                            </span>
                        </button>
                    </form>
                    <!-- <div class="d-flex" role="search">
                        <button class="btn btn-outline-success" type="button" @click="goPage">글쓰기</button>
                     </div> -->
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
// import {useRouter} from 'vue-router';
// const router = useRouter()
// const goPage=()=>{
//     router.push('/posts/create');
// };
</script>

<style scoped>
#potatologo{
    height:100px;
}
.inner{
    font-size : 30px;
    font-family: 'BMJUA',
        sans-serif;
}
.bg-custom{
    background-color:#ff8c00
    ;
}

.navbar-nav .nav-item {
    margin-right: 100px;
    /* 오른쪽 간격 조정 */
}

.navbar-nav .nav-item:last-child {
    margin-right: 0;
    /* 마지막 요소는 오른쪽 간격 제거 */
}

.form-control.me-3{
    width: 400px;
}
</style>