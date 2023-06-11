import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

// import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
// import { getDirname, path } from '@vuepress/utils'
// const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: '橘子Orange',
  description: 'Just playing around',
  dest: "./dist",
  head: [
    // [
    //   'script', { type: 'text/javascript', src: '/js/base.js' }
    // ],
    [
      'script', { type: 'text/javascript', src: '/js/index.js' }
    ],
    // [
    //   'link', {rel: 'stylesheet', href: '/css/heti.css'}
    // ]
  ],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    primaryColor: '#f00', // 主题色
    logo: '/logo.png',
    author: 'Cao Zhijie',
    authorAvatar: '/avatar.jpg',
    docsRepo: 'https://github.com/czj0923/blog.git',
    docsBranch: 'main',
    docsDir: 'example',
    catalogTitle: '目录',
    lastUpdatedText: '上次更新',
    autoSetSeries: true, // 自动设置分类
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
          text: '基础知识',
          children: ['foundation']
        },
        {
          text: '进阶知识',
          children: ['advanced']
        },
      ],
      '/hobby/run': [
        {
          text: '攻略',
          children: ['a-1', 'a-2']
        },
        {
          text: '比赛记录',
          children: ['b-1', 'b-2', 'b-3', 'b-4']
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
          children: []
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
        { text: '标签', link: '/tags/js/1/' },
        {
          text: '爱好', children:
            [
              {
                text: '跑步', children:
                  [
                    { text: '攻略', link: '/hobby/run/a-1' },
                    { text: '比赛记录', link: '/hobby/run/b-1' }
                  ]
              },
              {
                text: '爬山', children:
                  [
                    { text: '攻略', link: '/hobby/climbing/a-1' },
                    { text: '记录', link: '/hobby/run/b-1' }
                  ]
              },
              {
                text: '骑行', children:
                  [
                    { text: '攻略', link: '/hobby/ride/a-1' },
                    { text: '记录', link: '' }
                  ]
              },
              {
                text: '越野', children:
                  [
                    { text: '攻略', link: '/hobby/cross/a-1' },
                    { text: '记录', link: '/hobby/run/b-1' }
                  ]
              }
            ]
        },
        {
          text: '编程',
          children: [
            {
              text: '前端', children:
                [
                  { text: '基础知识', link: '/frontend/foundation' },
                  { text: '八股文', link: '/interview/html' }
                ]
            },
            {
              text: 'php', children:
                [
                  { text: '基础知识', link: "/php/foundation" }
                ]
            },
          ]
        },
        {
          text: '关于我', link: "/docs/introduce"
        },
        {
          text: '我的组件库', link: "/component/home"
        },
      ],
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
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
})
