import{_ as p,r as c,o as l,c as i,a,b as n,d as s,e as t}from"./app-338c7247.js";const u={},r=n("p",null,[n("code",null,"JavaScript"),s("中的数据类型分为基本数据类型和引用数据类型")],-1),d=n("h2",{id:"基本类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基本类型","aria-hidden":"true"},"#"),s(" 基本类型")],-1),k=n("p",null,[s("注: 基本数据类型也可以叫原始数据类型 在"),n("code",null,"ES2020"),s("标准下的"),n("code",null,"JavaScript"),s("一共有以下 7 种基本类型")],-1),m=t("<li><code>undefined</code> 未定义</li><li><code>null</code> 空指针</li><li><code>boolean</code> 布尔值</li><li><code>string</code> 字符串</li><li><code>number</code> 数值</li>",5),v=n("code",null,"symbol",-1),b={href:"https://es6.ruanyifeng.com/#docs/symbol",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"bigint",-1),y={href:"https://es6.ruanyifeng.com/#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 举个 🌰</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
str<span class="token punctuation">.</span>length

<span class="token doc-comment comment">/**
 * 在执行上面的代码时 \`JavaScript\` 都会执行以下 3 步
 * 1. 创建一个 String 类型的实例
 * 2. 调用实例上的特定方法或属性
 * 3. 销毁刚刚创建的实例
 */</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span>length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h2><p>在<code>JavaScript</code>中除了基本类型，其他的都是引用类型，常见的引用类型如下</p>`,3),h=t("<li><code>Object</code> 对象</li><li><code>Array</code> 数组</li><li><code>Function</code> 函数</li><li><code>Date</code> 日期与时间</li><li><code>RegExp</code> 正则表达式</li>",5),_=n("code",null,"Set",-1),S={href:"https://es6.ruanyifeng.com/#docs/set-map#Set",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"WeakSet",-1),j={href:"https://es6.ruanyifeng.com/#docs/set-map#WeakSet",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"Map",-1),x={href:"https://es6.ruanyifeng.com/#docs/set-map#Map",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"WeakMap",-1),A={href:"https://es6.ruanyifeng.com/#docs/set-map#WeakMap",target:"_blank",rel:"noopener noreferrer"},O=t(`<h2 id="类型判断" tabindex="-1"><a class="header-anchor" href="#类型判断" aria-hidden="true">#</a> 类型判断</h2><p>常见的五种判断方式</p><ul><li><code>typeof</code></li><li><code>instanceof</code></li><li><code>constructor</code></li><li><code>Array.isArray()</code></li><li><code>Object.prototype.toString</code></li></ul><h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h3><ul><li>除<code>null</code>外的基本类型都能准确判断</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">undefined</span>        <span class="token comment">// &#39;undefined&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span>             <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token boolean">true</span>             <span class="token comment">// &#39;boolean&#39;</span>
<span class="token keyword">typeof</span> <span class="token string">&#39;maomao&#39;</span>         <span class="token comment">// &#39;string&#39;</span>
<span class="token keyword">typeof</span> <span class="token number">2021</span>             <span class="token comment">// &#39;number&#39;</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">// &#39;symbol&#39;</span>
<span class="token keyword">typeof</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">)</span>     <span class="token comment">// &#39;bigint&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),M=t(`<ul><li>除<code>function</code>外的引用类型均返回<code>object</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>               <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>               <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> console<span class="token punctuation">.</span>log      <span class="token comment">// &#39;function&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// &#39;object&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h3><p><code>instanceof</code>用于检测构造函数的<code>prototype</code>属性是否存在于实例对象的原型链上</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 基本类型 */</span>
<span class="token boolean">true</span> <span class="token keyword">instanceof</span> <span class="token class-name">Boolean</span>       <span class="token comment">// false</span>
<span class="token string">&#39;maomao&#39;</span> <span class="token keyword">instanceof</span> <span class="token class-name">String</span>    <span class="token comment">// false</span>
<span class="token number">1</span> <span class="token keyword">instanceof</span> <span class="token class-name">Number</span>           <span class="token comment">// false</span>

<span class="token doc-comment comment">/** 引用类型 */</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;maomao&#39;</span><span class="token punctuation">)</span>

p1 <span class="token keyword">instanceof</span> <span class="token class-name">Person</span>          <span class="token comment">// true</span>
p1 <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>          <span class="token comment">// true</span>

<span class="token comment">// 修改原型，使 p1 不再是 Person 的实例</span>
Reflect<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token comment">// OR p1.__proto__ = Array.prototype</span>

p1 <span class="token keyword">instanceof</span> <span class="token class-name">Person</span>          <span class="token comment">// false</span>
p1 <span class="token keyword">instanceof</span> <span class="token class-name">Array</span>           <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),P=t(`<h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>实例对象可以通过<code>constructor</code>属性去访问它的构造函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 基本类型 */</span>
<span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Boolean            <span class="token comment">// true</span>
<span class="token string">&#39;maomao&#39;</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> String           <span class="token comment">// true</span>
<span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Number             <span class="token comment">// true</span>
<span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Symbol           <span class="token comment">// true</span>
<span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> BigInt       <span class="token comment">// true</span>

<span class="token doc-comment comment">/** 引用类型 */</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Object               <span class="token comment">// true</span>
<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array                <span class="token comment">// true</span>

<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Person   <span class="token comment">// true</span>

<span class="token comment">// 修改原型造成 constructor 丢失</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Object   <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),N=t(`<h3 id="array-isarray" tabindex="-1"><a class="header-anchor" href="#array-isarray" aria-hidden="true">#</a> Array.isArray()</h3><p><code>Array.isArray()</code>用于判断一个值是否是数组 (<code>Array</code>)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token comment">// true</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>   <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring" aria-hidden="true">#</a> Object.prototype.toString</h3><ul><li>每个对象都有一个<code>toString()</code>方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用，默认情况下<code>toString()</code>方法被每个<code>Object</code>对象继承。如果此方法在自定义对象中未被覆盖<code>toString()</code>返回<code>&quot;[object type]&quot;</code>其中<code>type</code>是对象的类型</li><li>为了每个对象都能通过<code>Object.prototype.toString()</code>来检测，需要以<code>Function.prototype.call()</code>或者<code>Function.prototype.apply()</code>的形式来调用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> toString <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString

<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>        <span class="token comment">// &#39;[object Undefined]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>             <span class="token comment">// &#39;[object Null]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>             <span class="token comment">// &#39;[object Boolean]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;maomao&#39;</span><span class="token punctuation">)</span>         <span class="token comment">// &#39;[object String]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">)</span>             <span class="token comment">// &#39;[object Number]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">// &#39;[object Symbol]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment">// &#39;[object BigInt]&#39;</span>

<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>               <span class="token comment">// &#39;[object Object]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>               <span class="token comment">// &#39;[object Array]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>      <span class="token comment">// &#39;[object Function]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment">// &#39;[object Date]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment">// &#39;[object RegExp]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment">// &#39;[object Set]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// &#39;[object WeakSet]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment">// &#39;[object Map]&#39;</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// &#39;[object WeakMap]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>toString</code> 方法的在 <code>ECMAScript 5</code> 下的大致执行过程<br> 1.如果 <code>this</code> 是 <code>undefined</code> 返回 <code>[object Undefined]</code><br> 2.如果 <code>this</code> 是 <code>null</code> 返回 <code>[object Null]</code><br> 3.让 <code>O</code> 成为 <code>ToObject(this)</code> 的结果<br> 4.让 <code>class</code> 成为 <code>O</code> 的内部属性 <code>[[Class]]</code> 的值<br> 5.返回由 <code>&quot;[object &quot;</code> <code>class</code> <code>&quot;]&quot;</code> 三个部分组成的字符串</p>`,7);function W(C,J){const e=c("CustomBlock"),o=c("ExternalLinkIcon");return l(),i("div",null,[a(e,{title:"温馨提示",content:"阅读<a href='https://www.ituring.com.cn/book/2472' target='_blank'>《JavaScript 高级程序设计（第 4 版）》</a>和各个大佬的文章所归纳的总结，<strong>如有异议按你的理解为主</strong>"}),r,d,k,n("ul",null,[m,n("li",null,[v,s(" 独一无二的值 ("),n("a",b,[s("ES6引入"),a(o)]),s(")")]),n("li",null,[f,s(" 大整数 ("),n("a",y,[s("ES2020引入"),a(o)]),s(")")])]),a(e,{title:"基本类型总结",content:"<ul><li>基本类型仅保存原始值，不存在属性和方法</li><li>基本类型存储在 <strong>栈内存</strong> 中</li><li>保存基本类型的变量是 <strong>按值 (by value) 访问</strong> 的，操作的就是存储在变量中的实际值</li><li>复制基本类型时会创建该值的第二个副本 (独立使用，互不干扰)</li></ul>"}),a(e,{title:"为什么原始值不存在属性和方法，但 'hello world'.toString() 可以正确执行",content:"<p>为了方便操作原始值 <code>ECMAScript</code> 提供了 3 种特殊的引用类型：<code>Boolean</code> <code>Number</code> <code>String</code>，每当用到某个原始值的方法或属性时，后台都会创建一个相应原始包装类型的对象，在执行完后再销毁这个包装对象</p>"}),g,n("ul",null,[h,n("li",null,[_,s(" 类似于数组但成员的值都是唯一的 ("),n("a",S,[s("ES6引入"),a(o)]),s(")")]),n("li",null,[w,s(" ("),n("a",j,[s("ES6引入"),a(o)]),s(")")]),n("li",null,[E,s(" 类似于对象也是键值对的集合 ("),n("a",x,[s("ES6引入"),a(o)]),s(")")]),n("li",null,[B,s(" ("),n("a",A,[s("ES6引入"),a(o)]),s(")")])]),a(e,{title:"引用类型总结",content:"<ul><li>因为 <code>JavaScript</code> 不允许直接访问内存位置(不能直接操作对象所在的内存空间)，所以引用类型在 <strong>栈内存</strong> 中存储的是地址(内存指针)，而引用类型中的数据(方法或属性)是存储在 <strong>堆内存</strong> 中</li><li>保存引用类型的变量是 <strong>按引用 (by reference) 访问</strong> ，实际上操作的是对该对象的引用而非实际的对象本身</li><li>复制引用类型时只会复制内存指针</li></ul>"}),a(e,{title:"栈内存和堆内存",content:"<ul><li><strong>栈内存</strong><ul><li>存储基本数据类型和堆内存地址</li><li>是连续的内存空间</li></ul></li><li><strong>堆内存</strong><ul><li>存储引用数据类型和闭包中的变量</li><li>不是连续的内存空间</li></ul></li><li>了解更多请点击 <a href='https://github.com/chenqf/frontEndBlog/issues/9' target='_blank'>JS 中的栈内存和堆内存</a></li></ul>"}),O,a(e,{title:"为什么 typeof null === 'object'",content:"<p>在 <code>JavaScript</code> 最初的实现中，<code>JavaScript</code> 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 <code>0</code>。由于 <code>null</code> 代表的是空指针（大多数平台下值为 <code>0x00</code>），因此<code>null</code> 的类型标签是 <code>0</code>，<code>typeof null</code> 也因此返回 <code>'object'</code> —— <a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null' target='_blank'>MDN</a></p>"}),M,a(e,{title:"instanceof 总结",content:"<ul><li><code>instanceof</code> 不能判断基本类型，对于引用类型只能判断原型链上的从属关系</li><li><code>instanceof</code> 并不完全可靠，因为构造函数的 <code>prototype</code> 属性可能会被修改 <ul><li>修改原型的方法 <ul><li>使用 <code>ES6</code> 提供的 <a href='https://es6.ruanyifeng.com/?search=%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B&x=0&y=0#docs/reflect#Reflect-setPrototypeOfobj-newProto' target='_blank'><code>Reflect.setPrototypeOf()</code></a> 方法</li><li>借助于非标准的 <code>__proto__</code> 伪属性</li></ul></li></ul></li></ul>"}),P,a(e,{title:"constructor 总结",content:"<ul><li><code>constructor</code> 可以判断除 <code>undefined</code> 和 <code>null</code> 外的所有基本类型和引用类型(<code>undefined</code> 和 <code>null</code> 不存在构造函数)</li><li><code>constructor</code> 并不完全可靠，因为构造函数的 <code>prototype</code> 属性可能会被修改，从而造成 <code>constructor</code> 属性指向不准确</li></ul>"}),N,a(e,{title:"注意点",content:"<div>不同 <code>ECMAScript</code> 版本对 <code>toString</code> 方法的规范都有所不同</div><div><a href='https://juejin.cn/post/6972878737582850062#heading-27' target='_blank'>Object.prototype.toString 方法的原理</a></div>"})])}const I=p(u,[["render",W],["__file","types.html.vue"]]);export{I as default};
