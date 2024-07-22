import{_ as c,r as o,o as l,c as i,a as s,b as n,d as a,e}from"./app-2c798668.js";const u={},r=n("h2",{id:"new-运算符",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#new-运算符","aria-hidden":"true"},"#"),a(" new 运算符")],-1),d=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取构造函数</span>
  <span class="token keyword">const</span> Constructor <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>

  <span class="token comment">// 创建空对象并设置原型</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Constructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>

  <span class="token comment">// 绑定 this 并执行构造函数</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">Constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>

  <span class="token comment">// 返回构造函数显示返回的值或新对象</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> result
  <span class="token keyword">return</span> result <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> type <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/mqyqingfeng/Blog/issues/13",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"instanceof-运算符",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#instanceof-运算符","aria-hidden":"true"},"#"),a(" instanceof 运算符")],-1),b=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 取右边构造函数的 prototype 值</span>
  <span class="token keyword">const</span> prototype <span class="token operator">=</span> right<span class="token punctuation">.</span>prototype
  <span class="token comment">// 取左边实例的 __proto__ 值</span>
  left <span class="token operator">=</span> left<span class="token punctuation">.</span>__proto__

  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当左边实例的 __proto__ 为 null 时返回 false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断左右两边的原型是否一致</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 修改 __proto__</span>
    left <span class="token operator">=</span> left<span class="token punctuation">.</span>__proto__
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof",target:"_blank",rel:"noopener noreferrer"},y={href:"https://juejin.cn/post/6844903613584654344#heading-1",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"object-create",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#object-create","aria-hidden":"true"},"#"),a(" Object.create()")],-1),w=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">proto<span class="token punctuation">,</span> properties</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果 proto 不是 null 或非原始包装对象，抛出 TypeError 异常</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> proto
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> type <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Object prototype may only be an Object or null: &#39;</span> <span class="token operator">+</span> proto<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 将 proto 的原型设置为 F 的原型</span>
  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> proto
  <span class="token comment">// 创建新对象</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 兼容 null 的处理</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token comment">// OR Reflect.setPrototypeOf(result, null)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 将 properties 的属性设置到新对象上</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>properties <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> properties <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> properties<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create",target:"_blank",rel:"noopener noreferrer"},_=e(`<h2 id="function-prototype-call" tabindex="-1"><a class="header-anchor" href="#function-prototype-call" aria-hidden="true">#</a> Function.prototype.call()</h2><p><code>call()</code> 方法使用一个指定的 <code>this</code> 值和单独给出的一个或多个参数来调用一个函数</p><p>ES6 模拟实现 Function.prototype.call()</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** ES6 实现 **/</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在非严格模式下，传入的 context 为 null 或 undefined 时会自动替换为全局对象</span>
  <span class="token comment">// 因此在判断时不能使用 context = context || window</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>context <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> window
  <span class="token punctuation">}</span>
  <span class="token comment">// 原始值需要被 Object 包装成对象</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token comment">// 获取 fn 函数调用的返回值</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>

  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token string">&#39;这是返回值&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;maomao&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">call :&gt;&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token function">get</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;call&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">myCall :&gt;&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> get<span class="token punctuation">.</span><span class="token function">myCall</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;myCall&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES5 模拟实现 Function.prototype.call()</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** ES5 实现 **/</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在非严格模式下，传入的 context 为 null 或 undefined 时会自动替换为全局对象</span>
  <span class="token comment">// 因此在判断时不能使用 context = context || window</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>context <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> window
  <span class="token punctuation">}</span>
  <span class="token comment">// 原始值需要被 Object 包装成对象</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取调用 call 的函数</span>
  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token comment">// 获取传入的参数</span>
  <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// arguments 是类数组对象，可以使用 for 循环</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> len <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;arguments[&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 获取 fn 函数调用的返回值
   * 此时 args 为 [&#39;arguments[1]&#39;, &#39;arguments[2]&#39;, &#39;arguments[3]&#39;]
   * 但在执行时 args 会自动调用 Array.toString() 转化为 context.fn(arguments[1], arguments[2], arguments[3])
   **/</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;context.fn(&#39;</span> <span class="token operator">+</span> args <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// 删除 fn 函数</span>
  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn

  <span class="token comment">// 将 fn 函数的返回值返回</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/mqyqingfeng/Blog/issues/11",target:"_blank",rel:"noopener noreferrer"},O=e(`<h2 id="function-prototype-apply" tabindex="-1"><a class="header-anchor" href="#function-prototype-apply" aria-hidden="true">#</a> Function.prototype.apply()</h2><p><code>apply()</code> 方法调用一个具有给定 <code>this</code> 值的函数，以及以一个数组（或类数组对象）的形式提供的参数 ES6 模拟实现 Function.prototype.apply()</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** ES6 实现 **/</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在非严格模式下，传入的 context 为 null 或 undefined 时会自动替换为全局对象</span>
  <span class="token comment">// 因此在判断时不能使用 context = context || window</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>context <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> window
  <span class="token punctuation">}</span>
  <span class="token comment">// 原始值需要被 Object 包装成对象</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token comment">// 获取函数调用的返回值</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> arr <span class="token operator">?</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span> <span class="token operator">:</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token string">&#39;这是返回值&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;maomao&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">apply :&gt;&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token function">get</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;apply&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">myApply :&gt;&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> get<span class="token punctuation">.</span><span class="token function">myApply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;myApply&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES5 模拟实现 Function.prototype.apply()</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** ES5 实现 **/</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在非严格模式下，传入的 context 为 null 或 undefined 时会自动替换为全局对象</span>
  <span class="token comment">// 因此在判断时不能使用 context = context || window</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>context <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> window
  <span class="token punctuation">}</span>
  <span class="token comment">// 原始值需要被 Object 包装成对象</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取调用 apply 的函数</span>
  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token comment">// 获取 fn 函数调用的返回值</span>
  <span class="token keyword">var</span> result
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取传入的参数</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;arr[&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    result <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;context.fn(&#39;</span> <span class="token operator">+</span> args <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 没有参数直接调用</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 删除 fn 函数</span>
  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn

  <span class="token comment">// 将 fn 的返回值返回</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),F={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/mqyqingfeng/Blog/issues/11",target:"_blank",rel:"noopener noreferrer"},N=e(`<h2 id="function-prototype-bind" tabindex="-1"><a class="header-anchor" href="#function-prototype-bind" aria-hidden="true">#</a> Function.prototype.bind()</h2><p><code>bind()</code> 方法创建一个新的函数，在 <code>bind()</code> 被调用时，这个新函数的 <code>this</code> 被指定为 <code>bind()</code> 的第一个参数，而其余参数将作为新函数的参数供调用时使用。 ES6 模拟实现 Function.prototype.bind()</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** ES6 实现 **/</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;not a function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>fArgs<span class="token punctuation">]</span>
    <span class="token comment">// 当作为构造函数时</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">F</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">self</span><span class="token punctuation">(</span><span class="token operator">...</span>params<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 当作为普通函数时，将函数的 this 指向 context</span>
    <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> params<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES5 模拟实现 Function.prototype.bind()</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** ES5 实现 **/</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;not a function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取调用 bind 的函数</span>
  <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token comment">// 获取除了 thisArg 外的剩余参数（第二个到最后一个）</span>
  <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">var</span> <span class="token function-variable function">fNOP</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">var</span> <span class="token function-variable function">fBound</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取返回函数的参数</span>
    <span class="token keyword">var</span> bindArgs <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>
      <span class="token comment">// 当作为构造函数时，将绑定函数的 this 实例指向实例</span>
      <span class="token comment">// 当作为普通函数时，将绑定函数的 this 指向 context</span>
      <span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">fNOP</span> <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> context<span class="token punctuation">,</span>
      args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>bindArgs<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 存在原型时，修改返回函数的 prototype 为绑定函数的 prototype，使实例可以继承绑定函数原型中的值</span>
  <span class="token keyword">var</span> prototype <span class="token operator">=</span> self<span class="token punctuation">.</span>prototype
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fNOP<span class="token punctuation">.</span>prototype <span class="token operator">=</span> prototype
  <span class="token punctuation">}</span>

  fBound<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fNOP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> fBound
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),C={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/mqyqingfeng/Blog/issues/12",target:"_blank",rel:"noopener noreferrer"},z={href:"https://zhuanlan.zhihu.com/p/25379434",target:"_blank",rel:"noopener noreferrer"},B={href:"https://zhuanlan.zhihu.com/p/25483361",target:"_blank",rel:"noopener noreferrer"},A=n("h2",{id:"debounce-函数防抖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#debounce-函数防抖","aria-hidden":"true"},"#"),a(" debounce 函数防抖")],-1),J=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过闭包缓存定时器 id</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果定时器已经存在，清除定时器</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
      timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 设定定时器，定时器结束后执行传入的回调函数 fn</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="throttle-函数节流" tabindex="-1"><a class="header-anchor" href="#throttle-函数节流" aria-hidden="true">#</a> throttle 函数节流</h2>`,2),T=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过闭包缓存上一次的调用时间 (默认为 0)</span>
  <span class="token keyword">let</span> lastCallTime <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 判断当前调用时间和上次调用时间的差值是否大于 wait</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> lastCallTime <span class="token operator">&gt;=</span> wait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 更新调用时间</span>
      lastCallTime <span class="token operator">=</span> now
      <span class="token comment">// 执行回调函数</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function q(R,D){const p=o("CustomBlock"),t=o("ExternalLinkIcon");return l(),i("div",null,[r,s(p,{title:"new 运算符原理",content:"<ol><li>创建一个全新的对象</li><li>为新创建的对象添加 <strong><code>__proto__</code></strong> 属性并指向构造函数的原型对象</li><li>将新创建的对象作为函数调用的 this</li><li>如果构造函数没有返回对象类型，则返回新创建的对象</li></ol>"}),d,n("ul",null,[n("li",null,[n("a",k,[a("new 运算符 —— MDN"),s(t)])]),n("li",null,[n("a",v,[a("JavaScript 深入之 new 的模拟实现"),s(t)])])]),m,s(p,{title:"instanceof 运算符原理",content:"<div><code>instanceof</code> 运算符用于检测构造函数的 <code>prototype</code> 属性是否出现在某个实例对象的原型链上</div>"}),b,n("ul",null,[n("li",null,[n("a",f,[a("instanceof 运算符 —— MDN"),s(t)])]),n("li",null,[n("a",y,[a("instanceof 操作符的实现原理"),s(t)])])]),g,s(p,{title:"Object.create()",content:"<div><code>Object.create()</code> 方法创建一个新对象，使用现有的对象来提供新创建的对象的 <code>__proto__</code></div>"}),w,n("p",null,[n("a",h,[a("Object.create() —— MDN"),s(t)])]),_,n("ul",null,[n("li",null,[n("a",x,[a("Function.prototype.call() —— MDN"),s(t)])]),n("li",null,[n("a",j,[a("JavaScript 深入之 call 和 apply 的模拟实现"),s(t)])])]),O,n("ul",null,[n("li",null,[n("a",F,[a("Function.prototype.apply() —— MDN"),s(t)])]),n("li",null,[n("a",S,[a("JavaScript 深入之 call 和 apply 的模拟实现"),s(t)])])]),N,n("ul",null,[n("li",null,[n("a",C,[a("Function.prototype.bind() —— MDN"),s(t)])]),n("li",null,[a("相关学习文章 "),n("ul",null,[n("li",null,[n("a",E,[a("JavaScript 深入之 bind 的模拟实现"),s(t)])]),n("li",null,[n("a",z,[a("从一道面试题的进阶，到“我可能看了假源码”"),s(t)])]),n("li",null,[n("a",B,[a("从一道面试题的进阶，到“我可能看了假源码”（2）"),s(t)])])])])]),A,s(p,{title:"函数防抖",content:"<div><strong>作用</strong>: 一个函数在一段时间内多次触发都<strong>只执行最后一次</strong> <br><strong>原理</strong>: 利用定时器，在函数第一次执行时设定一个定时器，再次调用时如果已经设定过定时器就清空之前的定时器并设定一个新的定时器，当定时器结束后执行传入的回调函数 <br><strong>应用</strong>: 搜索输入框获取用户输入的联想结果</div>"}),J,s(p,{title:"函数节流",content:"<div><strong>作用</strong>: 函数节流指指的是在一段时间内只允许函数执行一次 (例如 <code>3</code> 秒执行一次那么在函数第一次调用后的 <code>3</code> 秒内后面的函数调用将被忽略) <br><strong>原理</strong>: 利用时间戳来判断，记录上次执行的时间戳，在每次触发事件时判断当前时间是否大于上次执行的时间 + 设置的间隔 ，如果是则执行回调并更新上次执行的时间戳<br><strong>应用</strong>: 降低 <code>scroll resize</code> 事件的触发频率</div>"}),T])}const P=c(u,[["render",q],["__file","coding.html.vue"]]);export{P as default};
