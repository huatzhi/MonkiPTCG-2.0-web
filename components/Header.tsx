'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Socials', path: '/socials' },
        { name: 'News', path: '/news' },
        { name: 'Partners', path: '/partners' },
      ],
    },
    {
      name: 'Team',
      path: '/team',
      dropdown: [
        { name: 'Team Members', path: '/team' },
      ],
    },
    { name: 'Journey', path: '/journey' },
    {
      name: 'Community',
      path: '/community',
      dropdown: [
        { name: 'Monki Insights', path: '/insights' },
      ],
    },
    {
      name: 'Contact',
      path: '/contact',
      dropdown: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Social Media', path: '/socials' },
        { name: 'Support/Help', path: '/support' },
        { name: 'Business Inquiries', path: '/business' },
        { name: 'Career', path: '/career' },
      ],
    },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-black/85 backdrop-blur-md' : 'py-6 bg-black/95 backdrop-blur-md'}`}>
      <nav className="max-w-7xl mx-auto px-4 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="Team Monki Logo"
              width={120}
              height={120}
              priority
              quality={100}
              className="h-24 w-auto object-contain"
            />
          </Link>
        </div>
        <ul className="flex justify-center items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.path}
                className={`text-white font-bold transition-colors duration-300 hover:text-[#7e1785] ${
                  pathname === item.path ? 'text-[#7e1785]' : ''
                }`}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <ul className="absolute left-0 top-full bg-black/90 backdrop-blur-md min-w-[200px] py-2 px-4 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.name} className="py-2">
                      <Link
                        href={subItem.path}
                        className="text-white hover:text-[#7e1785] transition-colors duration-300"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 