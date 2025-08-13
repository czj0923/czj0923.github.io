<template>
  <div ref="chart" id="my-chart"></div>
</template>

<script>
import * as echarts from 'echarts';
import { pbRecord } from './data';

let chart = null;
export default {
  name: 'pb-chart',
  data() {
    return {
      pbRecord
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const xData = this.pbRecord.map(
        (item) => `${item.year}-${item.month}-${item.day}`
      );
      const yData = this.pbRecord.map((item) => {
        const timeArr = item.time.split(':');
        return timeArr[0] * 3600 + timeArr[1] * 60 + timeArr[2] * 1;
      });

      chart = echarts.init(this.$refs.chart);
      chart.setOption({
        xAxis: {
          type: 'category',
          data: xData
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: (value) => {
              return this.sceond2time(value);
            }
          },
          min: 4800,
          max: 7200
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: (paramsArr) => {
            const params = paramsArr[0];
            const html = `<div>
              <span>用时:</span><span>${this.sceond2time(params.value)}</span>
              </div>
              <div>
              <span>日期:</span><span>${params.axisValue}</span>
              </div>
            <div>
                <span>地点:</span><span>${this.pbRecord[params.dataIndex].addr}</span>
              </div>`;
            return html;
          }
        },
        series: [
          {
            name: 'pb',
            data: yData,
            type: 'line',
            smooth: true
          }
        ]
      });
    },
    sceond2time(s) {
      const hour = (s - (s % 3600)) / 3600;
      const second = s % 60;
      const min = (s - hour * 3600 - second) / 60;
      return `${hour ? hour + ':' : ''}${min}:${second}`;
    }
  }
};
</script>

<style lang="scss" scoped>
#my-chart {
  height: 400px;
}
</style>
