---
title: 引用类型的拷贝
date: 2023/05/21
tags:
 - 前端
categories:
 - 前端物语
---

<CustomBlock title="回顾一下引用类型的特点" content="<ul><li>因为 <code>JavaScript</code> 不允许直接访问内存位置（即不能直接操作引用类型所在的内存空间），所以引用类型在 <strong>栈内存</strong> 中存储的是地址（即内存指针），而引用类型中的数据（方法或属性）是存储在 <strong>堆内存</strong> 中</li><li>保存引用类型的变量是 <strong>按引用 (by reference) 访问</strong> ，当我们访问和操作一个对象时，实际上操作的是对该对象的引用而非实际的对象本身</li><li>复制引用类型时只会复制内存指针</li></ul>"></CustomBlock>
因此我们在开发过程中对引用类型进行拷贝并修改时，便需要根据场景需求注意对原本数据的影响。
