---
home: true
modules:
  - BannerBrand
  - Blog
  - Footer
bannerBrand:
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: '200px'
    width: '100%'
    display: block
    margin: '0 auto 2rem'
    borderRadius: '1rem'
  bgImage: '/bg.svg'
  heroText: 网站导航
  tagline: 见证者，为见证而来 | 铭记者，因铭记而生
  buttons:
    - { text: 简介, link: '/docs/guide/introduce' }
    - { text: 笔记, link: '/docs/guide/introduce', type: 'plain' }
    - { text: 爱好, link: '/docs/guide/introduce', type: 'plain' }
    - { text: 编程, link: '/docs/guide/introduce', type: 'plain' }
    - { text: 组件库, link: '/component/home', type: 'plain' }
blog:
  socialLinks:
    - { icon: 'BrandGithub', link: "https://github.com/czj0923" }
    - { icon: 'Gitlab', link: "https://gitee.com/czj_1051029537" }
footer:
  record: ""
  recordLink: ""
  cyberSecurityRecord: ""
  cyberSecurityLink: ""
  startYear: 2022
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
features:
- title: 过去
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
- title: 当下
  details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。
- title: 未来
  details: 吸引更多的朋友参与到开发中来，继续强大功能。
---

## 快速开始

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```
