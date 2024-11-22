import React, { useEffect, useState } from 'react';

const Model3D = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxY = scrollY * 0.5;
  const rotateY = scrollY * 0.2;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div 
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `
            translate(-50%, calc(-50% + ${parallaxY}px))
            rotateX(${scrollY * 0.1}deg)
            rotateY(${rotateY}deg)
            rotateZ(${scrollY * 0.05}deg)
          `,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* City Buildings */}
        <div className="relative w-96 h-96">
          {/* Main Skyscraper */}
          <div 
            className="absolute left-1/2 top-1/2 w-16 h-64 -translate-x-1/2 -translate-y-1/2 bg-purple-500/10"
            style={{
              transform: 'translateZ(50px)',
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)',
              backdropFilter: 'blur(5px)',
            }}
          >
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-12 gap-1 p-1">
              {Array.from({ length: 48 }).map((_, i) => (
                <div 
                  key={i}
                  className="bg-purple-400/20"
                  style={{
                    animation: `glow ${2 + Math.random() * 2}s ease-in-out infinite alternate`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Side Buildings */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-purple-500/10"
              style={{
                width: '24px',
                height: `${100 + Math.random() * 100}px`,
                left: `${20 + i * 60}px`,
                bottom: '50%',
                transform: `translateZ(${-20 * (i % 3)}px)`,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.15)',
                backdropFilter: 'blur(3px)',
              }}
            >
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-8 gap-0.5 p-0.5">
                {Array.from({ length: 16 }).map((_, j) => (
                  <div
                    key={j}
                    className="bg-purple-400/20"
                    style={{
                      animation: `glow ${1 + Math.random() * 2}s ease-in-out infinite alternate`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Grid Base */}
        <div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: 'rotateX(60deg) translateZ(-100px)',
            background: `
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            boxShadow: '0 0 50px rgba(168, 85, 247, 0.1)',
          }}
        />
      </div>
    </div>
  );
};

export default Model3D;