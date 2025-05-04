'use client'

import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import { FaFacebook, FaTwitter, FaWhatsapp, FaCalendarAlt, FaUser } from 'react-icons/fa'

interface NewsDetail {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
  image: string;
  category: 'tournament' | 'announcement' | 'community';
}

// This would normally come from an API or database
const newsDetails: Record<string, NewsDetail> = {
  '1': {
    id: '1',
    title: 'National Championship 2023 Results',
    date: '2023-12-15',
    author: 'Team Monki',
    content: `
      <p>Team Monki has once again proven its dominance in the Pokemon Trading Card Game scene by securing multiple top positions in the National Championship 2023.</p>
      <p>Our players showed exceptional skill and strategy throughout the tournament, with several team members making it to the top 8. The highlight of the event was John Doe's incredible victory in the Masters Division, marking his third consecutive national title.</p>
      <p>Key achievements:</p>
      <ul>
        <li>1st Place - Masters Division (John Doe)</li>
        <li>3rd Place - Seniors Division (Jane Smith)</li>
        <li>5th Place - Juniors Division (Mike Johnson)</li>
      </ul>
      <p>We are incredibly proud of all our team members who participated and represented Team Monki with excellence. This success is a testament to our rigorous training program and the dedication of our players.</p>
    `,
    image: '/images/news/national-2023.jpg',
    category: 'tournament'
  },
  // Add more news details as needed
}

const categoryColors = {
  tournament: 'bg-blue-100 text-blue-800',
  announcement: 'bg-green-100 text-green-800',
  community: 'bg-purple-100 text-purple-800'
}

export default function NewsDetail() {
  const params = useParams()
  const news = newsDetails[params.id as string]

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">News not found</p>
      </div>
    )
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[news.category]}`}>
            {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
          </span>
          <div className="flex items-center text-gray-500">
            <FaCalendarAlt className="mr-2" />
            <span>{news.date}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaUser className="mr-2" />
            <span>{news.author}</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-6">{news.title}</h1>
      </div>

      <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
        />
      </div>

      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />

      <div className="mt-12 pt-8 border-t">
        <h3 className="text-xl font-semibold mb-4">Share this article</h3>
        <div className="flex space-x-4">
          <FacebookShareButton url={shareUrl}>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaFacebook />
              <span>Share</span>
            </button>
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={news.title}>
            <button className="flex items-center space-x-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
              <FaTwitter />
              <span>Tweet</span>
            </button>
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} title={news.title}>
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              <FaWhatsapp />
              <span>Share</span>
            </button>
          </WhatsappShareButton>
        </div>
      </div>
    </article>
  )
} 