export const sidebar = {
  '/component/': [
    {
      text: '通用组件',
      items: [{ text: '按钮 Button', link: '/component/button' }]
    },
    {
      text: '数据录入组件',
      items: [{ text: '输入框 Input', link: '/component/input' }]
    },
    {
      text: '数据展示组件',
      items: [{ text: '文本省略 Ellipsis', link: '/component/ellipsis' }]
    },
    { text: '反馈组件', items: [] }
  ],
  '/frontend/': [
    {
      text: 'JavaScript基础知识',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/frontend/js/types' },
        { text: '引用类型的拷贝', link: '/frontend/js/clone' },
        { text: '类型转换', link: '/frontend/js/conversions' },
        { text: '原型和原型链', link: '/frontend/js/prototype' },
        { text: '继承', link: '/frontend/js/inherit' }
      ]
    },
    {
      text: 'ES6常用知识点',
      collapsed: false,
      items: [{ text: 'ES6常用知识点', link: '/frontend/es6/es6' }]
    },
    {
      text: 'HTML/CSS',
      collapsed: false,
      items: [
        { text: 'HTML 理论知识点', link: '/frontend/html/html' },
        { text: 'CSS 理论知识点', link: '/frontend/html/css' }
      ]
    },
    {
      text: 'webpack',
      collapsed: false,
      items: [{ text: 'Webpack', link: '/frontend/webpack/' }]
    },
    {
      text: '浏览器与网络',
      collapsed: false,
      items: [
        { text: '浏览器相关', link: '/frontend/network/browser' },
        { text: 'TCP', link: '/frontend/network/tcp' },
        { text: 'HTTP', link: '/frontend/network/http' }
      ]
    },
    {
      text: '编程题',
      collapsed: false,
      items: [{ text: '编程题', link: '/frontend/coding/' }]
    }
  ],
  '/interview/': [
    {
      text: '前端八股文',
      items: [
        { text: 'html', link: '/interview/html' },
        { text: 'css', link: '/interview/css' },
        { text: 'javascript', link: '/interview/js' },
        { text: 'vue', link: '/interview/vue' },
        { text: 'https', link: '/interview/https' },
        { text: 'webpack', link: '/interview/webpack' },
        { text: '浏览器原理', link: '/interview/browser' },
        { text: '手写题', link: '/interview/write' },
        { text: '性能优化', link: '/interview/performance' }
      ]
    }
  ],
  '/read/': [
    {
      text: '阅读',
      items: [
        { text: '逍遥游·北冥有鱼', link: '/read/1' },
        { text: '庄子·秋水', link: '/read/2' },
        { text: '道德经', link: '/read/3' },
        { text: '滕王阁序', link: '/read/4' },
        { text: '岳阳楼记', link: '/read/5' }
      ]
    }
  ],
  '/run/': [
    {
      text: '笔记',
      collapsed: false,
      items: [
        {
          text: '跑步历程',
          collapsed: false,
          link: '/run/note/01.md',
          items: []
        },
        {
          text: 'PB记录',
          collapsed: false,
          link: '/run/note/04.md',
          items: []
        },
        {
          text: '跑量统计图',
          collapsed: false,
          link: '/run/note/05.md',
          items: []
        },
        {
          text: 'PB走势图',
          collapsed: false,
          link: '/run/note/06.md',
          items: []
        },
        {
          text: '中国田协大众选手中长跑达标成绩',
          collapsed: false,
          link: '/run/note/02/',
          items: []
        },
        {
          text: '10公里成绩预测半马全马成绩',
          collapsed: false,
          link: '/run/note/03/',
          items: []
        }
      ]
    },
    {
      text: '比赛记录',
      collapsed: false,
      items: [
        {
          text: '2023龙游马拉松',
          collapsed: false,
          link: '/run/race/2023-4-30.md',
          items: []
        },
        {
          text: '2023嘉善大云中国10公里精英赛',
          collapsed: false,
          link: '/run/race/2023-5-20.md',
          items: []
        },
        {
          text: '2023江苏太湖精英赛',
          collapsed: false,
          link: '/run/race/2023-6-24.md',
          items: []
        },
        {
          text: '2023苏州太湖马拉松',
          collapsed: false,
          link: '/run/race/2023-10-22.md',
          items: []
        },
        {
          text: '2023 桐庐半程马拉松',
          collapsed: false,
          link: '/run/race/2023-10-29.md',
          items: []
        },
        {
          text: '2023河山马拉松',
          collapsed: false,
          link: '/run/race/2023-11-12.md',
          items: []
        },
        {
          text: '2023苏州环太湖1号公路马拉松',
          collapsed: false,
          link: '/run/race/2023-11-19.md',
          items: []
        },
        {
          text: '2023年12月3日 桐乡半程马拉松',
          collapsed: false,
          link: '/run/race/2023-12-3.md',
          items: []
        },
        {
          text: '2023诸暨西施马拉松',
          collapsed: false,
          link: '/run/race/2023-12-10.md',
          items: []
        },
        {
          text: '2023德清莫干山竹海马拉松',
          collapsed: false,
          link: '/run/race/2023-12-24.md',
          items: []
        },
        {
          text: '嘉兴10公里大众等级达标系列赛',
          collapsed: false,
          link: '/run/race/2023-12-31.md',
          items: []
        },
        {
          text: '2024杭州梦想小镇半程马拉松',
          collapsed: false,
          link: '/run/race/2024-3-31.md',
          items: []
        },
        {
          text: '2024苏州东太湖半程马拉松',
          collapsed: false,
          link: '/run/race/2024-4-7.md',
          items: []
        },
        {
          text: '2024苏州马拉松',
          collapsed: false,
          link: '/run/race/2024-4-14.md',
          items: []
        },
        {
          text: '2024苏州太湖数字半程马拉松',
          collapsed: false,
          link: '/run/race/2024-5-5.md',
          items: []
        },
        {
          text: '2024余姚牟山湖半程马拉松',
          collapsed: false,
          link: '/run/race/2024-5-26.md',
          items: []
        },
        {
          text: '2024泰州马拉松',
          collapsed: false,
          link: '/run/race/2024-10-20.md',
          items: []
        },
        {
          text: '2024神仙湖半程马拉松',
          collapsed: false,
          link: '/run/race/2024-10-26.md',
          items: []
        },
        {
          text: '2024河山乡村半程马拉松',
          collapsed: false,
          link: '/run/race/2024-11-9.md',
          items: []
        },
        {
          text: '2024绍兴马拉松',
          collapsed: false,
          link: '/run/race/2024-11-10.md',
          items: []
        },
        {
          text: '2024沪浙乡村半程马拉松',
          collapsed: false,
          link: '/run/race/2024-11-17.md',
          items: []
        },
        {
          text: '2024嘉兴马拉松',
          collapsed: false,
          link: '/run/race/2024-11-24.md',
          items: []
        },
        {
          text: '2024乍浦山海半程马拉松',
          collapsed: false,
          link: '/run/race/2024-12-1.md',
          items: []
        },
        {
          text: '2024桐乡半程马拉松',
          collapsed: false,
          link: '/run/race/2024-12-8.md',
          items: []
        },
        {
          text: '2025苏州马拉松',
          collapsed: false,
          link: '/run/race/2025-3-2.md',
          items: []
        },
        {
          text: '2025崇福乡村健康跑',
          collapsed: false,
          link: '/run/race/2025-3-22.md',
          items: []
        },
        {
          text: '2025临平半程马拉松',
          collapsed: false,
          link: '/run/race/2025-3-23.md',
          items: []
        },
        {
          text: '2025杭州梦想小镇半程马拉松',
          collapsed: false,
          link: '/run/race/2025-3-30.md',
          items: []
        },
        {
          text: '2025海宁追潮半程马拉松',
          collapsed: false,
          link: '/run/race/2025-4-6.md',
          items: []
        },
        {
          text: '2025上海佘山半程马拉松',
          collapsed: false,
          link: '/run/race/2025-4-13.md',
          items: []
        },
        {
          text: '2025石门乡村健康跑',
          collapsed: false,
          link: '/run/race/2025-4-19.md',
          items: []
        },
        {
          text: '2025富阳半程马拉松',
          collapsed: false,
          link: '/run/race/2025-4-20.md',
          items: []
        },
        {
          text: '2025中国田径协会10公里精英赛',
          collapsed: false,
          link: '/run/race/2025-5-11.md',
          items: []
        },
        {
          text: '2025西湖半程马拉松',
          collapsed: false,
          link: '/run/race/2025-5-25.md',
          items: []
        }
      ]
    }
  ],
  '/trail/': [
    {
      text: '笔记',
      collapsed: false,
      items: [
        {
          text: '介绍',
          collapsed: false,
          link: '/trail/note/01.md',
          items: []
        },
        {
          text: '越野入门首野建议',
          collapsed: false,
          link: '/trail/note/02.md',
          items: []
        }
      ]
    },
    {
      text: '比赛记录',
      collapsed: false,
      items: [
        {
          text: 'salomon409南北湖越野跑',
          collapsed: false,
          link: '/trail/race/01.md',
          items: []
        },
        {
          text: 'salomon514惠山越野跑',
          collapsed: false,
          link: '/trail/race/02.md',
          items: []
        },
        {
          text: '诸暨店口越野赛',
          collapsed: false,
          link: '/trail/race/03.md',
          items: []
        },
        {
          text: '临平之巅山径赛',
          collapsed: false,
          link: '/trail/race/2024-3-10.md',
          items: []
        },
        {
          text: '西施100越野赛赵家站',
          collapsed: false,
          link: '/trail/race/05.md',
          items: []
        },
        {
          text: '水口镇越野赛',
          collapsed: false,
          link: '/trail/race/2024-6-1.md',
          items: []
        },
        {
          text: '踏云九溪山径赛',
          collapsed: false,
          link: '/trail/race/2024-7-7.md',
          items: []
        },
        {
          text: '碧岩寺夜跑',
          collapsed: false,
          link: '/trail/race/2024-7-27.md',
          items: []
        },
        {
          text: '2024凯乐石FUGA训练赛光福落日跑',
          collapsed: false,
          link: '/trail/race/2024-8-31.md',
          items: []
        },
        {
          text: '拓野钱塘之泗乡奔月赛',
          collapsed: false,
          link: '/trail/race/2024-9-17.md',
          items: []
        },
        {
          text: 'salomon月赛诸暨店口站',
          collapsed: false,
          link: '/trail/race/2024-9-21.md',
          items: []
        },
        {
          text: 'salomon月赛杭州半山',
          collapsed: false,
          link: '/trail/race/2024-9-22.md',
          items: []
        },
        {
          text: 'salomon月赛湖州西塞山',
          collapsed: false,
          link: '/trail/race/13.md',
          items: []
        }
      ]
    }
  ],
  '/climbing/': [
    {
      text: '笔记',
      collapsed: false,
      items: [
        {
          text: '爬山攻略',
          collapsed: false,
          link: '/climbing/01.md',
          items: []
        },
        {
          text: '杭州徒步登山线路推荐',
          collapsed: false,
          link: '/climbing/02/',
          items: []
        },
        {
          text: '标毅线首刷',
          collapsed: false,
          link: '/climbing/03/',
          items: []
        }
      ]
    }
  ],
  '/ride/': [
    {
      text: '笔记',
      collapsed: false,
      items: [
        { text: '骑行攻略', collapsed: false, link: '/ride/01.md', items: [] }
      ]
    }
  ],
  '/calendar/': [
    {
      text: '比赛日历',
      collapsed: false,
      items: [
        {
          text: '2023下半年马拉松越野参赛日历',
          collapsed: false,
          link: '/calendar/2023-a.md',
          items: []
        },
        {
          text: '2024上半年马拉松越野参赛日历',
          collapsed: false,
          link: '/calendar/2024-a.md',
          items: []
        },
        {
          text: '2024下半年马拉松越野参赛日历',
          collapsed: false,
          link: '/calendar/2024-b.md',
          items: []
        },
        {
          text: '2025上半年马拉松越野参赛日历',
          collapsed: false,
          link: '/calendar/2025-a.md',
          items: []
        },
        {
          text: '2025下半年马拉松越野参赛日历',
          collapsed: false,
          link: '/calendar/2025-b.md',
          items: []
        },
        {
          text: '2026上半年马拉松越野参赛日历',
          collapsed: false,
          link: '/calendar/2026-a.md',
          items: []
        }
      ]
    }
  ],
  '/analysis/': [
    {
      text: '源码解析',
      collapsed: false,
      items: [
        {
          text: '常用 vueuse 函数源码解析',
          collapsed: false,
          link: '/analysis/vueuse/',
          items: []
        }
      ]
    }
  ],
  '/php/': [
    {
      text: 'php',
      collapsed: false,
      items: [
        {
          text: 'php基础知识',
          collapsed: false,
          link: '/php/foundation.md',
          items: []
        },
        { text: 'sql', collapsed: false, link: '/php/sql.md', items: [] }
      ]
    }
  ],
  '/leetcode/': [
    {
      text: 'hot100题解',
      collapsed: false,
      items: [
        {
          text: '01.两数之和',
          collapsed: false,
          link: '/leetcode/hot100/01',
          items: []
        }
      ]
    }
  ],
  '/travel/': [
    {
      text: '旅行指南',
      collapsed: false,
      link: '/travel/',
      items: [
        {
          text: '规划指南',
          collapsed: false,
          link: '/travel/',
          items: []
        },
        {
          text: '探索地图',
          collapsed: false,
          link: '/travel/map',
          items: []
        },
        {
          text: '山东',
          collapsed: false,
          items: [
            {
              text: '青岛',
              collapsed: false,
              link: '/travel/guide/shandong/qingdao',
              items: []
            }
          ]
        },
        {
          text: '浙江',
          collapsed: false,
          items: [
            {
              text: '嘉兴',
              collapsed: false,
              link: '/travel/guide/zhejiang/jiaxing',
              items: []
            }
          ]
        }
      ]
    }
  ]
};
