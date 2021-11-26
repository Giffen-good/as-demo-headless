const Config = {
  appTitle: 'Art & Science Demo',
  appTitleShort: 'as-demo',
  appDescription: 'Demo for the AS dev team',
  appThemeColor: '#001e45',
  appBgColor: '#001e45',
  wpDomain: 'http://20.151.161.178',
  loadDbName: 'as_demo',
  api: {
    getFrontPage: '/wp-json/wp/v2/pages/28?acf_format=standard',
    getCustomPosts: '/wp-json/wp/v2/insights?_embed',
    getPages: '/wp-json/wp/v2/pages?acf_format=standard',
    getHeaderNavigation: '/wp-json/header/menu',
  },
}
module.exports = Config
