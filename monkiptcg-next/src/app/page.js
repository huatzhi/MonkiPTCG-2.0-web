'use client';

import { useEffect, useState, useRef } from 'react';
import '../styles/styles.css';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function HomePage() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Navbar background change on scroll
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll('.home-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    sections.forEach((section) => observer.observe(section));

    // Video animation logic
    const videoNode = videoRef.current;
    const onVideoLoaded = () => {
      setIsVideoVisible(true);
      const videoContent = document.querySelector('.video-content');
      if (videoContent) {
        const elements = videoContent.querySelectorAll('img, p, .cyberpunk-line');
        setTimeout(() => {
          elements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('visible');
            }, index * 200);
          });
        }, 500);
      }
    };

    if (videoNode) {
      if (videoNode.readyState >= 3) {
        onVideoLoaded();
      } else {
        videoNode.addEventListener('loadeddata', onVideoLoaded);
      }
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
      if (videoNode) {
        videoNode.removeEventListener('loadeddata', onVideoLoaded);
      }
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
                <li><a href="/about-us">About Us</a></li>
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
      <main className="main-content">
        {/* Video Background */}
        <div className={`video-container ${isVideoVisible ? 'visible' : ''}`}>
          <video ref={videoRef} id="bg-video" autoPlay muted loop playsInline>
            <source src="/videos/team-intro.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
          <div className="video-content">
            <img src="/images/team-monki-logo.png" alt="Team Monki Logo" className="team-logo" />
            <p className="cyberpunk-subtitle">Join Our Journey</p>
            <div className="cyberpunk-line"></div>
            <p className="cyberpunk-description">Welcome to the world of competitive PTCG</p>
          </div>
        </div>

        {/* Welcome Section */}
        <section className="home-section">
          <h2>Welcome to Team Monki</h2>
          <p>Join us on our journey to become the best PTCG team in Malaysia. We are a group of passionate players dedicated to excellence in competitive play.</p>
        </section>

        {/* Achievements Section */}
        <section className="home-section">
          <h2>Our Achievements</h2>
          <p>Discover our team&apos;s accomplishments and milestones in the competitive PTCG scene. From local tournaments to international championships.</p>
        </section>

        {/* Community Section */}
        <section className="home-section">
          <h2>Join Our Community</h2>
          <p>Be part of our growing PTCG community. Connect with fellow players, share strategies, and participate in our events.</p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}