import React from 'react';

const TeamMemberCard = ({ 
  member, 
  index, 
  flipped, 
  onCardClick, 
  getCardClass 
}) => {
  const { 
    name, 
    role, 
    birthday, 
    motto, 
    socialLinks, 
    achievements, 
    favoritePokemon, 
    imagePath 
  } = member;

  return (
    <div className="team-member">
      <div className={getCardClass(index)} onClick={onCardClick(index)}>
        <div className="member-front">
          <div className="member-image">
            <img src={imagePath} alt={name} />
          </div>
          <div className="member-info">
            <h3>{name}</h3>
            <p className="role">{role}</p>
            <div className="birthday">
              <i className="fas fa-birthday-cake"></i>
              <span>{birthday}</span>
            </div>
            <p className="motto">{motto}</p>
            <div className="social-links">
              {socialLinks.map((link, linkIndex) => (
                <a 
                  key={linkIndex}
                  href={link.url} 
                  target="_blank" 
                  data-social-link
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="member-back">
          <h4>{role}</h4>
          <div className="achievements-section">
            <h5>Achievements</h5>
            <ul className="achievements-list">
              {achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="favorite-pokemon-section">
            <h5>Favorite Pokemon</h5>
            <div className="favorite-pokemon">{favoritePokemon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard; 