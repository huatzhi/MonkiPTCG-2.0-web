'use client'; // This must be the very first line

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../styles/TeamMembers.css'; // Import the team members' specific CSS file
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

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
      const leadershipRows = document.querySelectorAll('.leadership .team-row, .management .team-row');
      leadershipRows.forEach(row => {
        row.style.gridTemplateColumns = 'repeat(2, 1fr)';
        row.style.justifyItems = 'center';
      });
      
      const playersRows = document.querySelectorAll('.players .team-row');
      playersRows.forEach(row => {
        row.style.gridTemplateColumns = 'repeat(3, 1fr)';
        row.style.justifyItems = 'center';
      });
      
      // 强制应用卡片高度
      const leadershipCards = document.querySelectorAll('.leadership .team-member, .management .team-member');
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
              <div className="team-section leadership">
                <h2 className="section-title">Leadership</h2>
                <div className="team-row">
                  {/* Team Captain */}
                  <div className="team-member">
                    <div className={getCardClass('captain')} onClick={handleCardClick('captain')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/leadership/captain.jpg" alt="Team Captain" />
                        </div>
                        <div className="member-info">
                          <h3>Terry Chan</h3>
                          <p className="role">Team Leader</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>08/29</span>
                            </div>
                          <p className="motto">"Let's playtest together, come contact me and we can explore on different playstyles and techniques!"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/terrychan29?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/terrychann29?igsh=eWg0aWMwZmFtZDk5" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Team Captain</h4>
                        <div className="achievements-section">
                          <h5>Achievements</h5>
                          <ul className="achievements-list">
                              <li>Town league 2024 - 7/200+</li>
                              <li>GBL 2024-2025 deckoutden - 5/88</li>
                              <li>PBL 2024-2025 - 60/663</li>
                              <li>GBL 2024-2025 myhobby - 9/88</li>
                            <li>UBL 2024-2025 Penang - 56/200+</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Dragon Types</div>
                              </div>
                              </div>
                    </div>
                  </div>

                  {/* Team Manager */}
                  <div className="team-member">
                    <div className={getCardClass('manager')} onClick={handleCardClick('manager')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/leadership/manager.jpg" alt="Team Manager" />
                        </div>
                        <div className="member-info">
                          <h3>Bobby Ao</h3>
                          <p className="role">Executive Assistant</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>12/09</span>
                            </div>
                          <p className="motto">"Trust yourself, Not luck"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/realboybobby?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/humansadtoo?igsh=MXQ3c2J4NWxtMnJmbg==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Executive Assistant</h4>
                        <div className="achievements-section">
                          <h5>Achievements</h5>
                          <ul className="achievements-list">
                            <li>2025 Player Ranking 43th</li>
                            <li>GBL-S1-DeckoutDen-11th place</li>
                            <li>UBL-S1 : 7th place</li>
                            <li>PBL 24-25: 102th place</li>
                            <li>GBL-S1-AMCC: 13th place</li>
                            <li>GBL-S2-AMCC:  5th place</li>
                            <li>GBL-S2-TB: 3th place</li>
                            <li>UBL-S2: 56th</li>
                            <li>GBL-S3: 3th place</li>
                            <li>UBL-S3: 27th</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Gengar & Charizard</div>
                              </div>
                              </div>
                              </div>
                  </div>
                </div>
              </div>

              {/* Management Section */}
              <div className="team-section management">
                <h2 className="section-title">Management</h2>
                <div className="team-row">
                  {/* Financial Manager */}
                  <div className="team-member">
                    <div className={getCardClass('finance')} onClick={handleCardClick('finance')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/management/finance.jpg" alt="Financial Manager" />
                        </div>
                        <div className="member-info">
                          <h3>Keagan Soo</h3>
                          <p className="role">Team Finance</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>07/26</span>
                            </div>
                          <p className="motto">"A.K.A Dark Magician"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/keagan.sooXP?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/kszq_07?igsh=MTZyaWprNHczdWU5dQ==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Team Finance</h4>
                        <div className="achievements-section">
                          <h5>Achievements</h5>
                          <ul className="achievements-list">
                            <li>UBL Top 24th (Penang, Malaysia)</li>
                            <li>Malaysia 2025 MBL Top 31th</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Darkrai & Umbeon</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Agent */}
                  <div className="team-member">
                    <div className={getCardClass('agent')} onClick={handleCardClick('agent')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/management/agent.jpg" alt="Team Agent" />
                        </div>
                        <div className="member-info">
                          <h3>Sammy</h3>
                          <p className="role">Team Agent</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>05/28</span>
                            </div>
                          <p className="motto">"Building bridges between talent and opportunity"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/sammy.khoo.89?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/mantao89?igsh=ZHZsZzAya3pucGNx" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Team Agent</h4>
                        <div className="achievements-section">
                          <h5>Professional Achievements</h5>
                          <ul className="achievements-list">
                            <li>Sponsorship Acquisition</li>
                            <li>Player Contracts</li>
                              <li>Team Relations</li>
                            <li>Partnership Development</li>
                            <li>Brand Management</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Lucario</div>
                              </div>
                              </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Players Section */}
              <div className="team-section players">
                <h2 className="section-title">Players <span className="note">(In no specific order)</span></h2>
                <div className="team-row">
                  {/* Player 1 */}
                  <div className="team-member">
                    <div className={getCardClass('player1')} onClick={handleCardClick('player1')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player1.jpg" alt="Player 1" />
                        </div>
                        <div className="member-info">
                          <h3>Justin Wong</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>12/05</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/justin.wong.14811692?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/justin_wong.z.d?igsh=MXQ0bHNzdmk5dHM2cA==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 Nationals Top 16</li>
                            <li>2023 League Challenge Winner</li>
                            <li>2022 Regional Top 4</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Greninja</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 2 */}
                  <div className="team-member">
                    <div className={getCardClass('player2')} onClick={handleCardClick('player2')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player2.jpg" alt="Player 2" />
                        </div>
                        <div className="member-info">
                          <h3>Yiam Wai Kit</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>03/15</span>
                            </div>
                          <p className="motto">"Metal or Meta?"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/waikit960909?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/zenon_kit?igsh=ZXNwZjlzd3cyZnJ4" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Achievements</h5>
                          <ul className="achievements-list">
                            <li>Top Metal Types Player in Monki Team</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Metal Types, Metagross</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 3 */}
                  <div className="team-member">
                    <div className={getCardClass('player3')} onClick={handleCardClick('player3')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player3.jpg" alt="Player 3" />
                        </div>
                        <div className="member-info">
                          <h3>Tommy Leong</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>09/22</span>
                            </div>
                          <p className="motto">"Adapt and overcome every challenge"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/tommylcff?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/tommy._.lcf?igsh=MWhwdnNtMjk3ZHI3dQ==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                            <li>Malaysia Championships 2023/24 -  Top 32</li>
                            <li>TCGKL PTCG Championship 2023/24 Champion</li>
                            <li>TCGKL Cardmania PTCG Championship 2024/25 Champion</li>
                            <li>GBL 2024/25 Finalist</li>
                            <li>UBL 2024/25 Finalist</li>
                            <li>PBL 2024/25 Top 8</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Mudkip/Slakoth/Clodsire/Psyduck</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 4 */}
                  <div className="team-member">
                    <div className={getCardClass('player4')} onClick={handleCardClick('player4')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player4.jpg" alt="Player 4" />
                        </div>
                        <div className="member-info">
                          <h3>Eden Lee</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>11/01</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/chunhou.lee.7?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/edenlch?igsh=cnFvMWxzNXB3YXhs" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 League Challenge Top 4</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Greninja</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 5 */}
                  <div className="team-member">
                    <div className={getCardClass('player5')} onClick={handleCardClick('player5')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player5.jpg" alt="Player 5" />
                        </div>
                        <div className="member-info">
                          <h3>Nick Kee</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>07/17</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="https://x.com/nicks717"
                            target="_blank" data-social-link><i className="fab fa-twitter"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>GBL 2024/25 - Top 2 x1, Top 16 x1</li>
                              <li>UBL 2024/25 - Top 16 x1, Top 32 x1</li>
                              <li>MBL 2024/25 - Finalist</li>
                              <li>Malaysia Championships 2023/24 - Finalist</li>
                              <li>Regionals 2022/2023 - Top 8</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Garchomp</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 6 */}
                  <div className="team-member">
                    <div className={getCardClass('player6')} onClick={handleCardClick('player6')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player6.jpg" alt="Player 6" />
                        </div>
                        <div className="member-info">
                          <h3>Yoong Kai Jian</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>11/10</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="https://x.com/sirupy_yoong"
                            target="_blank" data-social-link><i className="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/kaijian.yoong?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/sirupy_yoong?igsh=Y2l3b2J6Z2NxbW1r" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Achievements</h5>
                          <ul className="achievements-list">
                              <li>RANK 2nd 2025 Malaysia Region</li>
                              <li>2025 Malaysia MBL TOP16</li>
                              <li>UBL 2025 Malaysia TOP 1st X4</li>
                              <li>GBL 2025 Champ x6 Finalist x2</li>
                              <li>RANK 1st 2024 Malaysia Region</li>
                              <li>Malaysia Championship 2024 Champion</li>
                              <li>GBL 2024/25 - Top 2 x1, Top 16 x1</li>
                              <li>Malaysia Regional 2024 top4 x2, top16 x1</li>
                              <li>Malaysia Championship 2023 top16</li>
                              <li>Asia Open 2022 Top32</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Kyogre, Sharpedo & Incineroar</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 7 */}
                  <div className="team-member">
                    <div className={getCardClass('player7')} onClick={handleCardClick('player7')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player7.jpg" alt="Player 7" />
                        </div>
                        <div className="member-info">
                          <h3>Tan Song Yen</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>04/29</span>
                            </div>
                          <p className="motto">"Max Rarity Max Consistency"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/songyen.tan?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/songyen95?igsh=MWg5amxmdXJxNnlvMA==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>UBL top 4 (Penang, Malaysia)</li>
                              <li>Rank 33th 2025 Malaysia Region</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Charizard & Sylveon</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 8 */}
                  <div className="team-member">
                    <div className={getCardClass('player8')} onClick={handleCardClick('player8')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player8.jpg" alt="Player 8" />
                        </div>
                        <div className="member-info">
                          <h3>Nero</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>02/19</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/komori.nero?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/handson0219?igsh=MWI1bzVkaGh4eWZ0dQ==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 League Challenge Top 4</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Slyveon/Piplup/Sprigatito</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 9 */}
                  <div className="team-member">
                    <div className={getCardClass('player9')} onClick={handleCardClick('player9')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player9.jpg" alt="Player 9" />
                        </div>
                        <div className="member-info">
                          <h3>Wong Wai Kit</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>11/22</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/kitkit.wongwaikit.5?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/waikit1992?igsh=YmJzZXpsOGNvNXd2" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Top 4</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Slowpoke & Gardevoir</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 10 */}
                  <div className="team-member">
                    <div className={getCardClass('player10')} onClick={handleCardClick('player10')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player10.jpg" alt="Player 10" />
                        </div>
                        <div className="member-info">
                          <h3>Wong Kar Lok</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>03/10</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/karlokzaii?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/karlokzaii0310?igsh=MTNvOWJ0MzN3bnd2OA==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 League Challenge Top 4</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Garchomp</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 11 */}
                  <div className="team-member">
                    <div className={getCardClass('player11')} onClick={handleCardClick('player11')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player11.jpg" alt="Player 11" />
                        </div>
                        <div className="member-info">
                          <h3>Tan Wai Kiat</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>11/06</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/weiji?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/i.am.waikiat?igsh=NzUwZjVvZzl6YWZu" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Top 4</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Garchomp</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 12 */}
                  <div className="team-member">
                    <div className={getCardClass('player12')} onClick={handleCardClick('player12')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player12.jpg" alt="Player 12" />
                        </div>
                        <div className="member-info">
                          <h3>Carlos</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>04/15</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/carlos.goonting?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/_thegoonster?igsh=MWk5MDJqeWFjcmM0" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 League Challenge Top 4</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Garchomp</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 13 */}
                  <div className="team-member">
                    <div className={getCardClass('player13')} onClick={handleCardClick('player13')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player13.jpg" alt="Player 13" />
                        </div>
                        <div className="member-info">
                          <h3>Mathew Lim</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>10/20</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/profile.php?id=61551834492236&mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/weicheng136?igsh=ZDNmNjJ6cmgxcGlw&utm_source=qr" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Top 4</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Garchomp</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 14 */}
                  <div className="team-member">
                    <div className={getCardClass('player14')} onClick={handleCardClick('player14')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player14.jpg" alt="Player 14" />
                        </div>
                        <div className="member-info">
                          <h3>Nigel</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>10/10</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 League Challenge Top 4</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Garchomp</div>
                              </div>
                      </div>
                    </div>
                  </div>

                  {/* Player 15 */}
                  <div className="team-member">
                    <div className={getCardClass('player15')} onClick={handleCardClick('player15')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player15.jpg" alt="Player 15" />
                        </div>
                        <div className="member-info">
                          <h3>Zi Bin</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>05/28</span>
                            </div>
                          <p className="motto">"Every battle is a chance to grow stronger"</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/IJNNEKO?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/mezibinlaide?igsh=NDRnNmNwOGYwZ2dx" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Top 4</li>
                            </ul>
                              </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Garchomp</div>
                              </div>
                              </div>
                              </div>
                            </div>

                  {/* Player 16 - Yap Pin Cheng */}
                  <div className="team-member">
                    <div className={getCardClass('player16')} onClick={handleCardClick('player16')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="/images/team/players/player16.jpg" alt="Yap Pin Cheng" />
                        </div>
                        <div className="member-info">
                          <h3>Yap Pin Cheng</h3>
                          <p className="role">Main Player</p>
                          <div className="birthday">
                              <i className="fas fa-birthday-cake"></i>
                            <span>07/28</span>
                            </div>
                          <p className="motto">"If i go 2nd and can't itchy pollen, it's prized."</p>
                          <div className="social-links">
                            <a href="https://www.facebook.com/yap.pincheng/" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/p_cheng._/" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <div className="achievements-section">
                          <h5>Tournament Achievements</h5>
                          <ul className="achievements-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Top 4</li>
                        </ul>
                      </div>
                        <div className="favorite-pokemon-section">
                          <h5>Favorite Pokemon</h5>
                          <div className="favorite-pokemon">Budew</div>
                              </div>
                      </div>
                    </div>
                  </div>
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
