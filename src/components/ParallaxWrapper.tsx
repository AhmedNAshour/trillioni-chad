
import React, { useEffect, useRef, useState } from 'react';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  offset?: number;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ 
  children, 
  speed = 0.5, 
  className = '',
  offset = 0 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const elementTop = rect.top + scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate if element is in viewport
      const isInViewport = rect.top < windowHeight && rect.bottom > 0;
      
      if (isInViewport) {
        const yPos = -(scrollY - elementTop + offset) * speed;
        setTransform(yPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, offset]);

  return (
    <div 
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${transform}px)`,
        transition: 'none'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxWrapper;
