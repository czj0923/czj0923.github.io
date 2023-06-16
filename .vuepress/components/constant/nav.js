import {
  withBase
} from '@vuepress/client'

// 常用工具
const navList1 = [{
  img: "https://caniuse.com/img/favicon-128.png",
  title: "Can I Use",
  desc: "前端 API 兼容性查询",
  url: "https://caniuse.com"
},
{
  img: "https://tinypng.com/images/apple-touch-icon.png",
  title: "TinyPNG",
  desc: "在线图片压缩工具",
  url: "https://tinypng.com"
},
{
  img: "https://devtool.tech/logo.svg",
  title: "开发者武器库",
  desc: "开发者武器库，做开发者最专业最好用的专业工具箱",
  url: "https://devtool.tech"
},
{
  img: "https://tool.lu/favicon.ico",
  title: "在线工具",
  desc: "开发人员的工具箱",
  url: "https://tool.lu"
},
{
  img: withBase('/img/nav/nav1-5.ico'),
  title: "Json 中文网",
  desc: "JSON 在线解析及格式化验证",
  url: "https://www.json.cn"
},
{
  img: 'https://transform.tools/static/favicon.png',
  title: "transform",
  desc: "一个支持多语言的在线转换器",
  url: "https://www.json.cn"
}
]
// AI导航
const navList2 = [{
  img: withBase('/img/nav/nav2-1.png'),
  title: "ChatGPT（最强）",
  desc: "",
  url: "https://chat.openai.com/chat"
},
{
  img: withBase('/img/nav/nav2-1.png'),
  title: "ChatGPT 镜像站点列表）",
  desc: "",
  url: "https://github.com/xx025/carrot"
},
{
  img: "https://www.notion.so/images/logo-ios.png",
  title: "Notion AI",
  desc: "",
  url: "https://www.notion.so"
},
{
  img: "https://www.midjourney.com/apple-touch-icon.png",
  title: "Midjourney",
  desc: "",
  url: "https://www.midjourney.com"
},
{
  img: "https://stablediffusionweb.com/favicon.ico",
  title: "Stable Diffusion",
  desc: "",
  url: "https://stablediffusionweb.com"
},
{
  img: "https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png",
  title: "Beautiful.ai",
  desc: "",
  url: "https://www.beautiful.ai"
}
]
// Vue生态
const navList3 = [{
  img: 'https://cn.vuejs.org/logo.svg',
  title: "Vue 3",
  desc: "渐进式 JavaScript 框架",
  url: "https://cn.vuejs.org"
}, {
  img: 'https://cn.vuejs.org/logo.svg',
  title: "Vue 2",
  desc: "渐进式 JavaScript 框架",
  url: "https://v2.cn.vuejs.org"
}, {
  img: 'https://cn.vuejs.org/logo.svg',
  title: "Vue Router",
  desc: "Vue.js 的官方路由为 Vue.js 提供富有表现力、可配置的、方便的路由",
  url: "https://router.vuejs.org/zh"
}, {
  img: 'https://pinia.vuejs.org/logo.svg',
  title: "Pinia",
  desc: "符合直觉的 Vue.js 状态管理库",
  url: "https://pinia.vuejs.org/zh"
}, {
  img: 'https://nuxt.com/icon.png',
  title: "Nuxt.js",
  desc: "一个基于 Vue.js 的通用应用框架",
  url: "https://nuxt.com"
}, {
  img: 'https://vueuse.org/favicon.svg',
  title: "VueUse",
  desc: "Vue Composition API 的常用工具集",
  url: "https://vueuse.org"
}, {
  img: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
  title: "Element Plus",
  desc: "基于 Vue 3，面向设计师和开发者的组件库",
  url: "https://element-plus.org"
}, {
  img: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
  title: "Ant Design Vue",
  desc: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
  url: "https://antdv.com"
}, {
  img: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
  title: "Vant",
  desc: "轻量、可定制的移动端 Vue 组件库",
  url: "https://vant-ui.github.io/vant"
}, {
  img: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
  title: "Cube UI",
  desc: "基于 Vue.js 实现的精致移动端组件库",
  url: "https://didi.github.io/cube-ui"
}, {
  img: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
  title: "NutUI",
  desc: "京东风格的轻量级移动端组件库",
  url: "https://nutui.jd.com"
}]
// React生态
const navList4 = [
  {
    img: "https://zh-hans.reactjs.org/favicon.ico",
    title: "React",
    desc: "用于构建用户界面的 JavaScript 库",
    url: "https://zh-hans.reactjs.org/"
  },
  {
    img: "https://reactrouter.com/favicon-light.png",
    title: "React Router",
    desc: "React 的声明式路由",
    url: "https://reactrouter.com"
  },
  {
    img: "https://nextjs.org/static/favicon/safari-pinned-tab.svg",
    title: "Next.js",
    desc: "一个用于 Web 的 React 框架",
    url: "https://nextjs.org"
  },
  {
    img: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
    title: "UmiJS",
    desc: "插件化的企业级前端应用框架",
    url: "https://umijs.org"
  },
  {
    img: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
    title: "Ant Design",
    desc: "一套企业级 UI 设计语言和 React 组件库",
    url: "https://ant.design"
  },
  {
    img: "https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg",
    title: "Ant Design Mobile",
    desc: "构建移动 WEB 应用程序的 React 组件库",
    url: "https://mobile.ant.design"
  },
  {
    img: "https://docs.pmnd.rs/apple-touch-icon.png",
    title: "Zustand",
    desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
    url: "https://docs.pmnd.rs/zustand/getting-started/introduction"
  },
  {
    img: "https://valtio.pmnd.rs/favicon.ico",
    title: "Valtio",
    desc: "makes proxy-state simple for React and Vanilla",
    url: "https://valtio.pmnd.rs"
  },
  {
    img: "https://jotai.org/favicon.svg",
    title: "Jotai",
    desc: "primitive and flexible state management for React",
    url: "https://jotai.org"
  },
  {
    img: "https://cn.redux.js.org/img/redux.svg",
    title: "Redux",
    desc: "JavaScript 应用的状态容器，提供可预测的状态管理",
    url: "https://cn.redux.js.org"
  },
  {
    img: "https://zh.mobx.js.org/assets/mobx.png",
    title: "MobX",
    desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
    url: "https://zh.mobx.js.org"
  },
  {
    img: "https://ahooks.js.org/simple-logo.svg",
    title: "ahooks",
    desc: "一套高质量可靠的 React Hooks 库",
    url: "https://ahooks.js.org/zh-CN"
  },
]
// JavaScript 框架类库
const navList5 = [
  {
    img: 'https://svelte.dev/svelte-logo-horizontal.svg',
    title: "Svelte",
    desc: "将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码",
    url: "https://svelte.dev"
  },
  {
    img: withBase('/img/nav/nav5-2.svg'),
    title: "jQuery API 中文文档",
    desc: "一个兼容多浏览器的 JavaScript 框架",
    url: "https://jquery.cuishifeng.cn"
  }
]
// CSS 相关
const navList6 = [
    {
      img: "https://postcss.org/assets/logo-3e39b0aa.svg",
      title: "PostCSS",
      desc: "一个用 JavaScript 转换 CSS 的工具",
      url: "https://postcss.org/"
    },
    {
      img: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
      title: "Sass",
      desc: "一个成熟，稳定，功能强大的专业级 CSS 扩展语言",
      url: "https://sass-lang.com/"
    },
    {
      img: "",
      title: "TailwindCSS 中文网",
      desc: "一个功能类优先的 CSS 框架",
      url: "https://www.tailwindcss.cn/"
    },
    {
      img: "https://unocss.dev/logo.svg",
      title: "UnoCSS",
      desc: "一个即时的原子化 CSS 引擎",
      url: "https://unocss.dev/"
    },
]
// 小程序相关
const navList7 = [
  {
    img: "https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png",
    title: "微信小程序文档",
    desc: "微信小程序官方开发者文档",
    url: "https://developers.weixin.qq.com/miniprogram/dev/framework/"
  },
  {
    img: withBase('/img/nav/nav7-2.svg'),
    title: "Taro",
    desc: "多端统一开发解决方案",
    url: "https://taro.jd.com/"
  },
  {
    img: "https://web-assets.dcloud.net.cn/unidoc/zh/icon.png",
    title: "uni-app",
    desc: "一个使用 Vue.js 开发所有前端应用的框架",
    url: "https://uniapp.dcloud.net.cn/"
  },
  {
    img: "https://mpxjs.cn/favicon.ico",
    title: "Mpx",
    desc: "增强型跨端小程序框架",
    url: "https://mpxjs.cn/"
  },
]
// Node 相关
const navList8 = [
  {
    img: withBase('/img/nav/nav8-1.svg'),
    title: "Node.js",
    desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境",
    url: "https://nodejs.org/zh-cn"
  },
  {
    img: "https://expressjs.com/images/favicon.png",
    title: "Express",
    desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
    url: "https://expressjs.com/"
  },
  {
    img: withBase('/img/nav/nav8-3.svg'),
    title: "Koa",
    desc: "基于 Node.js 平台的下一代 web 开发框架",
    url: "https://koajs.com/"
  },
  {
    img: "https://www.eggjs.org/favicon.png",
    title: "Egg",
    desc: "为企业级框架和应用而生",
    url: "https://www.eggjs.org/zh-CN"
  },
  {
    img: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
    title: "Nest.js 中文文档",
    desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",
    url: "https://docs.nestjs.cn/"
  }
]
// 可视化
const navList9 = [
  {
    img: "",
    title: "ECharts",
    desc: "一个基于 JavaScript 的开源可视化图表库",
    url: "https://echarts.apache.org/zh/index.html"
  },
  {
    img: "",
    title: "AntV",
    desc: "蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。",
    url: "https://antv.vision/zh/"
  },
  {
    img: "https://d3js.org/favicon.png",
    title: "D3.js",
    desc: "一个遵循 Web 标准用于可视化数据的 JavaScript 库",
    url: "https://d3js.org/"
  },
  {
    img: "https://www.chartjs.org/favicon.ico",
    title: "Chart.js",
    desc: "一个简单而灵活的 JavaScript 图表库",
    url: "https://www.chartjs.org/"
  },
  {
    img: "https://threejs.org/files/favicon.ico",
    title: "Three.js",
    desc: "JavaScript 3d 库",
    url: "https://threejs.org/"
  },
]
// 编译&构建&打包
const navList10 = [
  {
    img: "https://www.webpackjs.com/icon_180x180.png",
    title: "Webpack 中文网",
    desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
    url: "https://www.webpackjs.com/"
  },
  {
    img: "https://cn.vitejs.dev/logo.svg",
    title: "Vite 中文文档",
    desc: "下一代前端工具链",
    url: "https://cn.vitejs.dev/"
  },
  {
    img: "https://www.rollupjs.com/img/favicon.png",
    title: "Rollup",
    desc: "Rollup 是一个 JavaScript 模块打包器",
    url: "https://www.rollupjs.com/"
  },
  {
    img: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
    title: "Turbo",
    desc: "Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",
    url: "https://turbo.build/"
  },
  {
    img: "https://www.babeljs.cn/img/favicon.png",
    title: "Babel",
    desc: "Babel 是一个 JavaScript 编译器",
    url: "https://www.babeljs.cn/"
  },
  {
    img: "https://esbuild.github.io/favicon.svg",
    title: "esbuild",
    desc: "An extremely fast bundler for the web",
    url: "https://esbuild.github.io/"
  },
  {
    img: "https://swc.rs/favicon/apple-touch-icon.png",
    title: "SWC",
    desc: "Rust-based platform for the Web",
    url: "https://swc.rs/"
  },
]
// 图标库
const navList11 = [
  {
    img: "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
    title: "iconfont",
    desc: "国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能",
    url: "https://www.iconfont.cn/"
  },
  {
    img: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
    title: "IconPark 图标库",
    desc: "IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标",
    url: "https://iconpark.oceanengine.com/official"
  },
  {
    img: "https://icones.js.org/favicon.svg",
    title: "Icônes",
    desc: "基于 Iconify 的图标浏览器",
    url: "https://icones.js.org/"
  },
  {
    img: "https://icones.js.org/favicon.svg",
    title: "Simple Icons",
    desc: "包含 2457 种流行品牌的免费 SVG 图标库",
    url: "https://simpleicons.org/"
  },
  {
    img: "https://emoji.muan.co/appicon.png",
    title: "Emoji searcher",
    desc: "emoji 表情大全",
    url: "https://emoji.muan.co/"
  },
  {
    img: "https://www.webfx.com/wp-content/uploads/2021/10/favicon.png",
    title: "Emoji Cheat Sheet",
    desc: "可以在 GitHub 中使用的 emoji 表情",
    url: "https://www.webfx.com/tools/emoji-cheat-sheet"
  },
  {
    img: "https://gitmoji.dev/static/apple-icon-144x144.png",
    title: "gitmoji",
    desc: "可以在 git 中使用的 emoji 表情",
    url: "https://gitmoji.dev/"
  },
]
// 前端学习资料
const navList12 = [
  {
    img: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
    title: "MDN | Web 开发者指南",
    desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资",
    url: "https://developer.mozilla.org/zh-CN"
  },
  {
    img: "https://static.runoob.com/images/favicon.ico",
    title: "菜鸟教程",
    desc: "学的不仅是技术，更是梦想！",
    url: "https://www.runoob.com/"
  },
  {
    img: withBase('/img/nav/nav12-3.ico'),
    title: "ES6 入门教程",
    desc: "阮一峰的网络日志",
    url: "http://es6.ruanyifeng.com/"
  },
]
// 社区
const navList13 = [
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
]
// 高质量周刊与博客
const navList14 = [
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
]
// 摸鱼专用
const navList15 = [
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  },
  {
    img: "",
    title: "",
    desc: "",
    url: ""
  }
]
export {
  navList1,
  navList2,
  navList3,
  navList4,
  navList5,
  navList6,
  navList7,
  navList8,
  navList9,
  navList10,
  navList11,
  navList12,
  navList13,
  navList14,
  navList15
}