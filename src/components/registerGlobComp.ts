import type { App } from 'vue';
import { Input, Layout, Spin, Image, Tooltip, Upload } from 'ant-design-vue';

export function registerGlobComp(app: App) {
  app.use(Input).use(Layout).use(Spin).use(Image).use(Tooltip).use(Upload);
}
