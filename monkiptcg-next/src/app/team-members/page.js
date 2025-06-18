'use client'; // This must be the very first line

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../styles/TeamMembers.css'; // Import the team members' specific CSS file
import Footer from '../../components/Footer';

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
              <a href="#team">Team</a>
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
                          <img src="images/team/leadership/captain.jpg" alt="Team Captain" />
                        </div>
                        <div className="member-info">
                          <h3>Terry Chan</h3>
                          <p className="role">Team Leader</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♍</span>
                              <span className="zodiac">Virgo</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">08/29</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/terrychan29?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/terrychann29?igsh=eWg0aWMwZmFtZDk5" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Team Captain</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2025 PTCG Regional Champion</li>
                              <li>2024 Nationals Top 8</li>
                              <li>2024 Regional Runner-up</li>
                              <li>2023 Nationals Top 16</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2025-03-15</div>
                                <div>GYM Tourna</div>
                                <div>Noctowl, Ogerpon ex</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2024-11-20</div>
                                <div>GreatBall League</div>
                                <div>Charizard ex</div>
                                <div>4th</div>
                              </div>
                              <div className="table-row">
                                <div>2024-09-05</div>
                                <div>Pokemon League Challenge</div>
                                <div>Lost Box</div>
                                <div>2nd</div>
                              </div>
                              <div className="table-row">
                                <div>2024-07-22</div>
                                <div>Ultra Ball Cup</div>
                                <div>Gardevoir ex</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2024-06-10</div>
                                <div>Premier Challenge</div>
                                <div>Mew VMAX</div>
                                <div>3rd</div>
                              </div>
                              <div className="table-row">
                                <div>2024-04-28</div>
                                <div>Pokemon League Cup</div>
                                <div>Lugia VSTAR</div>
                                <div>5th</div>
                              </div>
                              <div className="table-row">
                                <div>2024-03-15</div>
                                <div>Master Ball Series</div>
                                <div>Palkia VSTAR</div>
                                <div>2nd</div>
                              </div>
                              <div className="table-row">
                                <div>2024-02-01</div>
                                <div>Pokemon League Challenge</div>
                                <div>Arceus VSTAR</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-12-20</div>
                                <div>Great Ball League</div>
                                <div>Miraidon ex</div>
                                <div>4th</div>
                              </div>
                              <div className="table-row">
                                <div>2023-11-05</div>
                                <div>Pokemon League Cup</div>
                                <div>Lost Box</div>
                                <div>3rd</div>
                              </div>
                              <div className="table-row">
                                <div>2023-09-18</div>
                                <div>Premier Challenge</div>
                                <div>Gardevoir ex</div>
                                <div>2nd</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Lost Box, Gardevoir ex</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Team Manager */}
                  <div className="team-member">
                    <div className={getCardClass('manager')} onClick={handleCardClick('manager')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/leadership/manager.jpg" alt="Team Manager" />
                        </div>
                        <div className="member-info">
                          <h3>Bobby Ao</h3>
                          <p className="role">Executive Assistant</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♐</span>
                              <span className="zodiac">Sagittarius</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">12/09</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/realboybobby?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/humansadtoo?igsh=MXQ3c2J4NWxtMnJmbg==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Executive Assistant</h4>
                        <ul>
                          <li>Key Responsibilities:
                            <ul className="achievement-list">
                              <li>Team Administration & Logistics</li>
                              <li>Event Coordination & Planning</li>
                              <li>Communication Management</li>
                              <li>Resource Allocation</li>
                            </ul>
                          </li>
                          <li>Contributions:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Year</div>
                                <div>Contribution</div>
                                <div>Impact</div>
                                <div>Status</div>
                              </div>
                              <div className="table-row">
                                <div>2024</div>
                                <div>Streamlined Team Operations</div>
                                <div>Increased Efficiency</div>
                                <div>Completed</div>
                              </div>
                              <div className="table-row">
                                <div>2024</div>
                                <div>Event Management System</div>
                                <div>Better Organization</div>
                                <div>Completed</div>
                              </div>
                              <div className="table-row">
                                <div>2024</div>
                                <div>Resource Optimization</div>
                                <div>Cost Reduction</div>
                                <div>Ongoing</div>
                              </div>
                              <div className="table-row">
                                <div>2023</div>
                                <div>Team Communication</div>
                                <div>Improved Coordination</div>
                                <div>Completed</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialized Skills: Project Management, Event Planning, Communication, Resource Management</li>
                        </ul>
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
                          <img src="images/team/management/finance.jpg" alt="Financial Manager" />
                        </div>
                        <div className="member-info">
                          <h3>Keagan Soo</h3>
                          <p className="role">Team Finance</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♌</span>
                              <span className="zodiac">Leo</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">07/26</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/keagan.sooXP?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/kszq_07?igsh=MTZyaWprNHczdWU5dQ==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Team Finance</h4>
                        <ul>
                          <li>Key Responsibilities:
                            <ul className="achievement-list">
                              <li>Financial Planning & Budgeting</li>
                              <li>Expense Management</li>
                              <li>Financial Reporting</li>
                              <li>Resource Allocation</li>
                            </ul>
                          </li>
                          <li>Contributions:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Year</div>
                                <div>Contribution</div>
                                <div>Impact</div>
                                <div>Status</div>
                              </div>
                              <div className="table-row">
                                <div>2024</div>
                                <div>Financial System Implementation</div>
                                <div>Improved Efficiency</div>
                                <div>Completed</div>
                              </div>
                              <div className="table-row">
                                <div>2024</div>
                                <div>Budget Optimization</div>
                                <div>Cost Reduction</div>
                                <div>Ongoing</div>
                              </div>
                              <div className="table-row">
                                <div>2023</div>
                                <div>Financial Planning</div>
                                <div>Better Resource Allocation</div>
                                <div>Completed</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialized Skills: Financial Management, Budgeting, Financial Analysis, Resource Planning</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Agent */}
                  <div className="team-member">
                    <div className={getCardClass('agent')} onClick={handleCardClick('agent')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/management/agent.jpg" alt="Team Agent" />
                        </div>
                        <div className="member-info">
                          <h3>Sammy</h3>
                          <p className="role">Team Agent</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♊</span>
                              <span className="zodiac">Gemini</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">05/28</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/sammy.khoo.89?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/mantao89?igsh=ZHZsZzAya3pucGNx" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Team Agent</h4>
                        <ul>
                          <li>Key Responsibilities:
                            <ul className="achievement-list">
                              <li>Player Representation</li>
                              <li>Contract Negotiation</li>
                              <li>Sponsorship Management</li>
                              <li>Team Relations</li>
                            </ul>
                          </li>
                          <li>Contributions:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Year</div>
                                <div>Contribution</div>
                                <div>Impact</div>
                                <div>Status</div>
                              </div>
                              <div className="table-row">
                                <div>2024</div>
                                <div>Sponsorship Acquisition</div>
                                <div>Increased Support</div>
                                <div>Completed</div>
                              </div>
                              <div className="table-row">
                                <div>2024</div>
                                <div>Player Contracts</div>
                                <div>Better Terms</div>
                                <div>Ongoing</div>
                              </div>
                              <div className="table-row">
                                <div>2023</div>
                                <div>Team Relations</div>
                                <div>Improved Communication</div>
                                <div>Completed</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialized Skills: Negotiation, Communication, Contract Management, Relationship Building</li>
                        </ul>
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
                          <img src="images/team/players/player1.jpg" alt="Player 1" />
                        </div>
                        <div className="member-info">
                          <h3>Justin Wong</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♐</span>
                              <span className="zodiac">Sagittarius</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">12/05</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/justin.wong.14811692?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/justin_wong.z.d?igsh=MXQ0bHNzdmk5dHM2cA==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 Nationals Top 16</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-06-15</div>
                                <div>Regional Championship</div>
                                <div>Lost Box</div>
                                <div>Top 8</div>
                              </div>
                              <div className="table-row">
                                <div>2024-04-20</div>
                                <div>League Cup</div>
                                <div>Charizard ex</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-12-10</div>
                                <div>Nationals</div>
                                <div>Gardevoir ex</div>
                                <div>Top 16</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Lost Box, Charizard ex, Gardevoir ex</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 2 */}
                  <div className="team-member">
                    <div className={getCardClass('player2')} onClick={handleCardClick('player2')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player2.jpg" alt="Player 2" />
                        </div>
                        <div className="member-info">
                          <h3>Yiam Wai Kit</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♍</span>
                              <span className="zodiac">Virgo</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">09/09</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/waikit960909?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/zenon_kit?igsh=ZXNwZjlzd3cyZnJ4" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 4</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Champion</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-05-18</div>
                                <div>Regional Championship</div>
                                <div>Mew VMAX</div>
                                <div>Top 4</div>
                              </div>
                              <div className="table-row">
                                <div>2024-03-22</div>
                                <div>League Challenge</div>
                                <div>Lugia VSTAR</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-11-15</div>
                                <div>League Cup</div>
                                <div>Palkia VSTAR</div>
                                <div>1st</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Mew VMAX, Lugia VSTAR, Palkia VSTAR</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 3 */}
                  <div className="team-member">
                    <div className={getCardClass('player3')} onClick={handleCardClick('player3')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player3.jpg" alt="Player 3" />
                        </div>
                        <div className="member-info">
                          <h3>Tommy Leong</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♊</span>
                              <span className="zodiac">Gemini</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">06/13</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/xiaotommyzz?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/tommy._.lcf?igsh=MWhwdnNtMjk3ZHI3dQ==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Cup Top 4</li>
                              <li>2023 League Challenge Winner</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-07-20</div>
                                <div>Regional Championship</div>
                                <div>Arceus VSTAR</div>
                                <div>Top 16</div>
                              </div>
                              <div className="table-row">
                                <div>2024-02-10</div>
                                <div>League Cup</div>
                                <div>Miraidon ex</div>
                                <div>Top 4</div>
                              </div>
                              <div className="table-row">
                                <div>2023-10-28</div>
                                <div>League Challenge</div>
                                <div>Lost Box</div>
                                <div>1st</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Arceus VSTAR, Miraidon ex, Lost Box</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 4 */}
                  <div className="team-member">
                    <div className={getCardClass('player4')} onClick={handleCardClick('player4')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player4.jpg" alt="Player 4" />
                        </div>
                        <div className="member-info">
                          <h3>Eden Lee</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♏</span>
                              <span className="zodiac">Scorpio</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">11/01</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/chunhou.lee.7?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/edenlch?igsh=cnFvMWxzNXB3YXhs" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 League Challenge Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-08-15</div>
                                <div>Regional Championship</div>
                                <div>Gardevoir ex</div>
                                <div>Top 8</div>
                              </div>
                              <div className="table-row">
                                <div>2024-01-20</div>
                                <div>League Cup</div>
                                <div>Charizard ex</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-09-10</div>
                                <div>League Challenge</div>
                                <div>Lost Box</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Gardevoir ex, Charizard ex, Lost Box</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 5 */}
                  <div className="team-member">
                    <div className={getCardClass('player5')} onClick={handleCardClick('player5')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player5.jpg" alt="Player 5" />
                        </div>
                        <div className="member-info">
                          <h3>Nick Kee</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♋</span>
                              <span className="zodiac">Cancer</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">07/17</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/nicks717?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/nicks717?igsh=dXBwcWljOW8zdTMx" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-09-10</div>
                                <div>Regional Championship</div>
                                <div>Mew VMAX</div>
                                <div>Top 16</div>
                              </div>
                              <div className="table-row">
                                <div>2024-02-25</div>
                                <div>League Challenge</div>
                                <div>Lugia VSTAR</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-12-15</div>
                                <div>League Cup</div>
                                <div>Palkia VSTAR</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Mew VMAX, Lugia VSTAR, Palkia VSTAR</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 6 */}
                  <div className="team-member">
                    <div className={getCardClass('player6')} onClick={handleCardClick('player6')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player6.jpg" alt="Player 6" />
                        </div>
                        <div className="member-info">
                          <h3>Yoong Kai Jian</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♏</span>
                              <span className="zodiac">Scorpio</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">11/10</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/kaijian.yoong?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/sirupy_yoong?igsh=Y2l3b2J6Z2NxbW1r" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 League Challenge Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-10-15</div>
                                <div>Regional Championship</div>
                                <div>Arceus VSTAR</div>
                                <div>Top 8</div>
                              </div>
                              <div className="table-row">
                                <div>2024-03-20</div>
                                <div>League Cup</div>
                                <div>Miraidon ex</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-11-10</div>
                                <div>League Challenge</div>
                                <div>Lost Box</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Arceus VSTAR, Miraidon ex, Lost Box</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 7 */}
                  <div className="team-member">
                    <div className={getCardClass('player7')} onClick={handleCardClick('player7')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player7.jpg" alt="Player 7" />
                        </div>
                        <div className="member-info">
                          <h3>SY Tan</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♉</span>
                              <span className="zodiac">Taurus</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">04/29</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/songyen.tan?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/songyen95?igsh=MWg5amxmdXJxNnlvMA==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-11-20</div>
                                <div>Regional Championship</div>
                                <div>Gardevoir ex</div>
                                <div>Top 16</div>
                              </div>
                              <div className="table-row">
                                <div>2024-04-15</div>
                                <div>League Challenge</div>
                                <div>Charizard ex</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-12-20</div>
                                <div>League Cup</div>
                                <div>Lost Box</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Gardevoir ex, Charizard ex, Lost Box</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 8 */}
                  <div className="team-member">
                    <div className={getCardClass('player8')} onClick={handleCardClick('player8')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player8.jpg" alt="Player 8" />
                        </div>
                        <div className="member-info">
                          <h3>Nero</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♓</span>
                              <span className="zodiac">Pisces</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">02/19</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/komori.nero?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/handson0219?igsh=MWI1bzVkaGh4eWZ0dQ==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 League Challenge Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-12-10</div>
                                <div>Regional Championship</div>
                                <div>Mew VMAX</div>
                                <div>Top 8</div>
                              </div>
                              <div className="table-row">
                                <div>2024-05-20</div>
                                <div>League Cup</div>
                                <div>Lugia VSTAR</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-10-15</div>
                                <div>League Challenge</div>
                                <div>Palkia VSTAR</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Mew VMAX, Lugia VSTAR, Palkia VSTAR</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 9 */}
                  <div className="team-member">
                    <div className={getCardClass('player9')} onClick={handleCardClick('player9')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player9.jpg" alt="Player 9" />
                        </div>
                        <div className="member-info">
                          <h3>Wong Wai Kit</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♐</span>
                              <span className="zodiac">Sagittarius</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">11/22</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/kitkit.wongwaikit.5?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/waikit1992?igsh=YmJzZXpsOGNvNXd2" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-01-15</div>
                                <div>Regional Championship</div>
                                <div>Arceus VSTAR</div>
                                <div>Top 16</div>
                              </div>
                              <div className="table-row">
                                <div>2024-06-20</div>
                                <div>League Challenge</div>
                                <div>Miraidon ex</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-11-15</div>
                                <div>League Cup</div>
                                <div>Lost Box</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Arceus VSTAR, Miraidon ex, Lost Box</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 10 */}
                  <div className="team-member">
                    <div className={getCardClass('player10')} onClick={handleCardClick('player10')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player10.jpg" alt="Player 10" />
                        </div>
                        <div className="member-info">
                          <h3>Wong Kar Lok</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♓</span>
                              <span className="zodiac">Pisces</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">03/10</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/karlokzaii?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/karlokzaii0310?igsh=MTNvOWJ0MzN3bnd2OA==" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 League Challenge Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-02-15</div>
                                <div>Regional Championship</div>
                                <div>Gardevoir ex</div>
                                <div>Top 8</div>
                              </div>
                              <div className="table-row">
                                <div>2024-07-20</div>
                                <div>League Cup</div>
                                <div>Charizard ex</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-12-10</div>
                                <div>League Challenge</div>
                                <div>Lost Box</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Gardevoir ex, Charizard ex, Lost Box</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 11 */}
                  <div className="team-member">
                    <div className={getCardClass('player11')} onClick={handleCardClick('player11')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player11.jpg" alt="Player 11" />
                        </div>
                        <div className="member-info">
                          <h3>Tan Wai Kiat</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♏</span>
                              <span className="zodiac">Scorpio</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">11/06</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/weiji?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/i.am.waikiat?igsh=NzUwZjVvZzl6YWZu" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-03-15</div>
                                <div>Regional Championship</div>
                                <div>Mew VMAX</div>
                                <div>Top 16</div>
                              </div>
                              <div className="table-row">
                                <div>2024-08-20</div>
                                <div>League Challenge</div>
                                <div>Lugia VSTAR</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-10-15</div>
                                <div>League Cup</div>
                                <div>Palkia VSTAR</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Mew VMAX, Lugia VSTAR, Palkia VSTAR</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 12 */}
                  <div className="team-member">
                    <div className={getCardClass('player12')} onClick={handleCardClick('player12')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player12.jpg" alt="Player 12" />
                        </div>
                        <div className="member-info">
                          <h3>Carlos</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♈</span>
                              <span className="zodiac">Aries</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">04/15</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/carlos.goonting?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/_thegoonster?igsh=MWk5MDJqeWFjcmM0" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 League Challenge Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-04-15</div>
                                <div>Regional Championship</div>
                                <div>Arceus VSTAR</div>
                                <div>Top 8</div>
                              </div>
                              <div className="table-row">
                                <div>2024-09-20</div>
                                <div>League Cup</div>
                                <div>Miraidon ex</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-11-20</div>
                                <div>League Challenge</div>
                                <div>Lost Box</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Arceus VSTAR, Miraidon ex, Lost Box</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 13 */}
                  <div className="team-member">
                    <div className={getCardClass('player13')} onClick={handleCardClick('player13')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player13.jpg" alt="Player 13" />
                        </div>
                        <div className="member-info">
                          <h3>Mathew Lim</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♎</span>
                              <span className="zodiac">Libra</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">10/20</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/profile.php?id=61551834492236&mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/weicheng136?igsh=ZDNmNjJ6cmgxcGlw&utm_source=qr" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-05-15</div>
                                <div>Regional Championship</div>
                                <div>Gardevoir ex</div>
                                <div>Top 16</div>
                              </div>
                              <div className="table-row">
                                <div>2024-10-20</div>
                                <div>League Challenge</div>
                                <div>Charizard ex</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-12-15</div>
                                <div>League Cup</div>
                                <div>Lost Box</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Gardevoir ex, Charizard ex, Lost Box</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 14 */}
                  <div className="team-member">
                    <div className={getCardClass('player14')} onClick={handleCardClick('player14')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player14.jpg" alt="Player 14" />
                        </div>
                        <div className="member-info">
                          <h3>Nigel</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♎</span>
                              <span className="zodiac">Libra</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">10/10</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/weicheng.lim.5?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/weicheng136?igsh=ZDNmNjJ6cmgxcGlw" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 8</li>
                              <li>2024 League Cup Champion</li>
                              <li>2023 League Challenge Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-06-15</div>
                                <div>Regional Championship</div>
                                <div>Mew VMAX</div>
                                <div>Top 8</div>
                              </div>
                              <div className="table-row">
                                <div>2024-11-20</div>
                                <div>League Cup</div>
                                <div>Lugia VSTAR</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-09-15</div>
                                <div>League Challenge</div>
                                <div>Palkia VSTAR</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Mew VMAX, Lugia VSTAR, Palkia VSTAR</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Player 15 */}
                  <div className="team-member">
                    <div className={getCardClass('player15')} onClick={handleCardClick('player15')}>
                      <div className="member-front">
                        <div className="member-image">
                          <img src="images/team/players/player15.jpg" alt="Player 15" />
                        </div>
                        <div className="member-info">
                          <h3>Zi Bin</h3>
                          <p className="role">Main Player</p>
                          <div className="member-details">
                            <div className="detail-item">
                              <span className="zodiac-symbol">♊</span>
                              <span className="zodiac">Gemini</span>
                            </div>
                            <div className="detail-item">
                              <i className="fas fa-birthday-cake"></i>
                              <span className="birthday">05/28</span>
                            </div>
                          </div>
                          <div className="social-links">
                            <a href="https://www.facebook.com/weiji.tan.5?mibextid=LQQJ4d" target="_blank" data-social-link><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/weiji.tan?igsh=ZDNmNjJ6cmgxcGlw" target="_blank" data-social-link><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="member-back">
                        <h4>Main Player</h4>
                        <ul>
                          <li>Achievements:
                            <ul className="achievement-list">
                              <li>2024 Regional Top 16</li>
                              <li>2024 League Challenge Winner</li>
                              <li>2023 League Cup Top 4</li>
                            </ul>
                          </li>
                          <li>Tournament Records:
                            <div className="tournament-table">
                              <div className="table-header">
                                <div>Date</div>
                                <div>Tournament</div>
                                <div>Deck</div>
                                <div>Rank</div>
                              </div>
                              <div className="table-row">
                                <div>2024-07-15</div>
                                <div>Regional Championship</div>
                                <div>Arceus VSTAR</div>
                                <div>Top 16</div>
                              </div>
                              <div className="table-row">
                                <div>2024-12-20</div>
                                <div>League Challenge</div>
                                <div>Miraidon ex</div>
                                <div>1st</div>
                              </div>
                              <div className="table-row">
                                <div>2023-10-15</div>
                                <div>League Cup</div>
                                <div>Lost Box</div>
                                <div>Top 4</div>
                              </div>
                            </div>
                          </li>
                          <li>Specialty Decks: Arceus VSTAR, Miraidon ex, Lost Box</li>
                        </ul>
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
