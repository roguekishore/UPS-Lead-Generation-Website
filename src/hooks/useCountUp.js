import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to animate a counter from 0 to target value
 * when the element comes into view
 */
const useCountUp = (targetValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateValue(0, targetValue, duration);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [targetValue, duration, hasAnimated]);

  const animateValue = (start, end, duration) => {
    const startTime = performance.now();
    
    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  return { count, elementRef };
};

export default useCountUp;
