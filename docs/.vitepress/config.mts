import { defineConfig } from 'vitepress';

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // base,
  lang: 'zh-cn',
  title: '橘子Orangeのblog',
  description: '橘子Orangeのblog',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/avatar.jpg' }],
    [
      'script',
      {
        type: 'text/javascript',
        src: 'https://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=RXIXcbIFD3HP7RBmzmGwoPoIGqLI0sCN&services=&t=20230613170744'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://api.map.baidu.com/res/webgl/10/bmap.css'
      }
    ]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/avatar.jpg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '工具',
        items: [
          { text: '时钟罗盘', link: '/clock' },
          { text: '参赛地图', link: '/map' },
          { text: '在线工具', link: '/nav' },
          { text: '常用导航', link: '/web-nav' }
        ]
      },
      {
        text: '爱好',
        items: [
          {
            text: '跑步',
            items: [
              { text: '介绍', link: '/hobby/run/a-1' },
              { text: '比赛记录', link: '/hobby/run/b-2' }
            ]
          },
          {
            text: '越野',
            items: [
              { text: '介绍', link: '/hobby/trail/a-1' },
              { text: '比赛记录', link: '/hobby/trail/b-1' }
            ]
          },
          {
            text: '爬山',
            items: [
              { text: '介绍', link: '/hobby/climbing/a-1' },
              { text: '记录', link: '/hobby/climbing/b-1' }
            ]
          },
          {
            text: '骑行',
            items: [
              { text: '介绍', link: '/hobby/ride/a-1' },
              { text: '记录', link: '/hobby/ride/b-1' }
            ]
          }
        ]
      },
      {
        text: '编程',
        items: [
          {
            text: '前端',
            items: [
              { text: 'JavaScript基础知识', link: '/frontend/js/types' },
              { text: 'ES6常用知识点', link: '/frontend/es6/1' },
              { text: 'HTML/CSS', link: '/frontend/html' },
              { text: '浏览器相关', link: '/frontend/browser' },
              { text: '编程题', link: '/frontend/coding' },
              { text: '八股文', link: '/interview/html' }
            ]
          },
          {
            text: '后端',
            items: [
              { text: 'php基础知识', link: '/php/foundation' },
              { text: '数据库', link: '/php/sql' }
            ]
          }
        ]
      },
      { text: '关于我', link: '/introduce' }
    ],
    sidebar: {
      '/component/': [
        {
          text: '通用组件',
          items: [
            {
              text: '按钮',
              link: '/component/button'
            }
          ]
        },
        {
          text: '数据录入组件',
          items: [
            {
              text: '输入框',
              link: '/component/input'
            }
          ]
        },
        {
          text: '数据展示组件',
          items: [
            {
              text: 'ellipsis',
              link: '/component/ellipsis'
            }
          ]
        },
        {
          text: '反馈组件',
          items: []
        }
      ],
      '/frontend/': [
        {
          text: 'JavaScript基础知识',
          collapsed: false,
          items: [
            {
              text: '数据类型',
              link: '/frontend/js/types'
            },
            {
              text: '引用类型的拷贝',
              link: '/frontend/js/clone'
            },
            {
              text: '类型转换',
              link: '/frontend/js/conversions'
            },
            {
              text: '原型和原型链',
              link: '/frontend/js/prototype'
            },
            {
              text: '继承',
              link: '/frontend/js/inherit'
            }
          ]
        },
        {
          text: 'ES6常用知识点',
          collapsed: false,
          items: [
            {
              text: 'ES6常用知识点',
              link: '/frontend/es6/1'
            }
          ]
        },
        {
          text: 'HTML/CSS',
          collapsed: false,
          items: [
            {
              text: 'HTML 理论知识点',
              link: '/frontend/html'
            },
            {
              text: 'CSS 理论知识点',
              link: '/frontend/css'
            }
          ]
        },
        {
          text: 'webpack',
          collapsed: false,
          items: [
            {
              text: 'Webpack',
              link: '/frontend/webpack'
            }
          ]
        },
        {
          text: '浏览器与网络',
           collapsed: false,
          items: [
            {
              text: '浏览器相关',
              link: '/frontend/browser'
            },
            {
              text: 'TCP',
              link: '/frontend/network/tcp'
            },
            {
              text: 'HTTP',
              link: '/frontend/network/http'
            }
          ]
        },
        {
          text: '编程题',
          collapsed: false,
          items: [
            {
              text: '编程题',
              link: '/frontend/coding'
            }
          ]
        }
      ],
      '/hobby/run/': [
        {
          text: '介绍',
          items: ['a-1', 'a-2/', 'a-3/']
        },
        {
          text: '比赛记录',
          items: [
            'b-2',
            'b-4',
            'b-5',
            'b-6',
            'b-7',
            'b-8',
            'b-9',
            'b-10',
            'b-11',
            'b-12',
            'b-13',
            'b-14',
            'b-15',
            'b-16',
            'b-17'
          ]
        },
        {
          text: '笔记',
          items: ['c-1', 'c-2', 'c-3']
        }
      ],
      '/hobby/ride/': [
        {
          text: '介绍',
          items: ['a-1']
        }
        // {
        //   text: '记录',
        //   children: ['b-1/']
        // }
      ],
      '/hobby/climbing/': [
        {
          text: '介绍',
          items: ['a-1', 'a-2/']
        },
        {
          text: '记录',
          items: ['b-1/']
        }
      ],
      '/hobby/trail/': [
        {
          text: '介绍',
          items: ['a-1', 'a-2']
        },
        {
          text: '比赛记录',
          items: [
            'b-1',
            'b-2',
            'b-3',
            'b-4',
            'b-5',
            'b-6',
            'b-7',
            'b-8',
            'b-9',
            'b-10',
            'b-11',
            'b-12'
          ]
        }
      ],
      '/interview/': [
        {
          text: '前端八股文',
          items: [
            {
              text: 'html',
              link: '/interview/html'
            },
            {
              text: 'css',
              link: '/interview/css'
            },
            {
              text: 'javascript',
              link: '/interview/js'
            },
            {
              text: 'vue',
              link: '/interview/vue'
            },
            {
              text: 'https',
              link: '/interview/https'
            },
            {
              text: 'webpack',
              link: '/interview/webpack'
            },
            {
              text: '浏览器原理',
              link: '/interview/browser'
            },
            {
              text: '手写题',
              link: '/interview/write'
            },
            {
              text: '性能优化',
              link: '/interview/performance'
            }
          ]
        }
      ],
      '/read/': [
        {
          text: '阅读',
          items: [
            {
              text: '逍遥游·北冥有鱼',
              link: '/read/1'
            },
            {
              text: '庄子·秋水',
              link: '/read/2'
            },
            {
              text: '道德经',
              link: '/read/3'
            },
            {
              text: '滕王阁序',
              link: '/read/4'
            },
            {
              text: '岳阳楼记',
              link: '/read/5'
            }
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/czj0923'
      },
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/~caozhijie'
      }
    ],
    footer: {
      message: '橘子Orangeのblog',
      copyright: 'Copyright © 2021-present Cao Zhijie'
    }
  }
});
