'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [playAttempts, setPlayAttempts] = useState(0);
  const maxPlayAttempts = 3;

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // 设置视频属性
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';

    // 立即触发 logo 和标语的动画
    container.classList.add('opacity-100');
    const elements = container.querySelectorAll('.video-content');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, 100 + index * 100);
    });

    const handleError = () => {
      console.error('Video load error');
      setError('无法加载视频');
    };

    const handleCanPlay = async () => {
      try {
        await video.play();
      } catch (err) {
        console.error('Error playing video:', err);
        if (playAttempts < maxPlayAttempts) {
          setPlayAttempts(prev => prev + 1);
          setTimeout(() => {
            video.play().catch(console.error);
          }, 500);
        }
      }
    };

    // 添加事件监听器
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    // 初始播放尝试
    video.play().catch(err => {
      console.error('Initial play error:', err);
      if (playAttempts < maxPlayAttempts) {
        setPlayAttempts(prev => prev + 1);
        setTimeout(() => {
          video.play().catch(console.error);
        }, 500);
      }
    });

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  if (error) {
    return (
      <div className="relative w-full h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Image
            src="/images/team-monki-logo.png"
            alt="Team Monki Logo"
            width={500}
            height={500}
            priority
            quality={100}
            className="mx-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black opacity-0 transition-opacity duration-500"
    >
      {/* 视频封面作为备用背景 */}
      <Image
        src="/images/video-poster.jpg"
        alt="Video Poster"
        fill
        priority
        quality={100}
        className="object-cover z-0"
      />

      <video
        ref={videoRef}
        id="bg-video"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/video-poster.jpg"
      >
        <source src="/videos/team-intro.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30 w-full px-8">
        <Image
          src="/images/team-monki-logo.png"
          alt="Team Monki Logo"
          width={800}
          height={800}
          priority
          quality={100}
          className="mx-auto mb-8 video-content"
        />
        <p className="text-[#10e07f] text-3xl sm:text-4xl uppercase tracking-widest mb-6 text-shadow-glow video-content">
          Join Our Journey
        </p>
        <div className="w-64 h-1 bg-gradient-to-r from-transparent via-[#7e1785] to-[#10e07f] mx-auto mb-10 relative video-content">
          <div className="absolute -top-1 left-0 w-3 h-3 bg-[#10e07f] rounded-full"></div>
          <div className="absolute -top-1 right-0 w-3 h-3 bg-[#10e07f] rounded-full"></div>
        </div>
        <p className="text-white text-3xl sm:text-4xl uppercase tracking-widest text-shadow-glow video-content">
          Welcome to the world of competitive PTCG
        </p>
      </div>
    </div>
  );
} 