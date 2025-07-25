---
title: prettier笔记
date: 2025/06/25
tags:
  - 代码笔记
categories:
  - 代码笔记
---

[prettier中文网](https://prettier.nodejs.cn/docs/configuration/)  
根目录下创建 `.prettierrc` 配置  
根目录下创建 `.prettierignore` 忽略不想格式化的文件  
如果没有忽略文件，默认情况下将会忽略以下文件的格式化
安装prettier：`pnpm i prettier -D`
```js
**/.git
**/.svn
**/.hg
**/node_modules
```

## 配置文件的优先级

1. 文件内注释（// prettier-options，但不推荐）
2. 项目中的.prettierrc文件
3. package.json 中的 prettier 字段
4. 编辑器全局配置

如果在setting.json修改了默认值，只要项目中存在prettier的配置文件（比如.prettierrc），就不会读取setting.json的配置

## 常用配置

1. printWidth（行宽限制）  
   **作用**：规定一行代码最多能写多少字符，超过就换行。  
   默认值：80
2. tabWidth（缩进空格数）  
   **作用**：规定一个 tab 键相当于几个空格（前端常用 2 或 4）。  
   **默认值**：2
3. useTabs（是否用 tab 代替空格）  
   **作用**：如果设为 true，Prettier 会用 tab 字符缩进，否则用空格。  
   **默认值**：false
4. singleQuote（是否用单引号）  
   **作用**：规定字符串用单引号（'）还是双引号（"）。  
   **默认值**：false（默认双引号）
5. trailingComma（尾逗号）  
   **作用**：规定对象、数组等结构的最后一个元素是否加逗号。  
   **可选值**："none"（不加）、"es5"（ES5 支持的场景加，如对象）、"all"（尽可能加尾随逗号）  
   **默认值**："all"
6. bracketSameLine（大括号在同一行）  
   **作用**：规定对象/函数的大括号是否和代码在同一行（ESLint 的 brace-style 规则）。  
   **默认值**：false（默认换行，如 { 单独一行）
7. arrowParens（箭头函数括号）  
   **作用**：规定箭头函数只有一个参数时，是否加括号。  
   **可选值**："always"（总是加）、"avoid"（避免加）  
   **默认值**："always"
8. semi（是否加分号）  
   **作用**：规定代码行尾是否加分号，推荐加分号。  
   **默认值**：true（默认加分号）
9. bracketSpacing（大括号内是否加空格）  
   **作用**：规定对象大括号内是否加空格（如 { a: 1 } vs {a:1}）。  
   **默认值**：true（默认加空格）
10. endOfLine（行尾换行符）  
    **作用**：规定行尾用哪种换行符（跨平台兼容）。  
    **可选值**："lf"（Linux/macOS）、"crlf"（Windows）、"cr"（旧 macOS）、"auto"（保持原文件格式）  
    **默认值**："lf"
11. vueIndentScriptAndStyle（Vue文件缩进）  
    **作用**：Vue 文件中 `<script>` 和 `<style>` 标签内的代码是否缩进。  
    **默认值**：false（默认不缩进）

## 个人使用配置

```js
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSameLine": false,
  "bracketSpacing": true,
  "arrowParens": "always",
  "semi": true,
  "vueIndentScriptAndStyle": false,

  "singleQuote": true,
  "endOfLine": "auto",
  "trailingComma": "none"
}
```
