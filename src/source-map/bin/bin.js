var babel = require("@babel/core");
var fs = require('fs');
var path = require('path');
var filePath = path.resolve(__dirname, '../src/index.js');
console.log("filePath=====>", filePath);
var code = fs.readFileSync(filePath, {encoding: 'utf8'});

console.log("code=====>", code);
var result = babel.transform(code, {
    presets: ['babel-preset-es2015', 'babel-preset-stage-0'].map(require.resolve),
    sourceMaps: true,
    sourceFileName: filePath,
    babelrc: false
}, function(err, result){
    console.log("result======>", result);
});
console.log("result111======>", result);