const { resolve } = require('path')

module.exports = (options, context) => ({
  define () {
    return {}
  },
  name: 'vuepress-plugin-code-preview',
  enhanceAppFiles: resolve(__dirname, './src/enhanceAppFile.js')
})