import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import {createPinia} from 'pinia'; 
import '@/assets/myfont.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import globalComponents from '@/plugins/global-components.js';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/dayjs';
// import focus from '@/directives/focus'
// import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App);
app.use(globalDirectives);
app.use(globalComponents);
app.use(router);
app.use(createPinia());
app.use(dayjs);
app.mount('#app');
window.Kakao.init('198fae9257e3a2b5af3086644a5de975');