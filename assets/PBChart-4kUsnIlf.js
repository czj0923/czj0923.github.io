import{i as o,p as i}from"./run-record-DA6eC6ts.js";import{_ as p,c,o as d}from"./app-BhyDz4z2.js";let n=null;const m={name:"PBChart",data(){return{pbRecord:i}},mounted(){this.initChart()},methods:{initChart(){const e=this.pbRecord.map(t=>`${t.year}-${t.month}-${t.day}`),s=this.pbRecord.map(t=>{const a=t.time.split(":");return a[0]*3600+a[1]*60+a[2]*1});n=o(this.$refs.chart),n.setOption({xAxis:{type:"category",data:e},yAxis:{type:"value",axisLabel:{formatter:t=>this.sceond2time(t)},min:4800,max:7200},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:t=>{const a=t[0];return`<div>
              <span>用时:</span><span>${this.sceond2time(a.value)}</span>
              </div>
              <div>
              <span>日期:</span><span>${a.axisValue}</span>
              </div>
            <div>
                <span>地点:</span><span>${this.pbRecord[a.dataIndex].addr}</span>
              </div>`}},series:[{name:"pb",data:s,type:"line",smooth:!0}]})},sceond2time(e){const s=(e-e%3600)/3600,t=e%60,a=(e-s*3600-t)/60;return`${s?s+":":""}${a}:${t}`}}},h={ref:"chart",id:"my-chart"};function l(e,s,t,a,r,u){return d(),c("div",h,null,512)}const _=p(m,[["render",l],["__scopeId","data-v-03bcb557"]]);export{_ as default};
