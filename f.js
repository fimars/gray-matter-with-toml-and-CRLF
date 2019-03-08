const fs = require('fs');
const matter = require('gray-matter');
const toml = require('toml');

const raw = fs.readFileSync('./crlf.md', 'utf8');
console.log(matter(raw, {
  engines: {
    toml: toml.parse.bind(toml)
  }
}));

// ~/front-matter-crlf-test/node_modules/toml/lib/parser.js:3833
//      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
//      ^
// SyntaxError: Expected "\n" but end of input found.