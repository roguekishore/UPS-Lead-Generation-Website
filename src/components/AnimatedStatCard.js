import React from 'react';
import useCountUp from '../hooks/useCountUp';

const AnimatedStatCard = ({ value, label, suffix = '', duration = 2000 }) => {
  const numericValue = parseInt(value, 10) || 0;
  const { count, elementRef } = useCountUp(numericValue, duration);

  return (
    <div className="stat-card" ref={elementRef}>
      <div className="stat-card__value">
        {count}{suffix}
      </div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
};

export default AnimatedStatCard;
