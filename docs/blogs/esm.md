---
title: 为什么现代包都在转向 ESM
date: 2025/01/20
tags:
  - JavaScript
  - ES6
  - ESM
categories:
  - 前端
---

# 为什么现代包都在转向 ESM

## ESM 的优势

### 1. 静态分析能力
- **树摇（Tree Shaking）**：
  - ESM 的静态结构允许打包工具在构建时分析并移除未使用的代码
  - 显著减小最终包的体积
  - CommonJS 由于其动态特性难以实现完美的树摇

- **编译优化**：
  - 静态导入导出使得编译器能够进行更多优化
  - 提前知道依赖关系，实现更好的代码分割

### 2. 标准化和统一
- 浏览器原生支持，无需转换器
- Node.js 原生支持（从 v12 开始）
- 统一了前端和后端的模块化方案

### 3. 更好的异步加载
- 支持动态导入：`import()`
- 更好的代码分割能力
- 按需加载提升性能

### 4. 严格模式
- ESM 默认启用严格模式
- 提供更安全的代码执行环境
- 避免一些常见的 JavaScript 陷阱

## ESM vs CommonJS 主要区别

### 1. 语法对比
```javascript
// ESM
import { function1 } from 'module';
export const function2 = () => {};

// CommonJS
const { function1 } = require('module');
module.exports.function2 = () => {};
```

### 2. 加载时机
- ESM：静态导入，编译时确定依赖关系
- CommonJS：动态导入，运行时加载

### 3. 导入导出特性
```javascript
// ESM 支持命名导出和默认导出
export const named = () => {};
export default defaultExport;

// CommonJS 只有一个导出对象
module.exports = {
  named: () => {},
  default: defaultExport
};
```

## 实际应用中的优势

### 1. 更小的包体积
```javascript
// ESM 方式 - 支持树摇
import { uniqueFunction } from 'lodash-es';

// CommonJS 方式 - 可能导入整个包
const { uniqueFunction } = require('lodash');
```

### 2. 更好的开发体验
```javascript
// 动态导入
const module = await import('./module.js');

// 类型支持更好
import type { TypeDef } from './types';
```

### 3. 更清晰的依赖关系
```javascript
// ESM - 清晰的依赖声明
import { useState } from 'react';
import { query } from './api';

// CommonJS - 依赖可能散布在代码各处
const { useState } = require('react');
if (condition) {
  const { query } = require('./api');
}
```

## 迁移建议

### 1. package.json 配置
```json
{
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    }
  }
}
```

### 2. 双模块支持
- 提供 `.mjs`（ESM）和 `.cjs`（CommonJS）两种格式
- 使用构建工具（如 Rollup）生成两种格式

### 3. 渐进式迁移
1. 先在新功能中使用 ESM
2. 逐步将老代码迁移到 ESM
3. 保持向后兼容性

## 未来展望

1. **更广泛的支持**：
   - 更多运行时环境原生支持 ESM
   - 工具链更好的 ESM 支持

2. **性能提升**：
   - 更多基于 ESM 的优化机会
   - 更好的代码分割和缓存策略

3. **生态系统转变**：
   - 主流包都将提供 ESM 版本
   - 新项目默认使用 ESM