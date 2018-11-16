var htmlparser = require("htmlparser");
var fs = require('fs');
var rawHtml = fs.readFileSync('index.html', {encoding:'utf-8'});
var handler = new htmlparser.DefaultHandler(function (error, dom) {
    if (error){
        console.log("error=====>", error);
    }else{
        console.log("dom=====>", dom);
    }
});
var parser = new htmlparser.Parser(handler);
parser.parseComplete(rawHtml);
console.log("finish");