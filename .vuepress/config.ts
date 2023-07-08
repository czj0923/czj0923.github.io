import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import {MyPlugin} from "./public/MyPlugin"

// import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
// import { getDirname, path } from '@vuepress/utils'
// const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: '橘子Orange',
  description: 'Just playing around',
  dest: "./dist",
  head: [
    [
      'link', { rel: 'icon', href: '/avatar.jpg' }
    ],
    // [
    //   'script', { type: 'text/javascript', src: '/js/base.js' }
    // ],
    [
      'script', { type: 'text/javascript', src: '/js/index.js' }
    ],
    // [
    //   'script', { type: 'text/javascript', src: 'https://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=RXIXcbIFD3HP7RBmzmGwoPoIGqLI0sCN&services=&t=20230613170744'}
    // ],
    // [
    //   'link', {rel:'stylesheet', href: 'https://api.map.baidu.com/res/webgl/10/bmap.css'}
    // ],
    // [
    //   'link', {rel: 'stylesheet', href: '/css/heti.css'}
    // ]
  ],
  plugins: [
    [
      MyPlugin()
    ]
  ],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    primaryColor: '#d27e00', // 主题色
    logo: '/avatar.jpg',
    author: 'Cao Zhijie',
    authorAvatar: '/avatar.jpg',
    docsRepo: 'https://github.com/czj0923/blog.git',
    docsBranch: 'main',
    docsDir: 'example',
    catalogTitle: '目录',
    lastUpdatedText: '上次更新',
    componentsDir: ".vuepress/components", // 全局注册组件的路径
    // autoSetBlogCategories: true, // 自动设置分类
    autoSetSeries: true, // 自动设置系列
    // series 为原 sidebar
    series: {
      '/docs': [],
      '/component': [
        {
          text: '通用组件',
          children: ['button']
        },
        {
          text: '数据录入组件',
          children: ['input']
        },
        {
          text: '数据展示组件',
          children: ['ellipsis']
        },
        {
          text: '反馈组件',
          children: []
        }
      ],
      '/frontend': [
        {
          text: 'JavaScript基础知识',
          children: ['/frontend/js/types','/frontend/js/clone','/frontend/js/conversions','/frontend/js/prototype','/frontend/js/inherit']
        },
        {
          text: 'ES6常用知识点',
          children: ['/frontend/es6/1']
        },
        {
          text: 'HTML/CSS',
          children: ['/frontend/html','/frontend/css']
        },
        {
          text: 'webpack',
          children: ['/frontend/webpack']
        },
        {
          text: '浏览器与网络',
          children: ['/frontend/browser','/frontend/network/tcp','/frontend/network/http']
        },
        {
          text: '编程题',
          children: ['/frontend/coding']
        },
      ],
      '/hobby/run': [
        {
          text: '攻略',
          children: ['a-1', 'a-2']
        },
        {
          text: '比赛记录',
          children: ['b-1', 'b-2', 'b-3', 'b-4', 'b-5']
        },
        {
          text: '笔记',
          children: ['c-1']
        }
      ],
      '/hobby/ride': [
        {
          text: '攻略',
          children: ['a-1']
        },
        {
          text: '记录',
          children: ['b-1']
        }
      ],
      '/hobby/climbing': [
        {
          text: '攻略',
          children: ['a-1', 'a-2']
        },
        {
          text: '记录',
          children: ['b-1']
        }
      ],
      '/hobby/cross': [
        {
          text: '攻略',
          children: ['a-1']
        },
        {
          text: '记录',
          children: ['b-1']
        }
      ],
      '/notes': [
        {
          text: '笔记',
          children: ['092101', '121501']
        },
      ],
      '/interview': [
        {
          text: '前端八股文',
          children: ['html', 'css', 'javascript', 'vue', 'https', 'webpack', 'browser', 'write', 'performance']
        },
      ],
      '/read': [
        {
          text: '阅读',
          children: ['1', '2', '3', '4', '5']
        }
      ]
    },
    navbar:
      [
        { text: '首页', link: '/' },
        { text: '导航', link: '/tools/nav', icon: 'Compass'},
        { text: '在线工具', icon: 'ToolKit',
          children: [
            {text: '时钟罗盘', link: '/blogs/other/clock', icon: 'Compass'},
            {text: '地图', link: '/blogs/other/2', icon: 'Map'},
          ]
        },
        {
          text: '爱好', children:
            [
              {
                text: '跑步', children:
                  [
                    { text: '攻略', link: '/hobby/run/a-1' },
                    { text: '比赛记录', link: '/hobby/run/b-1' }
                  ],icon: 'TaskView'
              },
              {
                text: '爬山', children:
                  [
                    { text: '攻略', link: '/hobby/climbing/a-1' },
                    { text: '记录', link: '/hobby/climbing/b-1' }
                  ],icon: 'TaskView'
              },
              {
                text: '骑行', children:
                  [
                    { text: '攻略', link: '/hobby/ride/a-1' },
                    { text: '记录', link: '/hobby/ride/b-1' }
                  ],icon: 'TaskView'
              },
              {
                text: '越野', children:
                  [
                    { text: '攻略', link: '/hobby/cross/a-1' },
                    { text: '记录', link: '/hobby/cross/b-1' }
                  ],icon: 'TaskView'
              }
            ],
            icon: 'UserFavoriteAltFilled'
        },
        {
          text: '编程',
          icon: 'Code',
          children: [
            {
              text: '前端', children:
                [
                  { text: 'JavaScript基础知识', link: '/frontend/js/types' },
                  { text: 'ES6常用知识点', link: '/frontend/es6/1' },
                  { text: 'HTML/CSS', link: '/frontend/html' },
                  { text: '浏览器相关', link: '/frontend/browser' },
                  { text: '编程题', link: '/frontend/coding' },
                  { text: '八股文', link: '/interview/html' }
                ]
            },
            {
              text: '后端', children:
                [
                  { text: 'php基础知识', link: "/php/foundation" }
                ]
            },
          ]
        },
        {
          text: '关于我', link: "/docs/introduce", icon: 'UserAvatar'
        },
        // {
        //   text: '我的组件库', link: "/component/home"
        // },
      ],
    // 评论
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'AUPGDMXPseZm27D9DPjPh6J4-gzGzoHsz', // your appId
        appKey: 'lmW3jzNlvzuxVgOvvBltkoHM', // your appKey
        hideComments: false, // 全局隐藏评论，默认 false
      },
    },
    // 公告 暂时不需要
    // bulletin: {
    //   body: [
    //     {
    //       type: 'text',
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: 'font-size: 12px;'
    //     }
    //   ],
    // },
  }),
  // debug: true,
})
