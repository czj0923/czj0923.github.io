import{_ as e,o as i,c as a,e as n}from"./app.6d5982fd.js";const d={},l=n(`<h2 id="\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u5782\u76F4\u6C34\u5E73\u5C45\u4E2D</h2><h3 id="absolute-\u8D1Fmargin-\u5B9A\u5BBD\u9AD8" tabindex="-1"><a class="header-anchor" href="#absolute-\u8D1Fmargin-\u5B9A\u5BBD\u9AD8" aria-hidden="true">#</a> absolute + \u8D1Fmargin\uFF08\u5B9A\u5BBD\u9AD8\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>position:absolute;
top:50%;
left:50%;
margin-left:-50px;
margin-top:-50px;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="absolute-margin-auto-\u5B9A\u5BBD\u9AD8" tabindex="-1"><a class="header-anchor" href="#absolute-margin-auto-\u5B9A\u5BBD\u9AD8" aria-hidden="true">#</a> absolute + margin auto\uFF08\u5B9A\u5BBD\u9AD8\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>position:absolute;
top:0;
right:0;
bottom:0;
left:0;
margin:auto;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="absolute-calc-\u5B9A\u5BBD\u9AD8" tabindex="-1"><a class="header-anchor" href="#absolute-calc-\u5B9A\u5BBD\u9AD8" aria-hidden="true">#</a> absolute + calc\uFF08\u5B9A\u5BBD\u9AD8\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>position:absolute;
top: calc(50% - 50px);
left: calc(50% - 50px);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex\u5E03\u5C40-\u4E0D\u5B9A\u5BBD\u9AD8" tabindex="-1"><a class="header-anchor" href="#flex\u5E03\u5C40-\u4E0D\u5B9A\u5BBD\u9AD8" aria-hidden="true">#</a> flex\u5E03\u5C40\uFF08\u4E0D\u5B9A\u5BBD\u9AD8\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>display:flex;
align-items:center;
justify-content:center;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="absolute-transform-\u4E0D\u5B9A\u5BBD\u9AD8" tabindex="-1"><a class="header-anchor" href="#absolute-transform-\u4E0D\u5B9A\u5BBD\u9AD8" aria-hidden="true">#</a> absolute + transform\uFF08\u4E0D\u5B9A\u5BBD\u9AD8\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lineheight-text-aign-\u884C\u5185\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#lineheight-text-aign-\u884C\u5185\u5143\u7D20" aria-hidden="true">#</a> lineheight + text-aign\uFF08\u884C\u5185\u5143\u7D20\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>line-height:1;
text-align:center;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#grid\u5E03\u5C40" aria-hidden="true">#</a> grid\u5E03\u5C40</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>display:grid;

align-self:center;
justify-self:center;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E24\u680F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E24\u680F\u5E03\u5C40" aria-hidden="true">#</a> \u4E24\u680F\u5E03\u5C40</h2><h3 id="flex\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#flex\u5E03\u5C40" aria-hidden="true">#</a> flex\u5E03\u5C40</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.outer{
    display:flex;
}
.right{
    flex:1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="float-bfc" tabindex="-1"><a class="header-anchor" href="#float-bfc" aria-hidden="true">#</a> float + BFC</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.left{
    float:left;
}
.right{
    overflow:hidden;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="float-margin" tabindex="-1"><a class="header-anchor" href="#float-margin" aria-hidden="true">#</a> float + margin</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.left{
    float:left;
}
.right{
    margin-left:100px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="float-calc" tabindex="-1"><a class="header-anchor" href="#float-calc" aria-hidden="true">#</a> float + calc</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.left{
    float:left;
}
.right{
    float:left;
    width:calc(100% - 100px);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5DE6\u4FA7position-margin" tabindex="-1"><a class="header-anchor" href="#\u5DE6\u4FA7position-margin" aria-hidden="true">#</a> \u5DE6\u4FA7position + margin</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.outer{
    position:relative;
}
.left{
    position:absolute;
}
.right{
    margin-left:100px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53F3\u4FA7position" tabindex="-1"><a class="header-anchor" href="#\u53F3\u4FA7position" aria-hidden="true">#</a> \u53F3\u4FA7position</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.outer{
    position:relative;
}
.right{
    position:absolute;
    left:100px;
    top:0;
    right:0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="table\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#table\u5E03\u5C40" aria-hidden="true">#</a> table\u5E03\u5C40</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.outer{
    display:table;
    width:100%;
}
.left,.right{
    display:table-cell;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u680F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E09\u680F\u5E03\u5C40" aria-hidden="true">#</a> \u4E09\u680F\u5E03\u5C40</h2><ul><li>flex\u5E03\u5C40\uFF0C\u7236\u5143\u7D20display:flex;\u4E2D\u95F4\u5143\u7D20flex:1;</li><li>float+margin\uFF0C\u5DE6\u4FA7\u5DE6\u6D6E\u52A8\uFF0C\u53F3\u4FA7\u53F3\u6D6E\u52A8\uFF0C\u4E2D\u95F4\u5143\u7D20\u7528margin\u7A7A\u51FA\u4E24\u8FB9</li><li>float+BFC\uFF0C\u5DE6\u4FA7\u5DE6\u6D6E\u52A8\uFF0C\u53F3\u4FA7\u53F3\u6D6E\u52A8\uFF0C\u4E2D\u95F4\u7528overflow:hidden;\u521B\u5EFABFC</li><li>positon\uFF0C\u7236\u5143\u7D20position:relative;\u5DE6\u5143\u7D20position:absolute; top:0;left:0;, \u53F3\u5143\u7D20position:absolute; top:0;right:0; \u4E2D\u95F4\u5143\u7D20\u7528margin\u7A7A\u51FA\u4E24\u8FB9</li><li>table\u5E03\u5C40</li><li>\u53CC\u98DE\u7FFC\u5E03\u5C40</li><li>\u5723\u676F\u5E03\u5C40</li></ul><h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h2><p>BFC\u662FBlock Formatting Context\u7684\u7F29\u5199\uFF0C\u53C8\u53EB\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF0C\u5B83\u662F\u4E00\u5757\u72EC\u7ACB\u6E32\u67D3\u7684\u533A\u57DF\uFF0C\u91CC\u9762\u7684\u5E03\u5C40\u4E0D\u4F1A\u548C\u5916\u9762\u53D1\u751F\u76F8\u4E92\u5F71\u54CD</p><h6 id="\u89E6\u53D1bfc\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1bfc\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u89E6\u53D1bfc\u7684\u65B9\u6CD5</h6><ul><li>html\u6839\u6807\u7B7E</li><li>overflow\u4E0D\u4E3Avisible</li><li>float\u4E0D\u4E3Anone</li><li>position\u4E3Afixed\u6216absolute</li><li>display\u4E3Aflex,inline-flex,table-cell,inline-block</li></ul><h6 id="bfc\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#bfc\u7684\u4F5C\u7528" aria-hidden="true">#</a> BFC\u7684\u4F5C\u7528</h6><ul><li>\u6E05\u9664\u5143\u7D20\u5185\u90E8\u7684\u6D6E\u52A8</li><li>\u9632\u6B62margin\u584C\u9677</li><li>\u4E0D\u548C\u6D6E\u52A8\u5143\u7D20\u91CD\u53E0</li></ul><h2 id="css\u9009\u62E9\u5668\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#css\u9009\u62E9\u5668\u6709\u54EA\u4E9B" aria-hidden="true">#</a> css\u9009\u62E9\u5668\u6709\u54EA\u4E9B</h2><table><thead><tr><th>\u9009\u62E9\u5668</th><th>\u6743\u91CD</th></tr></thead><tbody><tr><td>id\u9009\u62E9\u5668</td><td>100</td></tr><tr><td>\u7C7B\u9009\u62E9\u5668</td><td>10</td></tr><tr><td>\u5C5E\u6027\u9009\u62E9\u5668</td><td>10</td></tr><tr><td>\u4F2A\u7C7B\u9009\u62E9\u5668</td><td>10</td></tr><tr><td>\u6807\u7B7E\u9009\u62E9\u5668</td><td>1</td></tr><tr><td>\u4F2A\u5143\u7D20\u9009\u62E9\u5668</td><td>1</td></tr><tr><td>\u76F8\u90BB\u5144\u5F1F\u9009\u62E9\u5668</td><td>0</td></tr><tr><td>\u5B50\u9009\u62E9\u5668</td><td>0</td></tr><tr><td>\u540E\u4EE3\u9009\u62E9\u5668</td><td>0</td></tr><tr><td>\u901A\u914D\u7B26\u9009\u62E9\u5668</td><td>0</td></tr></tbody></table><p>!important\u6743\u91CD\u6700\u5927\uFF0C\u884C\u5185\u6837\u5F0F\u6743\u91CD1000</p><h2 id="\u5BF9\u76D2\u6A21\u578B\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u76D2\u6A21\u578B\u7684\u7406\u89E3" aria-hidden="true">#</a> \u5BF9\u76D2\u6A21\u578B\u7684\u7406\u89E3</h2><p>\u76D2\u6A21\u578B\u6709\u4E24\u79CD\uFF0C\u6807\u51C6\u76D2\u6A21\u578B\u548Cie\u76D2\u6A21\u578B \u6807\u51C6\u76D2\u6A21\u578B\u7684width\u548Cheight\u5C31\u662Fcontent\u7684\u5BBD\u9AD8\uFF0Cie\u76D2\u6A21\u578B\u7684width\u548Cheight\u5305\u62ECborder\uFF0Cpadding\u548Ccontent \u9ED8\u8BA4\u662F\u6807\u51C6\u76D2\u6A21\u578B\uFF0C\u53EF\u4EE5\u4F7Fbox-sizing:border-box;\u6765\u5F00\u542Fie\u76D2\u6A21\u578B</p><h2 id="\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u6CD5</h2><ul><li>\u7ED9\u7236\u5143\u7D20\u7ED9\u5B9A\u9AD8\u5EA6</li><li>\u7ED9\u7236\u5143\u7D20\u6DFB\u52A0overflow:hidden;\u521B\u5EFABFC</li><li>\u989D\u5916\u6807\u7B7E\u8BBE\u7F6Eclear:both;</li><li>\u53CC\u4F2A\u5143\u7D20</li></ul>`,45),t=[l];function s(r,c){return i(),a("div",null,t)}const u=e(d,[["render",s],["__file","css.html.vue"]]);export{u as default};
