const fs = require('fs');
const path = require('path');
const dist = path.join(__dirname, '..', 'dist');

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    e.isDirectory() ? walk(p) :
    p.endsWith('.js') && fs.writeFileSync(
      p,
      fs.readFileSync(p, 'utf8')
        .replace(/from\s+['"](\.{1,2}\/[^'"]+)['"]/g, (m, p1) => p1.match(/\.(js|json|wasm)$/) ? m : `from "${p1}.js"`)
        .replace(/require\(\s*['"](\.{1,2}\/[^'"]+)['"]\s*\)/g, (m, p1) => p1.match(/\.(js|json|wasm)$/) ? m : `require("${p1}.js")`)
    );
  }
}
walk(dist);
console.log('✅ appended .js to relative imports in dist');