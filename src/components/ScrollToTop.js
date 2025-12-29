import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NAVBAR_HEIGHT = 80;

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to the element after a small delay
      // Account for the sticky navbar height
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - NAVBAR_HEIGHT - 20; // 20px extra padding
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
