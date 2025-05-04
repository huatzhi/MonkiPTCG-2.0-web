'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: 'competition' | 'announcement' | 'community';
}

const newsItems: NewsItem[] = [
  {
    id: 'national-championship-2023',
    title: 'National Championship 2023 Results',
    date: '2023-12-15',
    description: 'Team Monki secures top positions in the National Championship...',
    image: '/images/news/regional-win.jpg',
    category: 'competition'
  },
  {
    id: 'new-training-program',
    title: 'New Training Program Launch',
    date: '2023-12-10',
    description: 'We are excited to announce our new training program...',
    image: '/images/news/training-program.jpg',
    category: 'announcement'
  },
  {
    id: 'community-tournament',
    title: 'Community Tournament Success',
    date: '2023-12-05',
    description: 'Our community tournament was a great success...',
    image: '/images/news/community-tournament.jpg',
    category: 'community'
  }
]

const categoryLabels = {
  competition: 'Competition',
  announcement: 'Announcement',
  community: 'Community'
}

const categoryColors = {
  competition: 'bg-blue-100 text-blue-800',
  announcement: 'bg-green-100 text-green-800',
  community: 'bg-purple-100 text-purple-800'
}

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredNews = selectedCategory
    ? newsItems.filter(item => item.category === selectedCategory)
    : newsItems

  return (
    <section className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Latest News</h2>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base ${
              !selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            All
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base ${
                selectedCategory === key ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredNews.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs sm:text-sm ${categoryColors[item.category]}`}>
                      {categoryLabels[item.category]}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/news">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              View All News
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
} 