---
title: 使用ant-design-vue
date: 2025/08/07
tags:
  - js
categories:
  - 代码笔记
---

使用的ant-design-vue版本是4

## 按需导入

如果不考虑打包体积的话，可以这样使用

```js
import Antd from 'ant-design-vue';
app.use(Antd);
```

更好的方式是按需导入，这样可以减小打包体积

```js
import { Button } from 'ant-design-vue';
app.use(Button);
```

## 自动按需导入
如果使用的是`Vite` ，推荐使用`unplugin-vue-components`  
```bash
pnpm install unplugin-vue-components -D
```
```js
// vite.config.js
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [
    // ...
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
});
```
然后你可以在代码中直接引入`ant-design-vue`的组件，插件会自动将代码转化为`import { Button } from 'ant-design-vue'`的形式。
## 适配rem

1. 引入 px2remTransformer：ant-design-vue 4.x 提供了 px2remTransformer 来解决此问题。它能在开发环境中将 px 单位转换为 rem。
2. 配置 a-style-provider：在 App.vue 中，使用 a-style-provider 组件包裹应用，并配置 px2remTransformer，以使开发模式下的样式与打包后的效果一致。

```vue
<script lang="ts">
import { px2remTransformer } from 'ant-design-vue';
const px2rem = px2remTransformer({
  rootValue: 100 // 根组件的字体大小
});
</script>
<template>
  <a-style-provider :transform="[px2rem]"> </a-style-provider>
</template>
```
