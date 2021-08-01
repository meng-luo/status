// 配置
window.Config = {

  // 站点名
  SiteName: '梦璃雨落の网站们',

  // 站点链接
  SiteUrl: 'https://www.ysbrid.top',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm788780454-94d468ec18022d249a1ae62e',
    'm788843351-25da3211d3a0d4ba0d78e634',
    'm788786821-b19b6f099293f7f3d8ec2428',
    'm788843358-d0fe6e92c7466278a5fd62ea',
    'm788791030-768d71c076bbb9f51dd14243',
    'm788814408-65cd54f1c27fac2311752385',
    'm788786846-d743f433e382272d12b16667',
    'm788843478-9d44cbf340ea36aa6250601b',
    'm788843486-03d2590d214e331603a497a4',
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
      text: '博客',
      url: 'https://www.ysbrid.top'
    },
    {
      text: '导航',
      url: 'https://nav.ysbrid.top'
    },
    {
      text: '网盘',
      url: 'https://drive.ysbrid.top'
    },
    {
      txet: '主页',
      url: 'https://home.ysbrid.top'
    }
  ]
};
