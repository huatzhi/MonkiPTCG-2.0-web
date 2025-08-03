'use client';

import Link from 'next/link';

export default function AboutUsSection() {
  return (
    <div className="aboutus-content merged">
      <div className="aboutus-flex">
        <div className="aboutus-info">
          <p>
            Team Monki is a passionate and professional Pokémon TCG team based in Malaysia. Our mission is to connect players, share knowledge, and promote the competitive spirit of PTCG in the region.
          </p>
          <ul className="aboutus-highlights">
            <li>🏆 2025 TCGKL Champion</li>
            <li>🥈 2025 MBL Runner-up</li>
            <li>🌏 Multiple Worlds Qualifiers</li>
            <li>👥 20+ Active Members</li>
          </ul>
          <div className="aboutus-values">
            <span>Passion</span>
            <span>Teamwork</span>
            <span>Excellence</span>
            <span>Innovation</span>
          </div>
          <p style={{marginTop: '0.7rem'}}>
            Want to join or collaborate? <Link href="/contact" className="aboutus-link">Contact us</Link> on social media!
          </p>
          <div className="aboutus-journey">
            <div className="aboutus-journey-title">Our Journey</div>
            <ul className="aboutus-journey-list">
              <li><span className="aboutus-journey-year">2023</span> Team founded, first tournaments.</li>
              <li><span className="aboutus-journey-year">2024</span> Multiple top finishes, team grows.</li>
              <li><span className="aboutus-journey-year">2025</span> TCGKL Champion, Worlds qualifiers.</li>
              <li><span className="aboutus-journey-year">Future</span> Keep growing and connecting players!</li>
            </ul>
          </div>
        </div>
        <div className="aboutus-avatar">
          <img src="/images/team/leadership/captain.jpg" alt="Terry Chan" />
          <div className="aboutus-avatar-name">Terry Chan</div>
          <div className="aboutus-avatar-role">Team Leader</div>
        </div>
      </div>
    </div>
  );
} 