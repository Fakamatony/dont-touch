import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store.js'
import router from '../src/router/router'
import 'material-design-icons-iconfont'




const app = createApp(App)
app.use(store)
app.use(router)
app.config.productionTip = false

app.mount('#app')
