import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

// import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
// import { getDirname, path } from '@vuepress/utils'
// const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: '曹至杰',
  description: 'Just playing around',
  dest:"./dist",
  head:[
    [
      'script', {type: 'text/javascript', src: '/js/base.js'}
    ]
  ],
  plugins: [
    // 根据组件文件或目录自动注册 Vue 组件。
    //registerComponentsPlugin({
    //  componentsDir: path.resolve(__dirname, './components'),
    //}),
  ],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: '曹至杰',
    authorAvatar: '/logo.png',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    catalogTitle: '自定义目录标题',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/theme-reco/': [
        {
          text: '系列一',
          children: ['home', 'theme']
        },
        {
          text: '系列二',
          children: ['api', 'plugin']
        }
      ],
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
          children: []
        },
        {
          text: '反馈组件',
          children: []
        }
      ]
    },
    navbar:
    [
      { text: '主页', link: '/' },
      { text: '分类', link: '/categories/reco/1/' },
      { text: '标签', link: '/tags/tag/1' },
      { text: '我的组件库',link:"/component/home"
        //children: [
        //  { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
        //  { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
        //]
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
