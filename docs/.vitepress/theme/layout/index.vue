<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: 'rgb(255 146 0)'
      }
    }"
  >
    <Layout> </Layout>
  </ConfigProvider>
</template>

<script setup lang="ts">
// todo:在vitepress中使用ant-design-vue的国际化配置有问题
// import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { ConfigProvider } from 'ant-design-vue';

const { Layout } = DefaultTheme;

const { page, frontmatter } = useData();
</script>
