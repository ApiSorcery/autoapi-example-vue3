import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import CastorAntdv from '@castor-ui/castor-antdv';
import dayjsWrapper from '@/utils/dayjs';

import App from '@/App.vue';
import { registerGlobComp } from '@/components/registerGlobComp';

import '@castor-ui/castor-antdv/es/style.css';

const i18n = createI18n({
  legacy: false,
  locale: 'en-US',
});

const app = createApp(App);
app.use(i18n);
// 为避免插件类型定义过于严格导致的重载不匹配，这里断言为 any 再传入 options
app.use(CastorAntdv, { i18n: { t: i18n.global.t, locale: 'en-US' } });
registerGlobComp(app);

/** Mount global variable dayjs */
app.provide('dayjs', dayjsWrapper);

app.mount('#app');
