import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store.js'
import router from '../src/router/router'




const app = createApp(App)
app.use(store)
app.use(router)
app.config.productionTip = false

app.mount('#app')
