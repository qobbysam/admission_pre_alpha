const path = require("path")

module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.VUE_APP_STATIC_URL,
  outputDir: path.resolve(__dirname, "../static", "assets"),
  indexPath: path.resolve(__dirname, "../templates/", "frontend", "index.html"),

  transpileDependencies: [
    'vuetify'
  ]
}
