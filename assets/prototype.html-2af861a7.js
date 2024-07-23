import{_ as e,r as o,o as t,c as p,a,e as n}from"./app-95b03150.js";const c="/assets/prototype-1-5e0ee628.png",l="/assets/prototype-2-30520a4c.png",i="/assets/prototype-3-907e6322.png",r={},d=n(`<p>原型和原型链是 <code>JavaScript</code> 中非常重要的概念，其对于理解 <code>JavaScript</code> 的对象模型和继承非常重要。通过原型和原型链，我们可以实现基于原型的继承、寄生式继承、组合式继承等多种继承方式，从而使代码更加简洁、易读、易于维护。</p><h2 id="构造函数与实例" tabindex="-1"><a class="header-anchor" href="#构造函数与实例" aria-hidden="true">#</a> 构造函数与实例</h2><p>使用 <code>new</code> 运算符与构造函数是常用的创建对象的方式之一。构造函数是一种特殊的函数，用于创建新的对象实例，当我们使用 <code>new</code> 运算符调用一个函数时，它就成为了构造函数，因为它被用来构造一个新的对象实例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 构造函数</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token comment">// 对象实例</span>
<span class="token keyword">const</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;maomao&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span> <span class="token comment">// Person {name: &#39;maomao&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u=n('<h2 id="prototype" tabindex="-1"><a class="header-anchor" href="#prototype" aria-hidden="true">#</a> <code>prototype</code></h2><p>在 <code>JavaScript</code> 中，每个函数都有一个原型属性 <code>prototype</code>，其指向调用该构造函数而创建的实例的原型（原型可以是 <code>null</code> 或其他对象） <img src="'+c+`" alt=""> 在原型对象（<code>prototype</code>）上定义的属性和方法会被对象实例共享</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;maomao&#39;</span>

<span class="token comment">// 对象实例 person1</span>
<span class="token keyword">const</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 对象实例 person2</span>
<span class="token keyword">const</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span>name<span class="token punctuation">,</span> person2<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;maomao&#39; &#39;maomao&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> <code>constructor</code></h2><p>每一个原型对象 <code>prototype</code> 都有一个 <code>constructor</code> 属性，其<strong>指向原型的构造函数</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token comment">// { constructor: ƒ Person(name) }</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Person <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt=""></p><h2 id="proto" tabindex="-1"><a class="header-anchor" href="#proto" aria-hidden="true">#</a> <code>__proto__</code></h2><p>在 <code>JavaScript</code> 中，每个对象都有一个 <code>__proto__</code> 属性，其<strong>指向创建该对象的函数的 <code>prototype</code></strong>，即<strong>构造函数的原型</strong>（也称其为隐私原型）</p>',9),k=n(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 构造函数</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token comment">// 对象实例</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;maomao&#39;</span><span class="token punctuation">)</span>

person<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
Reflect<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+'" alt=""></p>',2);function m(v,b){const s=o("CustomBlock");return t(),p("div",null,[d,a(s,{title:"构造函数的特征",content:"<ol><li>函数名通常以大写字母开头，以便将其与普通函数区分开来（本质上没有任何区别） <ol><li><strong>使用 <code>new</code> 运算符生成实例的函数就是构造函数</strong></li><li><strong>直接调用的函数就是普通函数</strong></li></ol></li><li>构造函数中通常使用 <code>this</code> 关键字来指代将要创建的对象实例</li><li>构造函数中通常使用属性或方法来定义新对象实例的状态和行为</li></ol>"}),u,a(s,{title:"__proto__ 注意点",content:"<div><code>__proto__</code> 用来读取或设置当前对象的原型对象，其本质上是一个内部属性，不是一个正式的对外的 <code>API</code>，只是由于浏览器广泛支持，才被加入了 <code>ES6</code> 以确保 <code>Web</code> 浏览器的兼容性，同时该属性已不推荐使用，在实际开发中更推荐使用 ES6 提供的 <code>JavaScript</code></div><ul><li>读取当前对象的原型对象 <ul><li><a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf' target='_blank'>Object.getPrototypeOf</a></li><li><a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf' target='_blank'>Reflect.getPrototypeOf</a></li></ul></li><li>设置当前对象的原型对象 <ul><li><a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf' target='_blank'>Object.setPrototypeOf</a></li><li><a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf' target='_blank'>Reflect.setPrototypeOf</a></li></ul></li></ul>"}),k])}const g=e(r,[["render",m],["__file","prototype.html.vue"]]);export{g as default};