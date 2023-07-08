import{_ as s,o as n,c as a,e}from"./app-0259adbc.js";const t={},l=e(`<p>开发h5页面时，因为一些组件共用了一部分样式，把这部分样式提取为了scss文件，在每个组件中使用</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;style scoped lang=<span class="token string">&quot;scss&quot;</span>&gt;
  <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./index.scss&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
&lt;style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>的方式引入，浏览器中测试正常，自己手机打开也显示正常。<br> 结果在一台iphone xr手机上样式错乱了，检查发现这样导入的scss文件没有转成css，这样在一些老版本的浏览器中就无法正常解析。而浏览器和自己的手机使用的版本较高，已支持CSS原生嵌套语法，所以能够正常显示。 更改导入方式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;style scoped lang=<span class="token string">&quot;scss&quot;</span>&gt;
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;./index.scss&#39;</span><span class="token punctuation">;</span></span>
&lt;style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><ul><li>相同点 都是将样式表导入到当前样式表</li><li>不同点 <strong>@import url 是css的语法规则</strong>,<strong>@import &quot;&quot; 是scss加强过的特有规则</strong></li></ul><p>Sass 拓展了 @import 的功能，允许其导入 SCSS 或 Sass 文件。被导入的文件将合并编译到同一个 CSS文件中，另外，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用。</p>`,7),c=[l];function i(o,r){return n(),a("div",null,c)}const d=s(t,[["render",i],["__file","4.html.vue"]]);export{d as default};
