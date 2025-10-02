import { createApp } from 'vue'
import './assets/main.css'
import './assets/fonts.css'
import App from './App.vue'
import router from './router'

import 'aos/dist/aos.css'
import AOS from 'aos'

createApp(App)
  .use(router)
.mount('#app')


AOS.init({
  duration: 1000,   // مدت زمان انیمیشن
  offset: 50,      // فاصله قبل از اجرا
  once: false        // فقط یک بار اجرا بشه
})
