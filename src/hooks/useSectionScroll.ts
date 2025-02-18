"use client"

import {RefObject, useCallback, useEffect, useRef} from "react";
import throttle from "lodash/throttle";
import {getOffsetTop} from "@/lib/utils";

const useSectionScroll = (
  elRef: RefObject<HTMLDivElement | null>,
  callback: (percentage: number, curScrollY: number) => void,
  treshold?: number,
  frequency?: number,
) => {

  const offsetTop = useRef(0);
  const elHeight = useRef(0);
  const pageTreshold = useRef(300);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledHandleScroll = useCallback(
    throttle(() => {
      const curScrollY = window.scrollY - pageTreshold.current;
      const scrollFactor = curScrollY - offsetTop.current;
      const percentage = Math.min(Math.max(0, scrollFactor / elHeight.current), 1);

      callback(percentage,curScrollY)

    }, frequency || 100),
    [callback],
  )

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll, {passive: true})

    if (treshold) {
      const innerHeight = window.innerHeight;
      pageTreshold.current = innerHeight * treshold;
    }

    const offsetHeight = elRef.current?.offsetHeight || 0
    elHeight.current = offsetHeight
    offsetTop.current = getOffsetTop(elRef.current) - offsetHeight

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      throttledHandleScroll.cancel();
    }
  }, [])

  return elRef
}

export default useSectionScroll;