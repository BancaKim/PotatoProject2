import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MyPageView from '@/views/MyPageView.vue'
import MyAreaView from '@/views/MyAreaView.vue'
import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostListView from '@/views/posts/PostListView.vue'
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
import login from '@/views/login/login.vue'
import test from '@/views/login/test.vue'
import signIn from '@/views/login/signIn.vue'

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
    path: '/about',
    name: 'about',
    component: AboutView
  },
   {
    path: '/myarea',
    component: MyAreaView
  },
  {
    path: '/mypage',
    component: MyPageView
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView
  },
   {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView
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
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView
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
})

export default router
