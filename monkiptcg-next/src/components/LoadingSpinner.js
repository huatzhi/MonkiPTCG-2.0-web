'use client';

export default function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="loading-spinner-container" role="status" aria-label={text}>
      <div className={`loading-spinner ${sizeClasses[size] || sizeClasses.medium}`}>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
} 