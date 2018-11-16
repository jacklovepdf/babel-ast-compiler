//babel核心库，用来实现核心的转换引擎
let babel = require('babel-core');
//可以实现类型判断，生成AST节点
let types = require('babel-types');
let code = `codes.map(code=>{return code.toUpperCase()})`;//转换语句
//visitor可以对特定节点进行处理
let visitor = {
    ArrowFunctionExpression(path) {//定义需要转换的节点,这里拦截箭头函数
        let params = path.node.params
        let blockStatement = path.node.body
        //使用babel-types的functionExpression方法生成新节点
        let func = types.functionExpression(null, params, blockStatement, false, false)
        //替换节点
        path.replaceWith(func) //
    }
}
//将code转成ast
let result = babel.transform(code, {
    plugins: [
        { visitor }
    ]
})
console.log("code transform=====>",result.code)