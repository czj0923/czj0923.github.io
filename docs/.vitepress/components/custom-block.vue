<template>
  <div class="custom-block">
    <div class="title">{{ title }}</div>
    <div class="content" v-html="content"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.custom-block {
  margin: 16px 0;
  border-radius: 8px;
  padding: 16px 16px 8px;
  font-size: 16px;
  border: 1px solid var(--czj-primary-color);
  color: var(--czj-primary-color);
  font-size: 14px;
  .title {
    font-weight: 600;
    color: inherit;
    font-size: 16px;
  }
  :deep(.content) {
    font-weight: 400;
    line-height: 24px;
    color: inherit;
    code {
      font-weight: 700;
      color: inherit;
      background-color: #f6f6f7;
      padding: 3px 6px;
      font-size: 13px;
    }
    a {
      color: inherit;
      font-weight: 600;
      &:hover {
        text-decoration: underline;
      }
    }
    ul {
      margin: 1rem 0;
      li > ul {
        margin: 8px 0 0;
      }
    }
  }
}
</style>
