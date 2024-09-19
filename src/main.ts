import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Parallax from 'scroll-parallax-effect/vue'

const app = createApp(App)

app.use(router)
app.use(Parallax, { direction: 'y' })
app.mount('#app')
