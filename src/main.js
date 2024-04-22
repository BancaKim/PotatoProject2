import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/myfont.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import dayjs from './plugins/dayjs'
// import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App);
app.use(router);
app.use(dayjs);
app.mount('#app');
