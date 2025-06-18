'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/Socials_styles.css';
import Footer from '../../components/Footer';

const Gallery = ({ platform, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const autoAdvance = setInterval(nextPhoto, 5000);
        return () => clearInterval(autoAdvance);
    }, [images.length]);

    return (
        <div className="social-gallery">
            <div className="gallery-container">
                <button className="gallery-nav prev" onClick={prevPhoto}>❮</button>
                <div className="gallery-viewport" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((img, index) => (
                        <Image
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            width={500}
                            height={500}
                            className={index === currentIndex ? 'active' : ''}
                        />
                    ))}
                </div>
                <button className="gallery-nav next" onClick={nextPhoto}>❯</button>
            </div>
        </div>
    );
};

export default function SocialsPage() {
    const instagramImages = [
        { src: '/images/instagram/1.jpg', alt: 'Instagram Post 1' },
        { src: '/images/instagram/2.jpg', alt: 'Instagram Post 2' },
        { src: '/images/instagram/3.jpg', alt: 'Instagram Post 3' },
        { src: '/images/instagram/4.jpg', alt: 'Instagram Post 4' },
        { src: '/images/instagram/5.jpg', alt: 'Instagram Post 5' },
    ];

    const facebookImages = [
        { src: '/images/facebook/1.jpg', alt: 'Facebook Post 1' },
        { src: '/images/facebook/2.jpg', alt: 'Facebook Post 2' },
        { src: '/images/facebook/3.jpg', alt: 'Facebook Post 3' },
        { src: '/images/facebook/4.jpg', alt: 'Facebook Post 4' },
        { src: '/images/facebook/5.jpg', alt: 'Facebook Post 5' },
    ];

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
                {/* Sidebar */}
                <aside className="sidebar">
                    <div className="sidebar-content">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#live-streams">Live Streams</a></li>
                            <li><a href="#upcoming-events">Upcoming Events</a></li>
                            <li><a href="#community-posts">Community Posts</a></li>
                            <li><a href="#discord">Join Discord</a></li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="main-content">
                    <section className="socials-page">
                        <h1>MONKI CHANNEL</h1>
                        
                        {/* Social Media Platforms */}
                        <div className="social-section">
                            <h2>Follow Us</h2>
                            <div className="social-grid">
                                <div className="social-card" data-platform="instagram">
                                    <i className="fab fa-instagram fa-3x"></i>
                                    <h3>Instagram</h3>
                                    <p>Follow our journey, behind-the-scenes content, and daily updates.</p>
                                    <a href="https://www.instagram.com/teammonki_my?igsh=Z21iOGplZXI0NDcx" className="social-button instagram" target="_blank" rel="noopener noreferrer">Follow</a>
                                    <Gallery platform="instagram" images={instagramImages} />
                                </div>
                                
                                <div className="social-card" data-platform="facebook">
                                    <i className="fab fa-facebook fa-3x"></i>
                                    <h3>Facebook</h3>
                                    <p>Stay updated with tournament results, event announcements, and community news.</p>
                                    <a href="https://www.facebook.com/profile.php?id=61567936103241&mibextid=LQQJ4d" className="social-button facebook" target="_blank" rel="noopener noreferrer">Follow</a>
                                    <Gallery platform="facebook" images={facebookImages} />
                                </div>
                            </div>
                        </div>

                        {/* Live Streams Section */}
                        <div className="social-section" id="live-streams">
                            <h2>Live Streams</h2>
                            <div className="stream-schedule">
                                <div className="social-card">
                                    <i className="fab fa-twitch fa-2x"></i>
                                    <div className="schedule-info">
                                        <h3>Weekly PTCG Battles</h3>
                                        <p>Every Wednesday @ 8PM MYT</p>
                                        <a href="#" className="social-button">Watch on Twitch</a>
                                    </div>
                                </div>
                                <div className="social-card">
                                    <i className="fab fa-youtube fa-2x"></i>
                                    <div className="schedule-info">
                                        <h3>Deck Building Sessions</h3>
                                        <p>Every Saturday @ 3PM MYT</p>
                                        <a href="#" className="social-button">Watch on YouTube</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Community Engagement */}
                        <div className="social-section" id="community-posts">
                            <h2>Community Engagement</h2>
                            <div className="engagement-content">
                                <div className="social-card">
                                    <i className="fas fa-users fa-2x"></i>
                                    <h3>Monthly Meetups</h3>
                                    <p>Join us for casual play sessions and trading events.</p>
                                </div>
                                <div className="social-card">
                                    <i className="fas fa-chalkboard-teacher fa-2x"></i>
                                    <h3>Training Sessions</h3>
                                    <p>Weekly online coaching sessions for community members.</p>
                                </div>
                                <div className="social-card">
                                    <i className="fas fa-trophy fa-2x"></i>
                                    <h3>Online Tournaments</h3>
                                    <p>Regular community tournaments with prizes.</p>
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