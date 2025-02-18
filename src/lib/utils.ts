import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const getOffsetTop = function (element: HTMLElement | null): number {
  if (!element) return 0;
  return (element.offsetParent ? getOffsetTop(element.offsetParent as HTMLElement) : 0) + element.offsetTop;
};

export const getOffsetLeft = function (element: HTMLElement | null): number {
  if (!element) return 0;
  return (element.offsetParent ? getOffsetLeft(element.offsetParent as HTMLElement) : 0) + element.offsetLeft;
};