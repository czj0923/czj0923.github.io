---
title: 编程题
date: 2023/06/16
tags:
  - 前端
categories:
  - 前端物语
---

# 编程题

## new 运算符

<custom-block title="new 运算符原理" content="<ol><li>创建一个全新的对象</li><li>为新创建的对象添加 <strong><code>__proto__</code></strong> 属性并指向构造函数的原型对象</li><li>将新创建的对象作为函数调用的 this</li><li>如果构造函数没有返回对象类型，则返回新创建的对象</li></ol>"></custom-block>

```javascript
function myNew() {
  // 获取构造函数
  const Constructor = [].shift.call(arguments);

  // 创建空对象并设置原型
  const obj = Object.create(Constructor.prototype);

  // 绑定 this 并执行构造函数
  const result = Constructor.apply(obj, arguments);

  // 返回构造函数显示返回的值或新对象
  const type = typeof result;
  return result && (type === 'object' || type === 'function') ? result : obj;
}
```

- [new 运算符 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
- [JavaScript 深入之 new 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)

## instanceof 运算符

<custom-block title="instanceof 运算符原理" content="<div><code>instanceof</code> 运算符用于检测构造函数的 <code>prototype</code> 属性是否出现在某个实例对象的原型链上</div>"></custom-block>

```javascript
function myInstanceof(left, right) {
  // 取右边构造函数的 prototype 值
  const prototype = right.prototype;
  // 取左边实例的 __proto__ 值
  left = left.__proto__;

  while (true) {
    // 当左边实例的 __proto__ 为 null 时返回 false
    if (left === null) {
      return false;
    }
    // 判断左右两边的原型是否一致
    if (left === prototype) {
      return true;
    }
    // 修改 __proto__
    left = left.__proto__;
  }
}
```

- [instanceof 运算符 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
- [instanceof 操作符的实现原理](https://juejin.cn/post/6844903613584654344#heading-1)

## Object.create()

<custom-block title="Object.create()" content="<div><code>Object.create()</code> 方法创建一个新对象，使用现有的对象来提供新创建的对象的 <code>__proto__</code></div>"></custom-block>

```javascript
function create(proto, properties) {
  // 如果 proto 不是 null 或非原始包装对象，抛出 TypeError 异常
  const type = typeof proto;
  if (type !== 'object' && type !== 'function') {
    throw new TypeError(
      'Object prototype may only be an Object or null: ' + proto
    );
  }

  function F() {}
  // 将 proto 的原型设置为 F 的原型
  F.prototype = proto;
  // 创建新对象
  const result = new F();

  // 兼容 null 的处理
  if (proto === null) {
    result.__proto__ = null;
    // OR Reflect.setPrototypeOf(result, null)
  }

  // 将 properties 的属性设置到新对象上
  if (properties !== null && properties !== undefined) {
    Object.defineProperties(result, properties);
  }

  return result;
}
```

[Object.create() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

## Function.prototype.call()

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数

ES6 模拟实现 Function.prototype.call()

```javascript
/** ES6 实现 **/
Function.prototype.myCall = function (context, ...args) {
  // 在非严格模式下，传入的 context 为 null 或 undefined 时会自动替换为全局对象
  // 因此在判断时不能使用 context = context || window
  if (context == null) {
    context = window;
  }
  // 原始值需要被 Object 包装成对象
  else {
    context = Object(context);
  }

  context.fn = this;

  // 获取 fn 函数调用的返回值
  const result = context.fn(...args);

  delete context.fn;

  return result;
};

function get(params) {
  console.log(this, params);

  return '这是返回值';
}

const obj = {
  name: 'maomao',
  age: 18
};

console.log(`call :>> `, get.call(obj, 'call'));
console.log(`myCall :>> `, get.myCall(obj, 'myCall'));
```

ES5 模拟实现 Function.prototype.call()

```javascript
/** ES5 实现 **/
Function.prototype.myCall = function (context) {
  // 在非严格模式下，传入的 context 为 null 或 undefined 时会自动替换为全局对象
  // 因此在判断时不能使用 context = context || window
  if (context == null) {
    context = window;
  }
  // 原始值需要被 Object 包装成对象
  else {
    context = Object(context);
  }

  // 获取调用 call 的函数
  context.fn = this;

  // 获取传入的参数
  var args = [];
  // arguments 是类数组对象，可以使用 for 循环
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }

  /**
   * 获取 fn 函数调用的返回值
   * 此时 args 为 ['arguments[1]', 'arguments[2]', 'arguments[3]']
   * 但在执行时 args 会自动调用 Array.toString() 转化为 context.fn(arguments[1], arguments[2], arguments[3])
   **/
  var result = eval('context.fn(' + args + ')');

  // 删除 fn 函数
  delete context.fn;

  // 将 fn 函数的返回值返回
  return result;
};
```

- [Function.prototype.call() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [JavaScript 深入之 call 和 apply 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)

## Function.prototype.apply()

`apply()` 方法调用一个具有给定 `this` 值的函数，以及以一个数组（或类数组对象）的形式提供的参数
ES6 模拟实现 Function.prototype.apply()

```javascript
/** ES6 实现 **/
Function.prototype.myApply = function (context, arr) {
  // 在非严格模式下，传入的 context 为 null 或 undefined 时会自动替换为全局对象
  // 因此在判断时不能使用 context = context || window
  if (context == null) {
    context = window;
  }
  // 原始值需要被 Object 包装成对象
  else {
    context = Object(context);
  }

  context.fn = this;

  // 获取函数调用的返回值
  const result = arr ? context.fn(...arr) : context.fn();

  delete context.fn;

  return result;
};

function get(params) {
  console.log(this, params);

  return '这是返回值';
}

const obj = {
  name: 'maomao',
  age: 18
};

console.log(`apply :>> `, get.apply(obj, ['apply']));
console.log(`myApply :>> `, get.myApply(obj, ['myApply']));
```

ES5 模拟实现 Function.prototype.apply()

```javascript
/** ES5 实现 **/
Function.prototype.myApply = function (context, arr) {
  // 在非严格模式下，传入的 context 为 null 或 undefined 时会自动替换为全局对象
  // 因此在判断时不能使用 context = context || window
  if (context == null) {
    context = window;
  }
  // 原始值需要被 Object 包装成对象
  else {
    context = Object(context);
  }

  // 获取调用 apply 的函数
  context.fn = this;

  // 获取 fn 函数调用的返回值
  var result;
  if (arr) {
    // 获取传入的参数
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }

    result = eval('context.fn(' + args + ')');
  }
  // 没有参数直接调用
  else {
    result = context.fn();
  }

  // 删除 fn 函数
  delete context.fn;

  // 将 fn 的返回值返回
  return result;
};
```

- [Function.prototype.apply() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [JavaScript 深入之 call 和 apply 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)

## Function.prototype.bind()

`bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数供调用时使用。
ES6 模拟实现 Function.prototype.bind()

```javascript
/** ES6 实现 **/
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function');
  }

  const self = this;

  return function F(...fArgs) {
    const params = [...args, ...fArgs];
    // 当作为构造函数时
    if (this instanceof F) {
      return new self(...params);
    }

    // 当作为普通函数时，将函数的 this 指向 context
    return self.apply(context, params);
  };
};
```

ES5 模拟实现 Function.prototype.bind()

```javascript
/** ES5 实现 **/
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('not a function');
  }

  // 获取调用 bind 的函数
  var self = this;

  // 获取除了 thisArg 外的剩余参数（第二个到最后一个）
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};
  var fBound = function () {
    // 获取返回函数的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      // 当作为构造函数时，将绑定函数的 this 实例指向实例
      // 当作为普通函数时，将绑定函数的 this 指向 context
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };

  // 存在原型时，修改返回函数的 prototype 为绑定函数的 prototype，使实例可以继承绑定函数原型中的值
  var prototype = self.prototype;
  if (prototype) {
    fNOP.prototype = prototype;
  }

  fBound.prototype = new fNOP();
  return fBound;
};
```

- [Function.prototype.bind() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- 相关学习文章
  - [JavaScript 深入之 bind 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)
  - [从一道面试题的进阶，到“我可能看了假源码”](https://zhuanlan.zhihu.com/p/25379434)
  - [从一道面试题的进阶，到“我可能看了假源码”（2）](https://zhuanlan.zhihu.com/p/25483361)

## debounce 函数防抖

<custom-block title="函数防抖" content="<div><strong>作用</strong>: 一个函数在一段时间内多次触发都<strong>只执行最后一次</strong> <br><strong>原理</strong>: 利用定时器，在函数第一次执行时设定一个定时器，再次调用时如果已经设定过定时器就清空之前的定时器并设定一个新的定时器，当定时器结束后执行传入的回调函数 <br><strong>应用</strong>: 搜索输入框获取用户输入的联想结果</div>"></custom-block>

```javascript
function debounce(fn, wait) {
  // 通过闭包缓存定时器 id
  let timer = null;
  return function (...args) {
    // 如果定时器已经存在，清除定时器
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    // 设定定时器，定时器结束后执行传入的回调函数 fn
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
```

## throttle 函数节流

<custom-block title="函数节流" content="<div><strong>作用</strong>: 函数节流指指的是在一段时间内只允许函数执行一次 (例如 <code>3</code> 秒执行一次那么在函数第一次调用后的 <code>3</code> 秒内后面的函数调用将被忽略) <br><strong>原理</strong>: 利用时间戳来判断，记录上次执行的时间戳，在每次触发事件时判断当前时间是否大于上次执行的时间 + 设置的间隔 ，如果是则执行回调并更新上次执行的时间戳<br><strong>应用</strong>: 降低 <code>scroll resize</code> 事件的触发频率</div>"></custom-block>

```javascript
function throttle(fn, wait) {
  // 通过闭包缓存上一次的调用时间 (默认为 0)
  let lastCallTime = 0;
  return function () {
    const now = Date.now();
    // 判断当前调用时间和上次调用时间的差值是否大于 wait
    if (now - lastCallTime >= wait) {
      // 更新调用时间
      lastCallTime = now;
      // 执行回调函数
      fn.apply(this, arguments);
    }
  };
}
```
