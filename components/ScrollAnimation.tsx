'use client';

import React, { useEffect } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

export default function ScrollAnimation({ children }: ScrollAnimationProps) {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return <>{children}</>;
} 