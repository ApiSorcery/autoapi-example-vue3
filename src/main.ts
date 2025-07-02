import { createApp } from 'vue'
import Castor3UI from '@neweratech/castor3-ui'
import dayjsWrapper from '@/utils/dayjs'
import App from '@/App.vue'

const app = createApp(App)
app.use(Castor3UI)

/** 挂载全局变量 dayjs */
app.provide('dayjs', dayjsWrapper)

app.mount('#app')
