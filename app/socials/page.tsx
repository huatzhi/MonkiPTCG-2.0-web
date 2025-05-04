import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect With Us - Team Monki PTCG',
  description: 'Connect with Team Monki on social media and join our growing Pokemon Trading Card Game community.',
};

interface SocialPlatform {
  id: string;
  name: string;
  icon: string;
  url: string;
  handle: string;
  description: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: '/images/socials/facebook.png',
    url: 'https://facebook.com/teammonki',
    handle: '@teammonki',
    description: 'Follow us for tournament updates and community events'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '/images/socials/instagram.png',
    url: 'https://instagram.com/teammonki',
    handle: '@teammonki',
    description: 'Check out our latest photos and stories'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: '/images/socials/twitter.png',
    url: 'https://twitter.com/teammonki',
    handle: '@teammonki',
    description: 'Get real-time updates and tournament results'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: '/images/socials/youtube.png',
    url: 'https://youtube.com/teammonki',
    handle: 'Team Monki',
    description: 'Watch our tournament matches and deck guides'
  },
  {
    id: 'discord',
    name: 'Discord',
    icon: '/images/socials/discord.png',
    url: 'https://discord.gg/teammonki',
    handle: 'Team Monki',
    description: 'Join our community and chat with other players'
  }
];

export default function Socials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Connect With Us</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {socialPlatforms.map((platform) => (
              <div key={platform.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{platform.name}</h2>
                    <p className="text-gray-500">{platform.handle}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <Link
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Follow Us
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Stay connected with Team Monki across all our social media platforms.
              Get the latest updates, tournament results, and community events.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Join Discord
              </button>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 