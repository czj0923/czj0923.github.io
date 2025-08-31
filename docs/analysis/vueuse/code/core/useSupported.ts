import { computed } from 'vue'
import { useMounted } from './useMounted'

/* @__NO_SIDE_EFFECTS__ */
export function useSupported(callback: () => unknown) {
  // [!code ++]
  // 调用 useMounted() 钩子获取组件的挂载状态，并将其存储在 isMounted 中
  const isMounted = useMounted()

  return computed(() => {
    // [!code ++]
    // 通过访问 isMounted.value 来确保 isMounted 这个响应式引用被触发
    // to trigger the ref
    // eslint-disable-next-line ts/no-unused-expressions
    isMounted.value
    return Boolean(callback())
  })
}

export type UseSupportedReturn = ReturnType<typeof useSupported>
