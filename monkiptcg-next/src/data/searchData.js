// 搜索数据
export const searchData = [
  // 新闻搜索项
  {
    id: 1,
    type: 'news',
    title: 'Tommy Leong: Back to Back Champion',
    url: '/news?id=1',
    excerpt: 'Congratulations to Tommy Leong for securing 1st place in TCGKL\'s Annual Biggest Tournament',
  },
  {
    id: 2,
    type: 'news',
    title: 'Nick Kee Secures 2nd Place in Malaysia MBL 2025',
    url: '/news?id=2',
    excerpt: 'Congratulations to Nick Kee for securing 2nd place in Malaysia MBL 2025',
  },
  {
    id: 101,
    type: 'news',
    title: 'Justin Wong Secures 2nd Place in Malaysia UBL Penang Section 2025',
    url: '/news?id=101',
    excerpt: 'Congratulations to our last ride "Lugia佬(Lou)" Justin Wong to win second place at Penang\'s Ultra Ball League',
  },
  
  // 文章搜索项
  {
    id: 101,
    type: 'article',
    title: 'Card Mania 2025 Champion [Gardevoir Ex] Post-Tournament Report',
    url: '/monki-insights?id=101',
    excerpt: 'This article will introduce Tommy Leong\'s deep thoughts on Gardevoir ex',
  },
  
  // 页面搜索项
  {
    id: 1,
    type: 'page',
    title: 'About Us',
    url: '/about-us',
    excerpt: 'Learn more about Team Monki and our mission',
  },
  {
    id: 2,
    type: 'page',
    title: 'Team Members',
    url: '/team-members',
    excerpt: 'Meet our team members and players',
  },
  {
    id: 3,
    type: 'page',
    title: 'Contact Us',
    url: '/contact',
    excerpt: 'Get in touch with Team Monki',
  },
  {
    id: 4,
    type: 'page',
    title: 'Journey',
    url: '/journey',
    excerpt: 'Explore our team journey and achievements',
  },
  {
    id: 5,
    type: 'page',
    title: 'Partners',
    url: '/partners',
    excerpt: 'Our partners and sponsors',
  },
  {
    id: 6,
    type: 'page',
    title: 'Socials',
    url: '/socials',
    excerpt: 'Follow us on social media',
  },
  {
    id: 7,
    type: 'page',
    title: 'Monki Insights',
    url: '/monki-insights',
    excerpt: 'Read our articles and insights',
  },
];

// 搜索功能工具函数
export const searchItems = (query) => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  return searchData.filter(item => 
    item.title.toLowerCase().includes(searchTerm) ||
    item.excerpt.toLowerCase().includes(searchTerm)
  );
};

// 按类型过滤搜索结果
export const filterSearchResults = (results, type) => {
  if (!type) return results;
  return results.filter(item => item.type === type);
}; 