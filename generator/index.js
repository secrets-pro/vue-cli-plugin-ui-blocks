module.exports = (api, opts, rootOptions) => {
  const utils = require("./utils")(api);
  // 修改package.json
  api.extendPackage({
    scripts: {
      uiblock: "vue-cli-service uiblocks",
    },
  });
  // 修改main文件
  // api.injectImports(utils.getMain(), ` modify the main.[t|j]s file`);
  // 向项目注入文件
  const { model } = opts;
  let renderModels = utils.renderModel(model);
  if (renderModels) {
    api.render(renderModels);
  }

  api.onCreateComplete(() => {
    console.log("安装完成✅");
  });
};
