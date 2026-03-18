import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Phone, ExternalLink, Utensils } from 'lucide-react';

const locations = [
  {
    id: 'wollzeile',
    name: 'Figlmüller Wollzeile',
    tagline: 'The Home of the Original',
    address: 'Wollzeile 5, 1010 Vienna',
    hours: 'Daily 11:00 AM – 10:30 PM',
    kitchen: 'Kitchen daily 11:00 AM – 9:30 PM',
    phone: '+43 1 512 61 77',
    image: 'https://www.figlmueller.at/wp-content/uploads/2021/07/figlmueller_wollzeile-325x325.jpg',
    description: 'The story began here in 1905. Just around the corner from St. Stephen’s Cathedral, this is the birthplace of our world-famous schnitzel.'
  },
  {
    id: 'baeckerstrasse',
    name: 'Figlmüller Bäckerstraße',
    tagline: 'Viennese Tradition & More',
    address: 'Bäckerstraße 6, 1010 Vienna',
    hours: 'Daily 11:30 AM – 11:30 PM',
    kitchen: 'Kitchen daily 11:30 AM – 10:00 PM',
    phone: '+43 1 512 17 60',
    image: 'https://www.figlmueller.at/wp-content/uploads/2021/07/figlmueller_baeckerstrasse-325x325.jpg',
    description: 'Our second restaurant right around the corner. Serving our classic schnitzel and a host of other mainstays in Viennese cuisine.'
  }
];

const groupRestaurants = [
  { name: 'Lugeck', address: 'Lugeck 4, 1010 Vienna', image: 'https://www.figlmueller.at/wp-content/uploads/2021/07/lugeck-325x325.jpg' },
  { name: 'Joma', address: 'Hoher Markt 10, 1010 Vienna', image: 'https://www.figlmueller.at/wp-content/uploads/2021/07/joma-325x325.jpg' },
  { name: 'Figls', address: 'Grinzinger Straße 55, 1190 Vienna', image: 'https://www.figlmueller.at/wp-content/uploads/2021/07/figls-325x325.jpg' },
  { name: 'Café am Dom', address: 'Stephansplatz 11, 1010 Vienna', image: 'https://www.figlmueller.at/wp-content/uploads/2025/08/cafeamdom-325x325.jpg' },
  { name: 'Figoletta', address: 'Rotenturmstraße 11, 1010 Vienna', image: 'https://www.figlmueller.at/wp-content/uploads/2025/08/figoletta-325x325.jpg' },
  { name: 'Brioche & Brösel', address: 'Rotenturmstraße 21, 1010 Vienna', image: 'https://www.figlmueller.at/wp-content/uploads/2023/09/brioche-broesel-325x325.jpg' }
];

export default function LocationsPage() {
  return (
    <div className="bg-[#F6F6EE] min-h-screen">
      {/* Hero Header */}
      <header className="bg-[#005538] text-[#F6F6EE] py-24 relative overflow-hidden">
        <div className="center relative z-10 text-center">
          <span className="font-heading text-xs tracking-[0.3em] uppercase opacity-60 mb-4 block">Vienna, Austria</span>
          <h1 className="text-5xl md:text-7xl font-heading mb-6">Our Locations</h1>
          <p className="max-w-2xl mx-auto font-body text-lg opacity-80">
            From the historic Wollzeile to the vibrant Bäckerstraße, experience the culinary soul of Vienna in our traditional venues.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </header>

      {/* Main Locations */}
      <section className="py-20">
        <div className="center">
          <div className="flex flex-col gap-20">
            {locations.map((loc, index) => (
              <div key={loc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div>
                    <span className="font-heading text-[#7BA693] text-sm tracking-widest uppercase mb-2 block">{loc.tagline}</span>
                    <h2 className="text-4xl font-heading text-[#005538]">{loc.name}</h2>
                  </div>
                  
                  <p className="font-body text-lg opacity-80 leading-relaxed">
                    {loc.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                    <div className="flex gap-4">
                      <MapPin className="text-[#7BA693] shrink-0" size={24} />
                      <address className="not-italic font-body text-[#005538]">
                        <span className="font-bold block mb-1">Address</span>
                        {loc.address}
                      </address>
                    </div>
                    <div className="flex gap-4">
                      <Clock className="text-[#7BA693] shrink-0" size={24} />
                      <div className="font-body text-[#005538]">
                        <span className="font-bold block mb-1">Opening Hours</span>
                        <p className="text-sm">{loc.hours}</p>
                        <p className="text-xs opacity-60 mt-1">{loc.kitchen}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="text-[#7BA693] shrink-0" size={24} />
                      <div className="font-body text-[#005538]">
                        <span className="font-bold block mb-1">Reservation</span>
                        <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="hover:underline">{loc.phone}</a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Utensils className="text-[#7BA693] shrink-0" size={24} />
                      <div className="font-body text-[#005538]">
                        <span className="font-bold block mb-1">Menu</span>
                        <Link href="/menu" className="text-sm hover:underline flex items-center gap-1">
                          View details <ExternalLink size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link 
                      href="/reservations" 
                      className="inline-block bg-[#005538] text-white px-10 py-4 rounded-xl font-heading text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                    >
                      Reservation at {loc.name.split(' ').pop()}
                    </Link>
                  </div>
                </div>

                <div className={`relative rounded-3xl overflow-hidden shadow-2xl group aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={loc.image} 
                    alt={loc.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Section */}
      <section className="py-24 bg-white">
        <div className="center">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading text-[#005538] mb-4">Figlmüller Group</h2>
            <p className="font-body opacity-60 max-w-xl mx-auto italic">
              Discover the wider family of Figlmüller restaurants, each with its own unique character and charm.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupRestaurants.map((res) => (
              <div key={res.name} className="group cursor-pointer">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img 
                    src={res.image} 
                    alt={res.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005538]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-heading text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                      Visit Website <ExternalLink size={16} />
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-heading text-[#005538] mb-1">{res.name}</h3>
                <p className="text-sm font-body opacity-60 flex items-center gap-2">
                  <MapPin size={14} /> {res.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
