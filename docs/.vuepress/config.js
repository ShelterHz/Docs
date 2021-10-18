const nav = require('./nav')
const sidebar = require('./sidebar')
module.exports = {
  title: '林深时见猫',
  description: '一个简单的前端攻城狮',
  dest: './dist',
  port: '4404',
  head: [
      ['link', {rel: 'icon', href: '/logo.ico'}],
      ['link', {rel: 'stylesheet', href: '/css/style.css'}],
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
      ["script", { charset: "utf-8", src: "/js/main.js" }],//新加入
  ],
  markdown: {
      lineNumbers: true
  },
//   一款主题
//   theme: 'reco',
  themeConfig: {
      nav,
      sidebar,
      sidebar: 'auto',
      sidebarDepth: 2,
      lastUpdated: 'Last Updated',
      searchMaxSuggestoins: 10,
      serviceWorker: {
          updatePopup: {
              message: "有新的内容.",
              buttonText: '更新'
          }
          
      },
      editLinks: true,
      editLinkText: '在 GitHub 上编辑此页 ！'
  },
  // 插件
  plugins: {
    '@vuepress/active-header-links':{
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor',
        '@vuepress/back-to-top': true,
        '@vuepress/last-updated': true,
        '@vuepress/nprogress':false, //默认为true，设置为false可以关闭进度条
        '@vuepress/search': {
            search: true, //默认false
            searchMaxSuggestions: 10 // 默认是5
        }

    }
}

}
