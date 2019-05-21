/**
 * FINALLY! We'll create our `compiler` function. Here we will link together
 * every part of the pipeline.
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */
const {
  tokenizer
} = require('./tokenizer');
const {
  parser
} = require('./parser');
const {
  transformer
} = require('./transformer');
const {
  codeGenerator
} = require('./codeGenerator');

function compiler(input) {
    let tokens = tokenizer(input);
    console.log('tokens======>', tokens);
    let ast    = parser(tokens);
    console.log('ast=====>', JSON.stringify(ast));
    let newAst = transformer(ast);
    let output = codeGenerator(newAst);
  
    // and simply return the output!
    return output;
  }

module.exports = {
  compiler
}
  