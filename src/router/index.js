import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/posts2/AboutView.vue'
import MyPageView from '@/views/MyPageView.vue'
import MyAreaView from '@/views/MyAreaView.vue'
import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostListView from '@/views/posts/PostListView.vue'

import PostCreateView2 from '@/views/posts2/PostCreateView2.vue'
import PostDetailView2 from '@/views/posts2/PostDetailView2.vue'
// import PostListView2 from '@/views/posts2/PostListView2.vue'
import PostEditView2 from '@/views/posts2/PostEditView2.vue'

import NotFoundView from '@/views/NotFoundView.vue'
import NestedView from '@/views/nested/NestedView.vue'
import NestedOneView from '@/views/nested/NestedOneView.vue'
import NestedTwoView from '@/views/nested/NestedTwoView.vue'
import NestedHomeView from  '@/views/nested/NestedHomeView.vue'
import AdminNestedView from '@/views/admin/AdminNestedView.vue'
import DashBoard from '@/views/admin/DashBoard.vue'
import MemberInfo from '@/views/admin/MemberInfo.vue'
import GridSystem from '@/views/admin/GridSystem.vue'
import AdminHomeView from  '@/views/admin/AdminHomeView.vue'
import login from '@/views/login/userLogin.vue'
import test from '@/views/login/test.vue'
import signIn from '@/views/login/signIn.vue'
import admin from '@/views/login/admin.vue'
import MyProfile from '@/views/admin/PageSupporters/UserProfile.vue'
import userPay from '@/views/admin/PageSupporters/PointPay.vue'
import Charge from '@/views/admin/PageSupporters/PointCharge.vue'
import Sale from '@/views/admin/PageSupporters/SaleList.vue'
import BuyList from '@/views/admin/PageSupporters/BuyList.vue'
import AttentionList from '@/views/admin/PageSupporters/AttentionList.vue'
import ProfileBake from '@/views/MyPageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/kakaoLogin',
    name: 'kakaoLogin',
    component: test
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: signIn
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/profile',
    name: 'profile',
    component: MyProfile
  },
  {
    path: '/userPay',
    name: 'userPay',
    component: userPay,
    props : true
  },
  {
    path: '/charge',
    name: 'charge',
    component: Charge
  },
  {
    path: '/sale',
    name: 'sale',
    component: Sale
  },
  {
    path: '/buy',
    name: 'buy',
    component: BuyList
  },
  {
    path: '/like',
    name: 'like',
    component: AttentionList
  },
  {
    path: '/profileback',
    name: 'profileback',
    component: ProfileBake
  },
   {
    path: '/myarea',
    component: MyAreaView
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPageView,
    meta:{requiresAuth:true}
    // beforeEnter: (to, from)=>{
    //   console.log('to',to);
    //   console.log('from',from);
      
    // }
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView
  },
{
    path: '/boards',
    name: 'BoardList',
    component: AboutView
  },
   {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView
  },
  {
    path: '/posts2/createBoard', 
    name: 'BoardCreate',
    component: PostCreateView2
  },
   {
    //  /posts/alice
    //  /posts/bruce  ->postdetailview
    //  /user/tom
    path: '/posts/:id',
    name:"PostDetail",
    component: PostDetailView,
    props : true
    // props: route => ({id:parseInt(route.params.id)}),
  },
  {
    //  /posts/alice
    //  /posts/bruce  ->postdetailview
    //  /user/tom
    path: '/boards/:board_id',
    name:"BoardDetail",
    component: PostDetailView2,
    props : true
    // props: route => ({id:parseInt(route.params.id)}),
  },
   {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView
  }
   ,
   {
    path: '/boards/:board_id/edit',
    name: 'BoardEdit',
    component: PostEditView2
  }
   ,
    {path: '/:pathMatch(.*)*', 
    name:'NotFound', 
    component: NotFoundView}
    ,
    {path: '/nested', 
    name:'Nested', 
    component: NestedView,
    children:[
       {path: '', 
    name:'NestedHome', 
    component: NestedHomeView},
         {path: '/nested/one', 
    name:'NestedOne', 
    component: NestedOneView},
    {path: '/nested/two', 
    name:'NestedTwo', 
    component: NestedTwoView}
    ]},
    {path: '/admin', 
    name:'Admin', 
    component: AdminNestedView,
    children:[
       {path: '', 
    name:'NestedHome', 
    component: AdminHomeView},
         {path: '/nested/dashboard', 
    name:'DashBoard', 
    component: DashBoard},
    {path: '/nested/memberinfo', 
    name:'MemberInfo', 
    component: MemberInfo},
    {path: '/nested/gridsystem', 
    name:'GridSystem', 
    component: GridSystem}
    ]},

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to,from,next)=>{
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // 로그인 상태를 확인
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      alert('로그인을 먼저해주세요!')
      next({ name: 'Home' }); // 로그인하지 않은 경우 홈으로 리다이렉트
    } else {
      next(); // 로그인된 경우 해당 라우트로 이동
    }
  } else {
    next(); // 메타 필드가 없는 라우트는 그대로 진행
  }
});

export default router
