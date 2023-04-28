<template>
  <div class="nav-group">导航内容{{ type }}
    <a :href="item.url" target="_blank" v-for="(item, index) in curNav" :key="index">
      <div class="box">
        <div class="box-header">
          <div class="img">
            <img :src="item.img">
          </div>
          <div class="title">{{ item.title }}</div>
        </div>
        <div class="desc">
          {{ item.desc }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default{
  props:{
    type:{
      type: String,
      required: true
    }
  },
  computed:{
    curNav(){
      return this[`navList${this.type}`] ? this[`navList${this.type}`] : this.navList1
    }
  },
  data(){
    return{
      navList1:[
        {
          img: "https://caniuse.com/img/favicon-128.png",
          title: "Can I Use",
          desc: "前端 API 兼容性查询",
          url: "https://caniuse.com"
        },
        {
          img: "https://tinypng.com/images/apple-touch-icon.png",
          title: "TinyPNG",
          desc: "在线图片压缩工具",
          url: "https://tinypng.com"
        },
        {
          img: "https://devtool.tech/logo.svg",
          title: "开发者武器库",
          desc: "开发者武器库，做开发者最专业最好用的专业工具箱",
          url: "https://devtool.tech"
        },
        {
          img: "https://tool.lu/favicon.ico",
          title: "在线工具",
          desc: "开发人员的工具箱",
          url: "https://tool.lu"
        },
        {
          img: "https://tool.lu/favicon.ico",
          title: "Json 中文网",
          desc: "JSON 在线解析及格式化验证",
          url: "https://www.json.cn"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-group{
  a{
    display: block;
    border: 1px solid #f6f6f7;
    transition: all .25s;
    border-radius: 8px;
    background-color: #f6f6f7;
    padding: 12px;
    &:hover{
      border-color: #00a98e;
      background-color: #f9f9fa;
      box-shadow: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07);
    }
  }
  .box{
    display: flex;
    flex-direction: column;
    .box-header{
      .img{
        width: 40px;
        height: 40px;
        border-radius: 6px;
        background-color: #e3e3e5;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        img{
          width: 24px;
          height: 24px;
          border-radius: 4px;
          object-fit: cover;
        }
      }
      .title{
        font-size: 16px;
        font-weight: 600;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .desc{
      font-size: 12px;
      line-height: 1.5;
      color: rgba(60, 60, 67, .75);
    }
  }
}
</style>