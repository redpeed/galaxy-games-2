import {useCallback, useEffect, useRef, useState} from "react";
import useAnchorInView from "@/hooks/useAnchorInView";
import {getOffsetTop} from "@/lib/utils";
import {throttle} from 'lodash';
// import useHash from "@/hooks/useHash";

const DISABLE_PARALLAX = true;

const useRealTimeCoaching = () => {
  // const hash = useHash()
  // console.log('hash',hash);

  const elRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(1);
  const centralFrameRef = useRef<HTMLDivElement>(null);
  const centralFrameIsInView = useAnchorInView(centralFrameRef);
  const [scrollState, setScrollState] = useState({
    y: 0,
    scrollDown: true,
    isStuck: false
  });

  const [isInView, setIsInView] = useState(false);
  const [prevIsInView, setPrevIsInView] = useState(false);
  const anchorRef = useRef(null);
  const parallaxSectionRef = useRef<HTMLDivElement | null>(null);
  const railwaySectionRef = useRef<HTMLDivElement | null>(null);
  const stickyActivatorAnchorRef = useRef<HTMLDivElement | null>(null);
  const [stickyActivatorOffsetTop, setStickyActivatorOffsetTop] = useState(0);

  const [parallaxOffsetTop, setParallaxOffsetTop] = useState(0);
  const [parallaxOffsetTopRelative, setParallaxOffsetTopRelative] = useState(0);

  const [footerFullHeight, setFooterFullHeight] = useState(0);
  const isItSticky = useRef(false);
  const [updateFlag, setUpdateFlag] = useState(0);

  function stickTop(stick: boolean, offset?: number, forced?: boolean) {
    if (DISABLE_PARALLAX) return;

    if (parallaxSectionRef.current) {
      const parallaxOffsetTop = offset || parallaxOffsetTopRelative;

      if (stick || forced) {
        parallaxSectionRef.current.style.position = 'sticky';
        parallaxSectionRef.current.style.top = `-${parallaxOffsetTop}px`;
        isItSticky.current = true;
      } else if (!stick || forced) {
        parallaxSectionRef.current.style.position = 'static';
        parallaxSectionRef.current.style.top = 'unset';
        isItSticky.current = false;
      }
    }
  }


  useEffect(() => {
    const footerWrapper = document.querySelector<HTMLDivElement>("[data-footer-wrapper]");
    if (footerWrapper) {
      setFooterFullHeight(footerWrapper.clientHeight);
    }

    const parallaxSection: HTMLDivElement | null = document.querySelector('[data-parallax]')
    let parallaxSectionOffsetTop = 0
    if (parallaxSection) {
      parallaxSectionRef.current = parallaxSection;
      parallaxSectionOffsetTop = getOffsetTop(parallaxSection);
      setParallaxOffsetTop(parallaxSectionOffsetTop);
    }

    const railwaySection: HTMLDivElement | null = document.querySelector('[data-railway]')
    if (parallaxSection) {
      railwaySectionRef.current = railwaySection;
    }


    const stickyActivatorAnchor = document.querySelector<HTMLDivElement>("[data-sticky-activator]");
    if (stickyActivatorAnchor) {
      stickyActivatorAnchorRef.current = stickyActivatorAnchor;
      const activatorOffsetTop = getOffsetTop(stickyActivatorAnchor);
      setStickyActivatorOffsetTop(activatorOffsetTop)
      const parallaxOffsetTopRelative = activatorOffsetTop - parallaxSectionOffsetTop;
      setParallaxOffsetTopRelative(parallaxOffsetTopRelative)
      if (!isItSticky.current && !prevIsInView && !isInView && window.scrollY > parallaxOffsetTopRelative) {
        stickTop(true, parallaxOffsetTopRelative)
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [updateFlag]);

  function handleResize() {
    setUpdateFlag(Date.now())
    handleScrolling()
  }


  const parallaxLiveOffsetBottom = useRef(0);
  const parallaxStuckOnPoint = useRef(0);

  const handleScrolling = useCallback(
    throttle(() => {
      if (!centralFrameIsInView) return;

      const currentY = window.scrollY;
      const scrollDown = scrollState.y < currentY;

      if (!isItSticky.current && currentY > parallaxOffsetTop) {
        stickTop(true, undefined, true);
      }

      if (parallaxSectionRef.current) {
        const offsetTop = parallaxSectionRef.current.offsetTop - parallaxOffsetTop;
        const percentage = 1 / footerFullHeight * offsetTop;
        const index = Math.min(3, Math.max(1, Math.ceil(percentage * 3)));
        if (index !== activeItem) {
          setActiveItem(index);
        }
      }

      // Update railway section position
      if (railwaySectionRef.current) {
        const currOffsetTop = parallaxSectionRef.current?.offsetTop || 0;
        const currBottom = parallaxSectionRef.current?.getBoundingClientRect().bottom || 0;
        const isStuckNow = currBottom === parallaxLiveOffsetBottom.current;

        if (isStuckNow !== scrollState.isStuck) {
          if (isStuckNow) {
            parallaxStuckOnPoint.current = currOffsetTop;
            requestAnimationFrame(() => {
              if (railwaySectionRef.current) {
                railwaySectionRef.current.style.position = 'fixed';
                railwaySectionRef.current.style.top = `-${stickyActivatorOffsetTop}px`;
              }
            });
          } else {
            if (parallaxStuckOnPoint.current > currOffsetTop) {
              railwaySectionRef.current.removeAttribute("style");
            } else {
              railwaySectionRef.current.style.position = 'absolute';
              railwaySectionRef.current.style.top = `${footerFullHeight}px`;
            }
          }
        }

        setScrollState({
          y: currentY,
          scrollDown,
          isStuck: isStuckNow
        });
      }
    }, 16), // Throttle to roughly 60fps
    [centralFrameIsInView, parallaxOffsetTop, activeItem, scrollState.isStuck, stickyActivatorOffsetTop, footerFullHeight]
  );

  useEffect(() => {
    const throttledScrollHandler = handleScrolling;
    const throttledResizeHandler = throttle(handleResize, 100);

    window.addEventListener("scroll", throttledScrollHandler);
    window.addEventListener("resize", throttledResizeHandler);

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      window.removeEventListener("resize", throttledResizeHandler);
      throttledScrollHandler.cancel();
      throttledResizeHandler.cancel();
    };
  }, [handleScrolling]);

  useEffect(() => {
    const section = anchorRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      {threshold: 0.5}
    );

    if (section) {
      observer.observe(section);
    }
    return () => {
      observer.disconnect();
    };
  }, [isInView])


  useEffect(() => {

    if (prevIsInView && !isInView) {
      // console.log('prevIsInView && !isInView');
      stickTop(true)
      setPrevIsInView(false);
    } else if (isInView && window.scrollY < parallaxOffsetTop) {
      // console.log('isInView');
      stickTop(false)
      setPrevIsInView(true);
    }
  }, [isInView, prevIsInView]);

  return {
    elRef,
    anchorRef,
    centralFrameRef,
    activeItem,
    setActiveItem,
    parallaxSectionRef,
  }

}

export default useRealTimeCoaching