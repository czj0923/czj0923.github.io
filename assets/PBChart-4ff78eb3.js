import{p as o,i}from"./run-record-b4b32f86.js";import{_ as p,o as c,c as d}from"./app-81297fa3.js";let n=null;const h={name:"PBChart",data(){return{pbRecord:o}},mounted(){this.initChart()},methods:{initChart(){const e=this.pbRecord.map(t=>`${t.year}-${t.month}-${t.day}`),s=this.pbRecord.map(t=>{const a=t.time.split(":");return a[0]*3600+a[1]*60+a[2]*1});n=i(this.$refs.chart),n.setOption({xAxis:{type:"category",data:e},yAxis:{type:"value",axisLabel:{formatter:t=>this.sceond2time(t)},min:4800,max:7200},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:t=>{const a=t[0];return`<div>
              <span>用时:</span><span>${this.sceond2time(a.value)}</span>
              </div>
              <div>
              <span>日期:</span><span>${a.axisValue}</span>
              </div>
            <div>
                <span>地点:</span><span>${this.pbRecord[a.dataIndex].addr}</span>
              </div>`}},series:[{name:"pb",data:s,type:"line",smooth:!0}]})},sceond2time(e){const s=(e-e%3600)/3600,t=e%60,a=(e-s*3600-t)/60;return`${s?s+":":""}${a}:${t}`}}},m={ref:"chart",id:"my-chart"};function _(e,s,t,a,r,l){return c(),d("div",m,null,512)}const $=p(h,[["render",_],["__scopeId","data-v-e807711a"],["__file","PBChart.vue"]]);export{$ as default};
