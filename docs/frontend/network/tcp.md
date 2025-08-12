---
title: TCP
date: 2023/06/12
tags:
  - 前端
categories:
  - 前端物语
---

TCP（Transmission Control Protocol 传输控制协议）是一个**面向连接的、可靠的、基于字节流**的传输层通信协议
<CustomBlock title="TCP 连接" content="<div>TCP 连接是用于保证可靠性和流量控制维护的某些状态信息的组合，这些信息包括 Socket、序列号和窗口大小</div><ul><li><strong>Socket</strong>：由 IP 地址和端口号组成</li><li><strong>序列号</strong>：用来解决乱序问题等</li><li><strong>窗口大小</strong>：用来做流量控制</li></ul>"></CustomBlock>
<CustomBlock title="TCP 四元组" content="<ul><li>源地址</li><li>源端口</li><li>目的地址</li><li>目的端口</li></ul><div>TCP 四元组可以唯一的确定一个连接</div>"></CustomBlock>

## 三次握手

TCP 连接建立

## 四次挥手

TCP 断开建立
