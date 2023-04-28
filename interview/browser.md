---
title: 浏览器原理
date: 2022/07/07
---

## 前端存储的方式有哪些
- cookies
- localStorage
- sessionStorage
- web SQL
- indexDB

## 强缓存和协商缓存的区别
- 强缓存是在第一次请求时根据服务器返回的响应头,http1.0是expires,http1.1是cach-control，当再次发起请求时，会判断是否到了过期时间，如果没有过期，则直接从缓存中取，否则重新发送请求。
- 协商缓存是在第一次发起请求时会返回一个缓存标识，http1.0是Last-Modified,http1.1是etag，当再次请求时会携带这个缓存标识到服务器，服务器判断缓存标识和当前是否一样，如果一样说明资源没有修改，返回304状态码，浏览器拿本地缓存中的数据，否则返回新的资源和新的缓存标识。

## 跨域的解决方法
- CORS
- nginx反向代理
- node中间件
- jsonp
- webscoket
- postMessage
- location.hash + iframe
- window.name + iframe
- document.domain + iframe

## 哪些操作会造成内存泄漏
- 使用未声明的变量
- 没有清除定时器
- 脱离DOM的引用
- 不合理使用闭包

## 事件循环机制是什么
js是单线程的语言，单线程意味着所有任务都需要排队执行，前一个执行完才能执行下一个任务，这样就会有问题，如果是一个耗时比较长的异步任务就会阻塞后面代码的执行，因此将任务分为同步任务和异步任务，异步任务又分为微任务和宏任务。
在执行时首先把script整体代码看成宏任务放入主执行栈中执行，遇到同步任务立即执行，遇到宏任务放入宏任务队列，遇到微任务放入微任务队列，执行完后，检查是否存在微任务，依次执行直到清空，然后更新ui渲染，再检查宏任务队列是否有任务，如果有则取第一个任务放入主执行栈中，就这样一次一次的循环。

## 宏任务和微任务有哪些
- 宏任务：setTimeout,setInterval,setImmediate
- 微任务：promise,MutationObserver,Process.nextTick

## cookie，localStorage和sessionStorage区别
- cookie最多存4K，localStorage和sessionStorage可以存5MB或以上 
- cookie会跟随http请求带到服务端，localStorage和sessionStorage只是单纯的存储
- cookie的有效期可以设置，默认是浏览器关闭，sessionStorage是当前会话关闭之后被清除，localStorage除非手动清除，否则一直在

