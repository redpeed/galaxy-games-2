"use client"

import {checkPoints, IPoint, navbarHeight} from "@/lib/const";
import {getOffsetLeft, getOffsetTop} from "@/lib/utils";

let pathWay = convertPointsToPixels(checkPoints)
if (typeof window !== "undefined") window.addEventListener("resize", () => {
  pathWay = convertPointsToPixels(checkPoints)
}, {passive: true});

function getCurrentSegment(scrollDown: boolean) {
  const scrollY = window.scrollY + navbarHeight;

  for (let i = 0; i < pathWay.length; i++) {
    const point = pathWay[i];
    const nextPoint = pathWay[i + 1]
    if (!nextPoint) return null;
    const isVertical = point.x === nextPoint.x
    if (!isVertical) continue;
    if (scrollY >= point.y && scrollY <= nextPoint.y) {
      return [point, nextPoint]
    }
  }

  return null;
}

export function getPointCoord(scrollDown: boolean) {
  const currentSegment = getCurrentSegment(scrollDown);
  if (!currentSegment) return null;
  return [currentSegment[0].x, window.scrollY];
}

export function parsePoints(points: IPoint[]) {
  if (typeof window === "undefined") return points;

  function parseValue(value: string, vertical: boolean, offset?: number) {
    if (value.includes("#")) {
      const anchorItem = document.querySelector(value);
      if (anchorItem) {
        const offsetVal = vertical ? getOffsetTop(anchorItem as HTMLElement) : anchorItem.getBoundingClientRect().x
        // debugger
        return `${offsetVal + (offset || 0)}px`;
      }
      return '0px'
    } else {
      return value
    }
  }
  return points.map((point) => (
    {
      ...point,
      x: parseValue(point.x, false, point?.offset?.x),
      y: parseValue(point.y, true, point?.offset?.y),
      origin: `x:${point.x},y:${point.y}`
    })
  );

}

export function convertPointsToPixels(points: IPoint[]) {
  // if (typeof window === "undefined") return points.map((point) => ({...point, x: 0, y: 0}));

  const viewportWidth = typeof window === "undefined" ? 0 : document.body.clientWidth; // Get the current viewport width
  const documentHeight = typeof window === "undefined" ? 0 : document.body.clientHeight;

  function calculateValue(value: string, vertical: boolean) {
    if (value.includes("calc")) {
      const match = value.match(/calc\(([\d.]+)% ([-+]) ([\d.]+)px\)/);
      if (!match) {
        throw new Error(`Invalid calc value format: ${value}`);
      }
      const percentage = parseFloat(match[1]);
      const sign = match[2];
      const pixelOffset = parseFloat(match[3]);
      return (percentage / 100) * viewportWidth + pixelOffset * (sign==='-' ? -1 : 1);
    } else if (value.includes("#")) {
      if (typeof window === "undefined") return 0
      const anchorItem = document.querySelector(value);
      if (anchorItem) {
        const offsetTop = getOffsetTop(anchorItem as HTMLElement)
        return vertical ? offsetTop : offsetTop;
      }
      return 0
    } else if (value.includes("%")) {
      const percentage = parseFloat(value);
      return (percentage / 100) * (vertical ? documentHeight : viewportWidth);
    } else if (value.includes("px")) {
      return parseFloat(value);
    } else {
      throw new Error(`Unsupported value format: ${value}`);
    }
  }

  return points.map((point) => ({...point, x: calculateValue(point.x, false), y: calculateValue(point.y, true)}));
}
