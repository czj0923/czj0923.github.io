import{_ as r,o as e,c as o,d,t as c,F as l,i as _,b as t}from"./app.2204023e.js";const p={props:{type:{type:String,required:!0}},computed:{curNav(){return this[`navList${this.type}`]?this[`navList${this.type}`]:this.navList1}},data(){return{navList1:[{img:"https://caniuse.com/img/favicon-128.png",title:"Can I Use",desc:"\u524D\u7AEF API \u517C\u5BB9\u6027\u67E5\u8BE2",url:"https://caniuse.com"},{img:"https://tinypng.com/images/apple-touch-icon.png",title:"TinyPNG",desc:"\u5728\u7EBF\u56FE\u7247\u538B\u7F29\u5DE5\u5177",url:"https://tinypng.com"},{img:"https://devtool.tech/logo.svg",title:"\u5F00\u53D1\u8005\u6B66\u5668\u5E93",desc:"\u5F00\u53D1\u8005\u6B66\u5668\u5E93\uFF0C\u505A\u5F00\u53D1\u8005\u6700\u4E13\u4E1A\u6700\u597D\u7528\u7684\u4E13\u4E1A\u5DE5\u5177\u7BB1",url:"https://devtool.tech"},{img:"https://tool.lu/favicon.ico",title:"\u5728\u7EBF\u5DE5\u5177",desc:"\u5F00\u53D1\u4EBA\u5458\u7684\u5DE5\u5177\u7BB1",url:"https://tool.lu"},{img:"https://tool.lu/favicon.ico",title:"Json \u4E2D\u6587\u7F51",desc:"JSON \u5728\u7EBF\u89E3\u6790\u53CA\u683C\u5F0F\u5316\u9A8C\u8BC1",url:"https://www.json.cn"}]}}},u={class:"nav-group"},h=["href"],v={class:"box"},g={class:"box-header"},m={class:"img"},f=["src"],y={class:"title"},N={class:"desc"};function L(k,x,i,b,$,n){return e(),o("div",u,[d("\u5BFC\u822A\u5185\u5BB9"+c(i.type)+" ",1),(e(!0),o(l,null,_(n.curNav,(s,a)=>(e(),o("a",{href:s.url,target:"_blank",key:a},[t("div",v,[t("div",g,[t("div",m,[t("img",{src:s.img},null,8,f)]),t("div",y,c(s.title),1)]),t("div",N,c(s.desc),1)])],8,h))),128))])}const B=r(p,[["render",L],["__scopeId","data-v-d746bd6c"],["__file","NavLink.vue"]]);export{B as default};