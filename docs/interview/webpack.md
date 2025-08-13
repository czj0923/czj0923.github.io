---
title: webpack
date: 2022/07/07
---

# webpack

## webpack常用配置项

- entry 入口
- output 出口
- module 配置如何处理模块
- resolve 配置如何寻找文件
- plugins 扩展webpack的功能
- devServer

## 使用过webpack里面哪些loader

- css-loader
- style-loader
- sass-loader
- less-loader
- postcss-loader
- babel-loader
- vue-loader

## 使用过webpack里面哪些plugin

- clean-webpack-plugin
- html-webpack-plugin
- copy-webpack-plugin

## plugins和loader有什么区别

- webpack只能识别js,loader用于把其他类型的资源转换成webpack能够识别的模块
- plugins用于扩展webpack的功能，在webpack运行时会广播很多事件，plugin可以监听这些事件，然后通过webpack提供的API来改变输出结果。

## 模块热更新是什么

热更新又叫做HMR。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
