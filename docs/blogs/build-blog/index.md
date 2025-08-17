---
title: VuePress + vuepress-theme-reco搭建个人博客
date: 2022/10/01
tags:
  - js
categories:
  - 代码笔记
---

# VuePress + vuepress-theme-reco搭建个人博客

## 使用技术

VuePress + vuepress-theme-reco

## VuePress

[VuePress2官方文档](https://v2.vuepress.vuejs.org/zh/)\
由于使用的是主题，所以不用vuepress创建项目

## vuepress-theme-reco

[vuepress-theme-reco文档地址](https://vuepress-theme-reco.recoluan.com/)

::: tip 提示
此主题几乎继承 VuePress 默认主题的一切功能。
:::

### 创建项目

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

具体的使用方法可查阅官方文档

## 部署到Gitee Page&GitHub Page

### Gitee Page

1. 新建仓库  
   使用 [czj_1051029537.gitee.io](https://czj_1051029537.gitee.io?_blank) 访问首页，不带二级目录的 pages，需要建立一个与自己个性地址同名的仓库。
2. 提交代码至创建的仓库
   ![](img/2.png)
3. 部署gitee page
   ![](img/3.png)

### GitHub Pages

选择`Github Actions`，其他操作和gitee类似
![](img/1.png)

### 自动推送和部署

在根目录创建一个shell文件

```sh
read -p  "请填写commit提交的信息:" msg

# 空值判断
if [ ! $msg ]; then
    echo "终止提交，因为提交说明为空。"
else
    # 添加到暂存区
    echo "\n\n开始执行add-commit操作......"
    git add .

    # 提交
    git commit -m "$msg"
    echo "commit完毕，开始拉取以及推送代码\n"

    # 推送到github
    echo "开始推送到github\n"
    git push github master

    # 推送到gitee
    echo "开始推送到gitee\n"
    git push gitee master

    if [ $? -eq 0 ]; then
        echo "\n\n流程结束，完成提交。"
    else
        echo "\n\n出错了,请解决错误"
    fi
fi
```

github ci/cd文件

<<< ../../../.github/workflows/main.yml


在终端执行 sh deploy.sh即可自动推送及部署
::: tip 提示
Gitee Pages 个人版不支持提交自动更新，需要手动更新。
:::
