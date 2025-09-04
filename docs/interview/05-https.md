---
title: https
date: 2022/07/07
---

# https

## 常见 http 状态码有哪些

### 1xx 消息状态码

- 100 Continue 继续

### 2xx 成功状态码

- 200 OK 请求成功
- 204 No Content 没有内容
- 206 Partial Content 部分内容

### 3xx 重定向状态码

- 301 Moved Permanently 永久重定向
- 302 Found 临时重定向
- 304 Not Modified 资源未修改

### 4xx 客户端错误状态码

- 400 Bad Request 错误请求
- 401 Unauthorized 未授权
- 403 Forbidden 禁止请求
- 404 Not Found 资源未找到
- 405 Method Not Allowed 请求方法不被允许
- 408 Request Time-out 请求超时
- 409 Conflict 冲突

### 5xx 服务端错误状态码

- 500 Internal Server Error 服务器内部错误
- 502 错误网关
- 504 网关超时

## http 和 https 有什么区别

- http 是明文传输，https 是 ssl 加密传输更加安全
- https 需要申请 ca 证书，一般要花钱
- http 默认端口是 80，https 默认端口是 443

## get 和 post 区别

- get 用于获取数据，post 用于提交数据
- get 传的参数有长度限制，post 没有限制
- get 在浏览器回退时无害，post 会重新提交请求
- get 能被缓存，post 不能缓存
- get 数据会显示在 url 中，post 不会显示
- get 的参数只能是 ASCII 类型，post 没有限制

## TCP 和 UDP 的区别

|              | TCP        | UDP                            |
| ------------ | ---------- | ------------------------------ |
| 是否连接     | 面向连接   | 无连接                         |
| 是否可靠     | 可靠传输   | 不可靠传输                     |
| 连接对象个数 | 一对一     | 一对一，一对多，多对一，多对多 |
| 传输方式     | 面向字节流 | 面向报文                       |
| 首部开销     | 首部开销大 | 8kb                            |
| 适用场景     | 文件传输   | 视频会议直播                   |
