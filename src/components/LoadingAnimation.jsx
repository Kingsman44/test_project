import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-200 flex items-center justify-center transition-opacity duration-500" 
         style={{ animation: 'fadeOut 1s ease-in-out forwards 1s' }}>
      <div className="relative flex flex-col items-center">
        <div className="w-32 h-32">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-20px)`,
                animation: `bounce${i} 1s infinite ease-in-out`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>
        <div className="mt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 text-center">
          Loading
        </div>
      </div>

      <style>
        {`
          @keyframes bounce0 { 
            0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translateY(-20px); } 
            50% { transform: translate(-50%, -50%) rotate(0deg) translateY(20px); } 
          }
          @keyframes bounce1 { 
            0%, 100% { transform: translate(-50%, -50%) rotate(90deg) translateY(-20px); } 
            50% { transform: translate(-50%, -50%) rotate(90deg) translateY(20px); } 
          }
          @keyframes bounce2 { 
            0%, 100% { transform: translate(-50%, -50%) rotate(180deg) translateY(-20px); } 
            50% { transform: translate(-50%, -50%) rotate(180deg) translateY(20px); } 
          }
          @keyframes bounce3 { 
            0%, 100% { transform: translate(-50%, -50%) rotate(270deg) translateY(-20px); } 
            50% { transform: translate(-50%, -50%) rotate(270deg) translateY(20px); } 
          }
        `}
      </style>
    </div>
  );
};

export default LoadingAnimation;