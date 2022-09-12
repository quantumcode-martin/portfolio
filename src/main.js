import './assets/styles/main.css'

// import Vue from 'vue'
import { createApp, h } from 'vue'

import App from './App.vue'
import router from './router'

// createApp(App).use(router).mount('#app')
const app = createApp({
  render: () => h(App)
})

app.use(router)
app.mount('#app')
