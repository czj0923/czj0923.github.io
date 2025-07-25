---
title: HTTP
date: 2023/06/12
tags:
  - 前端
categories:
  - 前端物语
---

[HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP) 全称为 HyperText Transfer Protocol，即超文本传输协议，是一个用于传输超媒体文档(例如 HTML)的应用层协议
<CustomBlock title="HTTP 协议的主要特点" content="<ul><li>是一个应用层协议</li><li><strong>遵循经典的“客户端-服务端”模型</strong>(客户端发送请求，服务器返回响应)</li><li><strong>灵活可扩展</strong><ul><li>语义上的自由，只规定了报文的基本格式，报文里的各个组成部分可以由开发者任意定制</li><li>传输格式的多样性</li></ul></li><li><strong>无连接</strong>: 每完成一个请求就断开连接(HTTP/1.1 后默认开启长连接)</li><li><strong>无状态</strong>: HTTP 协议对于事务处理没有记忆能力(每个请求之间、浏览器和服务器之间都是相互独立毫无关联的)</li><li><strong>可靠传输</strong>: HTTP 协议是一个可靠的传输协议(基于 TCP/IP 协议)</li><li><strong>明文传输</strong>: 协议里的报文直接使用文本形式传输(HTTP/2.0 后改为二进制传输)</li></ul>"></CustomBlock>
