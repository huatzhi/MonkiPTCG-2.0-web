'use client';

import Link from 'next/link';
import Image from 'next/image';
import '../../styles/partners.css';
import Footer from '../../components/Footer';

export default function PartnersPage() {
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
                <main className="main-content">
                    <section className="partners-page">
                        <h1>OUR PARTNERS</h1>
                        
                        {/* Official Partners Section */}
                        <div className="partners-section">
                            <h2>Our Sponsor</h2>
                            <div className="sponsor-content">
                                <Image src="/images/partners/sponsor.png" alt="MyHobby & Collectibles Logo" width={250} height={250} />
                                <h3>MyHobby & Collectibles</h3>
                                <p>Official Sponsor</p>
                                <a href="https://www.myhobby.com.my/" className="sponsor-button" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </div>
                        </div>

                        {/* Become a Partner Section */}
                        <div className="partners-section">
                            <h2>Become a Partner</h2>
                            <p>We are always looking for new partners to join our journey. If you&apos;re interested in partnering with Team Monki, please contact us through our business inquiries page.</p>
                            <Link href="/about-us#contact" className="sponsor-button">Contact Us</Link>
                        </div>
                    </section>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
} 