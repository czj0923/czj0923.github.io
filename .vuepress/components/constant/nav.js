import {
  withBase
} from '@vuepress/client'

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
const navList6 = []
const navList7 = []
const navList8 = []
const navList9 = []
const navList10 = []
const navList11 = []
const navList12 = []
const navList13 = []
const navList14 = []
const navList15 = []
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