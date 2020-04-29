module.exports = (api, opts, rootOptions) => {
  const utils = require("./utils")(api);
  // 修改package.json
  // api.extendPackage({
  //   devDependencies: {
  //     "babel-plugin-import": "^1.8.0",
  //   },
  // });
  // 修改main文件
  // api.injectImports(utils.getMain(), ` modify the main.[t|j]s file`);
  // 向项目注入文件
  const { model } = opts;
  if (model && model.length) {
    let render = {};
    model.forEach((m) => {
      render = {
        ...render,
        [`./src/views/${m}/index.vue`]: `./templates/src/views/${m}/index.vue`,
        [`./src/views/${m}/index.less`]: `./templates/src/views/${m}/index.less`,
      };
    });
    api.render(render);
  }

  api.onCreateComplete(() => {
    console.log("安装完成✅");
  });
};
