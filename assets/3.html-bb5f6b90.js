import{_ as s,r as a,o as l,c as d,b as e,d as n,a as r,e as t}from"./app-95b03150.js";const c={},o={href:"https://blog.csdn.net/CRMEB/article/details/119997159",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),h=t(`<h2 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装nginx</h2><p>有关brew常用的指令如下：</p><ul><li>brew搜索软件命令： brew search nginx</li><li>brew安装软件命令： brew install nginx</li><li>brew卸载软件命令: brew uninstall nginx</li><li>brew升级命令： sudo brew update 执行安装命令：brew install nginx<br> 查看nginx信息：brew info nginx<br> 进入目录使用：brew services start nginx 启动nginx</li></ul><p>nginx配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   server {
       listen 80;
       server_name bunan.backend.cn;
       root /Users/qiuxiaowen/PhpstormProjects/bunan_backend/public;
       index index.php index.html;
       location / {
           try_files $uri $uri/ /index.php$is_args$args;
       }
   
       location ~ \\.php$ {
          fastcgi_pass 127.0.0.1:9000;
          fastcgi_index index.php;
          include fastcgi_params;
          fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装php" tabindex="-1"><a class="header-anchor" href="#安装php" aria-hidden="true">#</a> 安装php</h2><p>3.通过命令：brew install php@7.4<br> 通过php -v查看版本<br> brew services list 看下服务器列表 可以停掉低版本<br> brew services start php@7.4</p><h2 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql" aria-hidden="true">#</a> 安装mysql</h2><p>安装：brew install mysql<br> 检验安装是否成功：msyql --version<br> 启动mysql：brew services start msyql</p><h2 id="使用brew安装phpredis扩展" tabindex="-1"><a class="header-anchor" href="#使用brew安装phpredis扩展" aria-hidden="true">#</a> 使用brew安装phpredis扩展</h2>`,10),p={href:"https://blog.csdn.net/qq_35894434/article/details/124626171",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"安装redis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装redis","aria-hidden":"true"},"#"),n(" 安装redis")],-1),v={href:"https://blog.csdn.net/m0_48936146/article/details/126304417",target:"_blank",rel:"noopener noreferrer"};function _(m,x){const i=a("ExternalLinkIcon");return l(),d("div",null,[e("p",null,[n("安装nginx+php+mysql "),e("a",o,[n("链接"),r(i)]),b,n(" 首先确认是否有安装工具honebrew")]),h,e("p",null,[e("a",p,[n("链接"),r(i)])]),u,e("p",null,[e("a",v,[n("链接"),r(i)])])])}const f=s(c,[["render",_],["__file","3.html.vue"]]);export{f as default};
