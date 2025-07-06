import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();
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
                        <li><Link href="/news">News</Link></li>
                        <li><Link href="/monki-insights">Monki Insights</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {year} Team Monki. All rights reserved.</p>
            </div>
        </footer>
    );
} 