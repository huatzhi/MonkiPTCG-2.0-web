'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';
import ShareButton from './ShareButton';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    document.body.classList.remove('menu-open');
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(prevState => !prevState);
  };

  // Handle clicks outside dropdown and menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close dropdown if clicking outside the dropdown area
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Check if the click is not on the About link itself
        const aboutLink = dropdownRef.current.querySelector('a[href="#about"]');
        if (!aboutLink || !aboutLink.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      }
      
      // Close menu if clicking outside the entire navigation
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="logo-container">
        <div className="logo">
          <img src="/images/logo.png" alt="Team Monki Logo" />
        </div>
      </div>
      
      {/* Hamburger Menu Button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link href="/" onClick={closeMenu}>Home</Link></li>
        <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
          <a 
            href="#about" 
            onClick={toggleDropdown} 
            onTouchEnd={(e) => {
              e.preventDefault();
              toggleDropdown(e);
            }}
            style={{ cursor: 'pointer' }}
          >
            About
          </a>
          <ul className="dropdown-content">
            <li><Link href="/about-us" onClick={closeMenu}>About Us</Link></li>
            <li><Link href="/socials" onClick={closeMenu}>Socials</Link></li>
            <li><Link href="/journey" onClick={closeMenu}>Journey</Link></li>
            <li><Link href="/partners" onClick={closeMenu}>Partners</Link></li>
          </ul>
        </li>
        <li><Link href="/team-members" onClick={closeMenu}>Team Members</Link></li>
        <li><Link href="/news" onClick={closeMenu}>News</Link></li>
        <li><Link href="/monki-insights" onClick={closeMenu}>Monki Insights</Link></li>
        <li><Link href="/contact" onClick={closeMenu}>Contact Us</Link></li>
      </ul>

      {/* Action Buttons */}
      <div className="nav-action-buttons">
        <SearchBar />
        <ShareButton />
        <Link href="/contact" className="join-us-button">
          <span>Join Us</span>
        </Link>
      </div>

      {/* Mobile Menu Overlay - Removed for dropdown animation */}
    </nav>
  );
} 