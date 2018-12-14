# babel-usage

basic usage of babel

## Table of Contents

- [1.babel的使用方式](#babel-use-method)
- [2.babel的一些基本概念](#babel-core-concept)
- [3.babel常见的api](#babel-api)
  
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

    根据需求的不同，可以选择不同配置文件；常见的配置文件有两种形式；

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

    本质上来说，Presets是插件的集合；