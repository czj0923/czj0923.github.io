import DefaultTheme from 'vitepress/theme';
// 自定义样式
import './style.scss';
import MyLayout from './layout/index.vue';
import Directives from './plugins/directives';
import batchRegister from './plugins/batch-register';

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  enhanceApp(ctx) {
    const { app } = ctx;
    // 批量注册组件
    app.use(batchRegister);
    // 自定义指令
    app.use(Directives);
  }
};
