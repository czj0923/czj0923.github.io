export const sidebar = {
  '/component/': [
    {
      text: '通用组件',
      items: [
        {
          text: '按钮 Button',
          docFooterText: '111111',
          link: '/component/button'
        }
      ]
    },
    {
      text: '数据录入组件',
      items: [
        {
          text: '输入框 Input',
          link: '/component/input'
        }
      ]
    },
    {
      text: '数据展示组件',
      items: [
        {
          text: '文本省略 Ellipsis',
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
          link: '/frontend/es6/'
        }
      ]
    },
    {
      text: 'HTML/CSS',
      collapsed: false,
      items: [
        {
          text: 'HTML 理论知识点',
          link: '/frontend/html/html'
        },
        {
          text: 'CSS 理论知识点',
          link: '/frontend/html/css'
        }
      ]
    },
    {
      text: 'webpack',
      collapsed: false,
      items: [
        {
          text: 'Webpack',
          link: '/frontend/webpack/'
        }
      ]
    },
    {
      text: '浏览器与网络',
      collapsed: false,
      items: [
        {
          text: '浏览器相关',
          link: '/frontend/network/browser'
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
          link: '/frontend/coding/'
        }
      ]
    }
  ],
  '/ride/': [
    {
      text: '笔记',
      items: [
        {
          text: '骑行攻略',
          link: '/ride/a-1'
        }
      ]
    }
    // {
    //   text: '记录',
    //   children: ['b-1/']
    // }
  ],
  '/climbing/': [
    {
      text: '笔记',
      items: [
        {
          text: '爬山攻略',
          link: '/climbing/a-1'
        },
        {
          text: '杭州徒步登山线路推荐',
          link: '/climbing/a-2/'
        },
        {
          text: '标毅线首刷',
          link: '/climbing/a-3/'
        }
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
};
