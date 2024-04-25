import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/myfont.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import globalComponents from '@/plugins/global-components.js';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/dayjs';
import vuetify from './plugins/vuetify'
// import focus from '@/directives/focus'
// import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App);
app.use(globalDirectives);
app.use(globalComponents);
app.use(router);
app.use(store);
app.use(dayjs);
app.use(vuetify);
app.mount('#app');
window.Kakao.init('198fae9257e3a2b5af3086644a5de975');