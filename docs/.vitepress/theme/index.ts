import DefaultTheme from 'vitepress/theme';
import { ref } from 'vue';
// 自定义样式
import './style.scss';
import MyLayout from './layout/index.vue'

const modules = import.meta.glob('../components/**/*.vue');
export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  enhanceApp(ctx) {
    const { app } = ctx;

    const componentsLoaded = ref(false); // 组件是否全部注册完毕
    let loadCount = 0;
    const totalModules = Object.keys(modules).length;

    const reg = /^\.\.\/components\/([a-zA-Z-/]+)\.vue$/;
    // 批量注册components文件夹下的组件
    for (const path in modules) {
      modules[path]().then((mod:any) => {
        const matches = path.match(reg);
        if (matches) {
          const sourceName = matches[1];
          const segArr = sourceName.split('/');
          // 如果是index文件，则组件名为文件夹名
          if (segArr[segArr.length - 1] == 'index') {
            segArr.pop();
          }
          app.component(segArr.join('-'), mod.default);
        }
        loadCount++;
        if (loadCount === totalModules) {
          componentsLoaded.value = true;
        }
      });
    }

    app.provide('componentsLoaded', componentsLoaded);
  }
};
