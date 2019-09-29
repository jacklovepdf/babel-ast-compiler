//babel核心库，用来实现核心的转换引擎
let babel = require('babel-core');
//可以实现类型判断，生成AST节点
let t = require('babel-types');
const generator = require('babel-generator').default;
let traverse = require('babel-traverse').default;
let code = `  try {
    ttApple = require("/Users/linchengyong/bytedance/project/tma-html-compiler/tmp/tt911985a8a3247172078852d5bd2612e3/template/apple_vdom.js").template;
  } catch (err) {
    logger.warn('找不到文件 <include src="' + "../../template/apple.ttml" + '" />');
  }`;//转换语句
//visitor可以对特定节点进行处理
// let visitor = {
//     CallExpression: function(path){
//         if(path.node.callee.name === 'require'){ //依赖其它module;
//             let filePath = path.node.arguments[0].value;
//             fileVar = `jack_11`;
//             path.replaceWith(t.identifier(fileVar));
//         }
//     }
// }
//将code转成ast
let result = babel.transform(code).ast;

traverse(result, {
    CallExpression: function(path){
        if(path.node.callee.name === 'require'){ //依赖其它module;
            let filePath = path.node.arguments[0].value;
            fileVar = `jack_11`;
            path.replaceWith(t.identifier(fileVar));
        }
    } 
});
let last = generator(result).code;
console.log("code transform=====>",last);