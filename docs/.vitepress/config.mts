import { defineConfig } from 'vitepress';
//import { sidebar } from './sidebar';
import autoSidebar from './plugins/vite-plugin-auto-sidebar';

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // base,
  lang: 'zh-cn',
  title: '橘子Orangeのblog',
  description: '橘子Orangeのblog',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/avatar.jpg' }],
    [
      'script',
      {
        type: 'text/javascript',
        src: 'https://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=RXIXcbIFD3HP7RBmzmGwoPoIGqLI0sCN&services=&t=20230613170744'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://api.map.baidu.com/res/webgl/10/bmap.css'
      }
    ]
  ],
  vite: {
    plugins: [
      autoSidebar({
        dir: 'docs',
        ingoreDirList: ['public', 'blogs', 'other'],
        navTextMap: {
          coding: '编程题',
          es6: 'ES6常用知识点',
          html: 'HTML/CSS',
          js: 'JavaScript基础知识',
          network: '浏览器与网络',
          webpack: 'webpack',
          note: '笔记',
          race: '比赛记录',
          read: '阅读',
          calendar: '比赛日历'
        }
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '本页内容'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 设置logo
    logo: '/avatar.jpg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '博客文章',
        link: '/blogs/'
      },
      {
        text: '工具',
        items: [
          { text: '时钟罗盘', link: '/other/clock' },
          { text: '参赛地图', link: '/other/map' },
          { text: '在线工具', link: '/other/nav' },
          { text: '常用导航', link: '/other/web-nav' }
        ]
      },
      {
        text: '爱好',
        items: [
          {
            text: '跑步',
            items: [
              { text: '笔记', link: '/run/note/01' },
              { text: '比赛记录', link: '/run/race/01' }
            ]
          },
          {
            text: '越野',
            items: [
              { text: '笔记', link: '/trail/note/01' },
              { text: '比赛记录', link: '/trail/race/01' }
            ]
          },
          {
            text: '爬山',
            items: [{ text: '笔记', link: '/climbing/01' }]
          },
          {
            text: '骑行',
            items: [{ text: '笔记', link: '/ride/01' }]
          }
        ]
      },
      {
        text: '编程',
        items: [
          {
            text: '前端',
            items: [
              { text: 'JavaScript基础知识', link: '/frontend/js/types' },
              { text: 'ES6常用知识点', link: '/frontend/es6/es6' },
              { text: 'HTML/CSS', link: '/frontend/html/html' },
              { text: '浏览器相关', link: '/frontend/network/browser' },
              { text: '编程题', link: '/frontend/coding/code' },
              { text: '八股文', link: '/interview/html' }
            ]
          },
          {
            text: '后端',
            items: [
              { text: 'php基础知识', link: '/php/foundation' },
              { text: '数据库', link: '/php/sql' }
            ]
          }
        ]
      },
      { text: '关于我', link: '/other/introduce' }
    ],
    sidebar:{}, // 插件生成
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/czj0923'
      },
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/~caozhijie'
      }
    ],
    footer: {
      message: '橘子Orangeのblog',
      copyright: 'Copyright © 2021-present Cao Zhijie'
    }
  }
});
