import{_ as g,o as a,c as h,g as n,F as x,f as v,b as r,t as f,h as u,v as c,d}from"./app.9ba5c0b2.js";const _=typeof window<"u";function p(t,e){for(let i=0;i<e.length;i++)if(t===e[i])return!0;return!1}const y=/([\:\-\_]+(.))/g,$=/^moz([A-Z])/;function b(t){return t.replace(y,function(e,i,l,s){return s?l.toUpperCase():l}).replace($,"Moz$1")}function C(t,e){if(!!_){if(!t||!e)return null;e=b(e),e==="float"&&(e="cssFloat");try{const i=document.defaultView.getComputedStyle(t,"");return t.style[e]||i?i[e]:null}catch{return t.style[e]}}}const w=(t="")=>t.split("").reduce((e,i)=>{const l=i.charCodeAt(0);return l>=0&&l<=128?e+1:e+2},0),S=(t="",e)=>{let i=0;return t.split("").reduce((l,s)=>{const o=s.charCodeAt(0);return o>=0&&o<=128?i+=1:i+=2,i<=e?l+s:l},"")},T={name:"Ellipsis",props:{text:{type:String},height:{type:Number},lines:{type:Number},length:{type:Number},fullWidthRecognition:{type:Boolean,default:!1},autoResize:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1},transfer:{type:Boolean},theme:{validator(t){return p(t,["dark","light"])},default:"dark"},maxWidth:{type:[String,Number],default:250},placement:{validator(t){return p(t,["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"])},default:"bottom"}},data(){return{oversize:!1,computedReady:!1,computedText:""}},watch:{disabled(){this.init()},text(){this.init()},height(){this.init()}},mounted(){this.init()},methods:{init(){this.disabled||(this.computeText(),this.limitShow())},computeText(){this.oversize=!1,this.computedReady=!1,this.$nextTick(()=>{let t=this.$refs.text,e=this.$el,i=this.$refs.more,l=1e3,s=this.text,o=this.height;if(!o&&this.lines&&(o=parseInt(C(e,"lineHeight"),10)*this.lines),t){if(this.length)(this.fullWidthRecognition?w(s):s.length)>this.length&&(this.oversize=!0,i.style.display="inline-block",s=this.fullWidthRecognition?S(s,this.length):s.slice(0,this.length));else if(e.offsetHeight>o)for(this.oversize=!0,i.style.display="inline-block";e.offsetHeight>o&&l>0;)e.offsetHeight>o*3?t.innerText=s=s.substring(0,Math.floor(s.length/2)):t.innerText=s=s.substring(0,s.length-1),l--}this.computedText=s})},limitShow(){this.computedReady=!0,this.$nextTick(()=>{let t=this.$refs.text,e=this.$el;t&&(t.innerText=this.computedText,e.offsetHeight>this.height?this.$emit("on-hide"):this.$emit("on-show"))})}}},R={class:"ivu-ellipsis"},k={class:"ivu-ellipsis-more",ref:"more"},z=d("..."),B={key:1,class:"ivu-ellipsis-hidden"},E={class:"ivu-ellipsis-more",ref:"more"},H=d("...");function A(t,e,i,l,s,o){return a(),h("div",R,[n(t.$slots,"prefix",{class:"ivu-ellipsis-prefix"}),s.computedReady?(a(),h(x,{key:0},[v(` <Tooltip v-if="tooltip" :content="text" :theme="theme" :max-width="maxWidth" :placement="placement" :transfer="transfer">\r
                <span class="ivu-ellipsis-text" ref="text">{{text}}</span>\r
                <span class="ivu-ellipsis-more" ref="more" v-show="oversize"><slot name="more">...</slot></span>\r
                <slot name="suffix" class="ivu-ellipsis-suffix"></slot>\r
            </Tooltip> `),r("template",null,[r("span",{class:"ivu-ellipsis-text",ref:"text"},f(i.text),513),u(r("span",k,[n(t.$slots,"more",{},()=>[z])],512),[[c,s.oversize]]),n(t.$slots,"suffix",{class:"ivu-ellipsis-suffix"})])],64)):(a(),h("div",B,[r("span",{class:"ivu-ellipsis-text",ref:"text"},f(i.text),513),u(r("span",E,[n(t.$slots,"more",{},()=>[H])],512),[[c,s.oversize]]),n(t.$slots,"suffix",{class:"ivu-ellipsis-suffix"})]))])}const L=g(T,[["render",A],["__file","CEllipsis.vue"]]);export{L as default};
