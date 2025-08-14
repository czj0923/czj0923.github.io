<template>
  <div>
    <div id="container"></div>
    <Modal v-model:visible="visible" title="弹窗">
      <p>111</p>
    </Modal>
  </div>
</template>
<script>
import { raceRecord } from './record';
import { Modal } from 'ant-design-vue';
let map = null;
let labelMarkerList = [];
export default {
  name: 'race-map',
  components: {
    Modal
  },
  mounted() {
    // 初始化地图
    this.initMap();
    // 添加标注点
    this.addMarker();
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    initMap() {
      map = new BMapGL.Map('container'); // 创建地图实例
      map.setMapType(BMAP_SATELLITE_MAP);
      var point = new BMapGL.Point(120.58235, 30.54722); // 创建点坐标
      map.centerAndZoom(point, 9); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
      map.addControl(scaleCtrl);
      var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
      map.addControl(zoomCtrl);
      map.addEventListener('click', (e) => {
        return
        this.visible = true;
        let obj = {
          lng: e.latlng.lng,
          lat: e.latlng.lat
        };
        console.log(obj, 'obj');
      });
      map.addEventListener('zoomend', () => {
        console.log(map.getZoom());
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
    },
    addMarker() {
      // function createDom() {
      //   const p = document.createElement('div');
      //   p.style.height = '4px';
      //   p.style.width = '4px';
      //   p.style.backgroundColor = '#f00';
      //   p.style.borderRadius = '50%';
      //   return p;
      // }
      raceRecord.forEach((item) => {
        var point = new BMapGL.Point(item.lng, item.lat);

        var marker = new BMapGL.Marker(point);

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
        label.addEventListener('click', function (e) {
          console.log(e);
        });
        labelMarkerList.push(label);

        map.addOverlay(marker);
        map.addOverlay(label);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 600px;
}
</style>
