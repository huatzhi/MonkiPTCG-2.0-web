import React from 'react';

const WeeklyBattleInfo = () => {
  // 模拟数据 - 实际使用时可以从API或数据库获取
  const currentWinner = {
    name: "Alex Chen",
    deck: "Mewtwo VMAX Control",
    date: "2024-01-15"
  };

  const nextBattle = {
    date: "2024-01-22",
    time: "19:00",
    location: "Local Game Store"
  };

  return (
    <div className="weekly-battle-info">
      <div className="battle-header">
        <h3 className="battle-title">Weekly Shop Battle</h3>
        <div className="battle-badge">每周商店战斗</div>
      </div>
      
      <div className="battle-content">
        <div className="winner-section">
          <h4 className="section-title">🏆 本周冠军</h4>
          <div className="winner-info">
            <div className="winner-name">{currentWinner.name}</div>
            <div className="winner-deck">
              <span className="deck-label">使用卡组:</span>
              <span className="deck-name">{currentWinner.deck}</span>
            </div>
            <div className="winner-date">
              <span className="date-label">获胜日期:</span>
              <span className="date-value">{currentWinner.date}</span>
            </div>
          </div>
        </div>
        
        <div className="next-battle-section">
          <h4 className="section-title">⏰ 下次比赛</h4>
          <div className="next-battle-info">
            <div className="battle-date">
              <span className="date-label">日期:</span>
              <span className="date-value">{nextBattle.date}</span>
            </div>
            <div className="battle-time">
              <span className="time-label">时间:</span>
              <span className="time-value">{nextBattle.time}</span>
            </div>
            <div className="battle-location">
              <span className="location-label">地点:</span>
              <span className="location-value">{nextBattle.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="battle-footer">
        <div className="battle-stats">
          <div className="stat-item">
            <span className="stat-number">52</span>
            <span className="stat-label">参赛者</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8</span>
            <span className="stat-label">轮次</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">小时</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyBattleInfo; 