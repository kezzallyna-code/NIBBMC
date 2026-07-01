const fs = require('fs');
const path = require('path');

// 1. Update page.tsx
const pagePath = path.join(__dirname, 'src/app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

content = content.replace(/href="index\.html"/g, 'href="/"');
content = content.replace(/href="collection\.html"/g, 'href="/collection"');
content = content.replace(/href="contact\.html"/g, 'href="/contact"');
content = content.replace(/href="checkout\.html"/g, 'href="/checkout"');

content = content.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>');

fs.writeFileSync(pagePath, content);
console.log('Fixed page.tsx routes');

// 2. Create placeholder pages
const pages = ['collection', 'contact', 'checkout'];

for (const p of pages) {
  const dir = path.join(__dirname, 'src/app', p);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const pageContent = `export default function ${p.charAt(0).toUpperCase() + p.slice(1)}Page() {
  return (
    <div className="pt-32 px-10 text-center min-h-screen">
      <h1 className="text-4xl font-headline-xl mb-4">${p.charAt(0).toUpperCase() + p.slice(1)}</h1>
      <p className="text-on-surface-variant">This page is currently under construction.</p>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), pageContent);
  console.log(`Created placeholder for ${p}`);
}
