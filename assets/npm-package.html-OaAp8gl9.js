import{_ as n,c as a,d as e,o as l}from"./app-Dlxm6KHK.js";const i={};function p(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="包名冲突的解决方案" tabindex="-1"><a class="header-anchor" href="#包名冲突的解决方案"><span>包名冲突的解决方案</span></a></h2><h3 id="_1-使用-scoped-package-推荐" tabindex="-1"><a class="header-anchor" href="#_1-使用-scoped-package-推荐"><span>1. 使用 Scoped Package（推荐）</span></a></h3><p>Scoped Package 是 npm 提供的最佳解决方案，使用 <code>@用户名/包名</code> 的格式：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;@your-username/package-name&quot;</span>,</span>
<span class="line">  <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0.0&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 发布命令</span></span>
<span class="line"><span class="token function">npm</span> publish <span class="token parameter variable">--access</span> public</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：</p><ul><li>不会与其他包冲突</li><li>清晰表明包的所有者</li><li>适合个人和组织使用</li><li>更专业的形象</li></ul><p>注意：首次发布需要添加 <code>--access public</code> 参数，否则默认为私有包（需要付费）。</p><h3 id="_2-使用替代名称" tabindex="-1"><a class="header-anchor" href="#_2-使用替代名称"><span>2. 使用替代名称</span></a></h3><p>如果不想使用 scoped package，可以通过修改包名来避免冲突：</p><ol><li>添加前缀或后缀：</li></ol><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-package-name&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;package-name-js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;package-name-plus&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用更具描述性的名称：</li></ol><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;better-package-name&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;enhanced-package-name&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-联系原包作者" tabindex="-1"><a class="header-anchor" href="#_3-联系原包作者"><span>3. 联系原包作者</span></a></h3><p>如果原包：</p><ul><li>长期未维护（通常超过1年）</li><li>已废弃（deprecated）</li><li>功能与你的完全不同</li></ul><p>你可以：</p><ol><li>在原包的 GitHub 仓库提 issue</li><li>通过 npm 网站联系包作者</li><li>向 npm support 请求转让包名</li></ol><h2 id="检查包名是否可用" tabindex="-1"><a class="header-anchor" href="#检查包名是否可用"><span>检查包名是否可用</span></a></h2><p>在发布前，可以通过以下方式检查包名：</p><ol><li>npm 官网搜索：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 访问 npmjs.com 搜索包名</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>命令行检查：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 检查包名是否已存在</span></span>
<span class="line"><span class="token function">npm</span> view package-name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果返回 404，说明包名可用</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>使用 npm-name-cli 工具：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装工具</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> npm-name-cli</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查包名</span></span>
<span class="line">npm-name package-name</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布包的最佳实践" tabindex="-1"><a class="header-anchor" href="#发布包的最佳实践"><span>发布包的最佳实践</span></a></h2><h3 id="_1-包名命名规范" tabindex="-1"><a class="header-anchor" href="#_1-包名命名规范"><span>1. 包名命名规范</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 允许的格式</span></span>
<span class="line">my-package</span>
<span class="line">@scope/my-package</span>
<span class="line">@scope%2fmy-package</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 不允许的格式</span></span>
<span class="line">My-Package  <span class="token comment"># 不能有大写字母</span></span>
<span class="line">.my-package <span class="token comment"># 不能以点开头</span></span>
<span class="line">_my-package <span class="token comment"># 不能以下划线开头</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-发布前检查清单" tabindex="-1"><a class="header-anchor" href="#_2-发布前检查清单"><span>2. 发布前检查清单</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1. 确保 package.json 配置正确</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;@your-scope/package-name&quot;</span>,</span>
<span class="line">  <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0.0&quot;</span>,</span>
<span class="line">  <span class="token string">&quot;main&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;index.js&quot;</span>,</span>
<span class="line">  <span class="token string">&quot;files&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dist/&quot;</span>, <span class="token string">&quot;README.md&quot;</span><span class="token punctuation">]</span>,</span>
<span class="line">  <span class="token string">&quot;publishConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;access&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;public&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 检查 .gitignore 和 .npmignore</span></span>
<span class="line">node_modules/</span>
<span class="line">*.log</span>
<span class="line">.DS_Store</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 确保包含必要文件</span></span>
<span class="line">- README.md</span>
<span class="line">- LICENSE</span>
<span class="line">- package.json</span>
<span class="line">- 主要代码文件</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 测试打包结果</span></span>
<span class="line"><span class="token function">npm</span> pack  <span class="token comment"># 创建 .tgz 文件但不发布</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-发布流程" tabindex="-1"><a class="header-anchor" href="#_3-发布流程"><span>3. 发布流程</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1. 登录 npm</span></span>
<span class="line"><span class="token function">npm</span> login</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 检查当前 npm 用户</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">whoami</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 发布包</span></span>
<span class="line"><span class="token function">npm</span> publish <span class="token parameter variable">--access</span> public</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 检查发布结果</span></span>
<span class="line"><span class="token function">npm</span> view @your-scope/package-name</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-版本管理" tabindex="-1"><a class="header-anchor" href="#_4-版本管理"><span>4. 版本管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 更新版本号</span></span>
<span class="line"><span class="token function">npm</span> version patch  <span class="token comment"># 补丁版本 0.0.x</span></span>
<span class="line"><span class="token function">npm</span> version minor  <span class="token comment"># 次要版本 0.x.0</span></span>
<span class="line"><span class="token function">npm</span> version major  <span class="token comment"># 主要版本 x.0.0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 发布新版本</span></span>
<span class="line"><span class="token function">npm</span> publish</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题解决" tabindex="-1"><a class="header-anchor" href="#常见问题解决"><span>常见问题解决</span></a></h2><h3 id="_1-发布失败" tabindex="-1"><a class="header-anchor" href="#_1-发布失败"><span>1. 发布失败</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 403 错误 - 包名已存在</span></span>
<span class="line"><span class="token comment"># 解决：使用 scope 或更换包名</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 402 错误 - 私有包需要付费</span></span>
<span class="line"><span class="token comment"># 解决：添加 --access public</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 401 错误 - 未登录或 token 过期</span></span>
<span class="line"><span class="token comment"># 解决：重新登录</span></span>
<span class="line"><span class="token function">npm</span> login</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-撤销发布" tabindex="-1"><a class="header-anchor" href="#_2-撤销发布"><span>2. 撤销发布</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 撤销特定版本（72小时内）</span></span>
<span class="line"><span class="token function">npm</span> unpublish package-name@1.0.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 撤销整个包（慎用）</span></span>
<span class="line"><span class="token function">npm</span> unpublish package-name <span class="token parameter variable">--force</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>记住：npm 的包一旦发布，72小时后就不能撤销了，所以发布前要仔细检查。建议先用 <code>npm pack</code> 测试打包结果。</p>`,41)]))}const d=n(i,[["render",p]]),o=JSON.parse('{"path":"/blogs/code/npm-package.html","title":"如何发布一个npm包","lang":"en-US","frontmatter":{"title":"如何发布一个npm包","date":"2025/07/20","tags":["npm","JavaScript"],"categories":["code"]},"headers":[{"level":2,"title":"包名冲突的解决方案","slug":"包名冲突的解决方案","link":"#包名冲突的解决方案","children":[{"level":3,"title":"1. 使用 Scoped Package（推荐）","slug":"_1-使用-scoped-package-推荐","link":"#_1-使用-scoped-package-推荐","children":[]},{"level":3,"title":"2. 使用替代名称","slug":"_2-使用替代名称","link":"#_2-使用替代名称","children":[]},{"level":3,"title":"3. 联系原包作者","slug":"_3-联系原包作者","link":"#_3-联系原包作者","children":[]}]},{"level":2,"title":"检查包名是否可用","slug":"检查包名是否可用","link":"#检查包名是否可用","children":[]},{"level":2,"title":"发布包的最佳实践","slug":"发布包的最佳实践","link":"#发布包的最佳实践","children":[{"level":3,"title":"1. 包名命名规范","slug":"_1-包名命名规范","link":"#_1-包名命名规范","children":[]},{"level":3,"title":"2. 发布前检查清单","slug":"_2-发布前检查清单","link":"#_2-发布前检查清单","children":[]},{"level":3,"title":"3. 发布流程","slug":"_3-发布流程","link":"#_3-发布流程","children":[]},{"level":3,"title":"4. 版本管理","slug":"_4-版本管理","link":"#_4-版本管理","children":[]}]},{"level":2,"title":"常见问题解决","slug":"常见问题解决","link":"#常见问题解决","children":[{"level":3,"title":"1. 发布失败","slug":"_1-发布失败","link":"#_1-发布失败","children":[]},{"level":3,"title":"2. 撤销发布","slug":"_2-撤销发布","link":"#_2-撤销发布","children":[]}]}],"git":{"createdTime":1753693697000,"updatedTime":1753693697000,"contributors":[{"name":"Cao Zhijie","email":"1051029537@qq.com","commits":1}]},"filePathRelative":"blogs/code/npm-package.md"}');export{d as comp,o as data};
