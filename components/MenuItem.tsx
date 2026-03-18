'use client';

import React from 'react';
import AddToCartButton from './AddToCartButton';

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex flex-col gap-4 group">
      <div className="flex justify-between items-baseline border-b border-[#005538]/10 pb-2 group-hover:border-[#005538]/30 transition-colors">
        <h3 className="text-xl font-heading text-[#005538] leading-tight">{item.name}</h3>
        <span className="font-body font-bold text-[#005538]">€ {item.price.toFixed(2)}</span>
      </div>
      <p className="font-body text-sm opacity-70 leading-relaxed max-w-md">
        {item.description}
      </p>
      <div className="mt-2">
        <AddToCartButton item={item} />
      </div>
    </div>
  );
}
