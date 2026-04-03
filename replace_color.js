const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('#1B3A2D')) {
    content = content.replace(/#1B3A2D/g, '#1E3A5F');
    // Also replace the hover version if it was using #0f2319 (darker green version of #1B3A2D) -> let's make it #112544 (darker navy) 
    content = content.replace(/#0f2319/g, '#112544');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
