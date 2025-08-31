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
其他的比如 useDeviceMotion,useDeviceOrientation 等实现方式类似，都是通过监听事件来更新响应式状态。  
一些引用：[\_configurable](#configurable-ts)
:::

::: details 详细代码
<<< ./code/core/useBattery.ts
:::

## 核心函数-时间

### useCountdown

::: details 详细代码
<<< ./code/core/useCountdown.ts
:::

## 核心函数-动画

### useIntervalFn

::: tip 介绍
`setInterval` 的封装，可以暂停和恢复的定时器。  
`useTimeoutFn` 的实现类似
:::
::: details 详细代码
<<< ./code/shared/useIntervalFn.ts
:::

### useInterval

::: tip 介绍
内部实现调用了 `useIntervalFn`，并通过额外的逻辑实现了暂停和恢复的功能。  
返回一个按固定间隔递增的计数器  
`useTimeout` 的实现类似
:::
::: details 详细代码
<<< ./code/shared/useInterval.ts
:::

### useRafFn

::: tip 介绍
每个 `requestAnimationFrame` 上调用函数。具有暂停和恢复控制。
:::
::: details 详细代码
<<< ./code/core/useRafFn.ts
:::

## 核心函数-浏览器

### useEventListener

::: tip 介绍
用于在 Vue 组件中方便地添加和移除事件监听器的组合式 API。它可以在组件挂载时自动添加事件监听器，并在组件卸载时自动移除事件监听器，从而避免内存泄漏和事件重复绑定的问题。
:::
::: details 详细代码
<<< ./code/core/useEventListener.ts
:::

## 实用工具

## 工具函数

### \_configurable.ts

::: details 详细代码
<<< ./code/\_configurable.ts
:::
