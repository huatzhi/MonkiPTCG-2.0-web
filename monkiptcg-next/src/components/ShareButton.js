'use client';

import { useState, useRef, useEffect } from 'react';
import { shareConfig, shareToPlatform } from '../data/shareConfig';

export default function ShareButton({ url, title, description }) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const shareRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState('');

  // 在客户端设置当前URL
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareData = {
    url: url || currentUrl,
    title: title || shareConfig.defaultTitle,
    description: description || shareConfig.defaultDescription,
  };

  const toggleShare = () => {
    setIsShareOpen(!isShareOpen);
  };

  const handleShare = (platform) => {
    shareToPlatform(platform, shareData.url, shareData.title);
    setIsShareOpen(false);
  };

  // 点击外部关闭分享菜单
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const handleClickOutside = (event) => {
        if (shareRef.current && !shareRef.current.contains(event.target)) {
          setIsShareOpen(false);
        }
      };

      if (isShareOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isShareOpen]);

  return (
    <div className="share-container" ref={shareRef}>
      <button 
        className="share-button"
        onClick={toggleShare}
        aria-label="Share"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>

      {isShareOpen && (
        <div className="share-dropdown">
          <div className="share-header">
            <span>Share</span>
            <button 
              className="close-share"
              onClick={toggleShare}
              aria-label="Close share menu"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="share-options">
            {shareConfig.platforms.map((platform, index) => (
              <button
                key={platform.name}
                className="share-option"
                onClick={() => handleShare(platform)}
                style={{ '--share-color': platform.color }}
              >
                <span className="share-icon">{platform.icon}</span>
                <span className="share-name">{platform.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 