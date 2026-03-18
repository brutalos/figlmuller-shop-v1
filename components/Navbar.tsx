"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F6F6EE] border-b border-[#005538]/10">
      <div className="center h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#005538]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <img 
            src="https://www.figlmueller.at/wp-content/uploads/2021/07/logo_figlmueller_g.svg" 
            alt="Figlmüller Logo" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-heading text-sm font-bold uppercase tracking-wider text-[#005538]">
          <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
          <Link href="/menu" className="hover:opacity-70 transition-opacity">Menu</Link>
          <Link href="/locations" className="hover:opacity-70 transition-opacity">Locations</Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">About Us</Link>
        </div>

        <Link 
          href="/reservations" 
          className="bg-[#005538] text-white px-6 py-3 rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:bg-[#005538]/90 transition-colors"
        >
          <span className="text-center">Reservation</span>
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F6F6EE] border-b border-[#005538]/10 py-6 px-4 flex flex-col gap-4 font-heading text-lg font-bold uppercase tracking-wider text-[#005538]">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="/locations" onClick={() => setIsOpen(false)}>Locations</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
