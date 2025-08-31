import type { MaybeRefOrGetter } from 'vue'
import type { Fn, Pausable } from './utils'
import { isRef, shallowReadonly, shallowRef, toValue, watch } from 'vue'
import { tryOnScopeDispose } from './tryOnScopeDispose'
import { isClient } from './utils'

export interface UseIntervalFnOptions {
  /**
   * Start the timer immediately
   *
   * @default true
   */
  immediate?: boolean

  /**
   * Execute the callback immediately after calling `resume`
   *
   * @default false
   */
  immediateCallback?: boolean
}

export type UseIntervalFnReturn = Pausable

/**
 * Wrapper for `setInterval` with controls
 *
 * @see https://vueuse.org/useIntervalFn
 * @param cb
 * @param interval
 * @param options
 */
export function useIntervalFn(cb: Fn, interval: MaybeRefOrGetter<number> = 1000, options: UseIntervalFnOptions = {}): UseIntervalFnReturn {
  const {
    immediate = true,
    immediateCallback = false,
  } = options

  let timer: ReturnType<typeof setInterval> | null = null
  // [!code ++]
  // 标记是否是执行状态
  const isActive = shallowRef(false)

  // [!code ++]
  // 清除定时器
  function clean() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  // [!code ++]
  // 暂停
  function pause() {
    isActive.value = false
    clean()
  }

  // [!code ++]
  // 恢复执行
  function resume() {
    const intervalValue = toValue(interval)
    if (intervalValue <= 0)
      return
    isActive.value = true
    if (immediateCallback)
      cb()
    clean()
    if (isActive.value)
      timer = setInterval(cb, intervalValue)
  }

  if (immediate && isClient)
    resume()

  // [!code ++]
  // 监听interval的变化，如果变化了就恢复执行
  if (isRef(interval) || typeof interval === 'function') {
    const stopWatch = watch(interval, () => {
      if (isActive.value && isClient)
        resume()
    })
    tryOnScopeDispose(stopWatch)
  }

  tryOnScopeDispose(pause)

  return {
    isActive: shallowReadonly(isActive),
    pause,
    resume,
  }
}
