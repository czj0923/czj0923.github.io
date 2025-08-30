/* this implementation is original ported from 
https://github.com/logaretm/vue-use-web by Abdelrahman Awad */

import type { ConfigurableNavigator } from '../_configurable';
import { shallowRef } from 'vue';
import { defaultNavigator } from '../_configurable';
import { useEventListener } from './useEventListener';
import { useSupported } from './useSupported';

export interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
}

type NavigatorWithBattery = Navigator & {
  getBattery: () => Promise<BatteryManager>;
};

/**
 * Reactive Battery Status API.
 *
 * @see https://vueuse.org/useBattery
 *
 * @__NO_SIDE_EFFECTS__
 */
export function useBattery(options: ConfigurableNavigator = {}) {
  const { navigator = defaultNavigator } = options;
  // [!code ++] 
  // 定义一个包含电池状态变化相关事件的数组。
  const events = [
    'chargingchange',
    'chargingtimechange',
    'dischargingtimechange',
    'levelchange'
  ];
  // [!code ++] 
  // 检测当前浏览器是否支持 navigator.getBattery 方法。
  const isSupported = useSupported(
    () =>
      navigator &&
      'getBattery' in navigator &&
      typeof navigator.getBattery === 'function'
  );

  const charging = shallowRef(false); // 是否在充电状态
  const chargingTime = shallowRef(0); // 充满电所需时间
  const dischargingTime = shallowRef(0); // 当前电量可使用时间
  const level = shallowRef(1); // 电量水平 0-1

  let battery: BatteryManager | null;

  // [!code ++] 
  // 更新电池信息函数
  function updateBatteryInfo(this: BatteryManager) {
    charging.value = this.charging;
    chargingTime.value = this.chargingTime || 0;
    dischargingTime.value = this.dischargingTime || 0;
    level.value = this.level;
  }

  // [!code ++] 
  // 如果支持 navigator.getBattery 方法，则获取电池信息并更新状态。
  if (isSupported.value) {
    (navigator as NavigatorWithBattery).getBattery().then((_battery) => {
      battery = _battery;
      updateBatteryInfo.call(battery);
      useEventListener(battery, events, updateBatteryInfo, { passive: true });
    });
  }

  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level
  };
}

export type UseBatteryReturn = ReturnType<typeof useBattery>;
