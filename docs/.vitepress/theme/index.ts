import BlogTheme from '@sugarat/theme';
const modules = import.meta.glob('./components/**/*.vue');

// 自定义样式重载
//import './style.scss'

// 自定义主题色
//import './user-theme.css'

export default {
  ...BlogTheme,
  enhanceApp({ app }) {
    // 批量注册components文件夹下的组件
    for (const path in modules) {
      modules[path]().then((mod) => {
        const reg = /^\.\/components\/([a-zA-Z-]+)\.vue$/;
        const matches = path.match(reg);
        if (matches) {
          app.component(matches[1], mod.default);
        }
      });
    }
  }
};
