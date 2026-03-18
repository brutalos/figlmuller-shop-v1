'use client';

import React from 'react';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../../components/CartProvider';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (totalItems === 0) {
    return (
      <div className="bg-[#F6F6EE] min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
        <div className="bg-white p-12 rounded-3xl shadow-sm text-center max-w-md w-full">
          <div className="bg-[#005538]/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-[#005538]" />
          </div>
          <h1 className="text-3xl font-heading text-[#005538] mb-4">Your cart is empty</h1>
          <p className="text-[#005538]/60 font-body mb-8">
            Looks like you haven't added any Viennese delicacies to your cart yet.
          </p>
          <Link
            href="/menu"
            className="inline-block bg-[#005538] text-white px-8 py-4 rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:bg-[#005538]/90 transition-all w-full"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F6F6EE] min-h-screen py-20">
      <div className="center">
        <header className="mb-12">
          <Link 
            href="/menu" 
            className="text-[#005538]/60 hover:text-[#005538] font-body text-sm flex items-center gap-2 mb-4 transition-colors"
          >
            <ArrowRight size={16} className="rotate-180" />
            Back to Menu
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading text-[#005538]">Your Cart</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-12">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col gap-4 group"
              >
                <div className="flex justify-between items-baseline border-b border-[#005538]/10 pb-2 group-hover:border-[#005538]/30 transition-colors">
                  <h3 className="text-xl font-heading text-[#005538] leading-tight">{item.name}</h3>
                  <span className="font-body font-bold text-[#005538]">€ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-[#005538]/10 rounded-lg overflow-hidden bg-white">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-[#005538]/5 transition-colors text-[#005538]"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center font-heading text-[#005538]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-[#005538]/5 transition-colors text-[#005538]"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-[#005538]/40 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      title="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm sticky top-24">
              <h2 className="text-2xl font-heading text-[#005538] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[#005538]/60 font-body">
                  <span>Subtotal</span>
                  <span>€ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#005538]/60 font-body">
                  <span>Delivery</span>
                  <span>FREE</span>
                </div>
                <div className="h-px bg-[#005538]/10 w-full my-4" />
                <div className="flex justify-between text-[#005538] font-heading text-xl">
                  <span>Total</span>
                  <span>€ {totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="flex items-center justify-center gap-2 bg-[#005538] text-white px-8 py-4 rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:bg-[#005538]/90 transition-all w-full"
              >
                Checkout
                <ArrowRight size={18} />
              </Link>
              
              <p className="mt-6 text-center text-[#005538]/40 text-xs font-body">
                Taxes included. Free delivery for limited time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
