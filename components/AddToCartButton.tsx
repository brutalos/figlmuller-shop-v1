'use client';

import React from 'react';
import { Plus, ShoppingCart } from 'lucide-react';
import { useCart } from './CartProvider';

interface AddToCartButtonProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(item)}
      className="flex items-center gap-2 bg-[#005538] text-white px-4 py-2 rounded-lg font-heading text-xs font-bold uppercase tracking-widest hover:bg-[#005538]/90 transition-all active:scale-95"
    >
      <Plus size={16} />
      Add
    </button>
  );
}
