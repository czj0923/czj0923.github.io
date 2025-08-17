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
  '/run/': [
    {
      text: '笔记',
      items: [
        {
          text: '跑步历程',
          link: '/run/a-1'
        },
        {
          text: '中国田协大众选手中长跑达标成绩',
          link: '/run/a-2/'
        },
        {
          text: '10公里成绩预测半马全马成绩',
          link: '/run/a-3/'
        },
        {
          text: 'PB记录',
          link: '/run/a-4'
        },
        // {
        //   text: "跑量统计图",
        //   link: "/run/a-5"
        // },
        {
          text: 'PB走势图',
          link: '/run/a-6'
        }
      ]
    },
    {
      text: '比赛记录',
      collapsed: false,
      items: [
        {
          text: '2023龙游马拉松',
          link: '/run/b-2'
        },
        {
          text: '2023嘉善大云中国10公里精英赛',
          link: '/run/b-4'
        },
        {
          text: '2023江苏太湖精英赛',
          link: '/run/b-5'
        },
        {
          text: '2023苏州太湖马拉松',
          link: '/run/b-6'
        },
        {
          text: '2023桐庐半程马拉松',
          link: '/run/b-7'
        },
        {
          text: '2023河山马拉松',
          link: '/run/b-8'
        },
        {
          text: '2023苏州环太湖1号公路马拉松',
          link: '/run/b-9'
        },
        {
          text: '2023桐乡半程马拉松',
          link: '/run/b-10'
        },
        {
          text: '2023诸暨西施马拉松',
          link: '/run/b-11'
        },
        {
          text: '2023德清莫干山竹海马拉松',
          link: '/run/b-12'
        },
        {
          text: '嘉兴10公里大众等级达标系列赛',
          link: '/run/b-13'
        },
        {
          text: '2024杭州梦想小镇半程马拉松',
          link: '/run/b-14'
        },
        {
          text: '2024苏州东太湖半程马拉松',
          link: '/run/b-15'
        },
        {
          text: '2024苏州马拉松',
          link: '/run/b-16'
        },
        {
          text: '2024苏州太湖数字半程马拉松',
          link: '/run/b-17'
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
    },
  ],
  '/trail/': [
    {
      text: '笔记',
      items: [
        {
          text: '个人介绍',
          link: '/trail/a-1'
        },
        { text: '越野入门首野建议', link: '/trail/a-2/' }
      ]
    },
    {
      text: '比赛记录',
      collapsed: false,
      items: [
        {
          text: 'salomon409南北湖越野跑',
          link: '/trail/b-1'
        },
        {
          text: 'salomon514惠山越野跑',
          link: '/trail/b-2'
        },
        {
          text: '诸暨店口越野赛',
          link: '/trail/b-3'
        },
        {
          text: '临平之巅山径赛',
          link: '/trail/b-4'
        },
        {
          text: '西施100越野赛赵家站',
          link: '/trail/b-5'
        },
        {
          text: '水口镇越野赛',
          link: '/trail/b-6'
        },
        {
          text: '踏云九溪山径赛',
          link: '/trail/b-7'
        },
        {
          text: '碧岩寺夜跑',
          link: '/trail/b-8'
        },
        {
          text: '2024凯乐石FUGA训练赛光福落日跑',
          link: '/trail/b-9'
        },
        {
          text: '拓野钱塘之泗乡奔月赛',
          link: '/trail/b-10'
        },
        {
          text: 'salomon月赛诸暨店口站',
          link: '/trail/b-11'
        },
        {
          text: 'salomon月赛杭州半山',
          link: '/trail/b-12'
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
