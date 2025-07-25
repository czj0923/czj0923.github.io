import{_ as s,c as e,d as a,o as i}from"./app-DnYAzZKk.js";const l={};function r(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h2 id="防抖debounce" tabindex="-1"><a class="header-anchor" href="#防抖debounce"><span>防抖debounce</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function debounce(fn,delay){</span>
<span class="line">    let timer = null</span>
<span class="line">    return function(){</span>
<span class="line">        if(timer){</span>
<span class="line">            clearTimeout(timer)</span>
<span class="line">        }</span>
<span class="line">        timer=setTimeout(()=&gt;{</span>
<span class="line">            fn.apply(this,arguments)</span>
<span class="line">        },delay)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节流throttle" tabindex="-1"><a class="header-anchor" href="#节流throttle"><span>节流throttle</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function throttle(fn,delay){</span>
<span class="line">    let timer = null</span>
<span class="line">    return function(){</span>
<span class="line">        if(timer){</span>
<span class="line">            return false</span>
<span class="line">        }</span>
<span class="line">        timer=setTimeout(()=&gt;{</span>
<span class="line">            fn.apply(this,arguments)</span>
<span class="line">            timer = null</span>
<span class="line">        },delay)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="new的过程" tabindex="-1"><a class="header-anchor" href="#new的过程"><span>new的过程</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function _new(fn,...args){</span>
<span class="line">    let obj = {}</span>
<span class="line">    Object.setPrototypeOf(obj,fn.prototype)</span>
<span class="line">    let res = fn.apply(obj,args)</span>
<span class="line">    return res instanceof Object ? res : obj</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="深拷贝deepclone" tabindex="-1"><a class="header-anchor" href="#深拷贝deepclone"><span>深拷贝deepClone</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function deepClone(target,cache=new WeakMap()){</span>
<span class="line">    if(!(target instanceof Object)) return target</span>
<span class="line">    if(cache.get(target)){</span>
<span class="line">        return cache.get(target)</span>
<span class="line">    }</span>
<span class="line">    if(target instanceof Date){</span>
<span class="line">        return new Date(target)</span>
<span class="line">    }</span>
<span class="line">    if(target instanceof Function){</span>
<span class="line">        return function(){</span>
<span class="line">            return target.apply(this,arguments)</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    if(target instanceof RegExp){</span>
<span class="line">        return new RegExp(target)</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    let result = Array.isArray(target) ? [] : {}</span>
<span class="line">    cache.set(target,result)</span>
<span class="line">    </span>
<span class="line">    for(let key in target){</span>
<span class="line">        if(target.hasOwnProperty(key)){</span>
<span class="line">            result[key] = deepClone(target[key],cache)</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return result</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof"><span>instanceof</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function myInstanceof(L,R){</span>
<span class="line">    if(Object(L) !== L) return false</span>
<span class="line">    let proto = Object.getPropertyOf(L)</span>
<span class="line">    while(proto){</span>
<span class="line">        if(proto === R.prototype){</span>
<span class="line">            return true</span>
<span class="line">        }</span>
<span class="line">        proto = Object.getPropertyOf(proto)</span>
<span class="line">    }</span>
<span class="line">    return false</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all"><span>promise.all</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Promise.myAll = function(promiseList){</span>
<span class="line">    let pArr = Array.from(promiseList)</span>
<span class="line">    let result=[]</span>
<span class="line">    let count = 0</span>
<span class="line">    return new Promise((resolve,reject)=&gt;{</span>
<span class="line">        for(let i = 0;i&lt;pArr.length;i++){</span>
<span class="line">            Promise.resolve(pArr[i]).then(res=&gt;{</span>
<span class="line">                result[i] = res</span>
<span class="line">                count++</span>
<span class="line">                if(count === pArr.length){</span>
<span class="line">                    resolve(reesult)</span>
<span class="line">                }</span>
<span class="line">            }).catch(e=&gt;{reject(e)})</span>
<span class="line">        }</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-race" tabindex="-1"><a class="header-anchor" href="#promise-race"><span>promise.race</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Promise.myRace = function(promiseList){</span>
<span class="line">    let pArr = Array.from(promiseList)</span>
<span class="line">    let isUse = false</span>
<span class="line">    return new Promise((resolve,reject)=&gt;{</span>
<span class="line">        for(let i = 0;i&lt;pArr.length;i++){</span>
<span class="line">            Promise.resolve(pArr[i]).then(res=&gt;{</span>
<span class="line">                if(!isUse){</span>
<span class="line">                    isUse=true</span>
<span class="line">                    resolve(res)</span>
<span class="line">                }</span>
<span class="line">            }).catch(e=&gt;{</span>
<span class="line">                if(!isUse){</span>
<span class="line">                    isUse=true</span>
<span class="line">                    reject(e)</span>
<span class="line">                }</span>
<span class="line">            })</span>
<span class="line">        }</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="call" tabindex="-1"><a class="header-anchor" href="#call"><span>call</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Function.prototype.mycall=function(ctx,...args){</span>
<span class="line">    let _ctx = ctx == undefined ? window : ctx</span>
<span class="line">    let fn = Symbol(&#39;fn&#39;)</span>
<span class="line">    _ctx.fn = this</span>
<span class="line">    let result = _ctx.fn(...args)</span>
<span class="line">    delete _ctx.fn</span>
<span class="line">    </span>
<span class="line">    return result</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply"><span>apply</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Function.prototype.myapply=function(ctx,arr){</span>
<span class="line">    let _ctx = ctx == undefined ? window : ctx</span>
<span class="line">    let fn = Symbol(&#39;fn&#39;)</span>
<span class="line">    _ctx.fn = this</span>
<span class="line">    let result = _ctx.fn(...arr)</span>
<span class="line">    delete _ctx.fn</span>
<span class="line">    </span>
<span class="line">    return result</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const d=s(l,[["render",r]]),p=JSON.parse('{"path":"/interview/write.html","title":"手写题","lang":"en-US","frontmatter":{"title":"手写题","date":"2022/07/07"},"headers":[{"level":2,"title":"防抖debounce","slug":"防抖debounce","link":"#防抖debounce","children":[]},{"level":2,"title":"节流throttle","slug":"节流throttle","link":"#节流throttle","children":[]},{"level":2,"title":"new的过程","slug":"new的过程","link":"#new的过程","children":[]},{"level":2,"title":"深拷贝deepClone","slug":"深拷贝deepclone","link":"#深拷贝deepclone","children":[]},{"level":2,"title":"instanceof","slug":"instanceof","link":"#instanceof","children":[]},{"level":2,"title":"promise.all","slug":"promise-all","link":"#promise-all","children":[]},{"level":2,"title":"promise.race","slug":"promise-race","link":"#promise-race","children":[]},{"level":2,"title":"call","slug":"call","link":"#call","children":[]},{"level":2,"title":"apply","slug":"apply","link":"#apply","children":[]}],"git":{"createdTime":1682689223000,"updatedTime":1684245099000,"contributors":[{"name":"Cao Zhijie","email":"1051029537@qq.com","commits":3}]},"filePathRelative":"interview/write.md"}');export{d as comp,p as data};
