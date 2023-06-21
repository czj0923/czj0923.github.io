---
title: 继承
date: 2023/05/21
tags:
 - 前端
categories:
 - 前端物语
---

<CustomBlock title="温馨提示" content="<div>阅读<a href='https://www.ituring.com.cn/book/2472' target='_blank'>《JavaScript 高级程序设计（第 4 版）》</a>和各个大佬的文章所归纳的总结，<strong>如有异议按你的理解为主</strong></div>"></CustomBlock>
继承是面向对象编程中的一个最为人津津乐道的概念，其描述了类与类之间的父子关系，主要作用是提升代码复用性让代码更为简洁。\
很多面向对象语言都支持两种继承：

* 接口继承：只继承方法签名
* 实现继承：直接继承实际的方法
接口继承在 `ECMAScript` 中是不可能的，因为函数没有签名，因此实现继承是 `ECMAScript` 唯一支持的继承方式，而且其**实现继承主要是依靠原型链来实现**的。

## 原型链继承
构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型有一个属性指回构造函数，而实例有一个内部指针指向原型。如果原型是另一个类型的实例呢？那就意味着这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函数。这样就在实例和原型之间构造了一条原型链。这就是原型链的基本构想
<CustomBlock title="原型链继承" content="<div>原型链继承是通过重写子类的原型<strong>将父类的实例作为子类的原型</strong></div><div>缺点</div><ul><li>父类上的引用类型属性会被所有实例共享，其中一个实例进行修改时会影响其他实例</li><li>创建子类实例时不能向父类构造函数传参</li></ul>"></CustomBlock>

``` javascript
function SuperType() {
  this.property = 'Super'
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.getSuperValue = function () {
  return this.property
}

function SubType() {
  this.subproperty = false
}

// 关键点：创建父类 SuperType 的实例并将其赋值给子类的原型 SubType.prototype
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function () {
  return this.subproperty
}

const instance1 = new SubType()
console.log('instance1', instance1.getSuperValue()) // 'Super'
// 在其中一个子类实例上修改父类上的引用属性
instance1.colors.push('black')

const instance2 = new SubType()
console.log('instance2', instance2.getSuperValue()) // 'Super'
// 在另一个子类实例上输出父类上的引用属性
console.log('instance2', instance2.colors) // ['red', 'blue', 'green', 'black']
```
## 借用构造函数继承（经典继承）
## 组合继承
## 原型式继承
## 寄生式继承
## 寄生组合式继承
## ES6 类继承 extends
## 总结
* 原型链继承：通过重写子类的原型**将父类的实例作为子类的原型**
* 借用构造函数继承：**使用父类的构造函数来增强子类实例**等同于复制父类的实例给子类（不使用原型）
* 组合继承：**使用原型链继承原型上的属性和方法，通过借用构造函数来实现对实例属性的继承**
* 原型式继承：**利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型**
* 寄生式继承：**创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象**
* 寄生组合式继承：**通过借用构造函数继承属性，再使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型**
## 相关文章
* [JavaScript 常用八种继承方案](https://github.com/yygmind/blog/issues/7)
* [JavaScript 深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16)
* [ES6 系列之 Babel 是如何编译 Class 的(下)](https://github.com/mqyqingfeng/Blog/issues/106)