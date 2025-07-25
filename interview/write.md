---
title: 手写题
date: 2022/07/07
---

## 防抖debounce

```
function debounce(fn,delay){
    let timer = null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            fn.apply(this,arguments)
        },delay)
    }
}
```

## 节流throttle

```
function throttle(fn,delay){
    let timer = null
    return function(){
        if(timer){
            return false
        }
        timer=setTimeout(()=>{
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}

```

## new的过程

```
function _new(fn,...args){
    let obj = {}
    Object.setPrototypeOf(obj,fn.prototype)
    let res = fn.apply(obj,args)
    return res instanceof Object ? res : obj
}
```

## 深拷贝deepClone

```
function deepClone(target,cache=new WeakMap()){
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
```

## instanceof

```
function myInstanceof(L,R){
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
```

## promise.all

```
Promise.myAll = function(promiseList){
    let pArr = Array.from(promiseList)
    let result=[]
    let count = 0
    return new Promise((resolve,reject)=>{
        for(let i = 0;i<pArr.length;i++){
            Promise.resolve(pArr[i]).then(res=>{
                result[i] = res
                count++
                if(count === pArr.length){
                    resolve(reesult)
                }
            }).catch(e=>{reject(e)})
        }
    })
}
```

## promise.race

```
Promise.myRace = function(promiseList){
    let pArr = Array.from(promiseList)
    let isUse = false
    return new Promise((resolve,reject)=>{
        for(let i = 0;i<pArr.length;i++){
            Promise.resolve(pArr[i]).then(res=>{
                if(!isUse){
                    isUse=true
                    resolve(res)
                }
            }).catch(e=>{
                if(!isUse){
                    isUse=true
                    reject(e)
                }
            })
        }
    })
}
```

## call

```
Function.prototype.mycall=function(ctx,...args){
    let _ctx = ctx == undefined ? window : ctx
    let fn = Symbol('fn')
    _ctx.fn = this
    let result = _ctx.fn(...args)
    delete _ctx.fn

    return result
}
```

## apply

```
Function.prototype.myapply=function(ctx,arr){
    let _ctx = ctx == undefined ? window : ctx
    let fn = Symbol('fn')
    _ctx.fn = this
    let result = _ctx.fn(...arr)
    delete _ctx.fn

    return result
}
```
