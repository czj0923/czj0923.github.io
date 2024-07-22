<template>
  <div id="my-chart"></div>
</template>

<script>
import * as echarts from 'echarts';
import { runRecord } from "./constant/run-record.ts"
import {initDayArray} from "./utils/index"

export default {
  name: "RunRecordChart",
  data() {
    return {
      runRecord: Object.freeze(runRecord),
      year: 2024,
      month: 0,
      chart: null
    }
  },
  watch: {
    year: {
      handler(v) {
        const xData = Object.keys(this.runRecord[v]).map(item=>`${item}月`)
        const yData = Object.values(this.runRecord[v])
        this.initChart(xData, yData)
      }
    }
  },
  mounted() {
    const xData = Object.keys(this.runRecord[this.year]).map(item=>`${item}月`)
    const yData = Object.values(this.runRecord[this.year])
    this.initChart(xData, yData)
    initDayArray()
  },
  methods: {
    initChart(xData, yData) {
      this.chart = echarts.init(document.getElementById('my-chart'));
      this.chart.setOption({
        title: {
          text: '统计图'
        },
        tooltip: {},
        xAxis: {
          data: xData
        },
        yAxis: {},
        series: [
          {
            name: '跑量',
            type: 'bar',
            data: yData
          }
        ]
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#my-chart {
  height: 400px;
}
</style>