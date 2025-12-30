import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    // Initialize Lenis with optimal settings for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      direction: 'vertical', // Scroll direction
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true, // Enable smooth scroll on touch for better mobile experience
      touchMultiplier: 1.5, // Touch scroll speed multiplier
      syncTouch: true, // Sync touch scroll with keyboard/mouse
      syncTouchLerp: 0.075, // Lerp value for touch sync
    });

    // RAF loop for Lenis animation
    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Add scroll-to function to window for easy access
    window.scrollToSection = (elementId, offset = 0) => {
      const element = document.getElementById(elementId);
      if (element) {
        lenis.scrollTo(element, {
          offset: offset,
          duration: 1.2,
        });
      }
    };

    // Handle anchor link clicks
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      const elementId = href.substring(1);

      if (elementId) {
        e.preventDefault();
        window.scrollToSection(elementId);
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      delete window.scrollToSection;
    };
  }, []);
}
