import type { App } from 'vue';
import {
  Input,
  Layout,
  Spin,
  Image
} from 'ant-design-vue';

export function registerGlobComp(app: App) {
  app.use(Input).use(Layout).use(Spin).use(Image)
}
