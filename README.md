# babel-ast-compiler

note book of ast

## Table of Contents

- [babel简介](#babel-instruct)
- [Variable Scope](#variable-scope)
- [Working with Functions](#working-with-functions)
- [Object and Prototype](#object-and-prototype)
- [Arrays and Dictionary](#arrays-and-dictionary)
- [Library and API Design](#library-and-api-design)
- [Concurrency](#concurrency)

## babel简介

1.基本概念

    babel是一个js编译器(Babel is a JavaScript compiler.)

2.babel运行原理

    用babel对代码进行处理（eg es6转es5或者jsx转换）主要可以划分为3步：parse, transform and generate;

2.1 parse

    使用解析器（parser）对输入的源代码字符串进行解析并生成初始 AST（File.prototype.parse），可以使用babel-traverse对AST进行遍历，并解析出整个树的path，通过挂载的 metadataVisitor 读取对应的元信息，这一步叫 set AST 过程；

2.2 transform

(1) transform的用法
    遍历AST树并应用各transformers（plugin)生成变换后的AST树, babel中最核心的是babel-core，它向外暴露出babel.transform 接口。

```javascript
    babelCore.transform(output, {
        plugins: [
            require("babel-plugin-transform-object-rest-spread"),
            unEscapeJsescPlugin
        ],
        babelrc: false
    }).code
```

(2) 编写一个babel plugins



2.3 generate

    利用babel-generator将AST树输出为转码后的代码字符串;

```javascript
    const generator = require('babel-generator').default;
    code = generator(code).code;
```

https://juejin.im/post/5ab9f2f3f265da239b4174f0