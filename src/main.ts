import { createApp } from 'vue'
import router from './router/index'
import { createPinia } from 'pinia'
import App from './App.vue'
import './samples/node-api'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElementPlus)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
