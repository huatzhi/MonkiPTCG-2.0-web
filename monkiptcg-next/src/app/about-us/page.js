'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/AboutUs_styles.css';
import Footer from '../../components/Footer';

export default function AboutUsPage() {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header Section */}
      <header style={{ backgroundColor: headerScrolled ? 'rgba(26, 26, 26, 0.95)' : '#1a1a1a' }}>
        <nav className="navbar">
          <div className="logo">
            <img src="/images/logo.png" alt="Team Monki Logo" />
          </div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li className="dropdown">
              <a href="#about">About</a>
              <ul className="dropdown-content">
                <li><Link href="/about-us">About Us</Link></li>
                <li><a href="/socials">Socials</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/partners">Partners</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#team">Team</a>
              <ul className="dropdown-content">
                <li><a href="/team-members">Team Members</a></li>
              </ul>
            </li>
            <li><a href="/journey">Journey</a></li>
            <li className="dropdown">
              <a href="#community">Community</a>
              <ul className="dropdown-content">
                <li><a href="/monki-insights">Monki Insights</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#contact">Contact</a>
              <ul className="dropdown-content">
                <li><a href="#contact-us">Contact Us</a></li>
                <li><a href="#social-media">Social Media</a></li>
                <li><a href="#support-help">Support/Help</a></li>
                <li><a href="#business-inquiries">Business Inquiries</a></li>
                <li><a href="#career">Career</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container">
        <main className="main-content">
          <section className="about-page">
            <h1>ABOUT TEAM MONKI</h1>

            {/* About Section */}
            <div className="about-section">
              <h2>Our Story</h2>
              <img src="/images/hero-bg.jpg" alt="Team Monki Story" className="about-image" />
              <p>Team Monki is Malaysia&apos;s premier Pokemon Trading Card Game team, founded with the vision of bringing together the best players in the country. Our journey began in 2020, and since then, we&apos;ve grown into a community of passionate players dedicated to excellence in competitive play.</p>
            </div>

            {/* Mission Section */}
            <div className="about-section">
              <h2>Our Mission</h2>
              <img src="/images/team/team-hero.jpg" alt="Team Monki Mission" className="about-image" />
              <p>We strive to promote competitive Pokemon TCG play in Malaysia, foster a strong community of players, and represent our country in international tournaments. Our mission is to inspire the next generation of players and create a welcoming environment for all Pokemon TCG enthusiasts.</p>
            </div>

            {/* Team Section */}
            <div className="about-section">
              <h2>Our Team</h2>
              <div className="team-grid">
                <div className="about-team-member">
                  <img src="/images/team/players/player5.jpg" alt="Team Member 5" />
                  <h3>Nick Kee</h3>
                  <p>Main Player</p>
                </div>
                <div className="about-team-member">
                  <img src="/images/team/leadership/manager.jpg" alt="Team Member 3" />
                  <h3>Bobby Ao</h3>
                  <p>Manager</p>
                </div>
                <div className="about-team-member">
                  <img src="/images/team/players/player3.jpg" alt="Team Member 3" />
                  <h3>Tommy Leong</h3>
                  <p>Main Player</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
} 