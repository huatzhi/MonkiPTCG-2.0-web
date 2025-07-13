import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamSection = ({ 
  sectionType, 
  title, 
  members, 
  flipped, 
  onCardClick, 
  getCardClass,
  note 
}) => {
  return (
    <div className={`team-section ${sectionType}`}>
      <h2 className="section-title">
        {title}
        {note && <span className="note">{note}</span>}
      </h2>
      <div className="team-row">
        {members.map((member, index) => (
          <TeamMemberCard
            key={member.id || index}
            member={member}
            index={member.id || `${sectionType}${index + 1}`}
            flipped={flipped}
            onCardClick={onCardClick}
            getCardClass={getCardClass}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection; 