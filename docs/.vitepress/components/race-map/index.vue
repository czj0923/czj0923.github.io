<template>
  <div>
    <div id="container"></div>
    <Modal v-model:open="visible" title="比赛详情">
      <div class="item">
        <div class="item-label">比赛名称：</div>
        <div class="item-value">{{ raceInfo.name }}</div>
      </div>
      <div class="item">
        <div class="item-label">比赛时间：</div>
        <div class="item-value">{{ raceInfo.date }}</div>
      </div>
      <div class="item">
        <div class="item-label">比赛类别：</div>
        <div class="item-value">{{ raceInfo.typeText }}</div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { raceRecord } from './record';
import { Modal } from 'ant-design-vue';
import { onMounted, ref, shallowRef } from "vue"

let map = null;
let labelMarkerList = [];

const visible = ref(false)
const raceInfo = shallowRef({})

const raceTypeMap = {
  'marathon': '全马',
  'half': '半马',
  'trail': '越野赛',
  '10k': '10公里',
  'other': '其他赛事'
}

onMounted(() => {
  // 初始化地图
  initMap();
  // 添加标注点
  addMarker();
})

const initMap = () => {
  map = new BMapGL.Map('container'); // 创建地图实例
  map.setMapType(BMAP_SATELLITE_MAP);
  var point = new BMapGL.Point(120.58235, 30.54722); // 创建点坐标
  map.centerAndZoom(point, 9); // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
  map.addControl(scaleCtrl);
  // var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
  // map.addControl(zoomCtrl);
  map.addEventListener('click', (e) => {
    let obj = {
      lng: e.latlng.lng,
      lat: e.latlng.lat
    };
    console.log(obj, 'obj');
  });
  map.addEventListener('zoomend', () => {
    if (map.getZoom() <= 8.5) {
      labelMarkerList.forEach((marker) => {
        marker.hide();
      });
    } else {
      labelMarkerList.forEach((marker) => {
        marker.show();
      });
    }
  });
}
const addMarker = () => {
  for (let i = 0; i < raceRecord.length; i++) {
    const item = raceRecord[i];
    if (!item.lng || !item.lat) continue
    var point = new BMapGL.Point(item.lng, item.lat);

    var marker = new BMapGL.Marker(point);
    marker.addEventListener('click', function () {
      raceInfo.value = {...item, typeText: raceTypeMap[item.type] }
      visible.value = true;
    });
    var label = new BMapGL.Label(item.name, {
      position: point
    });
    label.setStyle({
      color: '#fff',
      backgroundColor: '#3399ff',
      borderRadius: '50px',
      border: 'none',
      lineHeight: 1,
      padding: '4px 8px',
      transform: 'translateX(-50%)'
    });
    labelMarkerList.push(label);

    map.addOverlay(marker);
    map.addOverlay(label);
  }
}

</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 600px;
}

.item {
  display: flex;
  align-items: center;

  &-label {}

  &-value {}
}
</style>
