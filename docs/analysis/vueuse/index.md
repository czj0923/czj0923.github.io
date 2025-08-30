---
title: 常用vueuse函数源码解析
date: 2025/8/26
categories:
  - 代码笔记
---

# 常用 vueuse 函数源码解析

::: tip
vueuse 的版本为 13.6.0
:::

## 核心函数-传感器

### useBattery

::: tip 介绍
响应式电池状态  
实现的核心是使用 [useEventListener](#useeventlistener) 钩子为 `battery` 对象添加事件监听器，监听 `chargingchange`、`chargingtimechange`、`dischargingtimechange` 和 `levelchange` 等事件。当这些事件发生时，`updateBatteryInfo` 函数会被调用，从而更新响应式状态。  
一些引用：[defaultNavigator](#configurable-ts)
:::

::: details 详细代码
<<< @analysis/vueuse/code/core/useBattery.ts
:::

## 核心函数-时间

### useCountdown

::: details 详细代码
<<< @analysis/vueuse/code/core/useCountdown.ts
:::

## 核心函数-浏览器

### useEventListener

::: tip 介绍

:::
::: details 详细代码
<<< @analysis/vueuse/code/core/useEventListener.ts
:::

## 实用工具

## 工具函数

### \_configurable.ts

::: details 详细代码
<<< @analysis/vueuse/code/\_configurable.ts
:::
