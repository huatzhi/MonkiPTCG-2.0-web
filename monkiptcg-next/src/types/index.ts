// 团队成员接口
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  img: string;
  birthday?: string;
  motto?: string;
  socialLinks?: SocialLink[];
  achievements?: string[];
  favoritePokemon?: string;
}

// 社交媒体链接接口
export interface SocialLink {
  url: string;
  icon: string;
}

// 新闻数据接口
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  content?: string;
  image?: string;
  author?: string;
  tags?: string[];
}

// 文章数据接口
export interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  type: 'free' | 'premium';
  excerpt: string;
  content?: string;
  image?: string;
  tags?: string[];
}

// 主页数据接口
export interface HomePageData {
  teamMembers: TeamMember[];
  latestNews: NewsItem[];
  previousNews: NewsItem[];
  latestArticles: Article[];
}

// 搜索数据接口
export interface SearchItem {
  id: number;
  type: 'news' | 'article' | 'page';
  title: string;
  url: string;
  excerpt: string;
}

// 分享数据接口
export interface ShareData {
  url: string;
  title: string;
  description: string;
}

// 社交媒体平台接口
export interface SocialPlatform {
  name: string;
  icon: JSX.Element;
  color: string;
  action: () => void;
} 