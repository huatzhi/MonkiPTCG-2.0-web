// 主页团队成员数据（只显示Terry Chan）
export const homeTeamMembers = [
  {
    id: 'captain',
    name: 'Terry Chan',
    role: 'Team Leader',
    img: '/images/team/leadership/captain.jpg',
  },
];

// 最新新闻数据
export const latestNews = [
  {
    id: 1,
    title: "Tommy Leong: Back to Back Champion of TCGKL's Annual Biggest Tournament",
    date: "June 1, 2025",
    summary: "Congratulations to Tommy Leong for securing 1st place in TCGKL's Annual Biggest Tournament...",
    author: "Team Monki",
    tags: ["Tournament", "Champion", "TCGKL"],
  },
  {
    id: 2,
    title: "Monki Team Member - Nick Kee Secures 2nd Place in Malaysia MBL 2025",
    date: "April 20, 2025",
    summary: "Congratulations to Nick Kee for securing 2nd place in Malaysia MBL 2025...",
    author: "Team Monki",
    tags: ["Tournament", "MBL", "Runner-up"],
  },
];

// 往期新闻数据
export const previousNews = [
  {
    id: 101,
    title: "Team Monki Member - Justin Wong Secures 2nd Place in Malaysia UBL Penang Section 2025",
    date: "March 23, 2025",
    summary: "Congratulations to our last ride \"Lugia佬(Lou)\" Justin Wong to win second place at Penang's Ultra Ball League!",
    author: "Team Monki",
    tags: ["Tournament", "UBL", "Penang"],
  },
];

// 最新文章数据
export const latestArticles = [
  {
    id: 101,
    title: "Card Mania 2025 Champion [Gardevoir Ex] Post-Tournament Report & Deck Guide",
    author: "Tommy Leong",
    date: "2025-04-15",
    type: "free",
    excerpt: "This article will introduce Tommy Leong's deep thoughts on Gardevoir ex",
    tags: ["Deck Guide", "Tournament Report", "Gardevoir"],
  },
];

// 导出主页完整数据
export const homePageData = {
  teamMembers: homeTeamMembers,
  latestNews,
  previousNews,
  latestArticles,
}; 