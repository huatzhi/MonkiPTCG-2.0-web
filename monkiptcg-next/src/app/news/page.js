'use client';

import Link from 'next/link';
import Image from 'next/image';
import '../../styles/News_styles.css';
import Footer from '../../components/Footer';

export default function NewsPage() {
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

            {/* Main Content */}
            <div className="container">
                {/* Main Content Area */}
                <main className="main-content">
                    <section className="news-page">
                        <h1>MONKI NEWS</h1>
                        
                        {/* Latest News Section */}
                        <div className="latest-news">
                            <h2>Latest Updates</h2>
                            <div className="news-grid">
                                <article className="news-card">
                                    <div className="news-image">
                                        <Image src="/images/news/tournament1.jpg" alt="Tournament News" width={350} height={250} />
                                    </div>
                                    <div className="news-content">
                                        <h3>Victory at National Championship</h3>
                                        <p className="news-date">March 15, 2024</p>
                                        <p>Team Monki secures first place in the National PTCG Championship...</p>
                                        <a href="#" className="read-more">Read More</a>
                                    </div>
                                </article>
                                
                                <article className="news-card">
                                    <div className="news-image">
                                        <Image src="/images/news/team1.jpg" alt="Team Update" width={350} height={250} />
                                    </div>
                                    <div className="news-content">
                                        <h3>New Team Member Announcement</h3>
                                        <p className="news-date">March 10, 2024</p>
                                        <p>We&apos;re excited to welcome our newest member to Team Monki...</p>
                                        <a href="#" className="read-more">Read More</a>
                                    </div>
                                </article>
                            </div>
                        </div>

                        {/* Upcoming Events Section */}
                        <div className="upcoming-events">
                            <h2>Upcoming Events</h2>
                            <div className="events-timeline">
                                <div className="timeline-item">
                                    <div className="timeline-date">April 5, 2024</div>
                                    <div className="timeline-content">
                                        <h3>Regional Qualifiers</h3>
                                        <p>Join us at the Regional Qualifiers in Kuala Lumpur</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-date">April 20, 2024</div>
                                    <div className="timeline-content">
                                        <h3>Community Tournament</h3>
                                        <p>Monthly community tournament with special prizes</p>
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