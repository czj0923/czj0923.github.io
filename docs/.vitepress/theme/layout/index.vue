<template>
   <Layout>
    <template #doc-top>
      My custom sidebar top content
    </template>
  </Layout>
</template>

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

const { page } = useData()
const isBlog = ref(false)
const filePath = page.value.filePath;
if(filePath.split('/')[0] === 'blogs'){
 // 博客文章
 isBlog.value = true
}

</script>