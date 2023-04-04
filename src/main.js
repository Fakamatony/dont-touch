import { createApp } from 'vue'
import App from './App.vue'
`import './assets/styles/styles.scss'`
import store from './vuex/store.js'

const app = createApp(App)
app.use(store)

app.config.productionTip = false

app.mount('#app')
