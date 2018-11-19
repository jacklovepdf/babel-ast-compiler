var babel = require('babel-core');
var t = require('babel-types');

const code = `abs(-8);`;

const visitor = {
	CallExpression(path) {
		if (path.node.callee.name !== 'abs') return;
        console.log("path====>", path);
		path.replaceWith(t.CallExpression(
			t.MemberExpression(t.identifier('Math'), t.identifier('abs')),
			path.node.arguments
		));
	}
};

const result = babel.transform(code, {
	plugins: [{
		visitor: visitor
	}]
});

// Math.abs(-8)
console.log("result.code====>", result.code);