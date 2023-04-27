<template>
  <div class="nav-content-list">
    <div class="item grid-6" v-for="(item, index) in navList" :key="index">
      <a href="">
        <div class="box">
          <div class="icon">{{ item.icon }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="seeText">
            <span>{{ item.seeText }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="link-text-icon" data-v-524883e9=""><path d="M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"></path></svg>
          </div>
        </div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          icon: "📖",
          title: "前端物语",
          desc: "整理前端常用知识点",
          seeText: "前端常用知识"
        },
        {
          icon: "📘",
          title: "日常笔记",
          desc: "记录",
          seeText: "立即查看"
        },
        {
          icon: "💡",
          title: "爱好 Hobby",
          desc: "我的爱好",
          seeText: "立即查看"
        },
        {
          icon: "🧰",
          title: "提效工具",
          desc: "工欲善其事，必先利其器",
          seeText: "立即使用"
        },
        {
          icon: "🐞",
          title: "代码笔记",
          desc: "记录平时用到的种种",
          seeText: "踩坑记录"
        },
        {
          icon: "💯",
          title: "八股文",
          desc: "一些前端八股文",
          seeText: "立即查看"
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.nav-content-list {
  display: flex;
  flex-wrap: wrap;
  .item {
    padding: 8px;
    a {
      display: block;
      background-color: #f6f6f7;
      border: 1px solid #f6f6f7;
      border-radius: 12px;
      transition: border-color .25s, background-color .25s;

      &:hover {
        border-color: #ff64b9;
        background-color: #f3f3f6;
        .link-text-icon{
          margin-left: 20px;
        }
      }
    }
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: 24px;

    .icon {
      width: 48px;
      height: 48px;
      font-size: 24px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e3e3e5;
      transition: background-color .25s;
      margin-bottom: 20px;
    }

    .title {
      font-weight: 600;
      color: #3c3c43;
    }

    .desc {
      color: rgba(60, 60, 67, .75);
      font-size: 14px;
      font-weight: 500;
    }

    .seeText {
      margin-top: 8px;
      font-size: 14px;
      display: flex;
      align-items: center;
      color: #00a98e;
      font-weight: 500;
      .link-text-icon{
        margin-left: 6px;
        width: 14px;
        height: 14px;
        color: #00a98e;
        transition: all ease .4s;
      }
    }
  }
}
</style>