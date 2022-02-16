import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/styles.scss"

import { makeServer } from "./mock/mockapi"

if (process.env.NODE_ENV === "development") {
  makeServer()
}



createApp(App).use(store).use(router).mount('#app')
