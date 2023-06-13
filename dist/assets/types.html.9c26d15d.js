import{_ as p,o as l,c as i,a,b as n,d as s,e as t,r as c}from"./app.53965346.js";const u={},r=n("p",null,[n("code",null,"JavaScript"),s("\u4E2D\u7684\u6570\u636E\u7C7B\u578B\u5206\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u548C\u5F15\u7528\u6570\u636E\u7C7B\u578B")],-1),d=n("h2",{id:"\u57FA\u672C\u7C7B\u578B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u672C\u7C7B\u578B","aria-hidden":"true"},"#"),s(" \u57FA\u672C\u7C7B\u578B")],-1),k=n("p",null,[s("\u6CE8: \u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E5F\u53EF\u4EE5\u53EB\u539F\u59CB\u6570\u636E\u7C7B\u578B \u5728"),n("code",null,"ES2020"),s("\u6807\u51C6\u4E0B\u7684"),n("code",null,"JavaScript"),s("\u4E00\u5171\u6709\u4EE5\u4E0B 7 \u79CD\u57FA\u672C\u7C7B\u578B")],-1),m=t("<li><code>undefined</code> \u672A\u5B9A\u4E49</li><li><code>null</code> \u7A7A\u6307\u9488</li><li><code>boolean</code> \u5E03\u5C14\u503C</li><li><code>string</code> \u5B57\u7B26\u4E32</li><li><code>number</code> \u6570\u503C</li>",5),v=n("code",null,"symbol",-1),b={href:"https://es6.ruanyifeng.com/#docs/symbol",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"bigint",-1),y={href:"https://es6.ruanyifeng.com/#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E3E\u4E2A \u{1F330}</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
str<span class="token punctuation">.</span>length

<span class="token doc-comment comment">/**
 * \u5728\u6267\u884C\u4E0A\u9762\u7684\u4EE3\u7801\u65F6 \`JavaScript\` \u90FD\u4F1A\u6267\u884C\u4EE5\u4E0B 3 \u6B65
 * 1. \u521B\u5EFA\u4E00\u4E2A String \u7C7B\u578B\u7684\u5B9E\u4F8B
 * 2. \u8C03\u7528\u5B9E\u4F8B\u4E0A\u7684\u7279\u5B9A\u65B9\u6CD5\u6216\u5C5E\u6027
 * 3. \u9500\u6BC1\u521A\u521A\u521B\u5EFA\u7684\u5B9E\u4F8B
 */</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span>length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u5F15\u7528\u7C7B\u578B</h2><p>\u5728<code>JavaScript</code>\u4E2D\u9664\u4E86\u57FA\u672C\u7C7B\u578B\uFF0C\u5176\u4ED6\u7684\u90FD\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5E38\u89C1\u7684\u5F15\u7528\u7C7B\u578B\u5982\u4E0B</p>`,3),h=t("<li><code>Object</code> \u5BF9\u8C61</li><li><code>Array</code> \u6570\u7EC4</li><li><code>Function</code> \u51FD\u6570</li><li><code>Date</code> \u65E5\u671F\u4E0E\u65F6\u95F4</li><li><code>RegExp</code> \u6B63\u5219\u8868\u8FBE\u5F0F</li>",5),_=n("code",null,"Set",-1),S={href:"https://es6.ruanyifeng.com/#docs/set-map#Set",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"WeakSet",-1),j={href:"https://es6.ruanyifeng.com/#docs/set-map#WeakSet",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"Map",-1),x={href:"https://es6.ruanyifeng.com/#docs/set-map#Map",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"WeakMap",-1),A={href:"https://es6.ruanyifeng.com/#docs/set-map#WeakMap",target:"_blank",rel:"noopener noreferrer"},O=t(`<h2 id="\u7C7B\u578B\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u5224\u65AD" aria-hidden="true">#</a> \u7C7B\u578B\u5224\u65AD</h2><p>\u5E38\u89C1\u7684\u4E94\u79CD\u5224\u65AD\u65B9\u5F0F</p><ul><li><code>typeof</code></li><li><code>instanceof</code></li><li><code>constructor</code></li><li><code>Array.isArray()</code></li><li><code>Object.prototype.toString</code></li></ul><h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h3><ul><li>\u9664<code>null</code>\u5916\u7684\u57FA\u672C\u7C7B\u578B\u90FD\u80FD\u51C6\u786E\u5224\u65AD</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">undefined</span>        <span class="token comment">// &#39;undefined&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span>             <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token boolean">true</span>             <span class="token comment">// &#39;boolean&#39;</span>
<span class="token keyword">typeof</span> <span class="token string">&#39;maomao&#39;</span>         <span class="token comment">// &#39;string&#39;</span>
<span class="token keyword">typeof</span> <span class="token number">2021</span>             <span class="token comment">// &#39;number&#39;</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">// &#39;symbol&#39;</span>
<span class="token keyword">typeof</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">)</span>     <span class="token comment">// &#39;bigint&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),M=t(`<ul><li>\u9664<code>function</code>\u5916\u7684\u5F15\u7528\u7C7B\u578B\u5747\u8FD4\u56DE<code>object</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>               <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>               <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> console<span class="token punctuation">.</span>log      <span class="token comment">// &#39;function&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// &#39;object&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h3><p><code>instanceof</code>\u7528\u4E8E\u68C0\u6D4B\u6784\u9020\u51FD\u6570\u7684<code>prototype</code>\u5C5E\u6027\u662F\u5426\u5B58\u5728\u4E8E\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/** \u57FA\u672C\u7C7B\u578B */</span>
<span class="token boolean">true</span> <span class="token keyword">instanceof</span> <span class="token class-name">Boolean</span>       <span class="token comment">// false</span>
<span class="token string">&#39;maomao&#39;</span> <span class="token keyword">instanceof</span> <span class="token class-name">String</span>    <span class="token comment">// false</span>
<span class="token number">1</span> <span class="token keyword">instanceof</span> <span class="token class-name">Number</span>           <span class="token comment">// false</span>

<span class="token doc-comment comment">/** \u5F15\u7528\u7C7B\u578B */</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;maomao&#39;</span><span class="token punctuation">)</span>

p1 <span class="token keyword">instanceof</span> <span class="token class-name">Person</span>          <span class="token comment">// true</span>
p1 <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>          <span class="token comment">// true</span>

<span class="token comment">// \u4FEE\u6539\u539F\u578B\uFF0C\u4F7F p1 \u4E0D\u518D\u662F Person \u7684\u5B9E\u4F8B</span>
Reflect<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token comment">// OR p1.__proto__ = Array.prototype</span>

p1 <span class="token keyword">instanceof</span> <span class="token class-name">Person</span>          <span class="token comment">// false</span>
p1 <span class="token keyword">instanceof</span> <span class="token class-name">Array</span>           <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),P=t(`<h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u5B9E\u4F8B\u5BF9\u8C61\u53EF\u4EE5\u901A\u8FC7<code>constructor</code>\u5C5E\u6027\u53BB\u8BBF\u95EE\u5B83\u7684\u6784\u9020\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/** \u57FA\u672C\u7C7B\u578B */</span>
<span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Boolean            <span class="token comment">// true</span>
<span class="token string">&#39;maomao&#39;</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> String           <span class="token comment">// true</span>
<span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Number             <span class="token comment">// true</span>
<span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Symbol           <span class="token comment">// true</span>
<span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> BigInt       <span class="token comment">// true</span>

<span class="token doc-comment comment">/** \u5F15\u7528\u7C7B\u578B */</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Object               <span class="token comment">// true</span>
<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array                <span class="token comment">// true</span>

<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Person   <span class="token comment">// true</span>

<span class="token comment">// \u4FEE\u6539\u539F\u578B\u9020\u6210 constructor \u4E22\u5931</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Object   <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),N=t(`<h3 id="array-isarray" tabindex="-1"><a class="header-anchor" href="#array-isarray" aria-hidden="true">#</a> Array.isArray()</h3><p><code>Array.isArray()</code>\u7528\u4E8E\u5224\u65AD\u4E00\u4E2A\u503C\u662F\u5426\u662F\u6570\u7EC4 (<code>Array</code>)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token comment">// true</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>   <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring" aria-hidden="true">#</a> Object.prototype.toString</h3><ul><li>\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A<code>toString()</code>\u65B9\u6CD5\uFF0C\u5F53\u8BE5\u5BF9\u8C61\u88AB\u8868\u793A\u4E3A\u4E00\u4E2A\u6587\u672C\u503C\u65F6\uFF0C\u6216\u8005\u4E00\u4E2A\u5BF9\u8C61\u4EE5\u9884\u671F\u7684\u5B57\u7B26\u4E32\u65B9\u5F0F\u5F15\u7528\u65F6\u81EA\u52A8\u8C03\u7528\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B<code>toString()</code>\u65B9\u6CD5\u88AB\u6BCF\u4E2A<code>Object</code>\u5BF9\u8C61\u7EE7\u627F\u3002\u5982\u679C\u6B64\u65B9\u6CD5\u5728\u81EA\u5B9A\u4E49\u5BF9\u8C61\u4E2D\u672A\u88AB\u8986\u76D6<code>toString()</code>\u8FD4\u56DE<code>&quot;[object type]&quot;</code>\u5176\u4E2D<code>type</code>\u662F\u5BF9\u8C61\u7684\u7C7B\u578B</li><li>\u4E3A\u4E86\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u80FD\u901A\u8FC7<code>Object.prototype.toString()</code>\u6765\u68C0\u6D4B\uFF0C\u9700\u8981\u4EE5<code>Function.prototype.call()</code>\u6216\u8005<code>Function.prototype.apply()</code>\u7684\u5F62\u5F0F\u6765\u8C03\u7528</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> toString <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>toString</code> \u65B9\u6CD5\u7684\u5728 <code>ECMAScript 5</code> \u4E0B\u7684\u5927\u81F4\u6267\u884C\u8FC7\u7A0B<br> 1.\u5982\u679C <code>this</code> \u662F <code>undefined</code> \u8FD4\u56DE <code>[object Undefined]</code><br> 2.\u5982\u679C <code>this</code> \u662F <code>null</code> \u8FD4\u56DE <code>[object Null]</code><br> 3.\u8BA9 <code>O</code> \u6210\u4E3A <code>ToObject(this)</code> \u7684\u7ED3\u679C<br> 4.\u8BA9 <code>class</code> \u6210\u4E3A <code>O</code> \u7684\u5185\u90E8\u5C5E\u6027 <code>[[Class]]</code> \u7684\u503C<br> 5.\u8FD4\u56DE\u7531 <code>&quot;[object &quot;</code> <code>class</code> <code>&quot;]&quot;</code> \u4E09\u4E2A\u90E8\u5206\u7EC4\u6210\u7684\u5B57\u7B26\u4E32</p>`,7);function W(C,J){const e=c("CustomBlock"),o=c("ExternalLinkIcon");return l(),i("div",null,[a(e,{title:"\u6E29\u99A8\u63D0\u793A",content:"\u9605\u8BFB<a href='https://www.ituring.com.cn/book/2472' target='_blank'>\u300AJavaScript \u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\uFF08\u7B2C 4 \u7248\uFF09\u300B</a>\u548C\u5404\u4E2A\u5927\u4F6C\u7684\u6587\u7AE0\u6240\u5F52\u7EB3\u7684\u603B\u7ED3\uFF0C<strong>\u5982\u6709\u5F02\u8BAE\u6309\u4F60\u7684\u7406\u89E3\u4E3A\u4E3B</strong>"}),r,d,k,n("ul",null,[m,n("li",null,[v,s(" \u72EC\u4E00\u65E0\u4E8C\u7684\u503C ("),n("a",b,[s("ES6\u5F15\u5165"),a(o)]),s(")")]),n("li",null,[f,s(" \u5927\u6574\u6570 ("),n("a",y,[s("ES2020\u5F15\u5165"),a(o)]),s(")")])]),a(e,{title:"\u57FA\u672C\u7C7B\u578B\u603B\u7ED3",content:"<ul><li>\u57FA\u672C\u7C7B\u578B\u4EC5\u4FDD\u5B58\u539F\u59CB\u503C\uFF0C\u4E0D\u5B58\u5728\u5C5E\u6027\u548C\u65B9\u6CD5</li><li>\u57FA\u672C\u7C7B\u578B\u5B58\u50A8\u5728 <strong>\u6808\u5185\u5B58</strong> \u4E2D</li><li>\u4FDD\u5B58\u57FA\u672C\u7C7B\u578B\u7684\u53D8\u91CF\u662F <strong>\u6309\u503C (by value) \u8BBF\u95EE</strong> \u7684\uFF0C\u64CD\u4F5C\u7684\u5C31\u662F\u5B58\u50A8\u5728\u53D8\u91CF\u4E2D\u7684\u5B9E\u9645\u503C</li><li>\u590D\u5236\u57FA\u672C\u7C7B\u578B\u65F6\u4F1A\u521B\u5EFA\u8BE5\u503C\u7684\u7B2C\u4E8C\u4E2A\u526F\u672C (\u72EC\u7ACB\u4F7F\u7528\uFF0C\u4E92\u4E0D\u5E72\u6270)</li></ul>"}),a(e,{title:"\u4E3A\u4EC0\u4E48\u539F\u59CB\u503C\u4E0D\u5B58\u5728\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F46 'hello world'.toString() \u53EF\u4EE5\u6B63\u786E\u6267\u884C",content:"<p>\u4E3A\u4E86\u65B9\u4FBF\u64CD\u4F5C\u539F\u59CB\u503C <code>ECMAScript</code> \u63D0\u4F9B\u4E86 3 \u79CD\u7279\u6B8A\u7684\u5F15\u7528\u7C7B\u578B\uFF1A<code>Boolean</code> <code>Number</code> <code>String</code>\uFF0C\u6BCF\u5F53\u7528\u5230\u67D0\u4E2A\u539F\u59CB\u503C\u7684\u65B9\u6CD5\u6216\u5C5E\u6027\u65F6\uFF0C\u540E\u53F0\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u76F8\u5E94\u539F\u59CB\u5305\u88C5\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u5728\u6267\u884C\u5B8C\u540E\u518D\u9500\u6BC1\u8FD9\u4E2A\u5305\u88C5\u5BF9\u8C61</p>"}),g,n("ul",null,[h,n("li",null,[_,s(" \u7C7B\u4F3C\u4E8E\u6570\u7EC4\u4F46\u6210\u5458\u7684\u503C\u90FD\u662F\u552F\u4E00\u7684 ("),n("a",S,[s("ES6\u5F15\u5165"),a(o)]),s(")")]),n("li",null,[w,s(" ("),n("a",j,[s("ES6\u5F15\u5165"),a(o)]),s(")")]),n("li",null,[E,s(" \u7C7B\u4F3C\u4E8E\u5BF9\u8C61\u4E5F\u662F\u952E\u503C\u5BF9\u7684\u96C6\u5408 ("),n("a",x,[s("ES6\u5F15\u5165"),a(o)]),s(")")]),n("li",null,[B,s(" ("),n("a",A,[s("ES6\u5F15\u5165"),a(o)]),s(")")])]),a(e,{title:"\u5F15\u7528\u7C7B\u578B\u603B\u7ED3",content:"<ul><li>\u56E0\u4E3A <code>JavaScript</code> \u4E0D\u5141\u8BB8\u76F4\u63A5\u8BBF\u95EE\u5185\u5B58\u4F4D\u7F6E(\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C\u5BF9\u8C61\u6240\u5728\u7684\u5185\u5B58\u7A7A\u95F4)\uFF0C\u6240\u4EE5\u5F15\u7528\u7C7B\u578B\u5728 <strong>\u6808\u5185\u5B58</strong> \u4E2D\u5B58\u50A8\u7684\u662F\u5730\u5740(\u5185\u5B58\u6307\u9488)\uFF0C\u800C\u5F15\u7528\u7C7B\u578B\u4E2D\u7684\u6570\u636E(\u65B9\u6CD5\u6216\u5C5E\u6027)\u662F\u5B58\u50A8\u5728 <strong>\u5806\u5185\u5B58</strong> \u4E2D</li><li>\u4FDD\u5B58\u5F15\u7528\u7C7B\u578B\u7684\u53D8\u91CF\u662F <strong>\u6309\u5F15\u7528 (by reference) \u8BBF\u95EE</strong> \uFF0C\u5B9E\u9645\u4E0A\u64CD\u4F5C\u7684\u662F\u5BF9\u8BE5\u5BF9\u8C61\u7684\u5F15\u7528\u800C\u975E\u5B9E\u9645\u7684\u5BF9\u8C61\u672C\u8EAB</li><li>\u590D\u5236\u5F15\u7528\u7C7B\u578B\u65F6\u53EA\u4F1A\u590D\u5236\u5185\u5B58\u6307\u9488</li></ul>"}),a(e,{title:"\u6808\u5185\u5B58\u548C\u5806\u5185\u5B58",content:"<ul><li><strong>\u6808\u5185\u5B58</strong><ul><li>\u5B58\u50A8\u57FA\u672C\u6570\u636E\u7C7B\u578B\u548C\u5806\u5185\u5B58\u5730\u5740</li><li>\u662F\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4</li></ul></li><li><strong>\u5806\u5185\u5B58</strong><ul><li>\u5B58\u50A8\u5F15\u7528\u6570\u636E\u7C7B\u578B\u548C\u95ED\u5305\u4E2D\u7684\u53D8\u91CF</li><li>\u4E0D\u662F\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4</li></ul></li><li>\u4E86\u89E3\u66F4\u591A\u8BF7\u70B9\u51FB <a href='https://github.com/chenqf/frontEndBlog/issues/9' target='_blank'>JS \u4E2D\u7684\u6808\u5185\u5B58\u548C\u5806\u5185\u5B58</a></li></ul>"}),O,a(e,{title:"\u4E3A\u4EC0\u4E48 typeof null === 'object'",content:"<p>\u5728 <code>JavaScript</code> \u6700\u521D\u7684\u5B9E\u73B0\u4E2D\uFF0C<code>JavaScript</code> \u4E2D\u7684\u503C\u662F\u7531\u4E00\u4E2A\u8868\u793A\u7C7B\u578B\u7684\u6807\u7B7E\u548C\u5B9E\u9645\u6570\u636E\u503C\u8868\u793A\u7684\u3002\u5BF9\u8C61\u7684\u7C7B\u578B\u6807\u7B7E\u662F <code>0</code>\u3002\u7531\u4E8E <code>null</code> \u4EE3\u8868\u7684\u662F\u7A7A\u6307\u9488\uFF08\u5927\u591A\u6570\u5E73\u53F0\u4E0B\u503C\u4E3A <code>0x00</code>\uFF09\uFF0C\u56E0\u6B64<code>null</code> \u7684\u7C7B\u578B\u6807\u7B7E\u662F <code>0</code>\uFF0C<code>typeof null</code> \u4E5F\u56E0\u6B64\u8FD4\u56DE <code>'object'</code> \u2014\u2014 <a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null' target='_blank'>MDN</a></p>"}),M,a(e,{title:"instanceof \u603B\u7ED3",content:"<ul><li><code>instanceof</code> \u4E0D\u80FD\u5224\u65AD\u57FA\u672C\u7C7B\u578B\uFF0C\u5BF9\u4E8E\u5F15\u7528\u7C7B\u578B\u53EA\u80FD\u5224\u65AD\u539F\u578B\u94FE\u4E0A\u7684\u4ECE\u5C5E\u5173\u7CFB</li><li><code>instanceof</code> \u5E76\u4E0D\u5B8C\u5168\u53EF\u9760\uFF0C\u56E0\u4E3A\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code> \u5C5E\u6027\u53EF\u80FD\u4F1A\u88AB\u4FEE\u6539 <ul><li>\u4FEE\u6539\u539F\u578B\u7684\u65B9\u6CD5 <ul><li>\u4F7F\u7528 <code>ES6</code> \u63D0\u4F9B\u7684 <a href='https://es6.ruanyifeng.com/?search=%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B&x=0&y=0#docs/reflect#Reflect-setPrototypeOfobj-newProto' target='_blank'><code>Reflect.setPrototypeOf()</code></a> \u65B9\u6CD5</li><li>\u501F\u52A9\u4E8E\u975E\u6807\u51C6\u7684 <code>__proto__</code> \u4F2A\u5C5E\u6027</li></ul></li></ul></li></ul>"}),P,a(e,{title:"constructor \u603B\u7ED3",content:"<ul><li><code>constructor</code> \u53EF\u4EE5\u5224\u65AD\u9664 <code>undefined</code> \u548C <code>null</code> \u5916\u7684\u6240\u6709\u57FA\u672C\u7C7B\u578B\u548C\u5F15\u7528\u7C7B\u578B(<code>undefined</code> \u548C <code>null</code> \u4E0D\u5B58\u5728\u6784\u9020\u51FD\u6570)</li><li><code>constructor</code> \u5E76\u4E0D\u5B8C\u5168\u53EF\u9760\uFF0C\u56E0\u4E3A\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code> \u5C5E\u6027\u53EF\u80FD\u4F1A\u88AB\u4FEE\u6539\uFF0C\u4ECE\u800C\u9020\u6210 <code>constructor</code> \u5C5E\u6027\u6307\u5411\u4E0D\u51C6\u786E</li></ul>"}),N,a(e,{title:"\u6CE8\u610F\u70B9",content:"<div>\u4E0D\u540C <code>ECMAScript</code> \u7248\u672C\u5BF9 <code>toString</code> \u65B9\u6CD5\u7684\u89C4\u8303\u90FD\u6709\u6240\u4E0D\u540C</div><div><a href='https://juejin.cn/post/6972878737582850062#heading-27' target='_blank'>Object.prototype.toString \u65B9\u6CD5\u7684\u539F\u7406</a></div>"})])}const I=p(u,[["render",W],["__file","types.html.vue"]]);export{I as default};