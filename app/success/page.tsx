import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShoppingBag, MapPin } from 'lucide-react';

export default function SuccessPage() {
  const orderNumber = Math.floor(Math.random() * 900000) + 100000;
  
  return (
    <div className="bg-[#F6F6EE] min-h-[80vh] flex items-center justify-center py-20 px-4">
      <div className="bg-white p-12 md:p-16 rounded-3xl shadow-sm text-center max-w-2xl w-full border border-[#005538]/5 relative overflow-hidden">
        {/* Success Icon */}
        <div className="relative z-10">
          <div className="bg-[#005538]/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 size={48} className="text-[#005538]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading text-[#005538] mb-4">Mahlzeit!</h1>
          <p className="text-[#005538]/60 font-body text-lg mb-10 max-w-md mx-auto">
            Your order has been received and is being prepared with love in our kitchen.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left">
            <div className="bg-[#F6F6EE] p-6 rounded-2xl">
              <p className="text-[10px] font-heading uppercase tracking-widest text-[#005538]/40 mb-2">Order Number</p>
              <p className="text-xl font-heading text-[#005538]">#FIG-{orderNumber}</p>
            </div>
            <div className="bg-[#F6F6EE] p-6 rounded-2xl">
              <p className="text-[10px] font-heading uppercase tracking-widest text-[#005538]/40 mb-2">Estimated Arrival</p>
              <p className="text-xl font-heading text-[#005538]">35 - 45 min</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-[#005538] text-white px-8 py-4 rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:bg-[#005538]/90 transition-all w-full"
            >
              Back to Home
              <ArrowRight size={18} />
            </Link>
            
            <Link
              href="/menu"
              className="flex items-center justify-center gap-2 border border-[#005538]/10 text-[#005538] px-8 py-4 rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:bg-[#005538]/5 transition-all w-full"
            >
              Order more
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#005538]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#005538]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
}
