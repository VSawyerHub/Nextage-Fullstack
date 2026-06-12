const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'node_modules', 'proxy-from-env', 'index.js');

try {
  let s = fs.readFileSync(target, 'utf8');
  const old = "var parseUrl = require('url').parse;";
  if (s.indexOf(old) !== -1) {
    const replacement = `var parseUrl;\ntry {\n  var URLClass = (typeof URL !== 'undefined') ? URL : require('url').URL;\n  parseUrl = function(s) { return new URLClass(s); };\n} catch (e) {\n  parseUrl = require('url').parse;\n}`;
    s = s.replace(old, replacement);
    fs.writeFileSync(target, s, 'utf8');
    console.log('Patched proxy-from-env');
  } else {
    console.log('No patch needed');
  }
} catch (e) {
  console.error('Patch failed:', e && e.message ? e.message : e);
  process.exit(1);
}
