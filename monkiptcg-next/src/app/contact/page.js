'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../../styles/Contact_styles.css';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 这里可以添加表单提交逻辑
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            {/* Header Section */}
            <header>
                <Navigation />
            </header>

            {/* Main Content */}
            <div className="container">
                <main className="main-content">
                    <section className="contact-page">
                        <h1>CONTACT US</h1>
                        
                        {/* Contact Information Section */}
                        <div className="contact-section">
                            <h2>Get in Touch</h2>
                            <p>Have questions about Team Monki? Want to join our community? Interested in partnerships? We'd love to hear from you!</p>
                            
                            <div className="contact-grid">
                                {/* Contact Form */}
                                <div className="contact-form-container">
                                    <h3>Send us a Message</h3>
                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject *</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="partnership">Partnership Opportunity</option>
                                                <option value="join-team">Join the Team</option>
                                                <option value="tournament">Tournament Information</option>
                                                <option value="support">Technical Support</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="message">Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows="6"
                                                placeholder="Tell us more about your inquiry..."
                                            ></textarea>
                                        </div>
                                        
                                        <button type="submit" className="submit-button">
                                            Send Message
                                        </button>
                                    </form>
                                </div>

                                {/* Contact Information */}
                                <div className="contact-info">
                                    <h3>Contact Information</h3>
                                    
                                    <div className="info-item">
                                        <i className="fas fa-envelope"></i>
                                        <div>
                                            <h4>Email</h4>
                                            <p>info@teammonki.com</p>
                                            <p>business@teammonki.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="info-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div>
                                            <h4>Location</h4>
                                            <p>36F-1, Jalan Radin Anum, Bandar Baru Sri Petaling, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>
                                        </div>
                                    </div>
                                    
                                    <div className="info-item">
                                        <i className="fas fa-clock"></i>
                                        <div>
                                            <h4>Response Time</h4>
                                            <p>Within 24-48 hours</p>
                                        </div>
                                    </div>

                                    <div className="social-links-contact">
                                        <h4>Follow Us</h4>
                                        <div className="social-icons">
                                            <a href="https://www.facebook.com/profile.php?id=61567936103241&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                            <a href="https://www.instagram.com/teammonki_my?igsh=Z21iOGplZXI0NDcx" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="contact-section">
                            <h2>Quick Links</h2>
                            <div className="quick-links-grid">
                                <Link href="/about-us" className="quick-link-card">
                                    <i className="fas fa-info-circle"></i>
                                    <h3>About Us</h3>
                                    <p>Learn more about Team Monki's story and mission</p>
                                </Link>
                                
                                <Link href="/partners" className="quick-link-card">
                                    <i className="fas fa-handshake"></i>
                                    <h3>Partnership</h3>
                                    <p>Interested in partnering with Team Monki?</p>
                                </Link>
                                
                                <Link href="/team-members" className="quick-link-card">
                                    <i className="fas fa-users"></i>
                                    <h3>Join the Team</h3>
                                    <p>Find out how to become part of our team</p>
                                </Link>
                                
                                <Link href="/socials" className="quick-link-card">
                                    <i className="fas fa-share-alt"></i>
                                    <h3>Social Media</h3>
                                    <p>Connect with us on social platforms</p>
                                </Link>
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