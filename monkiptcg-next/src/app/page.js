'use client';

import { useEffect, useState, useRef } from 'react';
import '../styles/globals.css';
import '../styles/styles.css';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

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
        <Navigation />
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

        {/* Content Grid Section */}
        <section className="home-section">
          <h2>View</h2>
          <div className="content-grid">
            {/* Team Statistics */}
            <div className="grid-card stats-card">
              <div className="card-header">
                <h3>Team Statistics</h3>
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">20</div>
                  <div className="stat-label">Team Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1</div>
                  <div className="stat-label">Articles</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-label">News</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2024</div>
                  <div className="stat-label">Founded</div>
                </div>
              </div>
            </div>

            {/* Latest News */}
            <div className="grid-card news-card">
              <div className="card-header">
                <h3>Latest News</h3>
                <i className="fas fa-newspaper"></i>
              </div>
              <div className="news-list">
                <div className="news-item">
                  <div className="news-date">2025-04-15</div>
                  <div className="news-title">Card Mania 2025 Champion</div>
                  <div className="news-excerpt">Tommy Leong wins the largest non-official PTCG event in Malaysia</div>
                </div>
                <div className="news-item">
                  <div className="news-date">2025-03-28</div>
                  <div className="news-title">MBL Success Story</div>
                  <div className="news-excerpt">Nick Kee qualifies for World Championship twice in a row</div>
                </div>
              </div>
              <Link href="/news" className="card-link">
                View All News <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            {/* Latest Articles */}
            <div className="grid-card articles-card">
              <div className="card-header">
                <h3>Latest Articles</h3>
                <i className="fas fa-book-open"></i>
              </div>
              <div className="article-list">
                <div className="article-item">
                  <div className="article-type free">Free</div>
                  <div className="article-title">Card Mania 2025 Champion [Gardevoir Ex] Post-Tournament Report & Deck Guide</div>
                  <div className="article-author">by Tommy Leong</div>
                </div>
              </div>
              <Link href="/monki-insights" className="card-link">
                Read More Articles <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            {/* Partners */}
            <div className="grid-card partners-card">
              <div className="card-header">
                <h3>Our Partners</h3>
                <i className="fas fa-handshake"></i>
              </div>
              <div className="partners-content">
                <div className="partner-logo">
                  <Image src="/images/partners/sponsor.png" alt="Partner Logo" width={120} height={60} />
                </div>
                <p>We work with leading brands in the industry to provide the best experience for our players.</p>
              </div>
              <Link href="/partners" className="card-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}