import React from 'react';
import fs from 'fs';
import path from 'path';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export default function MenuPage() {
  const menuPath = path.join(process.cwd(), 'data', 'menu.json');
  const menuData = JSON.parse(fs.readFileSync(menuPath, 'utf-8'));

  return (
    <div className="bg-[#F6F6EE] min-h-screen py-20">
      <div className="center">
        <header className="text-center mb-20">
          <span className="font-heading text-xs tracking-[0.3em] uppercase text-[#7BA693] mb-4 block">Our Culinary Highlights</span>
          <h1 className="text-5xl md:text-7xl font-heading text-[#005538]">The Menu</h1>
        </header>

        <div className="space-y-24">
          {menuData.categories.map((category: MenuCategory) => (
            <section key={category.id} className="relative">
              <div className="flex items-center gap-8 mb-12">
                <h2 className="text-3xl font-heading text-[#005538] whitespace-nowrap">{category.name}</h2>
                <div className="h-px bg-[#005538]/10 w-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {category.items.map((item: MenuItem) => (
                  <div key={item.id} className="flex flex-col gap-4 group">
                    <div className="flex justify-between items-baseline border-b border-[#005538]/10 pb-2 group-hover:border-[#005538]/30 transition-colors">
                      <h3 className="text-xl font-heading text-[#005538] leading-tight">{item.name}</h3>
                      <span className="font-body font-bold text-[#005538]">€ {item.price.toFixed(2)}</span>
                    </div>
                    <p className="font-body text-sm opacity-70 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-32 p-12 bg-[#005538] rounded-3xl text-[#F6F6EE] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-heading mb-6 italic">Taste the Tradition</h2>
            <p className="font-body opacity-80 max-w-xl mx-auto mb-10">
              Our menu is a celebration of Viennese culinary heritage. From our thin-pounded signature schnitzel to our handcrafted desserts, every dish tells a story.
            </p>
            <a 
              href="/reservations" 
              className="inline-block border border-[#F6F6EE] px-8 py-3 rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:bg-[#F6F6EE] hover:text-[#005538] transition-all"
            >
              Reservation
            </a>
          </div>
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square border border-white/5 rounded-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
