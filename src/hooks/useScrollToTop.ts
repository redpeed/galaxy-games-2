// src/ScrollToTop.jsx

import { useEffect } from 'react';

function useScrollToTop(hash: string) {

  useEffect(() => {
    // If there is a hash, scroll to the id
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Otherwise, scroll to the top
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

export default useScrollToTop;
