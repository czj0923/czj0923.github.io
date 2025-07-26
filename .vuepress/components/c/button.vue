<template>
  <button class="c-button" :class="[
    type ? `c-button--${type}` : '',
    size ? `c-button--${size}` : '',
    {
      'is-disabled': disabled,
      'is-round': round,
      'is-circle': circle,
      'is-loading': loading,
      'is-plain': plain
    }
  ]" :disabled="disabled" @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    icon: {
      type: String
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      validator(value) {
        return ['medium', 'small', 'mini'].includes(value);
      }
    },
    disabled: Boolean, //是否是禁用状态
    round: {
      //是否是圆角
      type: Boolean,
      default: false
    },
    circle: {
      //是否是圆形按钮
      type: Boolean,
      default: false
    },
    loading: {
      //是否是加载
      type: Boolean,
      default: false
    },
    plain: {
      //是否是朴素
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  created() {
    //console.log(this);
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="scss" scoped>
.c-button {
  outline: none;
  border: none;
  border: 1px solid #dcdfe6;
  background-color: #fff;
  color: #606266;
  padding: 12px 20px;
  border-radius: 4px;
  transition: 0.1s;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;

  &.c-button {
    &--default {

      //background-color: grey;
      &:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
      }

      &:active {
        color: #3a8ee6;
        border-color: #3a8ee6;
      }
    }

    &--primary {
      background-color: #409eff;
      border-color: #409eff;
      color: #fff;

      &:hover {
        background-color: #66b1ff;
        border-color: #66b1ff;
      }

      &:active {
        background-color: #3a8ee6;
        border-color: #3a8ee6;
      }
    }

    &--success {
      background-color: #67c23a;
      border-color: #67c23a;
      color: #fff;

      &:hover {
        background-color: #85ce61;
        border-color: #85ce61;
      }

      &:active {
        background-color: #5daf34;
        border-color: #5daf34;
      }
    }

    &--warning {
      background-color: #e6a23c;
      border-color: #e6a23c;
      color: #fff;

      &:hover {
        background-color: #ebb563;
        border-color: #ebb563;
      }

      &:active {
        background-color: #cf9236;
        border-color: #cf9236;
      }
    }

    &--danger {
      background-color: #f56c6c;
      border-color: #f56c6c;
      color: #fff;

      &:hover {
        background-color: #f78989;
        border-color: #f78989;
      }

      &:active {
        background-color: #dd6161;
        border-color: #dd6161;
      }
    }

    &--info {
      background-color: #909399;
      border-color: #909399;
      color: #fff;

      &:hover {
        background-color: #a6a9ad;
        border-color: #a6a9ad;
      }

      &:active {
        background-color: #82848a;
        border-color: #82848a;
      }
    }

    &--text {
      background: 0;
      padding-left: 0;
      padding-right: 0;
      border-color: transparent;
      color: #409eff;

      &:hover {
        color: #66b1ff;
      }

      &:active {
        color: #3a8ee6;
      }
    }

    &--error {
      background-color: red;
    }

    &.is-round {
      border-radius: 20px;
      padding: 12px 23px;
    }

    &.is-circle {
      padding: 12px;
      border-radius: 50%;
    }

    &.c-button--medium {
      padding: 10px 20px;
    }

    &.c-button--small {
      padding: 9px 15px;
      font-size: 12px;
      border-radius: 3px;
    }

    &.c-button--mini {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
  }

  &+.c-button {
    margin-left: 12px;
  }
}
</style>
