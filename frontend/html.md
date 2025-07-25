---
title: HTML 理论知识点
date: 2023/06/12
tags:
  - 前端
categories:
  - 前端物语
---

## HTML 语义化

`HTML` 语义化是指根据内容的结构化（内容语义化）来选择合适的标签（代码语义化），即用正确的标签做正确的事情
<CustomBlock title="语义化的优点" content="<div><code>HTML</code> 语义化增强文档的可识别性</div><ul><li>可以使页面在没有 <code>CSS</code> 样式表的情况下也能呈现出很好的内容结构</li><li>有利于 <code>SEO</code> 优化（爬虫依赖 <code>HTML</code> 的标签来确定渲染关键字的权重）</li><li>方便其他设备解析（屏幕阅读器、盲人阅读器）提升了用户体验</li><li>增强了代码的可读性和可维护性</li></ul>"></CustomBlock>

### 常用的语义化标签

- `<article>`：表示文章主体部分
- `<aside>`：表示跟文章主体不那么相关的部分，一般包含导航、广告等工具性质的内容
- `<details>` 和 `<summary>`：表示可以查看或隐藏的其他详细信息
- `<figure>` 和 `<figcaption>`：表示与文章相关的图像、照片等流内容
- `<footer>`：通常出现在尾部，包含作者信息、相关链接、版权信息等
- `<header>`：表示导航或者介绍性的内容
- `<h1> ~ <h6>`：表示文章中不同层级的标题
- `<main>`：表示文章的主要内容
- `<nav>`：表示导航
  - 在 `header` 中大多表示文章目录
  - 在 `aside` 中大多是关联页面或者是整站地图
- `<section>`：表示文章中的“节”或“段”
- `<time>`：表示日期或时间

`HTML5` 标签选择流程图
![](./img/html.png)
[HTML 中的语义 —— MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Semantics)
