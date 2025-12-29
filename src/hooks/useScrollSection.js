import { useState, useEffect } from 'react';

export function useScrollSection() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', element: document.getElementById('hero') },
        { id: 'afterhero', element: document.getElementById('afterhero') },
        { id: 'mission', element: document.getElementById('mission') },
        { id: 'gallery', element: document.getElementById('gallery') },
        { id: 'courses', element: document.getElementById('courses') },
        { id: 'awards', element: document.getElementById('awards') },
        { id: 'team', element: document.getElementById('team') },
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
        
        // Check if section is in viewport (more than 30% visible)
        if (rect.top < windowHeight * 0.3 && rect.bottom > windowHeight * 0.3) {
          current = section.id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}
