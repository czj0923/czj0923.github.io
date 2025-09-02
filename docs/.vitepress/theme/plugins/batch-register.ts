import { ref } from 'vue';

const modules = import.meta.glob('../../components/**/*.vue');
export default {
  install(app) {
        const componentsLoaded = ref(false); // 组件是否全部注册完毕
    let loadCount = 0;
    const totalModules = Object.keys(modules).length;

    const reg = /^(\.\.\/){2}components\/([a-zA-Z-/]+)\.vue$/;
    // 批量注册components文件夹下的组件
    for (const path in modules) {
      modules[path]().then((mod: any) => {
        const matches = path.match(reg);
        if (matches) {
          const sourceName = matches[2];
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
  },
}