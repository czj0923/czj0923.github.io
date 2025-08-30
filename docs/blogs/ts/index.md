---
title: typescript的一些记录
date: 2025/08/29
categories:
  - 代码笔记
---

# typescript 的一些记录

## 1.include 匹配

在`tsconfig.json`的`include`中，有如下配置：

```json
"include": [
  "docs/**/*.ts",
],
```

在项目中的 docs 文件夹下是存在一个`.vitepress·`文件夹，但实测上述的配置并不能匹配到该文件夹下的 ts 文件。  
`**`匹配任意数量的目录字符，但不包括`.`开始的目录，`.`开头的目录一般为隐藏目录

如果要匹配到`.vitepress`文件夹下的 ts 文件，可以这样写：

```json
"include": [
  "docs/.vitepress/**/*.ts",
],
```

## 2.引用

有如下配置：

```json
  "include": [
   "docs/.vitepress/**/*.ts",
  ],
  "exclude": [
    "docs/.vitepress/utils/index.ts",
  ]
```

按配置来看`index.ts`不应该被包含进来，但实际上却被包含了。  
因为`index.ts`文件中的`isClient`被`include`匹配到的文件`import`了，导致`index.ts`也被包含了进来。
:::code-group
``` ts [index.ts]
export const isClient = typeof window !== 'undefined';
```
``` ts [assist.ts]
import { isClient } from "./index.ts"
```
:::