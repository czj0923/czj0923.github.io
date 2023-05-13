---
title: javascript
date: 2022/07/07
---

## js数据类型有哪些
string,number,boolea,null,undefined,symbol,bigint,object

## var,let,const的区别
- let和const具有块级作用域
- let和const没有变量提升，var存在变量提升
- var声明的全局变量会绑定到window上
- var可以重复声明，let和const不允许重复声明
- let和const存在暂时性死区
- const声明的基本数据类型不能修改

## 箭头函数和普通函数的区别
- 箭头函数没有自己的this
- bind,call,apply不能改变箭头函数的this指向
- 箭头函数不能作为构造函数
- 箭头函数没有arguments
- 箭头函数没有prototype

## for in和for of的区别
- for in遍历的是键，for of遍历的是值
- for in会遍历原型链上的属性，for of只会遍历自身
- for in可以遍历对象，for of不能遍历对象，因为对象没有迭代器属性
- for in是es5的，for of是es6新增的

## 如何把类数组转为数组
1. Array.from()
2. 扩展运算符（需要有迭代器对象）
3. Array.prototype.slice()
4. Array.prototype.splice()
5. Array.prototype.concat()