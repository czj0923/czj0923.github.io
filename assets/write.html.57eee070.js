import{_ as e,o as n,c as i,e as s}from"./app.513d9caf.js";const l={},r=s(`<h2 id="\u9632\u6296debounce" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296debounce" aria-hidden="true">#</a> \u9632\u6296debounce</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function debounce(fn,delay){
    let timer = null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=&gt;{
            fn.apply(this,arguments)
        },delay)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8282\u6D41throttle" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41throttle" aria-hidden="true">#</a> \u8282\u6D41throttle</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function throttle(fn,delay){
    let timer = null
    return function(){
        if(timer){
            return false
        }
        timer=setTimeout(()=&gt;{
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="new\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#new\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> new\u7684\u8FC7\u7A0B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function _new(fn,...args){
    let obj = {}
    Object.setPrototypeOf(obj,fn.prototype)
    let res = fn.apply(obj,args)
    return res instanceof Object ? res : obj
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DF1\u62F7\u8D1Ddeepclone" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1Ddeepclone" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1DdeepClone</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function deepClone(target,cache=new WeakMap()){
    if(!(target instanceof Object)) return target
    if(cache.get(target)){
        return cache.get(target)
    }
    if(target instanceof Date){
        return new Date(target)
    }
    if(target instanceof Function){
        return function(){
            return target.apply(this,arguments)
        }
    }
    if(target instanceof RegExp){
        return new RegExp(target)
    }
    
    let result = Array.isArray(target) ? [] : {}
    cache.set(target,result)
    
    for(let key in target){
        if(target.hasOwnProperty(key)){
            result[key] = deepClone(target[key],cache)
        }
    }
    return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function myInstanceof(L,R){
    if(Object(L) !== L) return false
    let proto = Object.getPropertyOf(L)
    while(proto){
        if(proto === R.prototype){
            return true
        }
        proto = Object.getPropertyOf(proto)
    }
    return false
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all" aria-hidden="true">#</a> promise.all</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Promise.myAll = function(promiseList){
    let pArr = Array.from(promiseList)
    let result=[]
    let count = 0
    return new Promise((resolve,reject)=&gt;{
        for(let i = 0;i&lt;pArr.length;i++){
            Promise.resolve(pArr[i]).then(res=&gt;{
                result[i] = res
                count++
                if(count === pArr.length){
                    resolve(reesult)
                }
            }).catch(e=&gt;{reject(e)})
        }
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-race" tabindex="-1"><a class="header-anchor" href="#promise-race" aria-hidden="true">#</a> promise.race</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Promise.myRace = function(promiseList){
    let pArr = Array.from(promiseList)
    let isUse = false
    return new Promise((resolve,reject)=&gt;{
        for(let i = 0;i&lt;pArr.length;i++){
            Promise.resolve(pArr[i]).then(res=&gt;{
                if(!isUse){
                    isUse=true
                    resolve(res)
                }
            }).catch(e=&gt;{
                if(!isUse){
                    isUse=true
                    reject(e)
                }
            })
        }
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Function.prototype.mycall=function(ctx,...args){
    let _ctx = ctx == undefined ? window : ctx
    let fn = Symbol(&#39;fn&#39;)
    _ctx.fn = this
    let result = _ctx.fn(...args)
    delete _ctx.fn
    
    return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Function.prototype.myapply=function(ctx,arr){
    let _ctx = ctx == undefined ? window : ctx
    let fn = Symbol(&#39;fn&#39;)
    _ctx.fn = this
    let result = _ctx.fn(...arr)
    delete _ctx.fn
    
    return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),d=[r];function a(t,v){return n(),i("div",null,d)}const u=e(l,[["render",a],["__file","write.html.vue"]]);export{u as default};
