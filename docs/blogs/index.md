  <div class="blog-list">
    <a :href="item.url" class="blog-item" @click="goPage(item.url)" v-for="item in blogsList" :key="item.title">
      <div class="blog-item-title">
        <div class="title">{{ item.title }}</div>
        <div class="sticky" v-if="item.sticky">置顶</div>
      </div>
      <div class="blog-item-info">
        <div class="date">
          <CalendarOutlined style="margin-right: 4px;" />{{ item.date }}
        </div>
        <div class="tags"></div>
      </div>
      <div class="blog-item-content">{{ item.content }}</div>
    </a>
  </div>
  <Pagination v-model:current="current" style="text-align: center;" :total="total" :page-size="pageSize" />

<script lang="ts" setup>
import { CalendarOutlined } from "@ant-design/icons-vue"
import { Pagination} from 'ant-design-vue'
import {data} from "../../docs/.vitepress/utils/blogs.data"
import { ref,computed } from 'vue'

const current = ref(1)
const pageSize = 5
const total = data.blogsList.length

const blogsList = computed(()=>data.blogsList.slice((current.value - 1) * pageSize, current.value * pageSize))

const goPage = (url) => {
  
}
</script>

<style lang="scss" scoped>
.blog-list {
  display: flex;
  flex-direction: column;

  .blog-item {
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    transition: all ease .5s;
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    box-shadow: 0 2px 10px 2px rgba(0, 0, 0, .1);
    text-decoration: none;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &:hover {
      box-shadow: 0 3px 12px 3px rgba(0, 0, 0, .2);
    }

    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        font-size: 20px;
        font-weight: 600;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sticky {
        border: 1px solid #3451b2;
        border-radius: 3px;
        color: #3451b2;
        padding: 2px 6px;
        font-size: 14px;
        line-height: 18px;
      }
    }

    &-info {
      display: flex;
      align-items: center;
      color: #67676c;
      font-size: 14px;
      border-bottom: 1px solid rgba(0, 0, 0, .12);

      .date {
        margin-right: 10px;
      }
    }

    &-content {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      color: #86909c;
      margin-top: 8px;
      font-size: 14px;
    }
  }
}
</style>
