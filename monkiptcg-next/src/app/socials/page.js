'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/Socials_styles.css';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

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
                <Navigation />
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
                            <h2>Media & Content</h2>
                            <div className="stream-schedule">
                                <div className="social-card">
                                    <i className="fab fa-twitch fa-2x"></i>
                                    <div className="schedule-info">
                                        <h3>Weekly Deck Building/Playtest Sessions</h3>
                                        <p>Time Schedule Coming Soon</p>
                                        <a href="#" className="social-button">Stay Tuned</a>
                                    </div>
                                </div>
                                <div className="social-card">
                                    <i className="fab fa-youtube fa-2x"></i>
                                    <div className="schedule-info">
                                        <h3>Team's Vlogs</h3>
                                        <p>Comming Soon</p>
                                        <a href="#" className="social-button">Coming Soon</a>
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
                                    <p>Casual play sessions and team members monthly gatherings.</p>
                                </div>
                                <div className="social-card">
                                    <i className="fas fa-chalkboard-teacher fa-2x"></i>
                                    <h3>Training Sessions</h3>
                                    <p>Weekly in-shop coaching/playtest sessions for community members.</p>
                                </div>
                                <div className="social-card">
                                    <i className="fas fa-trophy fa-2x"></i>
                                    <h3>Shop/Team Matches</h3>
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