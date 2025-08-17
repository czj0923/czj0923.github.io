const modules = import.meta.glob('../components/**/*.vue');
import DefaultTheme from 'vitepress/theme'
// 自定义样式重载
import './style.scss'

// 自定义主题色
// import './user-theme.css'

//import MyLayout from './layout/index.vue'

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  //Layout: MyLayout,
  enhanceApp(ctx) {
    const { app } = ctx;
    const reg = /^\.\.\/components\/([a-zA-Z-/]+)\.vue$/;
    // 批量注册components文件夹下的组件
    for (const path in modules) {
      modules[path]().then((mod) => {
        const matches = path.match(reg);
        if (matches) {
          const sourceName = matches[1]
          const segArr = sourceName.split('/')
          // 如果是index文件，则组件名为文件夹名
          if(segArr[segArr.length - 1] == 'index'){
            segArr.pop()
          }
          
          app.component(segArr.join('-'), mod.default);
        }
      });
    }
  }
};
