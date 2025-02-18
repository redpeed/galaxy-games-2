"use client"

import {useCallback, useEffect, useRef, useState} from "react";
import throttle from "lodash/throttle";
import {getPointCoord} from "@/lib/path";

const USE_RAILWAY = false

const useNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandDirection, setExpandDirection] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const logoRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const halfWWidth = useRef(0);
  const halfLogoWidth = useRef(0);
  const zoomRatio = useRef(0);

  let prevScrollY = 0

  const handleScroll = () => {
    zoomRatio.current = parseFloat(document.querySelector('main')?.style.zoom||'1') || 1
    zoomRatio.current = isNaN(zoomRatio.current) ? 1 : zoomRatio.current;

    let viewportWidth = document.body.clientWidth;
    halfWWidth.current = viewportWidth / 2;
    if (logoRef.current) {
      halfLogoWidth.current = logoRef.current.clientWidth/2;
    }


    let navbarWidth_ = 0;
    if (navbarRef.current) {
      navbarWidth_ = navbarRef.current.clientWidth;
    }
    setNavbarWidth(navbarWidth_);

    const isScrolled_ = window.scrollY > 50
    setIsScrolled(isScrolled_);
    if (isScrolled_) {
      setIsExpanded(false);
    }
    const scrollDown = prevScrollY < window.scrollY;
    prevScrollY = window.scrollY;

    if (!USE_RAILWAY) {
      setLeftOffset(viewportWidth/zoomRatio.current)
      return;
    }

    const coords = getPointCoord(scrollDown);

    if (coords) {
      setLeftOffset(coords[0])
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledHandleScroll = useCallback(throttle(handleScroll, 10),
    [setIsScrolled,setLeftOffset,getPointCoord],
  )

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll, {passive: true});
    window.addEventListener("resize", throttledHandleScroll, {passive: true});
    handleScroll();


    const Observe = (sel: string, opt:Record<string, unknown>, cb: ()=>void) => {
      const Obs = new MutationObserver((m) => [...m].forEach(cb));
      document.querySelectorAll(sel).forEach(el => Obs.observe(el, opt));
    };

    Observe("main", {
      attributesList: ["style"],
      attributeOldValue: true,
    }, () => {
      handleScroll();
    });


    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      window.removeEventListener("resize", throttledHandleScroll);
      throttledHandleScroll.cancel();
    }
  }, [getPointCoord,throttledHandleScroll])

  const getLogoPosition = (): number => {
    if (!logoRef.current) return 0;
    const xPos = logoRef.current.getBoundingClientRect().x + halfLogoWidth.current;
    if (halfWWidth.current > xPos) {
      return -1;
    } else if (halfWWidth.current < xPos) {
      return 1;
    } else {
      return 0;
    }
  }

  const toggleMenu = () => {
    const logoPos = getLogoPosition();
    setExpandDirection(logoPos)
    setIsExpanded(!isExpanded);
  }

  return {
    isScrolled,
    isExpanded,
    expandDirection,
    leftOffset,
    halfLogoWidth,
    toggleMenu,
    logoRef,
    navbarRef,
    zoomRatio: zoomRatio.current,
    navbarWidth
  }
}

export default useNavbar;