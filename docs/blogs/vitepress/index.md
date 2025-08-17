---
title: 迁移博客到vitepress
date: 2025/8/19
sticky: true
tags:
  - vitepress
categories:
  - 代码笔记
---

# 迁移博客到 vitepress

## 原因

之前的博客用的是[vuepress](https://v2.vuepress.vuejs.org/zh/) + [vuepress-theme-reco2](https://theme-reco.vuejs.press/)  
但是随着 markdown 文件越来越多（超过 100 个），项目启动时间越来越长，而且每次修改配置文件后都需要重新启动项目，非常不方便。  
再加上这个使用这个主题的时候遇到了一些问题：[用 vuepress-theme-reco2 搭建博客时遇到的一些坑](/blogs/vuepress-reco)  
于是把博客迁移到了 vite 驱动的 vitepress，启动时间大大缩短，同时可以使用 vue3 的特性。

## 对 vitepress 进行改造

### 1. 自动生成侧边栏

vitepress 是基于 vite 的，所以可以写一个 vite 插件来自动生成侧边栏。  
原理是递归查找 md 文件，然后根据路径递归组成侧边栏结构  
可以排除不许需要生成侧边栏（比如博客）的文件

<<< @/.vitepress/plugins/vite-plugin-auto-sidebar.ts

### 2. 批量注册全局组件

参考[注册全局组件](https://vitepress.dev/guide/extending-default-theme#global-components)  
把`.vitepress/components`文件夹下的所有 vue 文件全部注册为全局组件  
根据文件夹名+文件名自动生成组件名，例如：  
`c/button.vue` 会注册名为 `c-button`的组件

<<< @/.vitepress/theme/index.ts

### 3. 博客列表页
参考[构建时数据加载](https://vitejs.cn/vitepress/guide/data-loading)  
先获取所有博客文章，然后给页面返回一个博客列表的数据结构渲染  

<<< @/.vitepress/utils/blogs.data.ts
