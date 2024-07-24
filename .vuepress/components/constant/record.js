const record = {
  1: [
      {
          title: "2017年11月20日",
          content: "首次5公里 37:30",
          content2: "中国计量大学北操场"
      },
      {
          title: "2020年9月8日",
          content: "PB 28:51"
      },
      {
          title: "2020年9月20日",
          content: "PB 28:22"
      },
      {
          title: "2020年9月21日",
          content: "PB 27:16"
      },
      {
          title: "2020年10月1日",
          content: "10公里前5公里 PB 27:16",
          content2: "凤凰湖"
      },
      {
          title: "2020年10月2日",
          content: "PB 24:44",
          content2: "桐乡"
      },
      {
          title: "2020年10月20日",
          content: "PB 24:03",
          content2: "中国计量大学北操场"
      },
      {
          title: "2020年10月23日",
          content: "PB 23:32",
          content2: "中国计量大学北操场"
      },
      {
          title: "2021年12月10日",
          content: "PB 22:23",
          content2: "余杭塘河绿道"
      },
      {
          title: "2023年12月31日",
          content: "PB 21:51",
          content2: "浙江路跑10公里大众达标系列赛(嘉兴站) 5公里分段"
      }
  ],
  2: [
      {
          title: "2020年10月1日",
          content: "首次10公里 57:31",
          content2: "凤凰湖"
      },
      {
          title: "2020年10月9日",
          content: "PB 55:00",
          content2: "中国计量大学北操场"
      },
      {
          title: "2020年10月19日",
          content: "PB 51:40",
          content2: "中国计量大学北操场"
      },
      {
          title: "2020年10月24日",
          content: "PB 50:33",
          content2: "中国计量大学北操场"
      },
      {
          title: "2021年11月27日",
          content: "PB 48:25",
          content2: "自测"
      },
      {
          title: "2023年4月25日",
          content: "PB 47:51",
          content2: "自测"
      },
      {
          title: "2023年4月30日",
          content: "半马的10公里分段 PB 47:09",
          content2: "龙游马拉松"
      },
      {
          title: "2023年5月20日",
          content: "PB 45:19",
          content2: "嘉善大云中国10公里精英赛"
      },
      {
          title: "2023年12月31日",
          content: "PB 43:45",
          content2: "浙江路跑10公里大众达标系列赛(嘉兴站)"
      },
  ],
  3: [
      {
          title: "2021年10月30日",
          content: "首次半马 01:53:43",
          content2: "余杭塘河绿道"
      },
      {
          title: "2022年11月05日",
          content: "PB 01:52:21",
          content2: "桐乡"
      },
      {
          title: "2022年11月26日",
          content: "PB 01:48:30",
          content2: "桐乡"
      },
      {
          title: "2023年04月30日",
          content: "PB 01:44:15",
          content2: "龙游马拉松",
          pl: 2162.6
      },
      {
          title: "2023年10月29日",
          content: "PB 01:40:52",
          content2: "桐庐半程马拉松",
          pl: 2706.53  // 543.93km 提升203s
      },
      {
          title: "2023年11月19日",
          content: "PB 01:40:38",
          content2: "苏州环太湖1号公路马拉松",
          pl: 2786.03 // 79.5km 提升 14s
      },
      {
          title: "2023年12月10日",
          content: "PB 01:39:29",
          content2: "诸暨西施马拉松",
          pl: 2879.62 // 93.59km 提升69s
      },
      {
          title: "2024年3月31日",
          content: "PB 01:37:38",
          content2: "杭州梦想小镇半程马拉松",
          pl: 3353.46 // 473.84km 提升119s
      },
      {
          title: "2024年5月5日",
          content: "PB 01:35:09",
          content2: "苏州太湖数字半程马拉松",
          pl: 3504.91 // 151.45km 提升149s
      },
  ]
}

const raceRecord = [
    {
        "lng": 120.87317734214407,
        "lat": 30.388801414513747,
        name: '2023南北湖越野赛',
        date: '2023-4-9'
    },
    {
        "lng": 119.20210155115822,
        "lat": 29.04682334817903,
        name: '2023龙游马拉松',
        date: '2023-4-31'
    },
    {
        "lng": 120.26223336078803,
        "lat": 31.56998922404184,
        name: '2023无锡惠山越野赛',
        date: '2023-5-14'
    },
    {
        "lng": 120.98224293505318,
        "lat": 30.81585615868791,
        name: '中国10公里精英赛',
        date: '2023-5-20'
    },
    {
        "lng": 120.34042235355406,
        "lat": 31.36652255412531,
        name: '苏州太湖精英赛',
        date: '2023-6-24'
    },
    {
        "lng": 120.55926295155892,
        "lat": 31.298663519194648,
        name: '2023苏州太湖马拉松',
        date: '2023-10-22'
    },
    {
        "lng": 119.69554496905323,
        "lat": 29.79677568104662,
        name: '2023桐庐半马',
        date: '2023-10-29'
    },
    {
        "lng": 120.41147329440689,
        "lat": 30.630484095014577,
        name: '2023河山马拉松',
        date: '2023-11-12'
    },
    {
        "lng": 120.41147329440689,
        "lat": 30.630484095014577,
        name: '2023苏州1号公路马',
        date: '2023-11-19'
    },
    {
        "lng": 120.56250768435906,
        "lat": 30.673253970808577,
        name: '2023桐乡半马',
        date: '2023-12-3'
    },
    {
        "lng": 120.25075339465701,
        "lat": 29.712958656031184,
        name: '2023诸暨马拉松',
        date: '2023-12-10'
    },
    {
        "lng": 119.93113642396513,
        "lat": 30.593452481201297,
        name: '2023莫干山马拉松',
        date: '2023-12-24'
    },
    {
        "lng": 120.69706521330673,
        "lat": 30.777804463037445,
        name: '嘉兴10公里达标赛',
        date: '2023-12-31'
    },
    {
        "lng": 120.35390293086589,
        "lat": 29.953051645183443,
        name: '店口越野赛',
        date: '2024-3-3'
    },
    {
        "lng": 120.27486090675518,
        "lat": 30.419310051806956,
        name: '临平之巅山径赛',
        date: '2024-3-10'
    },
    {
        "lng": 120.01436393612018,
        "lat": 30.301108001036756,
        name: '2024梦想小镇半马',
        date: '2024-3-31'
    },
    {
        "lng": 120.61713580010816,
        "lat": 31.142508378479196,
        name: '2024东太湖半马',
        date: '2024-4-7'
    },
    {
        "lng": 120.2110825269872,
        "lat": 30.21902315253451,
        name: '滨江天街开春跑',
        date: '2024-4-13'
    },
    {
        "lng": 120.70698140536106,
        "lat": 31.302888694863526,
        name: '2024苏州马拉松',
        date: '2024-4-14'
    },
    {
        "lng": 120.34088805817953,
        "lat": 31.366958199424584,
        name: '2024太湖数字半马',
        date: '2024-5-5'
    },
    {
        "lng": 120.49923780008845,
        "lat": 29.741290626298877,
        name: '赵家镇越野赛',
        date: '2024-5-12'
    },
    {
        "lng": 121.0079270915161,
        "lat": 30.078606117418527,
        name: '2024牟山湖半马',
        date: '2024-5-26'
    },
    {
        "lng": 119.82935531208153,
        "lat": 31.121099150499656,
        name: '水口越野赛',
        date: '2024-6-1'
    },
    {
        "lng": 120.1216003991972,
        "lat": 30.20044547902649,
        name: '踏云九溪山径赛',
        date: '2024-7-7'
    }
]

export {
  record,
  raceRecord
}