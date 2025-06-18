'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/Journey.css';
import Footer from '../../components/Footer';

export default function JourneyPage() {
  const timelineItemsRef = useRef([]);

  const handleScrollDown = () => {
    const timelineSection = document.querySelector('.timeline-section');
    if (timelineSection) {
      timelineSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
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

    const currentTimelineItems = timelineItemsRef.current;
    currentTimelineItems.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
        currentTimelineItems.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Header Section */}
      <header>
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
                <li><Link href="/socials">Socials</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/partners">Partners</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="/team-members">Team</a>
              <ul className="dropdown-content">
                <li><Link href="/team-members">Team Members</Link></li>
              </ul>
            </li>
            <li><Link href="/journey">Journey</Link></li>
            <li className="dropdown">
              <a href="#community">Community</a>
              <ul className="dropdown-content">
                <li><Link href="/monki-insights">Monki Insights</Link></li>
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

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>OUR JOURNEY</h1>
          <p className="hero-subtitle">A Chronicle of Excellence</p>
          <button className="scroll-down-btn" onClick={handleScrollDown}>
            <span>Scroll Down</span>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          {/* Timeline Item 1 */}
          <div className="timeline-item" ref={el => timelineItemsRef.current[0] = el}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">2022</div>
              <div className="timeline-card">
                <h3>Team Monki is Born</h3>
                <div className="timeline-image">
                  <Image src="/images/journey/team-formation.jpg" alt="Team Formation" width={500} height={300} />
                </div>
                <p>In June 2022, Team Monki was founded by Terry Chan with a vision to become Malaysia&apos;s premier PTCG team. The journey began with a small group of passionate players.</p>
                <div className="timeline-tags">
                  <span className="tag">Formation</span>
                  <span className="tag">Team</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="timeline-item" ref={el => timelineItemsRef.current[1] = el}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">2023</div>
              <div className="timeline-card">
                <h3>First Major Tournament</h3>
                <div className="timeline-image">
                  <Image src="/images/journey/first-tournament.jpg" alt="First Tournament" width={500} height={300} />
                </div>
                <p>March 2023 marked our first appearance in a regional championship. The team made it to the Top 16, showing promising potential in the competitive scene.</p>
                <div className="timeline-tags">
                  <span className="tag">Tournament</span>
                  <span className="tag">Achievement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="timeline-item" ref={el => timelineItemsRef.current[2] = el}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">2024</div>
              <div className="timeline-card">
                <h3>National Championship Success</h3>
                <div className="timeline-image">
                  <Image src="/images/journey/nationals.jpg" alt="National Championship" width={500} height={300} />
                </div>
                <p>July 2024 saw Team Monki reach the Top 8 in the National Championship, establishing our reputation as one of Malaysia&apos;s top PTCG teams.</p>
                <div className="timeline-tags">
                  <span className="tag">Championship</span>
                  <span className="tag">National</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="timeline-item" ref={el => timelineItemsRef.current[3] = el}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">2025</div>
              <div className="timeline-card">
                <h3>Regional Championship Victory</h3>
                <div className="timeline-image">
                  <Image src="/images/journey/regional-victory.jpg" alt="Regional Victory" width={500} height={300} />
                </div>
                <p>In March 2025, Team Monki claimed victory in the PTCG Regional Championship, marking our entry into the international competitive scene.</p>
                <div className="timeline-tags">
                  <span className="tag">Championship</span>
                  <span className="tag">Regional</span>
                  <span className="tag">Victory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
} 