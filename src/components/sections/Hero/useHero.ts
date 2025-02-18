import {useEffect, useRef} from "react";

const useHero = () => {
  const topLineRef = useRef<HTMLDivElement|null>(null)
  const lineHeightRef = useRef(0);

  useEffect(() => {
    if (topLineRef.current && !lineHeightRef.current) {
      const boundingRect = topLineRef.current.getBoundingClientRect();
      lineHeightRef.current = boundingRect.height;
    }

    let rafId: number;

    const updateLineHeight = () => {
      if (topLineRef.current) {
        const isScrolled = window.scrollY > 50

        const newLineHeight = Math.max(0, lineHeightRef.current - window.scrollY);
        const scale = newLineHeight / lineHeightRef.current;

        topLineRef.current.style.transform = `scaleY(${isScrolled ? 0 : scale})`;
        topLineRef.current.style.transformOrigin = 'bottom';
      }
    };

    const scrollHandler = () => {
      // Cancel any pending animation frame
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Schedule update on next frame
      rafId = requestAnimationFrame(updateLineHeight);
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return {
    topLineRef
  }
}

export default useHero;