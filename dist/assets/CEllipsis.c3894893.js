import{_ as g,o as a,c as h,g as n,F as x,f as v,e as r,t as f,h as u,v as c,d as p}from"./app.15262e06.js";const y=typeof window<"u";function d(t,e){for(let s=0;s<e.length;s++)if(t===e[s])return!0;return!1}const _=/([\:\-\_]+(.))/g,$=/^moz([A-Z])/;function b(t){return t.replace(_,function(e,s,l,i){return i?l.toUpperCase():l}).replace($,"Moz$1")}function C(t,e){if(!!y){if(!t||!e)return null;e=b(e),e==="float"&&(e="cssFloat");try{const s=document.defaultView.getComputedStyle(t,"");return t.style[e]||s?s[e]:null}catch{return t.style[e]}}}const w=(t="")=>t.split("").reduce((e,s)=>{const l=s.charCodeAt(0);return l>=0&&l<=128?e+1:e+2},0),S=(t="",e)=>{let s=0;return t.split("").reduce((l,i)=>{const o=i.charCodeAt(0);return o>=0&&o<=128?s+=1:s+=2,s<=e?l+i:l},"")},T={name:"Ellipsis",props:{text:{type:String},height:{type:Number},lines:{type:Number},length:{type:Number},fullWidthRecognition:{type:Boolean,default:!1},autoResize:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1},transfer:{type:Boolean},theme:{validator(t){return d(t,["dark","light"])},default:"dark"},maxWidth:{type:[String,Number],default:250},placement:{validator(t){return d(t,["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"])},default:"bottom"}},data(){return{oversize:!1,computedReady:!1,computedText:""}},watch:{disabled(){this.init()},text(){this.init()},height(){this.init()}},mounted(){this.init()},methods:{init(){this.disabled||(this.computeText(),this.limitShow())},computeText(){this.oversize=!1,this.computedReady=!1,this.$nextTick(()=>{let t=this.$refs.text,e=this.$el,s=this.$refs.more,l=1e3,i=this.text,o=this.height;if(!o&&this.lines&&(o=parseInt(C(e,"lineHeight"),10)*this.lines),t){if(this.length)(this.fullWidthRecognition?w(i):i.length)>this.length&&(this.oversize=!0,s.style.display="inline-block",i=this.fullWidthRecognition?S(i,this.length):i.slice(0,this.length));else if(e.offsetHeight>o)for(this.oversize=!0,s.style.display="inline-block";e.offsetHeight>o&&l>0;)e.offsetHeight>o*3?t.innerText=i=i.substring(0,Math.floor(i.length/2)):t.innerText=i=i.substring(0,i.length-1),l--}this.computedText=i})},limitShow(){this.computedReady=!0,this.$nextTick(()=>{let t=this.$refs.text,e=this.$el;t&&(t.innerText=this.computedText,e.offsetHeight>this.height?this.$emit("on-hide"):this.$emit("on-show"))})}}},R={class:"ivu-ellipsis"},k={class:"ivu-ellipsis-more",ref:"more"},z={key:1,class:"ivu-ellipsis-hidden"},B={class:"ivu-ellipsis-more",ref:"more"};function E(t,e,s,l,i,o){return a(),h("div",R,[n(t.$slots,"prefix",{class:"ivu-ellipsis-prefix"}),i.computedReady?(a(),h(x,{key:0},[v(` <Tooltip v-if="tooltip" :content="text" :theme="theme" :max-width="maxWidth" :placement="placement" :transfer="transfer">
                <span class="ivu-ellipsis-text" ref="text">{{text}}</span>
                <span class="ivu-ellipsis-more" ref="more" v-show="oversize"><slot name="more">...</slot></span>
                <slot name="suffix" class="ivu-ellipsis-suffix"></slot>
            </Tooltip> `),r("template",null,[r("span",{class:"ivu-ellipsis-text",ref:"text"},f(s.text),513),u(r("span",k,[n(t.$slots,"more",{},()=>[p("...")])],512),[[c,i.oversize]]),n(t.$slots,"suffix",{class:"ivu-ellipsis-suffix"})])],64)):(a(),h("div",z,[r("span",{class:"ivu-ellipsis-text",ref:"text"},f(s.text),513),u(r("span",B,[n(t.$slots,"more",{},()=>[p("...")])],512),[[c,i.oversize]]),n(t.$slots,"suffix",{class:"ivu-ellipsis-suffix"})]))])}const A=g(T,[["render",E],["__file","CEllipsis.vue"]]);export{A as default};
