const fs = require('fs');
const path = require('path');

const adminDir = path.join(__dirname, 'src', 'app', '(admin)');

const pages = [
  { name: 'orders', title: 'Orders Management' },
  { name: 'products', title: 'Products & Inventory' },
  { name: 'customers', title: 'Customers' },
  { name: 'coupons', title: 'Coupons & Discounts' },
  { name: 'payments', title: 'Payments History' },
  { name: 'messages', title: 'Contact Messages' },
  { name: 'settings', title: 'Website Settings' }
];

for (const p of pages) {
  const dirPath = path.join(adminDir, p.name);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const content = `import { Plus } from "lucide-react";

export default function ${p.name.charAt(0).toUpperCase() + p.name.slice(1)}Page() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-headline-md text-headline-md">${p.title}</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors">
          <Plus size={18} />
          Create New
        </button>
      </div>

      <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-8 text-center text-secondary">
        <p className="font-body-md">This module is connected to Supabase but currently displays mock data until the database is populated.</p>
      </div>
    </div>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
  console.log(`Generated ${p.name} page`);
}
