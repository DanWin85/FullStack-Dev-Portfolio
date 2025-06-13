// src/components/AnimatedSection.tsx - Create this new file
import React, { useRef, useEffect, useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationType?: 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'fade' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  background?: string;
  darkMode?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animationType = 'slideUp',
  delay = 0,
  duration = 1000,
  threshold = 0.1,
  background,
  darkMode = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationStyles = () => {
    const baseStyle = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      willChange: 'transform, opacity',
    };

    if (!isVisible) {
      switch (animationType) {
        case 'slideUp':
          return {
            ...baseStyle,
            transform: 'translateY(60px)',
            opacity: 0,
          };
        case 'slideDown':
          return {
            ...baseStyle,
            transform: 'translateY(-60px)',
            opacity: 0,
          };
        case 'slideLeft':
          return {
            ...baseStyle,
            transform: 'translateX(60px)',
            opacity: 0,
          };
        case 'slideRight':
          return {
            ...baseStyle,
            transform: 'translateX(-60px)',
            opacity: 0,
          };
        case 'fade':
          return {
            ...baseStyle,
            opacity: 0,
          };
        case 'scale':
          return {
            ...baseStyle,
            transform: 'scale(0.9)',
            opacity: 0,
          };
        case 'rotate':
          return {
            ...baseStyle,
            transform: 'rotateY(45deg) scale(0.9)',
            opacity: 0,
          };
        default:
          return {
            ...baseStyle,
            transform: 'translateY(60px)',
            opacity: 0,
          };
      }
    }

    return {
      ...baseStyle,
      transform: 'translateY(0) translateX(0) scale(1) rotateY(0)',
      opacity: 1,
    };
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: background || 'transparent',
        ...getAnimationStyles(),
      }}
    >
      {children}
    </Box>
  );
};

export default AnimatedSection;

