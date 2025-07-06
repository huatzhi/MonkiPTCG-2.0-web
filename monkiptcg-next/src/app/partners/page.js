'use client';

import Link from 'next/link';
import Image from 'next/image';
import '../../styles/partners.css';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

export default function PartnersPage() {
    return (
        <>
            {/* Header Section */}
            <header>
                <Navigation />
            </header>

            {/* Main Content */}
            <div className="container">
                <main className="main-content">
                    <section className="partners-page">
                        <h1>OUR PARTNERS</h1>
                        
                        {/* Official Partners Section */}
                        <div className="partners-section">
                            <h2>OFFICIAL SPONSOR</h2>
                            <div className="sponsor-content">
                                <Image src="/images/partners/sponsor.png" alt="MyHobby & Collectibles Logo" width={250} height={250} />
                                <h3>MyHobby & Collectibles</h3>
                                <p>One of the most popular card game store in Malaysia</p>
                                <a href="https://www.myhobby.com.my/" className="sponsor-button" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </div>
                        </div>

                        {/* Become a Partner Section */}
                        <div className="partners-section">
                            <h2>Become a Partner</h2>
                            <p>We are always looking for new partners to join our journey. If you&apos;re interested in partnering with Team Monki, please contact us through our business inquiries page.</p>
                            <Link href="/contact" className="sponsor-button">Contact Us</Link>
                        </div>
                    </section>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
} 