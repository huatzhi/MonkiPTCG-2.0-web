'use client';

import { useEffect, useState, useRef } from 'react';
import '../styles/globals.css';
import '../styles/styles.css';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import FloatingPartnerButton from '../components/FloatingPartnerButton';
import SocialMediaSection from '../components/SocialMediaSection';
import WeeklyBattleInfo from '../components/WeeklyBattleInfo';
import Slideshow from '../components/Slideshow';
import { homePageData } from '../data';

export default function HomePage() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

  // 从数据文件获取数据
  const { teamMembers, latestNews, previousNews, latestArticles } = homePageData;

  useEffect(() => {
    // Navbar background change on scroll
    if (typeof window !== 'undefined') {
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
    }
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

      {/* Social Media Section with Weekly Battle Info */}
      <div className="social-media-section">
        <WeeklyBattleInfo />
        <div className="social-media-slideshow-wrapper">
          <SocialMediaSection />
          <Slideshow />
        </div>
      </div>

      {/* 新主内容区域布局 */}
      <section className="homepage-grid-section">
          <div className="homepage-grid">
            {/* 顶部 About Us 标题和 News 标题 */}
            <div className="aboutus-title">About Us</div>
            <div className="news-title">News</div>

            {/* 左中+中间 合并后的 About Us 内容 */}
            <div className="aboutus-content merged">
              <div className="aboutus-flex">
                <div className="aboutus-info">
                  <p>
                    Team Monki is a passionate and professional Pokémon TCG team based in Malaysia. Our mission is to connect players, share knowledge, and promote the competitive spirit of PTCG in the region.
                  </p>
                  <ul className="aboutus-highlights">
                    <li>🏆 2025 TCGKL Champion</li>
                    <li>🥈 2025 MBL Runner-up</li>
                    <li>🌏 Multiple Worlds Qualifiers</li>
                    <li>👥 20+ Active Members</li>
                  </ul>
                  <div className="aboutus-values">
                    <span>Passion</span>
                    <span>Teamwork</span>
                    <span>Excellence</span>
                    <span>Innovation</span>
                  </div>
                  <p style={{marginTop: '0.7rem'}}>
                    Want to join or collaborate? <a href="/contact" className="aboutus-link">Contact us</a> us on social media!
                  </p>
                  <div className="aboutus-journey">
                    <div className="aboutus-journey-title">Our Journey</div>
                    <ul className="aboutus-journey-list">
                      <li><span className="aboutus-journey-year">2023</span> Team founded, first tournaments.</li>
                      <li><span className="aboutus-journey-year">2024</span> Multiple top finishes, team grows.</li>
                      <li><span className="aboutus-journey-year">2025</span> TCGKL Champion, Worlds qualifiers.</li>
                      <li><span className="aboutus-journey-year">Future</span> Keep growing and connecting players!</li>
                    </ul>
                  </div>
                </div>
                <div className="aboutus-avatar">
                  <img src="/images/team/leadership/captain.jpg" alt="Terry Chan" />
                  <div className="aboutus-avatar-name">Terry Chan</div>
                  <div className="aboutus-avatar-role">Team Leader</div>
                </div>
              </div>
            </div>



            {/* 右侧 News 列表（上下贯穿） */}
            <div className="news-list-block">
              {/* 最新新闻 */}
              <div className="news-section-title">Latest News</div>
              {latestNews.slice(0,3).map(news => (
                <Link href={`/news?id=${news.id}`} key={news.id} className="news-list-item news-list-link">
                  <div className="news-list-title">{news.title}</div>
                  <div className="news-list-date">{news.date}</div>
                  <div className="news-list-summary">{news.summary}</div>
                </Link>
              ))}
              {/* 往期新闻 */}
              <div className="news-section-title">Previous News</div>
              {previousNews.slice(0,2).map(news => (
                <Link href={`/news?id=${news.id}`} key={news.id} className="news-list-item news-list-link">
                  <div className="news-list-title">{news.title}</div>
                  <div className="news-list-date">{news.date}</div>
                  <div className="news-list-summary">{news.summary}</div>
                </Link>
              ))}
              <Link href="/news" className="news-list-more-btn">View More News &rarr;</Link>
            </div>

            {/* 下方横跨中间和右侧 Article 区块 */}
            <div className="article-block">
              <div className="article-section-title">Latest Articles</div>
              {latestArticles.slice(0,3).map(article => (
                <Link href={`/monki-insights?id=${article.id}`} key={article.id} className="article-list-item article-list-link">
                  <div className="article-list-title">{article.title}</div>
                  <div className="article-list-meta">
                    <span className="article-list-author">{article.author}</span>
                    <span className="article-list-date">{article.date}</span>
                  </div>
                  <div className="article-list-excerpt">{article.excerpt}</div>
                </Link>
              ))}
              <Link href="/monki-insights" className="article-list-more-btn">View More Articles &rarr;</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Floating Partner Button */}
      <FloatingPartnerButton />
    </>
  );
}