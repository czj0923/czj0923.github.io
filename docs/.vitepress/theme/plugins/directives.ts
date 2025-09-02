import focus from '../directives/focus'

// 自定义指令
const directives = {
  focus,
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  },
}