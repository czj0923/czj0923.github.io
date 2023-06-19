<template>
  <div>
    <div id="container"></div>
  </div>
</template>
<script>
export default {
  components: {

  },
  mounted() {
    var map = new BMapGL.Map("container");          // 创建地图实例 
    var point = new BMapGL.Point(116.404, 39.915);  // 创建点坐标 
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    map.addEventListener('click', (e) => {
      console.log('点击的经纬度：' + e.latlng.lng + ', ' + e.latlng.lat);
      let obj = {
        lng: e.latlng.lng,
        lat: e.latlng.lat
      }
      this.list.push(obj)
      let arr= []
      this.list.forEach(item=>{
        arr.push(new BMapGL.Point(item.lng, item.lat))
      })
      var polyline = new BMapGL.Polyline(arr, { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 });
      map.addOverlay(polyline);
    });

  },
  data() {
    return {
      list: []
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
#container {
  width: 700px;
  height: 700px;
}
</style>