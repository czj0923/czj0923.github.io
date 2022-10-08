import{_ as p,o,c as i,b as a,d as e,e as n,a as t,r}from"./app.a702d2aa.js";const l={},c=a("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),n(" \u4ECB\u7ECD")],-1),d=n("mine-sweeper\u662F\u4F7F\u7528"),u={href:"https://v3.cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},h=n("vue3"),k=n("\u5F00\u53D1\u7684\u4E00\u4E2A\u626B\u96F7\u5C0F\u6E38\u620F\uFF0C\u5B9E\u73B0\u4E86\u57FA\u672C\u7684\u626B\u96F7\u6E38\u620F\u529F\u80FD\u3002"),m=a("br",null,null,-1),v=n(" \u6B22\u8FCE\u70ED\u7231\u626B\u96F7\u7684\u73A9\u5BB6\u52A0\u5165"),b={href:"http://saolei.wang/",target:"_blank",rel:"noopener noreferrer"},x=n("\u626B\u96F7\u7F51"),g=t(`<h2 id="\u6280\u672F\u6808" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u6808" aria-hidden="true">#</a> \u6280\u672F\u6808</h2><ol><li>\u811A\u624B\u67B6\uFF1Avue-cli 4</li><li>\u524D\u7AEF\u6846\u67B6\uFF1Avue 3.x</li><li>\u72B6\u6001\u7BA1\u7406\uFF1Apinia</li><li>\u8DEF\u7531:vue-router 4.x</li><li>css\u6837\u5F0F:paper.css</li></ol><h2 id="\u5B9E\u73B0\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u529F\u80FD" aria-hidden="true">#</a> \u5B9E\u73B0\u529F\u80FD</h2><ul><li>\u63D2\u65D7\u6A21\u5F0F(FL)</li><li>\u4E0D\u63D2\u65D7\u6A21\u5F0F(NF)</li><li>\u7A7A\u767D\u81EA\u52A8\u6253\u5F00</li><li>\u96BE\u5EA6\u9009\u62E9</li><li>\u8BA1\u65F6\u5668</li><li>\u4FDD\u5B58\u7EAA\u5F55</li></ul><h2 id="\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> \u5B9E\u73B0\u601D\u8DEF</h2><p>\u4F7F\u7528\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4\u5B58\u50A8\u6BCF\u4E00\u4E2A\u65B9\u683C,\u7528[row,col]\u6765\u5B9A\u4F4D\u6BCF\u4E00\u4E2A\u65B9\u683C\u5750\u6807,\u6570\u7EC4\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B5\u4E2A\u5B57\u6BB5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">let</span> obj<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//\u5468\u56F4\u96F7\u6570</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u5DF2\u6253\u5F00</span>
    <span class="token literal-property property">hasLoop</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u5DF2\u9012\u5F52</span>
    <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u5DF2\u6807\u96F7</span>
    <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u9AD8\u4EAE</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u521D\u59CB\u5316\u96F7\u533A" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u96F7\u533A" aria-hidden="true">#</a> \u521D\u59CB\u5316\u96F7\u533A</h4><p>\u751F\u6210\u968F\u673A\u6570\u5750\u6807\uFF0C\u82E5\u8BE5\u5750\u6807\u5DF2\u6709\u96F7\uFF0C\u5219\u91CD\u65B0\u751F\u6210\uFF0C\u6BCF\u751F\u6210\u4E00\u4E2A\u96F7\uFF0C\u5C06\u5468\u56F4\u4E00\u5708\u65B9\u5757\u7684\u96F7\u6570num++\uFF0C\u6700\u7EC8\u82E5\u67D0\u4E2A\u65B9\u5757\u7684num&gt;10\u5219\u8BE5\u65B9\u5757\u4E3A\u96F7</p><h4 id="\u83B7\u53D6\u5468\u56F4\u6709\u6548\u5750\u6807" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5468\u56F4\u6709\u6548\u5750\u6807" aria-hidden="true">#</a> \u83B7\u53D6\u5468\u56F4\u6709\u6548\u5750\u6807</h4><p>\u67D0\u4E2A\u65B9\u5757\u5468\u56F4\u7684\u65B9\u5757\u5750\u6807\u4E3A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> aroundPos <span class="token operator">=</span> <span class="token punctuation">[</span>
   <span class="token punctuation">[</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">[</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">[</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">[</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">[</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">[</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7filter\u7B5B\u9009\u4E0D\u8D85\u8FC7\u8FB9\u754C\u7684\u5750\u6807</p><h4 id="\u6253\u5F00\u65B9\u5757" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u65B9\u5757" aria-hidden="true">#</a> \u6253\u5F00\u65B9\u5757</h4><p>\u70B9\u51FB\u67D0\u4E00\u65B9\u5757\u65F6\u4F7F\u7528\u9012\u5F52\u67E5\u627E\u5468\u56F4\u65E0\u96F7\u7684\u65B9\u5757\uFF0C\u5E76\u628A\u8BE5\u65B9\u5757open\u7F6E\u4E3Atrue</p><h4 id="\u6E38\u620F\u7ED3\u675F\u7684\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u6E38\u620F\u7ED3\u675F\u7684\u5224\u65AD" aria-hidden="true">#</a> \u6E38\u620F\u7ED3\u675F\u7684\u5224\u65AD</h4><p>\u6BCF\u6B21\u70B9\u51FB\u6253\u5F00\u65B9\u5757\uFF0C\u6216\u70B9\u51FB\u5DF2\u6253\u5F00\u65B9\u5757\u81EA\u52A8\u6253\u5F00 \u904D\u5386\u65B9\u5757\u6570\u7EC4\uFF0C\u67E5\u627E\u8FD8\u6709\u51E0\u4E2A\u65B9\u5757\u672A\u6253\u5F00</p><ul><li>\u672A\u6253\u5F00\u7684\u65B9\u5757\u6570&lt;=\u603B\u96F7\u6570\uFF0C\u5219\u4E3A\u6210\u529F</li><li>\u53EA\u8981\u6709\u4E00\u4E2A\u65B9\u5757open\u548C\u96F7\u657010\u540C\u65F6\u51FA\u73B0\uFF0C\u5219\u4E3A\u5931\u8D25</li></ul><h2 id="\u5728\u7EBFdemo" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EBFdemo" aria-hidden="true">#</a> \u5728\u7EBFdemo</h2>`,19),_=n("\u626B\u96F7 "),f={href:"https://czj0923.github.io/mine-sweeper/dist",target:"_blank",rel:"noopener noreferrer"},y=n("\u70B9\u51FB\u8BD5\u73A9"),j=n("."),w=t(`<h2 id="\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1" aria-hidden="true">#</a> \u5F00\u53D1</h2><h3 id="\u514B\u9686\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u514B\u9686\u4EE3\u7801" aria-hidden="true">#</a> \u514B\u9686\u4EE3\u7801</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone https://github.com/czj0923/mine-sweeper.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8FDB\u5165\u9879\u76EE\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165\u9879\u76EE\u76EE\u5F55" aria-hidden="true">#</a> \u8FDB\u5165\u9879\u76EE\u76EE\u5F55</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd mine-sweeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u6DD8\u5B9D\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6DD8\u5B9D\u955C\u50CF" aria-hidden="true">#</a> \u4F7F\u7528\u6DD8\u5B9D\u955C\u50CF</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install --registry=https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u542F\u52A8\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u670D\u52A1" aria-hidden="true">#</a> \u542F\u52A8\u670D\u52A1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a> \u6253\u5305</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13);function N(L,V){const s=r("ExternalLinkIcon");return o(),i("div",null,[c,a("p",null,[d,a("a",u,[h,e(s)]),k,m,v,a("a",b,[x,e(s)])]),g,a("p",null,[_,a("a",f,[y,e(s)]),j]),w])}const E=p(l,[["render",N],["__file","mine-sweeper.html.vue"]]);export{E as default};
