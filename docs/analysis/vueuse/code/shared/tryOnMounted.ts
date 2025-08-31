import type { Fn } from './utils'
// eslint-disable-next-line no-restricted-imports
import { nextTick, onMounted } from 'vue'
import { getLifeCycleTarget } from './utils'

// [!code ++]
// 在组件挂载完成后执行函数,如果不是vue组件，则在下一次tick中执行函数  
// [!code ++]
// 这在编写可复用或跨环境的代码时特别有用
/**
 * Call onMounted() if it's inside a component lifecycle, if not, just call the function
 *
 * @param fn
 * @param sync if set to false, it will run in the nextTick() of Vue
 * @param target
 */
export function tryOnMounted(fn: Fn, sync = true, target?: any) {
  const instance = getLifeCycleTarget(target)
  if (instance)
    onMounted(fn, target)
  else if (sync)
    fn()
  else
    nextTick(fn)
}
