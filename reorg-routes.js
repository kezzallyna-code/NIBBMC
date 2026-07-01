const fs = require('fs');
const path = require('path');

const srcApp = path.join(__dirname, 'src', 'app');
const storeDir = path.join(srcApp, '(store)');
const adminDir = path.join(srcApp, '(admin)');

if (!fs.existsSync(storeDir)) fs.mkdirSync(storeDir, { recursive: true });
if (!fs.existsSync(adminDir)) fs.mkdirSync(adminDir, { recursive: true });

const toMove = ['page.tsx', 'collection', 'contact', 'checkout'];

for (const item of toMove) {
  const oldPath = path.join(srcApp, item);
  const newPath = path.join(storeDir, item);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${item} to (store)`);
  }
}
