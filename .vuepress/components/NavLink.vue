<template>
  <div class="nav-group m-nav-links">
    <a :href="item.url" target="_blank" v-for="(item, index) in curNav" :key="index">
      <div class="box">
        <div class="box-header">
          <div class="img" v-if="item.img">
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
import { navList1, navList2, navList3, navList4, navList5, navList6, navList7, navList8, navList9, navList10, navList11, navList12, navList13, navList14, navList15 } from "./constant/nav"

export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    curNav() {
      return this[`navList${this.type}`] ? this[`navList${this.type}`] : this.navList1
    }
  },
  methods: {

  },
  data() {
    return {
      navList1,
      navList2,
      navList3,
      navList4,
      navList5,
      navList6,
      navList7,
      navList8,
      navList9,
      navList10,
      navList11,
      navList12,
      navList13,
      navList14,
      navList15
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-group {
  a {
    display: block;
    border: 1px solid #f6f6f7;
    transition: all .25s;
    border-radius: 8px;
    background-color: #f6f6f7;
    padding: 12px;

    &:hover {
      border-color: #00a98e;
      background-color: #f9f9fa;
      box-shadow: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07);
    }
  }

  .box {
    display: flex;
    flex-direction: column;

    .box-header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      .img {
        width: 40px;
        height: 40px;
        border-radius: 6px;
        background-color: #e3e3e5;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin-right: 10px;

        img {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          object-fit: contain;
        }
      }

      .title {
        font-size: 16px;
        font-weight: 600;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #3c3c43;
      }
    }

    .desc {
      font-size: 12px;
      line-height: 1.5;
      color: rgba(60, 60, 67, .75);
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}

.m-nav-links {
  display: grid;
  --m-nav-gap: 10px;
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  margin-top: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
}

@media (min-width: 500px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
}

@media (min-width: 640px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
  }
}

@media (min-width: 768px) {
  .m-nav-links {
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  }
}

@media (min-width: 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}</style>