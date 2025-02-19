import { useEffect, useState, useCallback } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const useApp = () => {
  const isMobile = useMediaQuery('mobile');
  const [zoom, setZoom] = useState(1);

  const calculateZoom = useCallback(() => {
    if (!isMobile) {
      const baseEl = document.querySelector('[data-base-screen-height-anchor]');
      if (baseEl) {
        const newZoom = window.innerHeight / (baseEl.getBoundingClientRect().height + baseEl.getBoundingClientRect().top + 100);
        setZoom(newZoom);
      }
    }
  }, [isMobile]);

  const handleAnchorClick = useCallback((e: Event) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const href = target.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  useEffect(() => {
    calculateZoom();
    window.addEventListener('resize', calculateZoom);

    return () => {
      window.removeEventListener('resize', calculateZoom);
    };
  }, [calculateZoom]);

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [handleAnchorClick]);

  return {
    isMobile,
    zoom
  };
};

export default useApp;