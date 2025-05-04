import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monki Insights - Team Monki PTCG',
  description: 'Get the latest insights, strategies, and updates from Team Monki, Malaysia\'s premier Pokemon Trading Card Game team.',
};

interface Insight {
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  category: 'strategy' | 'deck-building' | 'tournament' | 'community';
}

const insights: Insight[] = [
  {
    id: 'deck-building-101',
    title: 'Deck Building 101: Core Concepts',
    date: '2023-12-01',
    author: 'John Doe',
    image: '/images/insights/deck-building.jpg',
    excerpt: 'Learn the fundamental principles of building a competitive PTCG deck...',
    category: 'deck-building'
  },
  {
    id: 'tournament-prep',
    title: 'Tournament Preparation Guide',
    date: '2023-11-15',
    author: 'Jane Smith',
    image: '/images/insights/tournament.jpg',
    excerpt: 'Essential tips and strategies for preparing for your next tournament...',
    category: 'tournament'
  },
  {
    id: 'community-growth',
    title: 'Growing the PTCG Community',
    date: '2023-11-01',
    author: 'Mike Johnson',
    image: '/images/insights/community.jpg',
    excerpt: 'How we can work together to grow and strengthen the PTCG community...',
    category: 'community'
  }
];

const categoryColors = {
  strategy: 'bg-purple-100 text-purple-800',
  'deck-building': 'bg-blue-100 text-blue-800',
  tournament: 'bg-green-100 text-green-800',
  community: 'bg-yellow-100 text-yellow-800'
};

export default function Insights() {
  return (
    <main className="min-h-screen py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Monki Insights</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Link key={insight.id} href={`/insights/${insight.id}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${categoryColors[insight.category]}`}>
                      {insight.category.replace('-', ' ')}
                    </span>
                    <span className="text-xs text-gray-500">{insight.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{insight.title}</h2>
                  <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                  <p className="text-sm text-gray-500">By {insight.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 