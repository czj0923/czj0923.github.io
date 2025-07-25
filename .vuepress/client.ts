import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 使用 Vite 的 glob 导入语法
    const modules = import.meta.glob('./components/*/**/*.vue',{ eager: true,import: 'default' })
    
    // 注册全局组件
    Object.entries(modules).forEach(([path, component]) => {
      const componentName = path.split('/').pop()?.replace(/\.\w+$/, '') || ''
      app.component(componentName, component)
    })
  },
  setup() {
  },
  rootComponents: [],
})