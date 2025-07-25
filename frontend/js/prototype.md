---
title: 原型和原型链
date: 2023/05/21
tags:
  - 前端
categories:
  - 前端物语
---

原型和原型链是 `JavaScript` 中非常重要的概念，其对于理解 `JavaScript` 的对象模型和继承非常重要。通过原型和原型链，我们可以实现基于原型的继承、寄生式继承、组合式继承等多种继承方式，从而使代码更加简洁、易读、易于维护。

## 构造函数与实例

使用 `new` 运算符与构造函数是常用的创建对象的方式之一。构造函数是一种特殊的函数，用于创建新的对象实例，当我们使用 `new` 运算符调用一个函数时，它就成为了构造函数，因为它被用来构造一个新的对象实例

```javascript
// 构造函数
function Person(name) {
  this.name = name;
}

// 对象实例
const person1 = new Person('maomao');
console.log(person1); // Person {name: 'maomao'}
```

<CustomBlock title="构造函数的特征" content="<ol><li>函数名通常以大写字母开头，以便将其与普通函数区分开来（本质上没有任何区别） <ol><li><strong>使用 <code>new</code> 运算符生成实例的函数就是构造函数</strong></li><li><strong>直接调用的函数就是普通函数</strong></li></ol></li><li>构造函数中通常使用 <code>this</code> 关键字来指代将要创建的对象实例</li><li>构造函数中通常使用属性或方法来定义新对象实例的状态和行为</li></ol>"></CustomBlock>

## `prototype`

在 `JavaScript` 中，每个函数都有一个原型属性 `prototype`，其指向调用该构造函数而创建的实例的原型（原型可以是 `null` 或其他对象）
![](../img/prototype-1.png)
在原型对象（`prototype`）上定义的属性和方法会被对象实例共享

```javascript
function Person() {}

Person.prototype.name = 'maomao';

// 对象实例 person1
const person1 = new Person();
// 对象实例 person2
const person2 = new Person();

console.log(person1.name, person2.name); // 'maomao' 'maomao'
```

## `constructor`

每一个原型对象 `prototype` 都有一个 `constructor` 属性，其**指向原型的构造函数**

```javascript
function Person() {}
Person.prototype; // { constructor: ƒ Person(name) }

Person.prototype.constructor === Person; // true
```

![](../img/prototype-2.png)

## `__proto__`

在 `JavaScript` 中，每个对象都有一个 `__proto__` 属性，其**指向创建该对象的函数的 `prototype`**，即**构造函数的原型**（也称其为隐私原型）
<CustomBlock title="__proto__ 注意点" content="<div><code>__proto__</code> 用来读取或设置当前对象的原型对象，其本质上是一个内部属性，不是一个正式的对外的 <code>API</code>，只是由于浏览器广泛支持，才被加入了 <code>ES6</code> 以确保 <code>Web</code> 浏览器的兼容性，同时该属性已不推荐使用，在实际开发中更推荐使用 ES6 提供的 <code>JavaScript</code></div><ul><li>读取当前对象的原型对象 <ul><li><a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf' target='_blank'>Object.getPrototypeOf</a></li><li><a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf' target='_blank'>Reflect.getPrototypeOf</a></li></ul></li><li>设置当前对象的原型对象 <ul><li><a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf' target='_blank'>Object.setPrototypeOf</a></li><li><a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf' target='_blank'>Reflect.setPrototypeOf</a></li></ul></li></ul>"></CustomBlock>

```javascript
// 构造函数
function Person(name) {
  this.name = name;
}

// 对象实例
const person = new Person('maomao');

person.__proto__ === Person.prototype; // true
Object.getPrototypeOf(person) === Person.prototype; // true
Reflect.getPrototypeOf(person) === Person.prototype; // true
```

![](../img/prototype-3.png)
