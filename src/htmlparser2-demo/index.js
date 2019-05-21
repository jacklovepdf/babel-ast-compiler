var htmlparser = require("htmlparser2");
var parser = new htmlparser.Parser({
	onopentag: function(name, attribs){
		console.log('name=====>',name, 'attribs====>',attribs);
		if(name === "script" && attribs.type === "text/javascript"){
			console.log("JS! Hooray!");
		}
	},
	ontext: function(text){
		console.log("-->", text);
	},
	onclosetag: function(tagname){
		if(tagname === "script"){
			console.log("That's it?!");
		}
	}
}, {decodeEntities: true});
parser.write("Xyz <script type='text/javascript' title='{{title}}'>var foo = '<<bar>>';</ script>");
parser.write("<div>jack lin</div>");
parser.end();