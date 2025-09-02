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
//import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { useData } from 'vitepress';
import { onMounted, ref } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { ConfigProvider } from 'ant-design-vue';

const { Layout } = DefaultTheme;

const { page, frontmatter } = useData();
console.log(frontmatter.value, 'useData()');

const isBlog = ref(false);
const filePath = page.value.filePath;
if (filePath.split('/')[0] === 'blogs') {
  // 博客文章
  isBlog.value = true;
}
</script>
