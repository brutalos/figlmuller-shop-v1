'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowRight, 
  MapPin, 
  CreditCard, 
  CheckCircle2, 
  ChevronRight, 
  ShoppingBag,
  Info
} from 'lucide-react';
import { useCart } from '../../components/CartProvider';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalPrice, clearCart, totalItems } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  // Address Form State
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    zip: '',
    email: '',
    phone: ''
  });

  // Payment Form State
  const [payment, setPayment] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    nameOnCard: ''
  });

  if (totalItems === 0) {
    if (typeof window !== 'undefined') {
      router.push('/cart');
    }
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      clearCart();
      router.push('/success');
    }, 2000);
  };

  return (
    <div className="bg-[#F6F6EE] min-h-screen py-20">
      <div className="center">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-heading text-[#005538] mb-4">Checkout</h1>
          <p className="font-body text-[#005538]/60 uppercase tracking-widest text-xs">Complete your order</p>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Address Section */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="text-[#005538]" size={24} />
                <h2 className="text-2xl font-heading text-[#005538]">Delivery Address</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-heading uppercase tracking-widest text-[#005538]/60 mb-2">First Name</label>
                  <input 
                    required
                    type="text" 
                    value={address.firstName}
                    onChange={(e) => setAddress({...address, firstName: e.target.value})}
                    className="w-full bg-[#F6F6EE] border border-[#005538]/10 rounded-xl px-4 py-3 font-body text-[#005538] focus:outline-none focus:border-[#005538]/30 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading uppercase tracking-widest text-[#005538]/60 mb-2">Last Name</label>
                  <input 
                    required
                    type="text" 
                    value={address.lastName}
                    onChange={(e) => setAddress({...address, lastName: e.target.value})}
                    className="w-full bg-[#F6F6EE] border border-[#005538]/10 rounded-xl px-4 py-3 font-body text-[#005538] focus:outline-none focus:border-[#005538]/30 transition-colors"
                    placeholder="Doe"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-heading uppercase tracking-widest text-[#005538]/60 mb-2">Street & House Number</label>
                  <input 
                    required
                    type="text" 
                    value={address.street}
                    onChange={(e) => setAddress({...address, street: e.target.value})}
                    className="w-full bg-[#F6F6EE] border border-[#005538]/10 rounded-xl px-4 py-3 font-body text-[#005538] focus:outline-none focus:border-[#005538]/30 transition-colors"
                    placeholder="Wollzeile 5"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading uppercase tracking-widest text-[#005538]/60 mb-2">City</label>
                  <input 
                    required
                    type="text" 
                    value={address.city}
                    onChange={(e) => setAddress({...address, city: e.target.value})}
                    className="w-full bg-[#F6F6EE] border border-[#005538]/10 rounded-xl px-4 py-3 font-body text-[#005538] focus:outline-none focus:border-[#005538]/30 transition-colors"
                    placeholder="Vienna"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading uppercase tracking-widest text-[#005538]/60 mb-2">ZIP Code</label>
                  <input 
                    required
                    type="text" 
                    value={address.zip}
                    onChange={(e) => setAddress({...address, zip: e.target.value})}
                    className="w-full bg-[#F6F6EE] border border-[#005538]/10 rounded-xl px-4 py-3 font-body text-[#005538] focus:outline-none focus:border-[#005538]/30 transition-colors"
                    placeholder="1010"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-heading uppercase tracking-widest text-[#005538]/60 mb-2">Email</label>
                  <input 
                    required
                    type="email" 
                    value={address.email}
                    onChange={(e) => setAddress({...address, email: e.target.value})}
                    className="w-full bg-[#F6F6EE] border border-[#005538]/10 rounded-xl px-4 py-3 font-body text-[#005538] focus:outline-none focus:border-[#005538]/30 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <CreditCard className="text-[#005538]" size={24} />
                <h2 className="text-2xl font-heading text-[#005538]">Payment Details</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-heading uppercase tracking-widest text-[#005538]/60 mb-2">Name on Card</label>
                  <input 
                    required
                    type="text" 
                    value={payment.nameOnCard}
                    onChange={(e) => setPayment({...payment, nameOnCard: e.target.value})}
                    className="w-full bg-[#F6F6EE] border border-[#005538]/10 rounded-xl px-4 py-3 font-body text-[#005538] focus:outline-none focus:border-[#005538]/30 transition-colors"
                    placeholder="JOHN DOE"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading uppercase tracking-widest text-[#005538]/60 mb-2">Card Number</label>
                  <input 
                    required
                    type="text" 
                    value={payment.cardNumber}
                    onChange={(e) => setPayment({...payment, cardNumber: e.target.value})}
                    className="w-full bg-[#F6F6EE] border border-[#005538]/10 rounded-xl px-4 py-3 font-body text-[#005538] focus:outline-none focus:border-[#005538]/30 transition-colors"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-heading uppercase tracking-widest text-[#005538]/60 mb-2">Expiry Date</label>
                    <input 
                      required
                      type="text" 
                      value={payment.expiry}
                      onChange={(e) => setPayment({...payment, expiry: e.target.value})}
                      className="w-full bg-[#F6F6EE] border border-[#005538]/10 rounded-xl px-4 py-3 font-body text-[#005538] focus:outline-none focus:border-[#005538]/30 transition-colors"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading uppercase tracking-widest text-[#005538]/60 mb-2">CVV</label>
                    <input 
                      required
                      type="text" 
                      value={payment.cvv}
                      onChange={(e) => setPayment({...payment, cvv: e.target.value})}
                      className="w-full bg-[#F6F6EE] border border-[#005538]/10 rounded-xl px-4 py-3 font-body text-[#005538] focus:outline-none focus:border-[#005538]/30 transition-colors"
                      placeholder="000"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#005538]/5 border border-[#005538]/10 p-6 rounded-2xl flex gap-4 items-start">
              <Info className="text-[#005538] flex-shrink-0" size={20} />
              <p className="text-[#005538]/70 text-sm font-body leading-relaxed">
                By completing your order, you agree to our Terms of Service. Your payment is secured via 256-bit SSL encryption.
              </p>
            </div>
          </div>

          {/* Sidebar - Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-sm sticky top-24">
              <h2 className="text-2xl font-heading text-[#005538] mb-6">Order Details</h2>
              
              <div className="max-h-[400px] overflow-y-auto pr-2 space-y-8 mb-8">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col gap-2 group">
                    <div className="flex justify-between items-baseline border-b border-[#005538]/10 pb-1 group-hover:border-[#005538]/30 transition-colors">
                      <p className="font-heading text-[#005538] leading-tight text-lg">{item.name}</p>
                      <p className="font-body text-[#005538] font-bold">€ {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="text-xs font-body text-[#005538]/60 uppercase tracking-widest">Qty: {item.quantity}</p>
                  </div>
                ))}
              </div>

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
                <div className="flex justify-between text-[#005538] font-heading text-2xl">
                  <span>Total</span>
                  <span>€ {totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`flex items-center justify-center gap-2 bg-[#005538] text-white px-8 py-4 rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:bg-[#005538]/90 transition-all w-full ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Pay € {totalPrice.toFixed(2)}
                    <CheckCircle2 size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
