// 数据索引文件 - 统一导出所有数据

// 主页数据
export { homePageData, homeTeamMembers, latestNews, previousNews, latestArticles } from './homePageData';

// 搜索数据
export { searchData, searchItems, filterSearchResults } from './searchData';

// 分享配置
export { shareConfig, shareToPlatform } from './shareConfig';

// 团队成员数据
export { 
  leadershipMembers, 
  playersMembers, 
  allTeamMembers, 
  getMembersByRole, 
  getMemberById 
} from './teamMembersDetailed';

// 原始团队成员数据（保持向后兼容）
export { leadershipMembers as originalLeadershipMembers, playersMembers as originalPlayersMembers } from './teamMembers'; 