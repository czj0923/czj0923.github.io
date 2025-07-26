<template>
  <div class="charts-wrap">
    <a-tabs v-model:activeKey="dataType">
      <a-tab-pane :key="1" tab="年"></a-tab-pane>
      <a-tab-pane :key="2" tab="月"></a-tab-pane>
    </a-tabs>
    <div class="select-wrap row">
      <div class="row" style="margin-right: 20px">
        <span>年：</span>
        <a-select v-model:value="year" :options="yearOptions"></a-select>
      </div>
      <div class="row" v-if="dataType == 2">
        <span>月：</span>
        <a-select v-model:value="month" :options="monthOptions"></a-select>
      </div>
    </div>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { runRecord, runRecordArray } from './enum/run-record.ts';
// import { initDayArray } from '../utils/index';
import { Select, Tabs, TabPane } from 'ant-design-vue';
let chart = null;

export default {
  name: 'RunRecordChart',
  components: {
    ASelect: Select,
    ATabs: Tabs,
    ATabPane: TabPane
  },
  data() {
    return {
      runRecord: Object.freeze(runRecord),
      runRecordArray: Object.freeze(runRecordArray),
      dataType: 1,
      year: 2024,
      month: 7,
      yearOptions: [
        { label: 2024, value: 2024 },
        { label: 2023, value: 2023 },
        { label: 2022, value: 2022 },
        { label: 2021, value: 2021 },
        { label: 2020, value: 2020 }
      ],
      monthOptions: [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
        { label: 4, value: 4 },
        { label: 5, value: 5 },
        { label: 6, value: 6 },
        { label: 7, value: 7 },
        { label: 8, value: 8 },
        { label: 9, value: 9 },
        { label: 10, value: 10 },
        { label: 11, value: 11 },
        { label: 12, value: 12 }
      ]
    };
  },
  watch: {
    year: {
      handler() {
        if (this.dataType == 1) {
          this.handlerYear();
        } else {
          this.handlerMonth();
        }
      }
    },
    month: {
      handler() {
        this.handlerMonth();
      }
    },
    dataType: {
      handler() {
        if (this.dataType == 1) {
          this.handlerYear();
        } else {
          const lastItem = this.runRecordArray[this.runRecordArray.length - 1];
          this.month = lastItem.month;
          this.year = lastItem.year;
          this.handlerMonth();
        }
      }
    }
  },
  mounted() {
    const lastItem = this.runRecordArray[this.runRecordArray.length - 1];
    this.month = lastItem.month;
    this.year = lastItem.year;

    this.handlerYear();
    // initDayArray()
  },
  methods: {
    handlerYear() {
      const xData = Object.keys(this.runRecord[this.year]).map(
        (item) => `${item}月`
      );
      const yData = Object.values(this.runRecord[this.year]);
      this.initChart(xData, yData, `${this.year}年`);
    },
    handlerMonth() {
      const filterList = this.runRecordArray.filter((item) => {
        return item.month == this.month && item.year == this.year;
      });
      const xData = filterList.map((item) => item.day);
      const yData = filterList.map((item) => {
        return { value: item.distance, extra: item.extra };
      });
      this.initChart(xData, yData, `${this.year}年${this.month}月`);
    },
    initChart(xData, yData, title) {
      chart = echarts.init(this.$refs.chart);
      chart.setOption({
        title: {
          text: title
        },
        grid: {
          right: 0,
          left: 10,
          bottom: 0,
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          data: xData
        },
        yAxis: {},
        series: [
          {
            name: '跑量',
            type: 'bar',
            data: yData,
            label: {
              show: true,
              position: 'top',
              formatter: (params) => {
                return params.data.extra || params.data.value;
              },
              color: '#f00'
            },
            itemStyle: {
              borderRadius: [4, 4, 0, 0],
              color: '#99CC33'
            },
            markLine: {
              silent: true,
              data: [
                {
                  name: '平均线',
                  type: 'average'
                }
              ]
            }
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;
}

.charts-wrap {
  height: 400px;
  position: relative;

  .select-wrap {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9;

    .ant-select {}
  }

  .chart {
    height: 100%;
  }
}
</style>
