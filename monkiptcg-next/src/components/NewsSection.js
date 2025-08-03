'use client';

import Link from 'next/link';

export default function NewsSection({ latestNews, previousNews }) {
  return (
    <div className="news-list-block">
      {/* 最新新闻 */}
      <div className="news-section-title">Latest News</div>
      {latestNews.slice(0,3).map(news => (
        <Link href={`/news?id=${news.id}`} key={news.id} className="news-list-item news-list-link">
          <div className="news-list-title">{news.title}</div>
          <div className="news-list-date">{news.date}</div>
          <div className="news-list-summary">{news.summary}</div>
        </Link>
      ))}
      {/* 往期新闻 */}
      <div className="news-section-title">Previous News</div>
      {previousNews.slice(0,2).map(news => (
        <Link href={`/news?id=${news.id}`} key={news.id} className="news-list-item news-list-link">
          <div className="news-list-title">{news.title}</div>
          <div className="news-list-date">{news.date}</div>
          <div className="news-list-summary">{news.summary}</div>
        </Link>
      ))}
      <Link href="/news" className="news-list-more-btn">View More News &rarr;</Link>
    </div>
  );
} 