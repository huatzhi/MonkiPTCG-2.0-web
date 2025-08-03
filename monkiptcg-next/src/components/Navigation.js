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
      <button 
        className="hamburger-menu" 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        aria-controls="nav-links"
      >
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
      </button>

      {/* Navigation Links */}
      <ul 
        id="nav-links"
        className={`nav-links ${isMenuOpen ? 'open' : ''}`}
        role="menubar"
        aria-label="Main navigation"
      >
        <li role="none">
          <Link href="/" onClick={closeMenu} role="menuitem">Home</Link>
        </li>
        <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef} role="none">
          <a 
            href="#about"
            className="dropdown-toggle"
            onClick={toggleDropdown} 
            onTouchEnd={(e) => {
              e.preventDefault();
              toggleDropdown(e);
            }}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
            aria-label="About submenu"
            style={{ cursor: 'pointer' }}
          >
            About
          </a>
          <ul className="dropdown-content" role="menu" aria-label="About submenu">
            <li role="none">
              <Link href="/about-us" onClick={closeMenu} role="menuitem">About Us</Link>
            </li>
            <li role="none">
              <Link href="/socials" onClick={closeMenu} role="menuitem">Socials</Link>
            </li>
            <li role="none">
              <Link href="/journey" onClick={closeMenu} role="menuitem">Journey</Link>
            </li>
            <li role="none">
              <Link href="/partners" onClick={closeMenu} role="menuitem">Partners</Link>
            </li>
          </ul>
        </li>
        <li role="none">
          <Link href="/team-members" onClick={closeMenu} role="menuitem">Team Members</Link>
        </li>
        <li role="none">
          <Link href="/news" onClick={closeMenu} role="menuitem">News</Link>
        </li>
        <li role="none">
          <Link href="/monki-insights" onClick={closeMenu} role="menuitem">Monki Insights</Link>
        </li>
        <li role="none">
          <Link href="/contact" onClick={closeMenu} role="menuitem">Contact Us</Link>
        </li>
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