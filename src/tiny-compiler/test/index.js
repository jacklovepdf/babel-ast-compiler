const { compiler } = require('../compiler')
const str = "(add 2 (subtract 4 2))";
const result = compiler(str);
console.log('result===>', result);