# babel-usage

是时候升级babel7了.

## Table of Contents

- [babel-usage](#babel-usage)
  - [Table of Contents](#table-of-contents)
  - [1.为什么升级babel7](#1%e4%b8%ba%e4%bb%80%e4%b9%88%e5%8d%87%e7%ba%a7babel7)
  - [2.babel7中重要presets](#2babel7%e4%b8%ad%e9%87%8d%e8%a6%81presets)
  - [3.babel7中重要plugins](#3babel7%e4%b8%ad%e9%87%8d%e8%a6%81plugins)

## 1.为什么升级babel7

    (1)babel7自2018年7月发布以来，已经经过1年多的迭代，已经相对比较稳定. 
    (2) babel7具有更好的性能，更强的功能以及更好的易用性;

## 2.babel7中重要presets

2.1 @babel/preset-env
    @babel/preset-env是一款非常智能的preset,它很方便的使开发者使用最新的js语法,而不需要过多的配置;下面列一些基础配置说明;
(1) Browserslist Integration
    特别适用前端项目, 主要是前端工程有很多工具autoprefixer, stylelint, eslint-plugin-compat等都使用相同的配置;
(2) targets
    描述项目支持的平台或者是环境;
(3) modules
    把es6模块转换成指定的模块;
(4) include
    必须包含的插件;
(5) useBuiltIns("usage" | "entry" | false)
    指示preset如何处理polyfills;
    1. entry
    这个选项会启用一个新的插件根据运行环境的不同用具体core-js polyfill替换import "core-js/stable";和import "regenerator-runtime/runtime"语句(or require("corejs") and require("regenerator-runtime/runtime")).

```javascript
    // in
    import "core-js";
    // out
    import "core-js/modules/es.string.pad-start";
    import "core-js/modules/es.string.pad-end";
```

    2. usage
    这个选项会根据用户代码按需去加载需要的polyfill entry, 每个bundle只会加载相同polyfill一次;

```javascript
    // in
    import "core-js";
    // out
    import "core-js/modules/es.string.pad-start";
    import "core-js/modules/es.string.pad-end";
```

    3. false
    不会自动为每个文件做polyfill，也不会把import "core-js/stable"和mport "regenerator-runtime/runtime"自动转换为
单个的polyfill;

    (6)corejs(2, 3 or { version: 2 | 3, proposals: boolean }, defaults to 2)
    默认情况下, 只会polyfill稳定的js特性，如果想使用还在提案中的特性, 对于useBuiltIns值为entry的case, 只需要引入提案的polyfill(import "core-js/proposals/string-replace-all");对于useBuiltIns值为entry的usage,把corejs的配置为{ version: 3, proposals: true }。

**note:** @babel/preset-env does not support stage-x plugins.

2.2 @babel/preset-react

2.3 @babel/preset-typescript

## 3.babel7中重要plugins

3.1 @babel/plugin-transform-runtime

    默认情况下babel/preset-env会把用到的每个工具方法打包相应的文件中，这样会造成代码体积增大, 通过使用本插件，
可以重用注入的工具方法。另一方面，transform-runtime会为你的代码场景一个沙箱的环境, 直接import core-js or @babel/polyfill会污染全局作用域;下面也列出几个常用的配置选项。

(1) corejs
(2) regenerator
(3) helpers

一个按需polyfill,支持提案特性且能够提取hepler方法（减少包体积）的配置如下:

```javascript
    {
        "presets": [
            ["@babel/preset-env", {
            "targets": {
                "ie": 9
            },
            "useBuiltIns": "usage",
            "corejs": { "version": 3, "proposals": true }
            }]
        ],
        "plugins": [
            ["@babel/plugin-transform-runtime", {
                "corejs": 3,
                "proposals": true
            }]
        ]
    }
```
