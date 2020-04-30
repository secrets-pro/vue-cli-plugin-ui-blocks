// adapted from https://github.com/vuetifyjs/vue-cli-plugin-vuetify/blob/dev/generator/helpers.js
const fs = require("fs");
const stat = fs.stat;
function exists(src, dst, callback) {
  //测试某个路径下文件是否存在
  fs.exists(dst, function (exists) {
    if (exists) {
      //不存在
      callback(src, dst);
    } else {
      //存在
      fs.mkdir(dst, function () {
        //创建目录
        callback(src, dst);
      });
    }
  });
}
module.exports = (api) => {
  return {
    getMain() {
      const tsPath = api.resolve("src/main.ts");
      return fs.existsSync(tsPath) ? "src/main.ts" : "src/main.js";
    },
    copy(src, dst) {
      exists(src, dst, () => {
        fs.readdir(src, function (err, paths) {
          if (err) {
            throw err;
          }
          paths.forEach(function (path) {
            var _src = src + "/" + path;
            var _dst = dst + "/" + path;
            var readable;
            var writable;
            stat(_src, function (err, st) {
              if (err) {
                throw err;
              }

              if (st.isFile()) {
                readable = fs.createReadStream(_src); //创建读取流
                writable = fs.createWriteStream(_dst); //创建写入流
                readable.pipe(writable);
              } else if (st.isDirectory()) {
                exists(_src, _dst, copy);
              }
            });
          });
        });
      });
      //读取目录
    },
    exists,
    renderModel(model) {
      if (model && model.length) {
        let render = {};
        model.forEach((m) => {
          render = {
            ...render,
            [`./src/views/${m}/index.vue`]: `./templates/src/views/${m}/index.vue`,
            [`./src/views/${m}/index.less`]: `./templates/src/views/${m}/index.less`,
          };
        });
        return render;
      }
      return null;
    },
  };
};
