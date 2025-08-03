'use client';

import '../styles/globals.css';
import '../styles/styles.css';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import FloatingPartnerButton from '../components/FloatingPartnerButton';
import SocialMediaSection from '../components/SocialMediaSection';
import WeeklyBattleInfo from '../components/WeeklyBattleInfo';
import Slideshow from '../components/Slideshow';
import VideoBackground from '../components/VideoBackground';
import AboutUsSection from '../components/AboutUsSection';
import NewsSection from '../components/NewsSection';
import ArticlesSection from '../components/ArticlesSection';
import ErrorBoundary from '../components/ErrorBoundary';
import useScrollHandler from '../hooks/useScrollHandler';
import { homePageData } from '../data';

export default function HomePage() {
  // 使用自定义hook处理滚动逻辑
  const { headerScrolled } = useScrollHandler();

  // 从数据文件获取数据
  const { teamMembers, latestNews, previousNews, latestArticles } = homePageData;

  return (
    <ErrorBoundary>
      {/* Header Section */}
      <header style={{ backgroundColor: headerScrolled ? 'rgba(26, 26, 26, 0.95)' : '#1a1a1a' }}>
        <Navigation />
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Video Background */}
        <VideoBackground />

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

            {/* About Us Section */}
            <AboutUsSection />

            {/* News Section */}
            <NewsSection latestNews={latestNews} previousNews={previousNews} />

            {/* Articles Section */}
            <ArticlesSection latestArticles={latestArticles} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Floating Partner Button */}
      <FloatingPartnerButton />
    </ErrorBoundary>
  );
}