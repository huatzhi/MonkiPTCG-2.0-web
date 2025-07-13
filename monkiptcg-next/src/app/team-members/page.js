'use client'; // This must be the very first line

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../styles/globals.css'; // Import global styles first
import '../../styles/TeamMembers.css'; // Import the team members' specific CSS file
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import TeamSection from '../../components/TeamSection';
import { leadershipMembers, playersMembers } from '../../data/teamMembers';

export default function TeamMembersPage() {
  // State to track which cards are flipped
  const [flipped, setFlipped] = useState({});

  // Handler for flipping cards
  const handleCardClick = (index) => (event) => {
    // Prevent flip if a social link is clicked
    if (event.target.closest('[data-social-link]')) {
      return;
    }
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Helper to get flipped class
  const getCardClass = (index) => `member-card${flipped[index] ? ' flipped' : ''}`;

  // Effect for handling animations and interactions on component mount
  useEffect(() => {
    // Force page-specific styles on mount
    document.body.classList.add('team-members-page');
    
    // 立即让所有卡片可见，不等待延迟
    const allTeamMembers = document.querySelectorAll('.team-member, .team-section');
    allTeamMembers.forEach(member => {
      member.classList.add('visible');
    });
    
    // 强制应用布局样式
    const forceLayoutStyles = () => {
      // 强制重新计算布局
      const teamGrid = document.querySelector('.team-grid');
      if (teamGrid) {
        teamGrid.style.display = 'flex';
        teamGrid.style.flexDirection = 'column';
        teamGrid.style.gap = '6rem';
        teamGrid.style.maxWidth = '1200px';
        teamGrid.style.margin = '3rem auto 0';
      }
      
      // 强制应用行布局
      const teamRows = document.querySelectorAll('.team-row');
      teamRows.forEach(row => {
        row.style.display = 'grid';
        row.style.gap = '2rem';
        row.style.marginBottom = '2rem';
      });
      
      // 强制应用特定板块的列布局
      const leadershipRows = document.querySelectorAll('.leadership .team-row');
      leadershipRows.forEach(row => {
        row.style.gridTemplateColumns = 'repeat(2, 1fr)';
        row.style.justifyItems = 'center';
      });
      
      const playersRows = document.querySelectorAll('.players .team-row');
      playersRows.forEach(row => {
        // 检查屏幕宽度，在手机端使用1列布局
        if (window.innerWidth <= 768) {
          row.style.gridTemplateColumns = '1fr';
        } else {
          row.style.gridTemplateColumns = 'repeat(3, 1fr)';
        }
        row.style.justifyItems = 'center';
      });
      
      // 强制应用卡片高度
      const leadershipCards = document.querySelectorAll('.leadership .team-member');
      leadershipCards.forEach(card => {
        card.style.height = '500px';
      });
      
      const playersCards = document.querySelectorAll('.players .team-member');
      playersCards.forEach(card => {
        card.style.height = '450px';
      });
    };
    
    // 立即执行布局样式
    forceLayoutStyles();
    
    // 添加窗口大小变化监听器
    const handleResize = () => {
      forceLayoutStyles();
    };
    window.addEventListener('resize', handleResize);
    
    // Add a small delay to ensure all styles are applied and re-apply if needed
    const timer = setTimeout(() => {
      // Force re-application of styles
      document.body.classList.remove('team-members-page');
      document.body.classList.add('team-members-page');
      
      // 再次确保所有卡片可见
      const allTeamMembers = document.querySelectorAll('.team-member, .team-section');
      allTeamMembers.forEach(member => {
        member.classList.add('visible');
      });
      
      // 再次强制应用布局样式
      forceLayoutStyles();
    }, 100);
    
    // --- Header Scroll Effect ---
    // Adds a 'scrolled' class to the header when the user scrolls down
    const header = document.querySelector('header');
    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // --- Scroll-Triggered Fade-In Animations ---
    // Uses IntersectionObserver to add a 'visible' class to elements when they enter the viewport
    const animationTargets = document.querySelectorAll('.team-section, .hero-section, .team-member');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // observer.unobserve(entry.target); // Optional: Stop observing after animation
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
    animationTargets.forEach(target => observer.observe(target));

    // Cleanup function to remove event listeners and observer on component unmount
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('team-members-page');
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      animationTargets.forEach(target => {
        if (observer) {
          observer.unobserve(target);
        }
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      {/* Header Section */}
      <header>
        <Navigation />
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>MEET OUR TEAM</h1>
          <p className="hero-subtitle">Where Passion Meets Excellence</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <main className="main-content">
          <section className="team-page">
            {/* Team Members Grid */}
            <div className="team-grid">
              {/* Leadership Section */}
              <TeamSection
                sectionType="leadership"
                title="Leadership"
                members={leadershipMembers}
                flipped={flipped}
                onCardClick={handleCardClick}
                getCardClass={getCardClass}
              />

              {/* Players Section */}
              <TeamSection
                sectionType="players"
                title="Players"
                members={playersMembers}
                flipped={flipped}
                onCardClick={handleCardClick}
                getCardClass={getCardClass}
                note="(In no specific order)"
              />
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
