import React from 'react';
import styles from './WeeklyBattleInfo.module.css';

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
    <div className={styles.weeklyBattleInfo}>
      <div className={styles.battleHeader}>
        <h3 className={styles.battleTitle}>Weekly Shop Battle</h3>
        <div className={styles.battleBadge}>每周商店战斗</div>
      </div>
      
      <div className={styles.battleContent}>
        <div className={styles.winnerSection}>
          <h4 className={styles.sectionTitle}>
            🏆 Weekly Top
          </h4>
          <div className={styles.winnerInfo}>
            <div className={styles.winnerName}>{currentWinner.name}</div>
            <div className={styles.winnerDeck}>
              <span className={styles.deckLabel}>Deck:</span>
              <span className={styles.deckName}>{currentWinner.deck}</span>
            </div>
            <div className={styles.winnerDate}>
              <span className={styles.dateLabel}>Date:</span>
              <span className={styles.dateValue}>{currentWinner.date}</span>
            </div>
          </div>
        </div>
        
        <div className={styles.nextBattleSection}>
          <h4 className={styles.sectionTitle}>
            ⏰ 下次比赛
          </h4>
          <div className={styles.nextBattleInfo}>
            <div className={styles.battleDate}>
              <span className={styles.dateLabel}>日期:</span>
              <span className={styles.dateValue}>{nextBattle.date}</span>
            </div>
            <div className={styles.battleTime}>
              <span className={styles.timeLabel}>时间:</span>
              <span className={styles.timeValue}>{nextBattle.time}</span>
            </div>
            <div className={styles.battleLocation}>
              <span className={styles.locationLabel}>地点:</span>
              <span className={styles.locationValue}>{nextBattle.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.battleFooter}>
        <div className={styles.battleStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>52</span>
            <span className={styles.statLabel}>participants</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>8</span>
            <span className={styles.statLabel}>Rounds</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>Hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyBattleInfo; 