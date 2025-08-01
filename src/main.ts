import { createApp } from 'vue'
import CastorAntdv from '@castor-ui/castor-antdv'
import dayjsWrapper from '@/utils/dayjs'
import App from '@/App.vue'
import { registerGlobComp } from '@/components/registerGlobComp'

import '@castor-ui/castor-antdv/es/style.css'

const app = createApp(App)
app.use(CastorAntdv)
registerGlobComp(app)

/** Mount global variable dayjs */
app.provide('dayjs', dayjsWrapper)

app.mount('#app')
