'use client';

import Link from 'next/link';

export default function ArticlesSection({ latestArticles }) {
  return (
    <div className="article-block">
      <div className="article-section-title">Latest Articles</div>
      {latestArticles.slice(0,3).map(article => (
        <Link href={`/monki-insights?id=${article.id}`} key={article.id} className="article-list-item article-list-link">
          <div className="article-list-title">{article.title}</div>
          <div className="article-list-meta">
            <span className="article-list-author">{article.author}</span>
            <span className="article-list-date">{article.date}</span>
          </div>
          <div className="article-list-excerpt">{article.excerpt}</div>
        </Link>
      ))}
      <Link href="/monki-insights" className="article-list-more-btn">View More Articles &rarr;</Link>
    </div>
  );
} 