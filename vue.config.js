// vue.config.js
const path = require('path')
// 配置路径别名函数
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: './', //基本路径 
  outputDir: 'dist', // 输出的文件目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  chainWebpack: config => { // 配置路径别名
    config.resolve.alias.set('router', resolve('src/router')),
    config.resolve.alias.set('assets', resolve('src/assets')),
    config.resolve.alias.set('components', resolve('src/components')),
    config.resolve.alias.set('views', resolve('src/views')),
    config.resolve.alias.set('utils', resolve('src/utils')),
    config.resolve.alias.set('store', resolve('src/store')),
    config.resolve.alias.set('plugin', resolve('src/plugin'))
  },
  devServer: { // webpack-dev-server 相关配置
    port: 8011, // 端口号
    hotOnly: true, // 热更新
    open: true, //配置自动启动浏览器
  }
}
