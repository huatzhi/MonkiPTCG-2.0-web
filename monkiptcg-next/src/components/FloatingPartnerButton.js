'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FloatingPartnerButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // 跳转到合作伙伴的 Instagram 页面
    if (typeof window !== 'undefined') {
      window.open('https://www.instagram.com/myhobbyncollectibles?igsh=MXNvOGtrYTltbGU5YQ==', '_blank');
    }
  };

  return (
    <div 
      className="floating-partner-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="partner-button-content">
        <Image 
          src="/images/partners/sponsor.png" 
          alt="MyHobby & Collectibles" 
          width={80} 
          height={80}
          className="partner-logo-img"
        />
        {isHovered && (
          <div className="partner-tooltip">
            <span>MyHobby & Collectibles</span>
            <span className="tooltip-subtitle">Follow us on Instagram</span>
          </div>
        )}
      </div>
    </div>
  );
} 