import React, { useMemo } from 'react';

interface ThemeBackgroundProps {
  isDarkMode: boolean;
}

const ThemeBackground: React.FC<ThemeBackgroundProps> = ({ isDarkMode }) => {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3}px`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  const clouds = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: `${20 + Math.random() * 40}%`,
      width: `${200 + Math.random() * 300}px`,
      height: `${100 + Math.random() * 150}px`,
      duration: `${40 + Math.random() * 40}s`,
      delay: `-${Math.random() * 40}s`,
    }));
  }, []);

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-1000 ${isDarkMode ? 'space-bg' : 'sky-bg'}`}>
      {isDarkMode ? (
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star animate-twinkle"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden">
          {clouds.map((cloud) => (
            <div
              key={cloud.id}
              className="cloud animate-drift"
              style={{
                top: cloud.top,
                width: cloud.width,
                height: cloud.height,
                animationDuration: cloud.duration,
                animationDelay: cloud.delay,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeBackground;