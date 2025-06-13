import { useState, useEffect } from 'react';
import { useTypedDispatch } from './useTypedDispatch';
import { setActiveSection } from '../store/slices/uiSlice';

export const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSectionLocal] = useState('');
  const dispatch = useTypedDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          if (activeSection !== sectionIds[i]) {
            setActiveSectionLocal(sectionIds[i]);
            dispatch(setActiveSection(sectionIds[i]));
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset, activeSection, dispatch]);

  return activeSection;
};