import React, { useEffect, useRef } from 'react';

const AnimatedElement = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  threshold = 0.1
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      {
        threshold,
        rootMargin: '10px',
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'translate-x-[-20px]';
      case 'right':
        return 'translate-x-[20px]';
      case 'up':
        return 'translate-y-[20px]';
      case 'down':
        return 'translate-y-[-20px]';
      default:
        return 'translate-y-[20px]';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`opacity-0 ${getDirectionClass()} ${className}`}
      style={{
        transition: `all 0.5s ease-out ${delay}s`,
      }}
      aria-hidden="false"
    >
      {children}
    </div>
  );
};

export default AnimatedElement;