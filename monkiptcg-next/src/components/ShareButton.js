'use client';

import { useState, useRef, useEffect } from 'react';

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
    title: title || 'Team Monki - Professional Pokémon TCG Team',
    description: description || 'Join our journey in competitive PTCG',
  };

  const shareOptions = [
    {
      name: 'Facebook',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: '#1877f2',
      action: () => {
        if (typeof window !== 'undefined') {
          const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
          window.open(facebookUrl, '_blank', 'width=600,height=400');
        }
      }
    },
    {
      name: 'Twitter',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: '#1da1f2',
      action: () => {
        if (typeof window !== 'undefined') {
          const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.title)}&url=${encodeURIComponent(shareData.url)}`;
          window.open(twitterUrl, '_blank', 'width=600,height=400');
        }
      }
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: '#0077b5',
      action: () => {
        if (typeof window !== 'undefined') {
          const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`;
          window.open(linkedinUrl, '_blank', 'width=600,height=400');
        }
      }
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      color: '#25d366',
      action: () => {
        if (typeof window !== 'undefined') {
          const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareData.title} ${shareData.url}`)}`;
          window.open(whatsappUrl, '_blank');
        }
      }
    },
    {
      name: 'Copy Link',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
      color: '#6c757d',
      action: async () => {
        if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
          try {
            await navigator.clipboard.writeText(shareData.url);
            // 可以添加一个临时的成功提示
            const button = document.querySelector('.copy-link-btn');
            if (button) {
              const originalText = button.textContent;
              button.textContent = 'Copied!';
              setTimeout(() => {
                button.textContent = originalText;
              }, 2000);
            }
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
        }
      }
    }
  ];

  const toggleShare = () => {
    setIsShareOpen(!isShareOpen);
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
            {shareOptions.map((option, index) => (
              <button
                key={option.name}
                className="share-option"
                onClick={() => {
                  option.action();
                  setIsShareOpen(false);
                }}
                style={{ '--share-color': option.color }}
              >
                <span className="share-icon">{option.icon}</span>
                <span className="share-name">{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 