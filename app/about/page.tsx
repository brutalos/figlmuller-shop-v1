import React from 'react';
import Link from 'next/link';
import { Quote, History, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#F6F6EE] min-h-screen">
      {/* Editorial Hero */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="center">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-[#7BA693] mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-heading text-[#005538] mb-8 leading-tight">
              A Viennese Legacy <br/> Since 1905
            </h1>
            <p className="font-body text-xl text-[#005538]/80 leading-relaxed italic">
              "Every generation has left its mark on Figlmüller. Today, we continue the tradition with the same passion our grandfather started with 120 years ago."
            </p>
          </div>
        </div>
        {/* Subtle background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
          <img src="https://www.figlmueller.at/wp-content/uploads/2021/07/logo_figlmueller_g.svg" className="w-[80%] max-w-4xl" alt="" />
        </div>
      </section>

      {/* The History Section */}
      <section className="py-24">
        <div className="center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://www.figlmueller.at/wp-content/uploads/2021/07/figlmueller-slideshow-hans-wein-3000x2192-1-1300x950.jpg" 
                alt="Hans Figlmüller Senior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-heading font-bold uppercase tracking-widest text-sm">Hans Figlmüller, Sr.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-[#7BA693]">
                <History size={32} />
                <span className="font-heading text-sm tracking-widest uppercase">The Beginning</span>
              </div>
              <h2 className="text-4xl font-heading text-[#005538]">From a Wine Tavern to a City Symbol</h2>
              <div className="space-y-6 font-body text-lg text-[#005538]/70 leading-relaxed">
                <p>
                  The story began when Johann Figlmüller opened the first wine tavern on Wollzeile in 1905. He established a place where people have been imbibing, chatting and eating great for over a century.
                </p>
                <p>
                  A glass of our homegrown wine was always the perfect accompaniment to our interpretation of the Wiener schnitzel, which has not only become the house special—but also a symbol of the city of Vienna.
                </p>
                <p>
                  What started as a small, cozy tavern has grown into a world-renowned destination, yet it has never lost the "Gemütlichkeit" that our grandfather cherished.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Brothers Section */}
      <section className="py-24 bg-white">
        <div className="center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://www.figlmueller.at/wp-content/uploads/2021/07/figlmueller-slideshow-thomas-hans-3000x2192-1-1300x950.jpg" 
                alt="The Figlmüller Brothers" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-heading font-bold uppercase tracking-widest text-sm">Hans & Thomas Figlmüller</p>
              </div>
            </div>
            <div className="lg:order-1 space-y-8">
              <div className="flex items-center gap-4 text-[#7BA693]">
                <Users size={32} />
                <span className="font-heading text-sm tracking-widest uppercase">The Next Generation</span>
              </div>
              <h2 className="text-4xl font-heading text-[#005538]">Family is Everything</h2>
              <div className="space-y-6 font-body text-lg text-[#005538]/70 leading-relaxed">
                <p className="font-bold text-[#005538]">
                  "The only thing we don’t share: a schnitzel."
                </p>
                <p>
                  Today, brothers Hans and Thomas Figlmüller lead the group with a shared vision: to preserve the soul of Viennese cuisine while carefully evolving it for a modern audience.
                </p>
                <p>
                  Under their leadership, Figlmüller has expanded its horizons with new venues like Lugeck and Joma, each contributing to Vienna's culinary landscape while staying true to the family's core values of quality, hospitality, and tradition.
                </p>
              </div>
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div className="border-l-2 border-[#7BA693] pl-6">
                  <span className="text-3xl font-heading text-[#005538] block mb-1">120+</span>
                  <span className="text-xs uppercase tracking-widest opacity-60">Years of History</span>
                </div>
                <div className="border-l-2 border-[#7BA693] pl-6">
                  <span className="text-3xl font-heading text-[#005538] block mb-1">4th</span>
                  <span className="text-xs uppercase tracking-widest opacity-60">Generation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-[#005538] text-white">
        <div className="center">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading mb-6 italic">The Secret of the Schnitzel</h2>
            <p className="font-body opacity-70 max-w-2xl mx-auto text-lg">
              It's not just about the recipe; it's about the uncompromising commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-[#7BA693]" size={36} />
              </div>
              <h3 className="text-xl font-heading">Quality First</h3>
              <p className="font-body text-sm opacity-70 leading-relaxed">
                We source only the finest regional ingredients, from our premium pork and veal to our homegrown wines.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <History className="text-[#7BA693]" size={36} />
              </div>
              <h3 className="text-xl font-heading">Tradition</h3>
              <p className="font-body text-sm opacity-70 leading-relaxed">
                Our schnitzels are still pounded thin by hand and breaded with the same proprietary crumb mix for over a century.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="text-[#7BA693]" size={36} />
              </div>
              <h3 className="text-xl font-heading">Hospitality</h3>
              <p className="font-body text-sm opacity-70 leading-relaxed">
                We treat every guest like a friend of the family, ensuring a homely atmosphere in all our restaurants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="center">
          <h2 className="text-4xl font-heading text-[#005538] mb-8">Visit the Original</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/locations" 
              className="px-12 py-5 bg-[#005538] text-white rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
            >
              Our Locations
            </Link>
            <Link 
              href="/menu" 
              className="px-12 py-5 border border-[#005538] text-[#005538] rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:bg-[#005538] hover:text-white transition-all"
            >
              Explore the Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
