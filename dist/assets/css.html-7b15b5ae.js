import{_ as e,o as i,c as a,e as n}from"./app-8cbcf23b.js";const d={},l=n(`<h2 id="垂直水平居中" tabindex="-1"><a class="header-anchor" href="#垂直水平居中" aria-hidden="true">#</a> 垂直水平居中</h2><h3 id="absolute-负margin-定宽高" tabindex="-1"><a class="header-anchor" href="#absolute-负margin-定宽高" aria-hidden="true">#</a> absolute + 负margin（定宽高）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>position:absolute;
top:50%;
left:50%;
margin-left:-50px;
margin-top:-50px;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="absolute-margin-auto-定宽高" tabindex="-1"><a class="header-anchor" href="#absolute-margin-auto-定宽高" aria-hidden="true">#</a> absolute + margin auto（定宽高）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>position:absolute;
top:0;
right:0;
bottom:0;
left:0;
margin:auto;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="absolute-calc-定宽高" tabindex="-1"><a class="header-anchor" href="#absolute-calc-定宽高" aria-hidden="true">#</a> absolute + calc（定宽高）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>position:absolute;
top: calc(50% - 50px);
left: calc(50% - 50px);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex布局-不定宽高" tabindex="-1"><a class="header-anchor" href="#flex布局-不定宽高" aria-hidden="true">#</a> flex布局（不定宽高）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>display:flex;
align-items:center;
justify-content:center;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="absolute-transform-不定宽高" tabindex="-1"><a class="header-anchor" href="#absolute-transform-不定宽高" aria-hidden="true">#</a> absolute + transform（不定宽高）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lineheight-text-aign-行内元素" tabindex="-1"><a class="header-anchor" href="#lineheight-text-aign-行内元素" aria-hidden="true">#</a> lineheight + text-aign（行内元素）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>line-height:1;
text-align:center;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid布局" tabindex="-1"><a class="header-anchor" href="#grid布局" aria-hidden="true">#</a> grid布局</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>display:grid;

align-self:center;
justify-self:center;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两栏布局" tabindex="-1"><a class="header-anchor" href="#两栏布局" aria-hidden="true">#</a> 两栏布局</h2><h3 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局" aria-hidden="true">#</a> flex布局</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.outer{
    display:flex;
}
.right{
    flex:1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="float-bfc" tabindex="-1"><a class="header-anchor" href="#float-bfc" aria-hidden="true">#</a> float + BFC</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.left{
    float:left;
}
.right{
    overflow:hidden;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="float-margin" tabindex="-1"><a class="header-anchor" href="#float-margin" aria-hidden="true">#</a> float + margin</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.left{
    float:left;
}
.right{
    margin-left:100px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="float-calc" tabindex="-1"><a class="header-anchor" href="#float-calc" aria-hidden="true">#</a> float + calc</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.left{
    float:left;
}
.right{
    float:left;
    width:calc(100% - 100px);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="左侧position-margin" tabindex="-1"><a class="header-anchor" href="#左侧position-margin" aria-hidden="true">#</a> 左侧position + margin</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.outer{
    position:relative;
}
.left{
    position:absolute;
}
.right{
    margin-left:100px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="右侧position" tabindex="-1"><a class="header-anchor" href="#右侧position" aria-hidden="true">#</a> 右侧position</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.outer{
    position:relative;
}
.right{
    position:absolute;
    left:100px;
    top:0;
    right:0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="table布局" tabindex="-1"><a class="header-anchor" href="#table布局" aria-hidden="true">#</a> table布局</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.outer{
    display:table;
    width:100%;
}
.left,.right{
    display:table-cell;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三栏布局" tabindex="-1"><a class="header-anchor" href="#三栏布局" aria-hidden="true">#</a> 三栏布局</h2><ul><li>flex布局，父元素display:flex;中间元素flex:1;</li><li>float+margin，左侧左浮动，右侧右浮动，中间元素用margin空出两边</li><li>float+BFC，左侧左浮动，右侧右浮动，中间用overflow:hidden;创建BFC</li><li>positon，父元素position:relative;左元素position:absolute; top:0;left:0;, 右元素position:absolute; top:0;right:0; 中间元素用margin空出两边</li><li>table布局</li><li>双飞翼布局</li><li>圣杯布局</li></ul><h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h2><p>BFC是Block Formatting Context的缩写，又叫块级格式化上下文，它是一块独立渲染的区域，里面的布局不会和外面发生相互影响</p><h6 id="触发bfc的方法" tabindex="-1"><a class="header-anchor" href="#触发bfc的方法" aria-hidden="true">#</a> 触发bfc的方法</h6><ul><li>html根标签</li><li>overflow不为visible</li><li>float不为none</li><li>position为fixed或absolute</li><li>display为flex,inline-flex,table-cell,inline-block</li></ul><h6 id="bfc的作用" tabindex="-1"><a class="header-anchor" href="#bfc的作用" aria-hidden="true">#</a> BFC的作用</h6><ul><li>清除元素内部的浮动</li><li>防止margin塌陷</li><li>不和浮动元素重叠</li></ul><h2 id="css选择器有哪些" tabindex="-1"><a class="header-anchor" href="#css选择器有哪些" aria-hidden="true">#</a> css选择器有哪些</h2><table><thead><tr><th>选择器</th><th>权重</th></tr></thead><tbody><tr><td>id选择器</td><td>100</td></tr><tr><td>类选择器</td><td>10</td></tr><tr><td>属性选择器</td><td>10</td></tr><tr><td>伪类选择器</td><td>10</td></tr><tr><td>标签选择器</td><td>1</td></tr><tr><td>伪元素选择器</td><td>1</td></tr><tr><td>相邻兄弟选择器</td><td>0</td></tr><tr><td>子选择器</td><td>0</td></tr><tr><td>后代选择器</td><td>0</td></tr><tr><td>通配符选择器</td><td>0</td></tr></tbody></table><p>!important权重最大，行内样式权重1000</p><h2 id="对盒模型的理解" tabindex="-1"><a class="header-anchor" href="#对盒模型的理解" aria-hidden="true">#</a> 对盒模型的理解</h2><p>盒模型有两种，标准盒模型和ie盒模型 标准盒模型的width和height就是content的宽高，ie盒模型的width和height包括border，padding和content 默认是标准盒模型，可以使box-sizing:border-box;来开启ie盒模型</p><h2 id="清除浮动的方法" tabindex="-1"><a class="header-anchor" href="#清除浮动的方法" aria-hidden="true">#</a> 清除浮动的方法</h2><ul><li>给父元素给定高度</li><li>给父元素添加overflow:hidden;创建BFC</li><li>额外标签设置clear:both;</li><li>双伪元素</li></ul>`,45),t=[l];function s(r,c){return i(),a("div",null,t)}const u=e(d,[["render",s],["__file","css.html.vue"]]);export{u as default};
