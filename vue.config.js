const { defineConfig } = require('@vue/cli-service')
const importMetaLoader = require('import-meta-loader')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module.rule('js')
      .test(/\.js$/)
      .exclude.add(path.resolve('node_modules'))
      .end()
      .use(importMetaLoader)
      .loader('import-meta-loader')
      .options({
        // isVite2: true, // vite2与3有差别，默认 false
        alias: Object.fromEntries(config.resolve.alias.store) // 传入所有别名
      })
      .end()

    importMetaLoader.expandVueEnv(config)
    importMetaLoader.moveHtmlTemplate(config)
  }
})
