import{_ as n,c as s,d as a,o as i}from"./app-BvN1fAb4.js";const l={};function t(d,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h2 id="垂直水平居中" tabindex="-1"><a class="header-anchor" href="#垂直水平居中"><span>垂直水平居中</span></a></h2><h3 id="absolute-负margin-定宽高" tabindex="-1"><a class="header-anchor" href="#absolute-负margin-定宽高"><span>absolute + 负margin（定宽高）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">position:absolute;</span>
<span class="line">top:50%;</span>
<span class="line">left:50%;</span>
<span class="line">margin-left:-50px;</span>
<span class="line">margin-top:-50px;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="absolute-margin-auto-定宽高" tabindex="-1"><a class="header-anchor" href="#absolute-margin-auto-定宽高"><span>absolute + margin auto（定宽高）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">position:absolute;</span>
<span class="line">top:0;</span>
<span class="line">right:0;</span>
<span class="line">bottom:0;</span>
<span class="line">left:0;</span>
<span class="line">margin:auto;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="absolute-calc-定宽高" tabindex="-1"><a class="header-anchor" href="#absolute-calc-定宽高"><span>absolute + calc（定宽高）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">position:absolute;</span>
<span class="line">top: calc(50% - 50px);</span>
<span class="line">left: calc(50% - 50px);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex布局-不定宽高" tabindex="-1"><a class="header-anchor" href="#flex布局-不定宽高"><span>flex布局（不定宽高）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">display:flex;</span>
<span class="line">align-items:center;</span>
<span class="line">justify-content:center;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="absolute-transform-不定宽高" tabindex="-1"><a class="header-anchor" href="#absolute-transform-不定宽高"><span>absolute + transform（不定宽高）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">position:absolute;</span>
<span class="line">top:50%;</span>
<span class="line">left:50%;</span>
<span class="line">transform:translate(-50%,-50%);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lineheight-text-aign-行内元素" tabindex="-1"><a class="header-anchor" href="#lineheight-text-aign-行内元素"><span>lineheight + text-aign（行内元素）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">line-height:1;</span>
<span class="line">text-align:center;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid布局" tabindex="-1"><a class="header-anchor" href="#grid布局"><span>grid布局</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">display:grid;</span>
<span class="line"></span>
<span class="line">align-self:center;</span>
<span class="line">justify-self:center;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两栏布局" tabindex="-1"><a class="header-anchor" href="#两栏布局"><span>两栏布局</span></a></h2><h3 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局"><span>flex布局</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.outer{</span>
<span class="line">    display:flex;</span>
<span class="line">}</span>
<span class="line">.right{</span>
<span class="line">    flex:1;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="float-bfc" tabindex="-1"><a class="header-anchor" href="#float-bfc"><span>float + BFC</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.left{</span>
<span class="line">    float:left;</span>
<span class="line">}</span>
<span class="line">.right{</span>
<span class="line">    overflow:hidden;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="float-margin" tabindex="-1"><a class="header-anchor" href="#float-margin"><span>float + margin</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.left{</span>
<span class="line">    float:left;</span>
<span class="line">}</span>
<span class="line">.right{</span>
<span class="line">    margin-left:100px;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="float-calc" tabindex="-1"><a class="header-anchor" href="#float-calc"><span>float + calc</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.left{</span>
<span class="line">    float:left;</span>
<span class="line">}</span>
<span class="line">.right{</span>
<span class="line">    float:left;</span>
<span class="line">    width:calc(100% - 100px);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="左侧position-margin" tabindex="-1"><a class="header-anchor" href="#左侧position-margin"><span>左侧position + margin</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.outer{</span>
<span class="line">    position:relative;</span>
<span class="line">}</span>
<span class="line">.left{</span>
<span class="line">    position:absolute;</span>
<span class="line">}</span>
<span class="line">.right{</span>
<span class="line">    margin-left:100px;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="右侧position" tabindex="-1"><a class="header-anchor" href="#右侧position"><span>右侧position</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.outer{</span>
<span class="line">    position:relative;</span>
<span class="line">}</span>
<span class="line">.right{</span>
<span class="line">    position:absolute;</span>
<span class="line">    left:100px;</span>
<span class="line">    top:0;</span>
<span class="line">    right:0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="table布局" tabindex="-1"><a class="header-anchor" href="#table布局"><span>table布局</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.outer{</span>
<span class="line">    display:table;</span>
<span class="line">    width:100%;</span>
<span class="line">}</span>
<span class="line">.left,.right{</span>
<span class="line">    display:table-cell;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三栏布局" tabindex="-1"><a class="header-anchor" href="#三栏布局"><span>三栏布局</span></a></h2><ul><li>flex布局，父元素display:flex;中间元素flex:1;</li><li>float+margin，左侧左浮动，右侧右浮动，中间元素用margin空出两边</li><li>float+BFC，左侧左浮动，右侧右浮动，中间用overflow:hidden;创建BFC</li><li>positon，父元素position:relative;左元素position:absolute; top:0;left:0;, 右元素position:absolute; top:0;right:0; 中间元素用margin空出两边</li><li>table布局</li><li>双飞翼布局</li><li>圣杯布局</li></ul><h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc"><span>BFC</span></a></h2><p>BFC是Block Formatting Context的缩写，又叫块级格式化上下文，它是一块独立渲染的区域，里面的布局不会和外面发生相互影响</p><h6 id="触发bfc的方法" tabindex="-1"><a class="header-anchor" href="#触发bfc的方法"><span>触发bfc的方法</span></a></h6><ul><li>html根标签</li><li>overflow不为visible</li><li>float不为none</li><li>position为fixed或absolute</li><li>display为flex,inline-flex,table-cell,inline-block</li></ul><h6 id="bfc的作用" tabindex="-1"><a class="header-anchor" href="#bfc的作用"><span>BFC的作用</span></a></h6><ul><li>清除元素内部的浮动</li><li>防止margin塌陷</li><li>不和浮动元素重叠</li></ul><h2 id="css选择器有哪些" tabindex="-1"><a class="header-anchor" href="#css选择器有哪些"><span>css选择器有哪些</span></a></h2><table><thead><tr><th>选择器</th><th>权重</th></tr></thead><tbody><tr><td>id选择器</td><td>100</td></tr><tr><td>类选择器</td><td>10</td></tr><tr><td>属性选择器</td><td>10</td></tr><tr><td>伪类选择器</td><td>10</td></tr><tr><td>标签选择器</td><td>1</td></tr><tr><td>伪元素选择器</td><td>1</td></tr><tr><td>相邻兄弟选择器</td><td>0</td></tr><tr><td>子选择器</td><td>0</td></tr><tr><td>后代选择器</td><td>0</td></tr><tr><td>通配符选择器</td><td>0</td></tr></tbody></table><p>!important权重最大，行内样式权重1000</p><h2 id="对盒模型的理解" tabindex="-1"><a class="header-anchor" href="#对盒模型的理解"><span>对盒模型的理解</span></a></h2><p>盒模型有两种，标准盒模型和ie盒模型 标准盒模型的width和height就是content的宽高，ie盒模型的width和height包括border，padding和content 默认是标准盒模型，可以使box-sizing:border-box;来开启ie盒模型</p><h2 id="清除浮动的方法" tabindex="-1"><a class="header-anchor" href="#清除浮动的方法"><span>清除浮动的方法</span></a></h2><ul><li>给父元素给定高度</li><li>给父元素添加overflow:hidden;创建BFC</li><li>额外标签设置clear:both;</li><li>双伪元素</li></ul>`,45)]))}const c=n(l,[["render",t]]),p=JSON.parse('{"path":"/interview/css.html","title":"css","lang":"en-US","frontmatter":{"title":"css","date":"2022/07/07"},"headers":[{"level":2,"title":"垂直水平居中","slug":"垂直水平居中","link":"#垂直水平居中","children":[{"level":3,"title":"absolute + 负margin（定宽高）","slug":"absolute-负margin-定宽高","link":"#absolute-负margin-定宽高","children":[]},{"level":3,"title":"absolute + margin auto（定宽高）","slug":"absolute-margin-auto-定宽高","link":"#absolute-margin-auto-定宽高","children":[]},{"level":3,"title":"absolute + calc（定宽高）","slug":"absolute-calc-定宽高","link":"#absolute-calc-定宽高","children":[]},{"level":3,"title":"flex布局（不定宽高）","slug":"flex布局-不定宽高","link":"#flex布局-不定宽高","children":[]},{"level":3,"title":"absolute + transform（不定宽高）","slug":"absolute-transform-不定宽高","link":"#absolute-transform-不定宽高","children":[]},{"level":3,"title":"lineheight + text-aign（行内元素）","slug":"lineheight-text-aign-行内元素","link":"#lineheight-text-aign-行内元素","children":[]},{"level":3,"title":"grid布局","slug":"grid布局","link":"#grid布局","children":[]}]},{"level":2,"title":"两栏布局","slug":"两栏布局","link":"#两栏布局","children":[{"level":3,"title":"flex布局","slug":"flex布局","link":"#flex布局","children":[]},{"level":3,"title":"float + BFC","slug":"float-bfc","link":"#float-bfc","children":[]},{"level":3,"title":"float + margin","slug":"float-margin","link":"#float-margin","children":[]},{"level":3,"title":"float + calc","slug":"float-calc","link":"#float-calc","children":[]},{"level":3,"title":"左侧position + margin","slug":"左侧position-margin","link":"#左侧position-margin","children":[]},{"level":3,"title":"右侧position","slug":"右侧position","link":"#右侧position","children":[]},{"level":3,"title":"table布局","slug":"table布局","link":"#table布局","children":[]}]},{"level":2,"title":"三栏布局","slug":"三栏布局","link":"#三栏布局","children":[]},{"level":2,"title":"BFC","slug":"bfc","link":"#bfc","children":[]},{"level":2,"title":"css选择器有哪些","slug":"css选择器有哪些","link":"#css选择器有哪些","children":[]},{"level":2,"title":"对盒模型的理解","slug":"对盒模型的理解","link":"#对盒模型的理解","children":[]},{"level":2,"title":"清除浮动的方法","slug":"清除浮动的方法","link":"#清除浮动的方法","children":[]}],"git":{"createdTime":1682689223000,"updatedTime":1684245099000,"contributors":[{"name":"Cao Zhijie","email":"1051029537@qq.com","commits":3}]},"filePathRelative":"interview/css.md"}');export{c as comp,p as data};
