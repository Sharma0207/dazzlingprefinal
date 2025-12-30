import { useState, useEffect, useCallback } from 'react';

export function useScrollSection() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = useCallback(() => {
    const sections = [
      { id: 'hero', element: document.getElementById('hero') },
      { id: 'afterhero', element: document.getElementById('afterhero') },
      { id: 'mission', element: document.getElementById('mission') },
      { id: 'courses', element: document.getElementById('courses') },
      { id: 'awards', element: document.getElementById('awards') },
      { id: 'team', element: document.getElementById('team') },
      { id: 'life', element: document.getElementById('life') },
      { id: 'testimonial', element: document.getElementById('testimonial') },
      { id: 'process', element: document.getElementById('process') },
      { id: 'faq', element: document.getElementById('faq') },
      { id: 'footer', element: document.getElementById('footer') },
    ];

    let current = 'hero';
    const windowHeight = window.innerHeight;

    for (const section of sections) {
      if (!section.element) continue;
      const rect = section.element.getBoundingClientRect();

      // Check if section is in viewport (more than 25% visible)
      if (rect.top < windowHeight * 0.25 && rect.bottom > windowHeight * 0.25) {
        current = section.id;
        break;
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return activeSection;
}
