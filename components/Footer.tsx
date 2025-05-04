'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/teammonki', icon: '/images/socials/facebook.png' },
    { name: 'Instagram', url: 'https://instagram.com/teammonki', icon: '/images/socials/instagram.png' },
    { name: 'Twitter', url: 'https://twitter.com/teammonki', icon: '/images/socials/twitter.png' },
    { name: 'YouTube', url: 'https://youtube.com/teammonki', icon: '/images/socials/youtube.png' },
    { name: 'Discord', url: 'https://discord.gg/teammonki', icon: '/images/socials/discord.png' },
  ];

  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'News', path: '/news' },
    { name: 'Journey', path: '/journey' },
    { name: 'Insights', path: '/insights' },
    { name: 'Partners', path: '/partners' },
    { name: 'Socials', path: '/socials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/team-monki-logo.png"
                alt="Team Monki Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-white font-bold text-xl">Team Monki</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Malaysia's premier Pokemon Trading Card Game team, dedicated to excellence in competitive play and community building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-[#10e07f] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#10e07f] transition-colors duration-200"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Team Monki. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 