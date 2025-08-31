import { isClient } from '@vueuse/shared'

export interface ConfigurableWindow {
  // [!code ++] 
  // 指定一个自定义的`window`实例，例如在处理iframe或测试环境时。
  window?: Window
}

export interface ConfigurableDocument {
  // [!code ++] 
  // 指定一个自定义的`document`实例，例如在处理iframe或测试环境时。
  document?: Document
}

export interface ConfigurableDocumentOrShadowRoot {
  // [!code ++] 
  // 指定一个自定义的`document`实例或者一个 shadow root, 例如在处理iframe或测试环境时。
  document?: DocumentOrShadowRoot
}

export interface ConfigurableNavigator {
  // [!code ++] 
  // 指定一个自定义的`navigator`实例，例如在处理iframe或测试环境时。
  navigator?: Navigator
}

export interface ConfigurableLocation {
  // [!code ++] 
  // 指定一个自定义的`location`实例，例如在处理iframe或测试环境时。
  location?: Location
}
// [!code ++] 
// 一些默认实现，判断是否是客户端环境，如果是则使用默认的 window、document、navigator 和 location 对象。
export const defaultWindow = /* #__PURE__ */ isClient ? window : undefined
export const defaultDocument = /* #__PURE__ */ isClient ? window.document : undefined
export const defaultNavigator = /* #__PURE__ */ isClient ? window.navigator : undefined
export const defaultLocation = /* #__PURE__ */ isClient ? window.location : undefined

export interface ConfigurableDeepRefs<D extends boolean> {
  /**
   * 返回深度引用而非浅层引用。
   *
   * @default true - will be changed to `false` by default in the next major
   */
  deepRefs?: D
}
