// 详细的团队成员数据
export const leadershipMembers = [
  {
    id: 'captain',
    name: 'Terry Chan',
    role: 'Team Leader',
    birthday: '08/29',
    motto: '"Let\'s playtest together, come contact me and we can explore on different playstyles and techniques!"',
    imagePath: '/images/team/leadership/captain.jpg',
    socialLinks: [
      {
        url: 'https://www.facebook.com/terrychan29?mibextid=LQQJ4d',
        icon: 'fab fa-facebook'
      },
      {
        url: 'https://www.instagram.com/terrychann29?igsh=eWg0aWMwZmFtZDk5',
        icon: 'fab fa-instagram'
      }
    ],
    achievements: [
      'Town league 2024 - 7/200+',
      'GBL 2024-2025 deckoutden - 5/88',
      'PBL 2024-2025 - 60/663',
      'GBL 2024-2025 myhobby - 9/88',
      'UBL 2024-2025 Penang - 56/200+'
    ],
    favoritePokemon: 'Dragon Types'
  },
  {
    id: 'manager',
    name: 'Bobby Ao',
    role: 'Executive Assistant',
    birthday: '12/09',
    motto: '"Trust yourself, Not luck"',
    imagePath: '/images/team/leadership/manager.jpg',
    socialLinks: [
      {
        url: 'https://www.facebook.com/realboybobby?mibextid=LQQJ4d',
        icon: 'fab fa-facebook'
      },
      {
        url: 'https://www.instagram.com/humansadtoo?igsh=MXQ3c2J4NWxtMnJmbg==',
        icon: 'fab fa-instagram'
      }
    ],
    achievements: [
      '2025 Player Ranking 43th',
      'GBL-S1-DeckoutDen-11th place',
      'UBL-S1 : 7th place',
      'PBL 24-25: 102th place',
      'GBL-S1-AMCC: 13th place',
      'GBL-S2-AMCC:  5th place',
      'GBL-S2-TB: 3th place',
      'UBL-S2: 56th',
      'GBL-S3: 3th place',
      'UBL-S3: 27th'
    ],
    favoritePokemon: 'Gengar & Charizard'
  },
  {
    id: 'finance',
    name: 'Keagan Soo',
    role: 'Team Finance',
    birthday: '07/26',
    motto: '"A.K.A Dark Magician"',
    imagePath: '/images/team/leadership/finance.jpg',
    socialLinks: [
      {
        url: 'https://www.facebook.com/keagan.sooXP?mibextid=LQQJ4d',
        icon: 'fab fa-facebook'
      },
      {
        url: 'https://www.instagram.com/kszq_07?igsh=MTZyaWprNHczdWU5dQ==',
        icon: 'fab fa-instagram'
      }
    ],
    achievements: [
      'UBL Top 24th (Penang, Malaysia)',
      'Malaysia 2025 MBL Top 31th'
    ],
    favoritePokemon: 'Darkrai & Umbeon'
  }
];

// 玩家成员数据（简化版，完整数据在原始文件中）
export const playersMembers = [
  {
    id: 'player1',
    name: 'JustinWZD',
    role: 'Main Player',
    birthday: '12/05',
    motto: '',
    imagePath: '/images/team/players/player1.jpg',
    socialLinks: [
      {
        url: 'https://www.facebook.com/justin.wong.14811692?mibextid=LQQJ4d',
        icon: 'fab fa-facebook'
      },
      {
        url: 'https://www.instagram.com/justin_wong.z.d?igsh=MXQ0bHNzdmk5dHM2cA==',
        icon: 'fab fa-instagram'
      }
    ],
    achievements: [
      'UBL Penang Section 2025 - 2nd Place',
      'Multiple tournament top finishes'
    ],
    favoritePokemon: 'Lugia'
  },
  // 其他玩家数据可以从原始文件复制...
];

// 导出所有团队成员
export const allTeamMembers = [...leadershipMembers, ...playersMembers];

// 按角色获取成员
export const getMembersByRole = (role) => {
  return allTeamMembers.filter(member => member.role === role);
};

// 获取成员详情
export const getMemberById = (id) => {
  return allTeamMembers.find(member => member.id === id);
}; 