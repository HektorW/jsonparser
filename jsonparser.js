(function() {
  'use strict'

  var _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

  var is_json_rgx = /^\s*{(\s|\S)*}\s*$/m;

  _global.toJSON = function(str) {

    if (!is_json_rgx.test(str)) {
      throw new SyntaxError('Input string is not valid JSON-format');
    }

    

    return {};
  };

}());




function parseFile(filename) {
  var fs = require('fs');
  var content = fs.readFileSync(filename, 'utf8');

  try {
    var obj = toJSON(content);
    console.log('parsed', filename);

    return obj;
  } catch (ex) {
    console.log('Exception when parsing', filename);
    console.log(ex);
    console.log(content);
  }
}

parseFile('package.json');
parseFile('.bowerrc');
parseFile('.jshintrc');
