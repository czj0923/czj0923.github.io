import{_,o,c as l,F as r,j as u,i as p,n as d,b as t,t as i}from"./app-179d250e.js";const B={data(){return{last:"last",notlast:"notlast",listbox:"listbox",allList:{1:[{title:"2017年11月20日",content:"首次5公里 37:30",content2:"中国计量大学北操场"},{title:"2020年9月8日",content:"PB 28:51"},{title:"2020年9月20日",content:"PB 28:22"},{title:"2020年9月21日",content:"PB 27:16"},{title:"2020年10月1日",content:"10公里前5公里 PB 27:16",content2:"凤凰湖"},{title:"2020年10月2日",content:"PB 24:44",content2:"中国计量大学北操场"},{title:"2020年10月20日",content:"PB 24:03",content2:"中国计量大学北操场"},{title:"2020年10月23日",content:"PB 23:32",content2:"中国计量大学北操场"},{title:"2021年12月10日",content:"PB 22:23",content2:"余杭塘河绿道"}],2:[{title:"2020年10月1日",content:"首次10公里 57:31",content2:"凤凰湖"},{title:"2020年10月9日",content:"PB 55:00",content2:"中国计量大学北操场"},{title:"2020年10月19日",content:"PB 51:40",content2:"中国计量大学北操场"},{title:"2020年10月24日",content:"PB 50:33",content2:"中国计量大学北操场"},{title:"2021年11月27日",content:"PB 48:25",content2:"自测"},{title:"2023年4月25日",content:"PB 47:51",content2:"自测"},{title:"2023年4月30日",content:"半马的10公里分段 PB 47:09",content2:"龙游马拉松"},{title:"2023年5月20日",content:"PB 45:19",content2:"嘉善大云中国十公里精英赛"}],3:[{title:"2021年10月30日",content:"首次半马 01:53:43",content2:"余杭塘河绿道"},{title:"2022年11月05日",content:"PB 01:52:21",content2:"桐乡"},{title:"2022年11月26日",content:"PB 01:48:30",content2:"桐乡"},{title:"2023年04月30日",content:"PB 01:44:15",content2:"龙游马拉松"}]}}},computed:{_space(){return"height:"+this.space},list(){return this.allList[this.type]||[]}},props:{type:{type:String,default:1},space:{type:String,default:"100px"},uni_icon:{type:String,default:"/avatar.jpg"}}},P={id:"uni_timeline"},f=["src"],h={class:"title"},m={class:"content"};function y(g,v,a,x,n,e){return o(),l("div",P,[(o(!0),l(r,null,u(e.list,(c,s)=>(o(),l("div",{style:p(e._space),key:s,class:d([e.list.length==s+1?n.last:n.notlast,n.listbox])},[t("p",null,[t("img",{src:a.uni_icon,class:"icon"},null,8,f),t("span",h,i(c.title),1)]),t("div",m,[t("div",null,i(c.content),1),t("div",null,i(c.content2),1)])],6))),128))])}const L=_(B,[["render",y],["__scopeId","data-v-f1080ab6"],["__file","TimeLine2.vue"]]);export{L as default};