---
title: https
date: 2022/07/07
---

## 常见http状态码有哪些

### 1xx消息状态码

- 100 Continue 继续

### 2xx成功状态码

- 200 OK 请求成功
- 204 No Content 没有内容
- 206 Partial Content 部分内容

### 3xx重定向状态码

- 301 Moved Permanently 永久重定向
- 302 Found 临时重定向
- 304 Not Modified 资源未修改

### 4xx客户端错误状态码

- 400 Bad Request 错误请求
- 401 Unauthorized 未授权
- 403 Forbidden 禁止请求
- 404 Not Found 资源未找到
- 405 Method Not Allowed 请求方法不被允许
- 408 Request Time-out 请求超时
- 409 Conflict 冲突

### 5xx服务端错误状态码

- 500 Internal Server Error 服务器内部错误
- 502 错误网关
- 504 网关超时

## http和https有什么区别

- http是明文传输，https是ssl加密传输更加安全
- https需要申请ca证书，一般要花钱
- http默认端口是80，https默认端口是443

## get和post区别

- get用于获取数据，post用于提交数据
- get传的参数有长度限制，post没有限制
- get在浏览器回退时无害，post会重新提交请求
- get能被缓存，post不能缓存
- get数据会显示在url中，post不会显示
- get的参数只能是ASCII类型，post没有限制

## TCP和UDP的区别

|              | TCP        | UDP                            |
| ------------ | ---------- | ------------------------------ |
| 是否连接     | 面向连接   | 无连接                         |
| 是否可靠     | 可靠传输   | 不可靠传输                     |
| 连接对象个数 | 一对一     | 一对一，一对多，多对一，多对多 |
| 传输方式     | 面向字节流 | 面向报文                       |
| 首部开销     | 首部开销大 | 8kb                            |
| 适用场景     | 文件传输   | 视频会议直播                   |
