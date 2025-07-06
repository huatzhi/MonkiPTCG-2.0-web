'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/Journey.css';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import ToBeContinued from '../../components/ToBeContinued';

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
        <Navigation />
      </header>

      <div className="journey-page">
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
                <div className="timeline-year">2024 July</div>
                <div className="timeline-card">
                  <h3>Team Monki is Born</h3>
                  <div className="timeline-image">
                    <Image src="/images/journey/journey1.jpg" alt="Team Formation" width={500} height={300} />
                  </div>
                  <p>In June 2024, Team Monki was founded by Terry Chan & Bobby Ao. The journey began ...</p>
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
                <div className="timeline-year">2025 March</div>
                <div className="timeline-card">
                  <h3>First Team Trip - Penang UBL</h3>
                  <div className="timeline-image">
                    <Image src="/images/journey/journey2.jpg" alt="First Tournament" width={500} height={300} />
                  </div>
                  <p>First team trip to Penang for the UBL. We had a great time and celebrate our team member Justin's second place in the UBL.</p>
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
                <div className="timeline-year">2025 April</div>
                <div className="timeline-card">
                  <h3>MBL Success - First Malaysian Player Heading to World Championship twice in a row</h3>
                  <div className="timeline-image">
                    <Image src="/images/journey/journey3.jpg" alt="National Championship" width={500} height={300} />
                  </div>
                  <p>Nick Kee, our team member, won the MBL and qualified for the World Championship. This is the first time a Malaysian player has qualified for the World Championship twice in a row.</p>
                  <div className="timeline-tags">
                    <span className="tag">Championship</span>
                    <span className="tag">National</span>
                  </div>
                </div>
              </div>
            </div>

            {/* To Be Continued Component */}
            <ToBeContinued ref={el => timelineItemsRef.current[3] = el} />
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
} 