import{_ as i,r as l,o as p,c,b as n,d as s,a as e,e as t}from"./app-4416975f.js";const o="/img/2.png",u="/img/3.png",r={},d=n("h2",{id:"使用技术",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用技术","aria-hidden":"true"},"#"),s(" 使用技术")],-1),k=n("p",null,"VuePress + vuepress-theme-reco",-1),m=n("h2",{id:"vuepress",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),s(" VuePress")],-1),v={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),b=n("h2",{id:"vuepress-theme-reco",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-theme-reco","aria-hidden":"true"},"#"),s(" vuepress-theme-reco")],-1),g={href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"},_=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"提示"),n("p",null,"此主题几乎继承 VuePress 默认主题的一切功能。")],-1),y=t(`<h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 <span class="token parameter variable">-g</span>
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体的使用方法可查阅官方文档</p><h2 id="部署到gitee-page-github-page" tabindex="-1"><a class="header-anchor" href="#部署到gitee-page-github-page" aria-hidden="true">#</a> 部署到Gitee Page&amp;GitHub Page</h2><h3 id="gitee-page" tabindex="-1"><a class="header-anchor" href="#gitee-page" aria-hidden="true">#</a> Gitee Page</h3>`,5),f=n("br",null,null,-1),w={href:"https://czj_1051029537.gitee.io?_blank",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),q=n("br",null,null,-1),P=n("img",{src:o,style:{width:"80%"}},null,-1),C=n("br",null,null,-1),E=n("img",{src:u},null,-1),V=t(`<h3 id="github-page" tabindex="-1"><a class="header-anchor" href="#github-page" aria-hidden="true">#</a> GitHub Page</h3><p>流程类似于gitee</p><h3 id="自动推送和部署" tabindex="-1"><a class="header-anchor" href="#自动推送和部署" aria-hidden="true">#</a> 自动推送和部署</h3><p>在根目录创建一个shell文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span>  <span class="token string">&quot;请填写commit提交的信息:&quot;</span> msg

<span class="token comment"># 空值判断</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token variable">$msg</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>  
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;终止提交，因为提交说明为空。&quot;</span>
<span class="token keyword">else</span>
    <span class="token comment"># 打包</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>开始打包......&quot;</span>
    <span class="token function">npm</span> run build
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>打包完成！&quot;</span>
    
    <span class="token comment"># 添加到暂存区</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>开始执行add-commit操作......&quot;</span>
    <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
    
    <span class="token comment"># 提交</span>
    <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;<span class="token variable">$msg</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;commit完毕，开始拉取以及推送代码<span class="token entity" title="\\n">\\n</span>&quot;</span>
    
    <span class="token comment"># 推送到github</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;开始推送到github<span class="token entity" title="\\n">\\n</span>&quot;</span>
    <span class="token function">git</span> push github master
    
    <span class="token comment"># 推送到gitee</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;开始推送到gitee<span class="token entity" title="\\n">\\n</span>&quot;</span>
    <span class="token function">git</span> push gitee master

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>流程结束，完成提交。&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>出错了,请解决错误&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>github ci/cd文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> CI

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 触发条件：在 push 到 master 分支后</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;master&quot;</span> <span class="token punctuation">]</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;master&quot;</span> <span class="token punctuation">]</span>

  <span class="token comment"># 允许您从“操作”选项卡手动运行此工作流</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token comment"># 任务</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token comment"># 服务器环境：最新版 Ubuntu</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token comment"># Steps represent a sequence of tasks that will be executed as part of the job</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 拉取代码</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a one<span class="token punctuation">-</span>line script
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo Hello<span class="token punctuation">,</span> world<span class="token tag">!</span>

      <span class="token comment"># 生成静态文件</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token important">&amp;&amp;</span> npm run build

      <span class="token comment"># 部署到 GitHub Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@releases/v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 也就是我们刚才生成的 secret</span>
          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages <span class="token comment"># 部署到 gh-pages 分支，因为 master 分支存放的一般是源码，而 gh-pages 分支则用来存放生成的静态文件</span>
          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> dist <span class="token comment"># vuepress 生成的静态文件存放的地方</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在终端执行 sh deploy.sh即可自动推送及部署</p>`,8),j=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"提示"),n("p",null,"Gitee Pages 个人版不支持提交自动更新，需要手动更新。")],-1);function B(N,G){const a=l("ExternalLinkIcon");return p(),c("div",null,[d,k,m,n("p",null,[n("a",v,[s("VuePress2官方文档"),e(a)]),h,s(" 由于使用的是主题，所以不用vuepress创建项目")]),b,n("p",null,[n("a",g,[s("vuepress-theme-reco文档地址"),e(a)])]),_,y,n("p",null,[s("1.新建仓库"),f,s(" 使用 "),n("a",w,[s("czj_1051029537.gitee.io"),e(a)]),s(" 访问首页，不带二级目录的 pages，需要建立一个与自己个性地址同名的仓库。"),x,s(" 2.提交代码至创建的仓库"),q,P,s(" 3.部署gitee page"),C,E]),V,j])}const H=i(r,[["render",B],["__file","20221001.html.vue"]]);export{H as default};
