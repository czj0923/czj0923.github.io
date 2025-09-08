import DefaultTheme from 'vitepress/theme';
// 自定义样式
import './style/index.scss';
import MyLayout from './layout/index.vue';
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute, inBrowser } from 'vitepress';
import Directives from './plugins/directives';
import batchRegister from './plugins/batch-register';

import { NProgress } from 'nprogress-v2/dist/index.js'; // 进度条组件
import 'nprogress-v2/dist/index.css'; // 进度条样式

import 'virtual:group-icons.css'; //代码组样式

// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined;

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  enhanceApp(ctx) {
    const { app, router } = ctx;
    // 批量注册组件
    app.use(batchRegister);
    // 自定义指令
    app.use(Directives);

    // 彩虹背景动画样式
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true }
      );
    }

    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        NProgress.start(); // 开始进度条
      };
      router.onAfterRouteChanged = () => {
        NProgress.done(); // 停止进度条
      };
    }
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  }
};

// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;

    homePageStyle = document.createElement('style');
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
