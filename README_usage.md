# babel-usage

basic usage of babel

## Table of Contents

- [1.babel的使用方式](#babel-use-method)
- [2.babel的一些基本概念](#babel-core-concept)
- [3.babel常见的插件](#babel-api)
- [4.babel常见的preset](#babel-api)
- [5.关于polyfill](#babel-polyfill)
- [6.babel常见的api](#babel-api)
  
## 1.babel的使用

    对于前端来说，常见的很多工具一般都会提供两种使用方式，一种就是命令行的方式，另一种就是使用配置文件的方式;对于babel来说也是如此(当然，常见的前端构建工具都提供这两种使用方式)；

1.1 命令行方式（cli）

    在终端以命令行的方式使用babel需要安装命令行工具@babel/cli，如下安装@babel/cli和babel核心库@babel/core;

```javascript
    //安装相关依赖
    npm install --save-dev @babel/core @babel/cli @babel/preset-env
    //以命令行的方式运行babel
    ./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
    or
    npx babel src --out-dir lib
```

    以命令行方式使用babel存在一个较大的缺陷： 当面对工程较大功能复杂的场景，需要输入较长的命令，较为麻烦；

1.2 Configuration

    根据需求的不同，可以选择不同配置文件；比较常用的配置文件有两种形式；

(1) babel.config.js
    这种形式的配置文件适合于编程的形式创建或者编译node_modules中的文件；

```javascript
    module.exports = function () {
    const presets = [ ... ];
    const plugins = [ ... ];

    if(process.env.NODE_ENV === "development"){
        plugins.push(...)
    }
    return {
        presets,
        plugins
    };
}
```

(2) .babelrc
    这中静态形式的配置文件适合于构建单个简单的npm包；

```javascript
    {
        "presets": [...],
        "plugins": [...]
    }
```

**Note**:推荐babel.config.js形式的配置文件, 更多配置形式详见: [babel配置](https://babeljs.io/docs/en/configuration#babelconfigjs)；

## 2.babel的一些基本概念

    对于babel的使用，熟悉一些基本概念以及@babel域下常用库对于我们快速上手大有裨益；

2.1 plugins

    babel对于代码的转换，主要取决于我们使用的插件；有很多现成的插件可供我们使用，如果没有找到满足需求的插件，我们也可以编写属于自己的插件；

2.2 Presets（转码规则, pre-determined set of plugins.）

    本质上来说，Presets是插件的集合；举个例子，使用babel把es6语法转换成es5语法，我们可以使用plugin-transform-arrow-functions转换箭头函数，
但是es6有很多的新特性，与其我们一个个去添加每一个新特性对应的插件，我们可以使用Presets

2.3  Plugin与Preset执行顺序
Plugin与Preset执行顺序？？？？

## 3.babel常见的插件

## 4.babel常见的preset

4.1 @babel/preset-env

## 5.关于polyfill

    @babel/polyfill模块包括core.js和一个regenerator运行时来模拟最新的es6运行环境;通过使用polyfill，可以在低版本的运行时中使用不支持的
es6特性；比如运行时(浏览器/node)内置的Promise, WeakMap, 一些静态方法， 比如Array.from, 一些对象方法，比如Array.prototype.includes;为了做到这一点，polyfill特性被添加到全局作用域就像原生对象一样；
    对于库或者工具的作者来说，可能并不需要添加原型方法，此时你可以使用transform-runtime插件，而不是@babel/polyfill，这样就可以不用污染全局作用
域；更近一步来说，如果你确定支持某几个特性，你可以直接从core.js中直接加载它们；
    由于有了preset-env, env中的配置项useBuiltIns设置为“usage”时，preset可以根据指定需要支持的target来加载特定的插件集；

```javascript
    const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17"
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```

    根据上面的配置Babel会检测代码中特性在指定的环境中是否支持，如果不支持会加载对应的polyfills.比如你的代码如下：

```javascript
    Promise.resolve().finally();
```

    由于edge17并不支持Promise， babel会把代码转换如下：

```javascript
    require("core-js/modules/es.promise.finally");
    Promise.resolve().finally();
```

## 6.babel常见的api

@babel域中比较常用的模块：
@babel/core, @babel/cli, @babel/preset-env,  