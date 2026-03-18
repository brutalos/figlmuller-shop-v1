import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.figlmueller.at/wp-content/uploads/2021/07/figlmueller-slideshow-schnitzel-3000x2192-1-1300x950.jpg" 
            alt="The Figlmüller Schnitzel" 
            className="w-full h-full object-cover brightness-75 scale-105"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="mb-8 flex justify-center opacity-90">
            <img 
              src="https://www.figlmueller.at/wp-content/uploads/2021/07/logo_figlmueller_w.svg" 
              alt="Figlmüller" 
              className="h-24 md:h-32 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-7xl mb-8 tracking-tighter leading-tight drop-shadow-2xl font-heading">
            The house special,<br />
            that became<br />
            a city symbol
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Link 
              href="/menu" 
              className="bg-white text-[#005538] px-8 py-4 rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:bg-[#F6F6EE] transition-all"
            >
              Discover Menu
            </Link>
            <Link 
              href="/reservations" 
              className="bg-transparent border border-white text-white px-8 py-4 rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Reservation
            </Link>
          </div>
        </div>
      </section>

      {/* Wollzeile Section */}
      <section className="py-32 bg-[#F6F6EE]">
        <div className="center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-[#7BA693] mb-4 block">Established 1905</span>
              <h2 className="text-3xl md:text-5xl mb-8 leading-tight font-heading">
                Home of the Schnitzel:<br />
                Figlmüller Wollzeile
              </h2>
              <div className="space-y-6 text-lg leading-relaxed opacity-80 font-body">
                <p className="font-bold text-[#005538]">
                  The story began when Johann Figlmüller opened the first wine tavern on Wollzeile in 1905.
                </p>
                <p>
                  Just around the corner from St. Stephen’s Cathedral, he established a place where people have been imbibing, chatting and eating great for the past 120 years. A glass of our homegrown wine is the perfect accompaniment to our interpretation of the Wiener schnitzel.
                </p>
                <div className="pt-6">
                  <Link href="/locations/wollzeile" className="inline-flex items-center gap-3 font-heading text-sm font-bold uppercase tracking-wider text-[#005538] group">
                    Learn more about Wollzeile
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://www.figlmueller.at/wp-content/uploads/2021/07/figlmueller_wollzeile-325x325.jpg" 
                  alt="Figlmüller Wollzeile" 
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-heading font-bold uppercase tracking-widest text-sm">Traditional Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bäckerstraße Section */}
      <section className="py-32 bg-white">
        <div className="center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://www.figlmueller.at/wp-content/uploads/2021/07/figlmueller_baeckerstrasse-325x325.jpg" 
                  alt="Figlmüller Bäckerstraße" 
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-heading font-bold uppercase tracking-widest text-sm">Viennese Delicacies</p>
                </div>
              </div>
            </div>
            <div>
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-[#7BA693] mb-4 block">Our Second Venue</span>
              <h2 className="text-3xl md:text-5xl mb-8 leading-tight font-heading">
                Too good for just<br />
                a single Figlmüller
              </h2>
              <div className="space-y-6 text-lg leading-relaxed opacity-80 font-body">
                <p className="font-bold text-[#005538]">
                  On Bäckerstraße, we’ve made room for even more Viennese delicacies.
                </p>
                <p>
                  A genuine Figlmüller schnitzel needs a healthy amount of space. Right around the corner, we’re serving up schnitzel and a host of other mainstays in Viennese cuisine—including our vegan schnitzel and succulents roast beef.
                </p>
                <div className="pt-6">
                  <Link href="/locations/baeckerstrasse" className="inline-flex items-center gap-3 font-heading text-sm font-bold uppercase tracking-wider text-[#005538] group">
                    Explore Bäckerstraße
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#005538] text-[#F6F6EE] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="center text-center relative z-10">
          <h2 className="text-4xl md:text-6xl mb-8 font-heading">Ready to join us?</h2>
          <p className="max-w-2xl mx-auto text-xl opacity-70 mb-12 font-body">
            Experience the world-famous Figlmüller schnitzel in the heart of Vienna.
          </p>
          <Link 
            href="/reservations" 
            className="inline-block bg-[#F6F6EE] text-[#005538] px-12 py-5 rounded-xl font-heading text-base font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
          >
            Reservation
          </Link>
        </div>
      </section>
    </div>
  );
}
