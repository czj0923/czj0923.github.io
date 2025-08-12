// 主题独有配置
import { getThemeConfig } from "@sugarat/theme/node";

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '粥里有勺糖',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,

  // 默认开启 markdown 图表支持（会增加一定的构建耗时）
  // mermaid: false
  home: {
    name: "Orange blog",
    motto: "",
    inspiring: [
      "千万不要因为走得太久，而忘记了我们为什么出发",
      "人生就像一场修行，你不可能一开始就修成正果",
      "无论多么沉重的负担，也不要忘记微笑；无论多么漫长的路程，也不要忘记坚持",
      "生活的真谛不在繁华，而在于淡泊",
    ],
    inspiringTimeout: 3000,
    pageSize: 6,
  },
  
  // 评论
  // comment: {
  //   repo: 'ATQQ/sugar-blog',
  //   repoId: 'MDEwOlJlcG9zaXRvcnkyNDEyNDUyOTk',
  //   category: 'Announcements',
  //   categoryId: 'DIC_kwDODmEcc84COVc6',
  //   inputPosition: 'top',
  // },
  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    copyright: "MIT License | 曹至杰",
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },
  recommend: {
    title: '🔍 系列文章',
    nextText: '下一页',
    pageSize: 9,
    empty: '暂无相关文章',
    style: 'sidebar',
    sort: 'date',
    showDate: true,
    showNum: true
  },
  // 主题色修改
  themeColor: "el-blue",
  // 文章默认作者
  author: "曹至杰",
  // 友链
  friend: [
    {
      nickname: "粥里有勺糖",
      des: "你的指尖用于改变世界的力量",
      avatar:
        "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
      url: "https://sugarat.top",
    },
    {
      nickname: "Vitepress",
      des: "Vite & Vue Powered Static Site Generator",
      avatar: "https://vitepress.dev/vitepress-logo-large.webp",
      url: "https://vitejs.cn/vitepress/",
    },
  ],
  // 公告
  // popover: {
  //   title: '公告',
  //   body: [
  //     { type: 'text', content: '👇公众号👇---👇 微信 👇' },
  //     {
  //       type: 'image',
  //       src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp'
  //     },
  //     {
  //       type: 'text',
  //       content: '欢迎大家加群&私信交流'
  //     },
  //     {
  //       type: 'text',
  //       content: '文章首/文尾有群二维码',
  //       style: 'padding-top:0'
  //     },
  //     {
  //       type: 'button',
  //       content: '作者博客',
  //       link: 'https://sugarat.top'
  //     },
  //     {
  //       type: 'button',
  //       content: '加群交流',
  //       props: {
  //         type: 'success'
  //       },
  //       link: 'https://theme.sugarat.top/group.html',
  //     }
  //   ],
  //   duration: 0
  // },
  // 看板娘
  oml2d: {
    mobileDisplay: true,
    models: [
      {
        path: "https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json",
      },
    ],
  },
});

export { blogTheme };
