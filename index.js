const path = require("path");
const fs = require("fs");

module.exports = (api, projectOptions) => {
  const utils = require("./generator/utils")(api);

  api.chainWebpack((webpackConfig) => {
    // 通过 webpack-chain 修改 webpack 配置
  });

  api.configureWebpack((webpackConfig) => {
    // 修改 webpack 配置
    // 或返回通过 webpack-merge 合并的配置对象
  });

  api.registerCommand("uiblocks", (args) => {
    // 注册 `vue-cli-service test`
    let modules = projectOptions.pluginOptions.modules;
    if (modules.length) {
      for (let index in modules) {
        let path_ = modules[index];
        utils.copy(
          path.resolve(__dirname, "generator/templates/src/views/" + path_),
          api.resolve("src/views/" + path_)
        );
      }
    } else {
      console.warn("⚠️没有输入模块");
    }
  });
};
