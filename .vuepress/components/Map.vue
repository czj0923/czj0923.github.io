<template>
    <div>
        <div id="container"></div>
        <div @click="exportPath">导出线路</div>
    </div>
</template>
<script>
import { path } from "../public/path/byx"
export default {
  components: {

    },
    mounted() {
        this.map = new BMapGL.Map("container");          // 创建地图实例 
        this.map.setMapType(BMAP_SATELLITE_MAP);
        var point = new BMapGL.Point(120.4, 30.4);  // 创建点坐标 
        this.map.centerAndZoom(point, 10);                 // 初始化地图，设置中心点坐标和地图级别
        this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        let pathArr = []
        path.forEach(item => {
            pathArr.push(new BMapGL.Point(item.lng, item.lat))
        })
        this.polyline = new BMapGL.Polyline(pathArr, { strokeColor: "#f00", strokeWeight: 2, strokeOpacity: 1 });
        this.map.addOverlay(this.polyline);
        // this.polyline.enableEditing();
    },
    data() {
        return {
            polyline: null,
            map: null,
            path: []
        }
    },
    methods: {
        exportPath(){
            console.log(this.polyline.getPath());
        },
        drawPath() {
            this.map.addEventListener('click', (e) => {
                console.log('点击的经纬度：' + e.latlng.lng + ', ' + e.latlng.lat);
                let pathArr = []
                let obj = {
                    lng: e.latlng.lng,
                    lat: e.latlng.lat
                }
                var point = new BMapGL.Point(obj.lng, obj.lat);
                var marker = new BMapGL.Marker(point);        // 创建标注   
                this.map.addOverlay(marker);                   // 将标注添加到地图中

                this.path.push(obj)
                this.path.forEach(item => {
                    pathArr.push(new BMapGL.Point(item.lng, item.lat))
                })
                var polyline = new BMapGL.Polyline(pathArr, { strokeColor: "#f00", strokeWeight: 2, strokeOpacity: 1 });
                this.map.addOverlay(polyline);
            });
        }
    },
}
</script>

<style lang="scss" scoped>
#container {
    width: 100%;
    height: 600px;
}
</style>