import { forwardRef } from 'react';

const ToBeContinued = forwardRef((props, ref) => {
  return (
    <div className="timeline-item to-be-continued" ref={ref}>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-year">Coming Soon</div>
        <div className="timeline-card">
          <h3>To Be Continued...</h3>
          <p>Our journey continues! Stay tuned for more exciting achievements and milestones as Team Monki grows stronger.</p>
          <div className="timeline-tags">
            <span className="tag">Future</span>
            <span className="tag">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
});

ToBeContinued.displayName = 'ToBeContinued';

export default ToBeContinued; 