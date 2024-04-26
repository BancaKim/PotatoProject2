import { createApp } from 'vue';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue';
import router from './router';
// import store from './store';
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
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(globalDirectives);
app.use(globalComponents);
app.use(router);
// app.use(store);
app.use(pinia);
app.use(dayjs);
app.use(vuetify);
app.mount('#app');
window.Kakao.init('a9e57bde27a511cbdaca45366cb8927c');