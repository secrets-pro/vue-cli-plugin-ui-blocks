# vue-cli-plugin-ui-blocks

模块安装

# 如何使用

启动 vue ui

点击插件栏目,添加插件

搜索 `vue-cli-plugin-ui-blocks` 选择你需要安装的模块

在`package.json`下插件会自动生成一个脚本命令

```bash
 "uiblock": "vue-cli-service uiblocks"
```

可以在自己的`vue.config.js`下维护自己需要的模块

```js
pluginOptions: {
    modules: ["test", "test1"],
  }
```

然后运行

```bash
npm run uiblock
```

也会自动安装模块

## 修改模块

1. clone 一份本项目
2. 修改项目项目名称
3. 添加自己的代码模块到`views`目录下
4. 维护`pages.js`
