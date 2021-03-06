const Config = {
  appTitle: 'Art & Science Demo',
  appTitleShort: 'as-demo',
  appDescription: 'Demo for the AS dev team',
  appThemeColor: '#001e45',
  appBgColor: '#001e45',
  wpDomain: 'https://as-demo.rock-media.ca',
  loadDbName: 'as_demo',
  api: {
    getFrontPage: '/wp-json/wp/v2/pages/28?acf_format=standard',
    getPost: '/wp-json/wp/v2/posts',
    getCustomPosts: '/wp-json/wp/v2/insights?_embed',
    getPages: '/wp-json/wp/v2/pages?acf_format=standard',
    getHeaderNavigation: '/wp-json/header/menu',
  },
}
module.exports = Config
