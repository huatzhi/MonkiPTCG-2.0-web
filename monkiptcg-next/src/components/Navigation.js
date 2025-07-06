'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo">
          <img src="/images/logo.png" alt="Team Monki Logo" />
        </div>
        <div className="partner-logo">
          <img src="/images/partners/sponsor.png" alt="MyHobby & Collectibles Logo" />
        </div>
      </div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li className="dropdown">
          <a href="#about">About</a>
          <ul className="dropdown-content">
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/socials">Socials</Link></li>
            <li><Link href="/journey">Journey</Link></li>
            <li><Link href="/partners">Partners</Link></li>
          </ul>
        </li>
        <li><Link href="/team-members">Team Members</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/monki-insights">Monki Insights</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
} 