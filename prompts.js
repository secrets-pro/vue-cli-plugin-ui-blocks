let pags = require("./pags");
module.exports = [
  {
    type: "checkbox",
    name: "model",
    message: "选择你要安装的模块",
    choices: pags,
    default: "",
  },
];
