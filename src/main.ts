import './assets/main.css'

import { createApp } from 'vue'
import Castor3UI from '@neweratech/castor3-ui'
import App from './App.vue'

const app = createApp(App)
app.use(Castor3UI)
app.mount('#app')
