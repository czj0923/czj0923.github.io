---
title: vue
date: 2022/07/07
---

## vue2生命周期

- beforeCreate
- created 实例创建完成
- beforeMount
- mounted 实例挂载完成
- beforeUpdate
- updated
- brforeDestroy
- destroyed

## 一般在哪个生命周期发请求

created,beforeMount,mounted都可以
推荐在created发，因为可以更快的获取数据，减少页面加载事件
ssr不支持beforeMount,mounted钩子，放在 created 中有助于一致性

## vue2和vue3区别

- 响应式原理vue2使用的是Object.defineProperty,vue3使用的是es6的proxy
- 生命周期，vue3使用setup代替vue2的beforeCreate和created
- vue3使用composition API代替了vue2的options API，更好地逻辑复用
- 定义响应式数据，vue3引入ref和reactive来声明响应式数据
- fragments vue3的template下支持多个根节点
- 新增内置组件suspense，teleport，将一部分dom移动到外部
- 更好的typescript支持

## proxy相比于Object.defineProperty的优点

- proxy有13种拦截方法，相比于Object.defineProperty的get和set更加丰富
- proxy直接代理整个对象
- proxy可以监听数组的变化

## vue2如何实现对于数组的监听

重写了数组上的7个方法，pop,push,shift,unshift,splice,sort,reverse

## $nextTick的原理和作用

$nextTick是在下次dom更新循环结束之后执行延迟回调，在修改数据之后使用$nextTick获取更新后的dom
根据不同的环境依次尝试使用Promise、MutationObserver、setImmediate，如果这三个都不能用，则使用效率最低但兼容性最好的setTimeout来创建一个异步任务。

## 组件之间的通信方式

- 父传子props
- 子传父$emit
- vuex状态管理
- 全局事件总线
- provide,inject
- $refs获取组件实例
- $attrs和$listeners
- $children和$parent

## key的作用

- 为了在diff算法执行过程中更快地找到对应节点，提高diff速度，更高效地更新虚拟dom
- 为了在数据发生变化时强制更新组件，避免“就地复用”带来的副作用

## 组件当中data为什么是函数

一个组件被复用多次的话，会生成多个实例，这些实例用的是同一个构造函数，
如果data是一个对象，因为对象是引用类型，修改一个组件中的data会影响到其他组件中的data，
为了不同组件的data不会相互影响所以要用函数

## v-model的原理

v-model本质是一个语法糖，实现双向数据绑定，数据修改影响视图使用的是Object.defineProperty劫持了数据的getter和setter，一旦数据发生改变，就会通知视图更新；视图的修改影响数据使用的是监听输入框的input事件

## computed和watch区别

computed是计算属性，具有缓存的特性，只有当它所依赖的数据发生变化才会重新进行计算
watch是侦听器，只要他侦听的数据发生改变，就会立即执行函数

## 父子组件的加载顺序

父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted

## 单项数据流是什么

父组件的数据发生改变，子组件会自动跟着变
子组件不能修改父组件传过来的props值

---

## vue-router导航守卫有哪些

- 全局导航守卫
  beforeEach,beforeResolve,afterEach
- 组件内部守卫
  beforeRouteEnter,beforeRouteUpdate,beforeRouteLeave
- 路由独享守卫
  beforeEnter

## hash模式和history模式是怎么实现的

- hash模式利用的是onhashchange事件
- history模式使用的是html5中的pushState()和replaceState()方法

---

## vuex的中mutation和action的区别

mutation处理同步操作，使用时用commit
action用于处理异步操作，使用时先用dispatch到action，然后commit到mutation中进行状态更改

## 为什么 Vuex 的 mutation 中不能做异步操作

因为vuex中的状态只能用mutation来更新，每个mutation执行完之后都会对应到一个新的状态变更，devtools就可以打个快照存下来，方便后面调试

---

## 虚拟dom是什么

虚拟dom是对真实dom的抽象，本质上是一个普通js对象

## 虚拟dom的优点

- 频繁地操作dom是很消耗性能的，虚拟dom可以运用diff算法最大限度地减少dom操作和以及dom操作带来的重排和重绘损耗，从而提高性能
- 虚拟dom本质上是js对象，不依赖客户端环境，具有跨平台的优势
