import {
  getCurrentInstance,
  // eslint-disable-next-line no-restricted-imports
  onMounted,
  shallowRef,
} from 'vue'

//[!code ++]
// 在组件挂载后将 isMounted.value 设置为 true。
/**
 * Mounted state in ref.
 *
 * @see https://vueuse.org/useMounted
 *
 * @__NO_SIDE_EFFECTS__
 */
export function useMounted() {
  const isMounted = shallowRef(false)

  const instance = getCurrentInstance()
  if (instance) {
    onMounted(() => {
      isMounted.value = true
    }, instance)
  }

  return isMounted
}
