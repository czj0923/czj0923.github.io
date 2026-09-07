<template>
  <div class="travel-map">
    <div class="map-panel">
      <div class="legend-chips">
        <span
          v-for="item in levels"
          :key="item.label"
          class="chip"
          :style="{ backgroundColor: item.color, color: item.textColor }"
        >
          {{ item.label }}
        </span>
      </div>
    </div>
    <!-- 百度地图容器 -->
    <div id="travelMapContainer" class="map-container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// 色卡分级：颜色越深，探索次数越多
const levels = [
  { label: '小于3次', color: '#fcd7e3', textColor: '#b3125f' },
  { label: '3-5次', color: '#f9b2cf', textColor: '#b3125f' },
  { label: '5-10次', color: '#f58cba', textColor: '#ffffff' },
  { label: '大于10次', color: '#f166a3', textColor: '#ffffff' },
  { label: '常住', color: '#e02a7d', textColor: '#ffffff' }
];

// 城市探索记录（按实际情况修改）
// name：百度地图行政区划名称
// times：探索次数；resident：是否为常住城市
const cityList = [
  { name: '上海市', times: 2 },
  { name: '杭州市', times: 999 },
  { name: '南京市', times: 1 },
  { name: '苏州市', times: 10 },
  { name: '南昌市', times: 2 },
  { name: '嘉兴市', times: 999, resident: true },
  { name: '金华市', times: 3 },
  { name: '衢州市', times: 3 },
  { name: '景德镇市', times: 1 },
  { name: '萍乡市', times: 1 },
  { name: '上饶市', times: 1 },
  { name: '抚州市', times: 1 },
  { name: '舟山市', times: 1 },
  { name: '温州市', times: 1 },
  { name: '丽水市', times: 1 },
  { name: '台州市', times: 1 },
  { name: '宁波市', times: 1 },
  { name: '绍兴市', times: 10 },
  { name: '湖州市', times: 10 },
  { name: '南平市', times: 1 },
  { name: '泰州市', times: 1 },
  { name: '无锡市', times: 2 },
  { name: '黄山市', times: 2 },
  { name: '宜春市', times: 1 },
  { name: '宣城市', times: 1 },
  { name: '常州市', times: 1 },
  { name: '鹰潭市', times: 1 },
];

// 根据探索次数返回色卡等级
const getLevelIndex = (city) => {
  if (city.resident) return 4;
  if (city.times >= 10) return 3;
  if (city.times >= 5) return 2;
  if (city.times >= 3) return 1;
  return 0;
};

let map = null;

onMounted(() => {
  // 等待全局百度地图脚本（config.mts 中引入）加载完成
  const start = () => {
    if (window.BMapGL) {
      initMap();
      drawRegions();
    } else {
      setTimeout(start, 200);
    }
  };
  start();
});

const initMap = () => {
  map = new BMapGL.Map('travelMapContainer');
  // 默认视角：常住城市嘉兴
  map.centerAndZoom(new BMapGL.Point(120.7555, 30.7462), 8);
  map.enableScrollWheelZoom(true);
};

// 名称归一化（去掉“市/省”后缀），用于点击事件与城市数据匹配
const normalizeName = (name = '') => name.replace(/(市|省|壮族自治区|回族自治区|维吾尔自治区|自治区|特别行政区)$/, '');

const openCityInfo = (city, latlng) => {
  const desc = city.resident ? '常住城市' : `已探索 ${city.times} 次`;
  const info = new BMapGL.InfoWindow(
    `<div style="padding:4px 8px;font-size:14px;min-width:120px;">
       <strong style="color:#d61f69;font-size:15px;">${city.name}</strong>
       <div style="color:#666;margin-top:6px;">${desc}</div>
     </div>`,
    { width: 160 }
  );
  map.openInfoWindow(info, latlng);
};

const drawRegions = () => {
  // DistrictLayer 是行政区划图层：数据随地图矢量服务加载，
  // 一个图层只能使用统一颜色，因此按色卡等级把城市分组，每组创建一个图层。
  // 相比 Boundary 逐个城市请求边界，图层方式没有 QPS 限制，不会再出现空结果。
  levels.forEach((level, index) => {
    const cities = cityList.filter((city) => getLevelIndex(city) === index);
    if (!cities.length) return;

    const layer = new BMapGL.DistrictLayer({
      name: cities.map((city) => city.name),
      fillColor: level.color,
      fillOpacity: 0.6,
      strokeColor: level.color,
      strokeWeight: 1,
      strokeOpacity: 0.9
    });
    map.addDistrictLayer(layer);

    // 点击区域展示城市信息
    layer.addEventListener('click', (e) => {
      const target = normalizeName(e?.name || e?.adminDistrict?.name || '');
      const city = cities.find((item) => normalizeName(item.name) === target);
      if (city && e.latlng) {
        openCityInfo(city, e.latlng);
      }
    });
  });
};
</script>

<style lang="scss" scoped>
.travel-map {
  position: relative;

  .map-panel {
    padding: 12px 14px;
    border-radius: 8px;

    .legend-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .chip {
        padding: 4px 10px;
        font-size: 12px;
        line-height: 1.4;
        border-radius: 6px;
        white-space: nowrap;
      }
    }
  }

  .map-container {
    width: 100%;
    height: 640px;
    border-radius: 8px;
    overflow: hidden;
  }
}
</style>
