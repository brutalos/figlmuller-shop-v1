import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#005538] text-white pt-16 pb-8 font-body">
      <div className="center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-center">
          {/* Left: Navigation */}
          <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider opacity-80">
            <Link href="/jobs" className="hover:opacity-100 transition-opacity">Jobs</Link>
            <Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            <Link href="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link>
            <Link href="/imprint" className="hover:opacity-100 transition-opacity">Imprint & Data Protection</Link>
          </nav>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <Link href="/">
              <img 
                src="https://www.figlmueller.at/wp-content/uploads/2021/07/logo_figlmueller_w.svg" 
                alt="Figlmüller Logo" 
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Right: Social */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-white/10 mb-12" />

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-xs tracking-widest opacity-60 mb-2">Location Wollzeile</h4>
            <address className="not-italic text-lg">
              Wollzeile 5<br />
              1010 Vienna
            </address>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-xs tracking-widest opacity-60 mb-2">Location Bäckerstraße</h4>
            <address className="not-italic text-lg">
              Bäckerstraße 6<br />
              1010 Vienna
            </address>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-2">
             <div className="p-8 border border-white/10 rounded-2xl bg-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm tracking-widest mb-2">Experience Vienna</h4>
                  <p className="opacity-70 text-sm">Join the Wiener Schnitzel Academy and learn from the best.</p>
                </div>
                <Link href="/academy" className="p-3 bg-white text-[#005538] rounded-full hover:scale-105 transition-transform">
                  <ArrowUp className="rotate-45" size={20} />
                </Link>
             </div>
          </div>
        </div>

        <div className="text-center opacity-40 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Figlmüller Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
