import { defineUserConfig } from 'vuepress';
import recoTheme from 'vuepress-theme-reco';
import { viteBundler } from '@vuepress/bundler-vite';
// import { webpackBundler } from '@vuepress/bundler-webpack'
import { MyPlugin } from './plugins/MyPlugin';

export default defineUserConfig({
  title: '橘子Orange',
  description: 'Just playing around',
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/avatar.jpg' }],
    // [
    //   'script', { type: 'text/javascript', src: '/js/base.js' }
    // ],
    ['script', { type: 'text/javascript', src: '/js/index.js' }],
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
    ],
    ['link', { rel: 'stylesheet', href: '/css/ant-design-vue.css' }]
    //[
    //   'link', {rel: 'stylesheet', href: '/css/heti.css'}
    // ]
  ],
  plugins: [MyPlugin()],
  bundler: viteBundler(),
  theme: recoTheme({
    primaryColor: '#d27e00', // 主题色
    logo: '/avatar.jpg',
    author: 'Cao Zhijie',
    authorAvatar: '/avatar.jpg',
    repo: 'czj0923',
    // docsRepo: 'https://github.com/.git',
    // docsBranch: 'main',
    // docsDir: 'example',
    catalogTitle: '目录',
    lastUpdatedText: '上次更新',
    // autoSetBlogCategories: true, // 自动设置分类
    autoSetSeries: true, // 自动设置系列
    series: {
      '/docs/': [],
      '/component/': [
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
      '/frontend/': [
        {
          text: 'JavaScript基础知识',
          children: [
            '/frontend/js/types',
            '/frontend/js/clone',
            '/frontend/js/conversions',
            '/frontend/js/prototype',
            '/frontend/js/inherit'
          ]
        },
        {
          text: 'ES6常用知识点',
          children: ['/frontend/es6/1']
        },
        {
          text: 'HTML/CSS',
          children: ['/frontend/html', '/frontend/css']
        },
        {
          text: 'webpack',
          children: ['/frontend/webpack']
        },
        {
          text: '浏览器与网络',
          children: [
            '/frontend/browser',
            '/frontend/network/tcp',
            '/frontend/network/http'
          ]
        },
        {
          text: '编程题',
          children: ['/frontend/coding']
        }
      ],
      '/hobby/run/': [
        {
          text: '介绍',
          children: ['a-1', 'a-2/', 'a-3/']
        },
        {
          text: '比赛记录',
          children: [
            'b-2',
            'b-4',
            'b-5',
            'b-6',
            'b-7',
            'b-8',
            'b-9',
            'b-10',
            'b-11',
            'b-12',
            'b-13',
            'b-14',
            'b-15',
            'b-16',
            'b-17'
          ]
        },
        {
          text: '笔记',
          children: ['c-1', 'c-2', 'c-3']
        }
      ],
      '/hobby/ride/': [
        {
          text: '介绍',
          children: ['a-1']
        }
        // {
        //   text: '记录',
        //   children: ['b-1/']
        // }
      ],
      '/hobby/climbing/': [
        {
          text: '介绍',
          children: ['a-1', 'a-2/']
        },
        {
          text: '记录',
          children: ['b-1/']
        }
      ],
      '/hobby/trail/': [
        {
          text: '介绍',
          children: ['a-1', 'a-2']
        },
        {
          text: '比赛记录',
          children: [
            'b-1',
            'b-2',
            'b-3',
            'b-4',
            'b-5',
            'b-6',
            'b-7',
            'b-8',
            'b-9',
            'b-10',
            'b-11',
            'b-12'
          ]
        }
      ],
      '/notes/': [
        {
          text: '笔记',
          children: ['092101', '121501']
        }
      ],
      '/interview/': [
        {
          text: '前端八股文',
          children: [
            'html',
            'css',
            'javascript',
            'vue',
            'https',
            'webpack',
            'browser',
            'write',
            'performance'
          ]
        }
      ],
      '/read/': [
        {
          text: '阅读',
          children: ['1', '2', '3', '4', '5']
        }
      ]
    },
    navbar: [
      { text: '首页', link: '/', icon: 'icon-home' },
      { text: '导航', link: '/tools/nav', icon: 'Compass' },
      {
        text: '在线工具',
        icon: 'ToolKit',
        children: [
          { text: '时钟罗盘', link: '/docs/clock', icon: 'Compass' },
          { text: '马拉松参赛地图', link: '/docs/map', icon: 'Map' }
        ]
      },
      {
        text: '爱好',
        children: [
          {
            text: '跑步',
            children: [
              { text: '介绍', link: '/hobby/run/a-1' },
              { text: '比赛记录', link: '/hobby/run/b-2' }
            ],
            icon: 'icon-task'
          },
          {
            text: '越野',
            children: [
              { text: '介绍', link: '/hobby/trail/a-1' },
              { text: '比赛记录', link: '/hobby/trail/b-1' }
            ],
            icon: 'icon-task'
          },
          {
            text: '爬山',
            children: [
              { text: '介绍', link: '/hobby/climbing/a-1' },
              { text: '记录', link: '/hobby/climbing/b-1' }
            ],
            icon: 'icon-task'
          },
          {
            text: '骑行',
            children: [
              { text: '介绍', link: '/hobby/ride/a-1' },
              { text: '记录', link: '/hobby/ride/b-1' }
            ],
            icon: 'icon-task'
          }
        ],
        icon: 'UserFavoriteAltFilled'
      },
      {
        text: '编程',
        icon: 'Code',
        children: [
          {
            text: '前端',
            children: [
              { text: 'JavaScript基础知识', link: '/frontend/js/types' },
              { text: 'ES6常用知识点', link: '/frontend/es6/1' },
              { text: 'HTML/CSS', link: '/frontend/html' },
              { text: '浏览器相关', link: '/frontend/browser' },
              { text: '编程题', link: '/frontend/coding' },
              { text: '八股文', link: '/interview/html' }
            ]
          },
          {
            text: '后端',
            children: [
              { text: 'php基础知识', link: '/php/foundation' },
              { text: '数据库', link: '/php/sql' }
            ]
          }
        ]
      },
      {
        text: '时间轴',
        link: '/timeline',
        icon: 'icon-timeline'
      },
      {
        text: '关于我',
        link: '/docs/introduce',
        icon: 'icon-user'
      }
      // {
      //   text: '我的组件库', link: "/component/home"
      // },
    ]
    // 评论
    // commentConfig: {
    //   type: 'valine',
    //   options: {
    //     appId: 'AUPGDMXPseZm27D9DPjPh6J4-gzGzoHsz', // your appId
    //     appKey: 'lmW3jzNlvzuxVgOvvBltkoHM', // your appKey
    //     hideComments: false, // 全局隐藏评论，默认 false
    //   },
    // },
  })
  // debug: true,
});
