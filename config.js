// 配置
window.Config = {

  // 站点名
  SiteName: '梦璃雨落の网站们',

  // 站点链接
  SiteUrl: 'https://home.dreamfall.cn',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  //ApiDomain: 'api.uptimerobot.com',
  ApiDomain: 'uptime-status.mengluo.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur1383340-e7b0c45bd38d39cadb0b1622',
  ],
  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://home.dreamfall.cn'
    },
    {
      text: '博客',
      url: 'https://blog.dreamfall.cn'
    },
    {
      text: '网盘',
      url: 'https://pan.dreamfall.cn'
    }
  ]
};
