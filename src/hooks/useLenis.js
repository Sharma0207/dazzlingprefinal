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
      smoothTouch: false, // Disable smooth scroll on touch for better mobile experience
      touchMultiplier: 2, // Touch scroll speed multiplier
    });

    // RAF loop for Lenis animation
    let animationFrameId;
    
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);
}
