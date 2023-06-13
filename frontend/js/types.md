---
title: 数据类型
date: 2023/05/21
tags:
 - 前端
categories:
 - 前端物语
---

<CustomBlock title="温馨提示" content="阅读<a href='https://www.ituring.com.cn/book/2472' target='_blank'>《JavaScript 高级程序设计（第 4 版）》</a>和各个大佬的文章所归纳的总结，<strong>如有异议按你的理解为主</strong>"></CustomBlock>
`JavaScript`中的数据类型分为基本数据类型和引用数据类型

## 基本类型
注: 基本数据类型也可以叫原始数据类型
在`ES2020`标准下的`JavaScript`一共有以下 7 种基本类型
* `undefined` 未定义
* `null` 空指针
* `boolean` 布尔值
* `string` 字符串
* `number` 数值
* `symbol` 独一无二的值 ([ES6引入](https://es6.ruanyifeng.com/#docs/symbol))
* `bigint` 大整数 ([ES2020引入](https://es6.ruanyifeng.com/#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B))

<CustomBlock title="基本类型总结" content="<ul><li>基本类型仅保存原始值，不存在属性和方法</li><li>基本类型存储在 <strong>栈内存</strong> 中</li><li>保存基本类型的变量是 <strong>按值 (by value) 访问</strong> 的，操作的就是存储在变量中的实际值</li><li>复制基本类型时会创建该值的第二个副本 (独立使用，互不干扰)</li></ul>"></CustomBlock>
<CustomBlock title="为什么原始值不存在属性和方法，但 'hello world'.toString() 可以正确执行" content="<p>为了方便操作原始值 <code>ECMAScript</code> 提供了 3 种特殊的引用类型：<code>Boolean</code> <code>Number</code> <code>String</code>，每当用到某个原始值的方法或属性时，后台都会创建一个相应原始包装类型的对象，在执行完后再销毁这个包装对象</p>"></CustomBlock>

``` javascript
// 举个 🌰
const str = 'hello world'
str.toString()
str.length

/**
 * 在执行上面的代码时 `JavaScript` 都会执行以下 3 步
 * 1. 创建一个 String 类型的实例
 * 2. 调用实例上的特定方法或属性
 * 3. 销毁刚刚创建的实例
 */
const str = 'hello world'
new String(str).toString()
new String(str).length
```

## 引用类型
在`JavaScript`中除了基本类型，其他的都是引用类型，常见的引用类型如下
* `Object` 对象
* `Array` 数组
* `Function` 函数
* `Date` 日期与时间
* `RegExp` 正则表达式
* `Set` 类似于数组但成员的值都是唯一的 ([ES6引入](https://es6.ruanyifeng.com/#docs/set-map#Set))
* `WeakSet` ([ES6引入](https://es6.ruanyifeng.com/#docs/set-map#WeakSet))
* `Map` 类似于对象也是键值对的集合 ([ES6引入](https://es6.ruanyifeng.com/#docs/set-map#Map))
* `WeakMap` ([ES6引入](https://es6.ruanyifeng.com/#docs/set-map#WeakMap))

<CustomBlock title="引用类型总结" content="<ul><li>因为 <code>JavaScript</code> 不允许直接访问内存位置(不能直接操作对象所在的内存空间)，所以引用类型在 <strong>栈内存</strong> 中存储的是地址(内存指针)，而引用类型中的数据(方法或属性)是存储在 <strong>堆内存</strong> 中</li><li>保存引用类型的变量是 <strong>按引用 (by reference) 访问</strong> ，实际上操作的是对该对象的引用而非实际的对象本身</li><li>复制引用类型时只会复制内存指针</li></ul>"></CustomBlock>
<CustomBlock title="栈内存和堆内存" content="<ul><li><strong>栈内存</strong><ul><li>存储基本数据类型和堆内存地址</li><li>是连续的内存空间</li></ul></li><li><strong>堆内存</strong><ul><li>存储引用数据类型和闭包中的变量</li><li>不是连续的内存空间</li></ul></li><li>了解更多请点击 <a href='https://github.com/chenqf/frontEndBlog/issues/9' target='_blank'>JS 中的栈内存和堆内存</a></li></ul>"></CustomBlock>
## 类型判断
常见的五种判断方式

* `typeof`
* `instanceof`
* `constructor`
* `Array.isArray()`
* `Object.prototype.toString`
### typeof
* 除`null`外的基本类型都能准确判断
``` javascript
typeof undefined        // 'undefined'
typeof null             // 'object'
typeof true             // 'boolean'
typeof 'maomao'         // 'string'
typeof 2021             // 'number'
typeof Symbol()         // 'symbol'
typeof BigInt(2021)     // 'bigint'
```
<CustomBlock title="为什么 typeof null === 'object'" content="<p>在 <code>JavaScript</code> 最初的实现中，<code>JavaScript</code> 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 <code>0</code>。由于 <code>null</code> 代表的是空指针（大多数平台下值为 <code>0x00</code>），因此<code>null</code> 的类型标签是 <code>0</code>，<code>typeof null</code> 也因此返回 <code>'object'</code> —— <a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null' target='_blank'>MDN</a></p>"></CustomBlock>

* 除`function`外的引用类型均返回`object`
``` javascript
typeof {}               // 'object'
typeof []               // 'object'
typeof console.log      // 'function'
typeof new Date()       // 'object'
typeof new RegExp()     // 'object'
typeof new Set()        // 'object'
typeof new WeakSet()    // 'object'
typeof new Map()        // 'object'
typeof new WeakMap()    // 'object'
```
### instanceof
`instanceof`用于检测构造函数的`prototype`属性是否存在于实例对象的原型链上
``` javascript
/** 基本类型 */
true instanceof Boolean       // false
'maomao' instanceof String    // false
1 instanceof Number           // false

/** 引用类型 */
function Person(name) {
  this.name = name
}

const p1 = new Person('maomao')

p1 instanceof Person          // true
p1 instanceof Object          // true

// 修改原型，使 p1 不再是 Person 的实例
Reflect.setPrototypeOf(p1, Array.prototype)
// OR p1.__proto__ = Array.prototype

p1 instanceof Person          // false
p1 instanceof Array           // true
```
<CustomBlock title="instanceof 总结" content="<ul><li><code>instanceof</code> 不能判断基本类型，对于引用类型只能判断原型链上的从属关系</li><li><code>instanceof</code> 并不完全可靠，因为构造函数的 <code>prototype</code> 属性可能会被修改 <ul><li>修改原型的方法 <ul><li>使用 <code>ES6</code> 提供的 <a href='https://es6.ruanyifeng.com/?search=%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B&amp;x=0&amp;y=0#docs/reflect#Reflect-setPrototypeOfobj-newProto' target='_blank'><code>Reflect.setPrototypeOf()</code></a> 方法</li><li>借助于非标准的 <code>__proto__</code> 伪属性</li></ul></li></ul></li></ul>"></CustomBlock>

### constructor
实例对象可以通过`constructor`属性去访问它的构造函数
``` javascript
/** 基本类型 */
(true).constructor === Boolean            // true
'maomao'.constructor === String           // true
(2021).constructor === Number             // true
Symbol().constructor === Symbol           // true
BigInt(2021).constructor === BigInt       // true

/** 引用类型 */
({}).constructor === Object               // true
([]).constructor === Array                // true

function Person(name) {
  this.name = name
}
Person.prototype.constructor === Person   // true

// 修改原型造成 constructor 丢失
Person.prototype = {}
Person.prototype.constructor === Object   // true
```
<CustomBlock title="constructor 总结" content="<ul><li><code>constructor</code> 可以判断除 <code>undefined</code> 和 <code>null</code> 外的所有基本类型和引用类型(<code>undefined</code> 和 <code>null</code> 不存在构造函数)</li><li><code>constructor</code> 并不完全可靠，因为构造函数的 <code>prototype</code> 属性可能会被修改，从而造成 <code>constructor</code> 属性指向不准确</li></ul>"></CustomBlock>

### Array.isArray()
`Array.isArray()`用于判断一个值是否是数组 (`Array`)
``` javascript
Array.isArray([])   // true
Array.isArray({})   // false
```

### Object.prototype.toString
* 每个对象都有一个`toString()`方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用，默认情况下`toString()`方法被每个`Object`对象继承。如果此方法在自定义对象中未被覆盖`toString()`返回`"[object type]"`其中`type`是对象的类型
* 为了每个对象都能通过`Object.prototype.toString()`来检测，需要以`Function.prototype.call()`或者`Function.prototype.apply()`的形式来调用
``` javascript
const toString = Object.prototype.toString

toString.call(undefined)        // '[object Undefined]'
toString.call(null)             // '[object Null]'
toString.call(true)             // '[object Boolean]'
toString.call('maomao')         // '[object String]'
toString.call(2021)             // '[object Number]'
toString.call(Symbol())         // '[object Symbol]'
toString.call(BigInt(2021))     // '[object BigInt]'

toString.call({})               // '[object Object]'
toString.call([])               // '[object Array]'
toString.call(console.log)      // '[object Function]'
toString.call(new Date())       // '[object Date]'
toString.call(new RegExp())     // '[object RegExp]'
toString.call(new Set())        // '[object Set]'
toString.call(new WeakSet())    // '[object WeakSet]'
toString.call(new Map())        // '[object Map]'
toString.call(new WeakMap())    // '[object WeakMap]'
```
`toString` 方法的在 `ECMAScript 5` 下的大致执行过程\
1.如果 `this` 是 `undefined` 返回 `[object Undefined]`\
2.如果 `this` 是 `null` 返回 `[object Null]`\
3.让 `O` 成为 `ToObject(this)` 的结果\
4.让 `class` 成为 `O` 的内部属性 `[[Class]]` 的值\
5.返回由 `"[object "` `class` `"]"` 三个部分组成的字符串

<CustomBlock title="注意点" content="<div>不同 <code>ECMAScript</code> 版本对 <code>toString</code> 方法的规范都有所不同</div><div><a href='https://juejin.cn/post/6972878737582850062#heading-27' target='_blank'>Object.prototype.toString 方法的原理</a></div>"></CustomBlock>