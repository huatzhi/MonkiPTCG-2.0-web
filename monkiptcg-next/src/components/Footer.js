import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Team Monki</h3>
                    <p>One of the best PTCG team in Malaysia</p>
                </div>
                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61567936103241&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/teammonki_my?igsh=Z21iOGplZXI0NDcx" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about-us">About</Link></li>
                        <li><Link href="/team-members">Team</Link></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Team Monki. All rights reserved.</p>
            </div>
        </footer>
    );
} 