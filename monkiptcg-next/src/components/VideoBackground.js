'use client';

import { useEffect, useState, useRef } from 'react';

export default function VideoBackground() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Video animation logic
    const videoNode = videoRef.current;
    const onVideoLoaded = () => {
      setIsVideoVisible(true);
      const videoContent = document.querySelector('.video-content');
      if (videoContent) {
        const elements = videoContent.querySelectorAll('img, p, .cyberpunk-line');
        setTimeout(() => {
          elements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('visible');
            }, index * 200);
          });
        }, 500);
      }
    };

    if (videoNode) {
      if (videoNode.readyState >= 3) {
        onVideoLoaded();
      } else {
        videoNode.addEventListener('loadeddata', onVideoLoaded);
      }
    }

    // Cleanup function
    return () => {
      if (videoNode) {
        videoNode.removeEventListener('loadeddata', onVideoLoaded);
      }
    };
  }, []);

  return (
    <div className={`video-container ${isVideoVisible ? 'visible' : ''}`}>
      <video ref={videoRef} id="bg-video" autoPlay muted loop playsInline>
        <source src="/videos/team-intro.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      <div className="video-content">
        <img src="/images/team-monki-logo.png" alt="Team Monki Logo" className="team-logo" />
        <p className="cyberpunk-subtitle">Join Our Journey</p>
        <div className="cyberpunk-line"></div>
        <p className="cyberpunk-description">Welcome to the world of competitive PTCG</p>
      </div>
    </div>
  );
} 