import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Partners - Team Monki PTCG',
  description: 'Meet our partners who help us grow the Pokemon Trading Card Game community in Malaysia.',
};

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
}

const partners: Partner[] = [
  {
    id: 'pokemon-company',
    name: 'The Pokemon Company',
    logo: '/images/partners/pokemon-company.png',
    description: 'Official partner for PTCG events and tournaments in Malaysia.',
    website: 'https://www.pokemon.com'
  },
  {
    id: 'card-shop',
    name: 'Card Shop Malaysia',
    logo: '/images/partners/card-shop.png',
    description: 'Leading provider of Pokemon TCG products and accessories.',
    website: 'https://www.cardshop.com.my'
  },
  {
    id: 'gaming-center',
    name: 'Gaming Center KL',
    logo: '/images/partners/gaming-center.png',
    description: 'Premier venue for PTCG tournaments and community events.',
    website: 'https://www.gamingcenter.com.my'
  }
];

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Partners</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="relative h-32 mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Become a Partner</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We are always looking for new partners to help grow the PTCG community in Malaysia.
              If you are interested in partnering with Team Monki, please contact us.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 