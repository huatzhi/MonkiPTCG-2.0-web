'use client';

import { useEffect, useState } from 'react';

export default function useScrollHandler() {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    // Navbar background change on scroll
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setHeaderScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);

      const sections = document.querySelectorAll('.home-section');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
        }
      );
      sections.forEach((section) => observer.observe(section));

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
        sections.forEach((section) => observer.unobserve(section));
      };
    }
  }, []);

  return { headerScrolled };
} 