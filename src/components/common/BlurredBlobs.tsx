"use client"

import React, {useCallback, useEffect, useRef, RefObject} from 'react';

// Define interfaces for component props and internal types
interface BlurredBlobsProps {
  container: RefObject<HTMLElement>;
  primaryColor?: string;
  secondaryColor?: string;
  primaryBlobSize?: number;
  secondaryBlobSize?: number;
}

interface Position {
  x: number;
  y: number;
}

// Linear interpolation function
const lerp = (start: number, end: number, time: number): number =>
  start + (end - start) * time;

// Check if the device is iOS
const isIOS = typeof window !== 'undefined' &&
  /iPad|iPhone|iPod/.test(window.navigator.userAgent);

// BlurredBlobs component
export default function BlurredBlobs(
  {
    container,
    primaryColor = '#EE9528',
    secondaryColor = '#9E36F1',
    primaryBlobSize = 450,
    secondaryBlobSize = 500,
  }: BlurredBlobsProps) {
  // References to canvas, context, blobs and mouse
  const canvas = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const primaryBlob = useRef<Position>({x: 0, y: 0});
  const secondaryBlob = useRef<Position>({x: 0, y: 0});
  const mouse = useRef<Position>({x: 0, y: 0});

  // Set the size of the canvas and initial positions of blobs and mouse
  const setSize = useCallback(() => {
    if (!canvas.current || !container.current) return;
    canvas.current.width = container.current.offsetWidth;
    canvas.current.height = container.current.offsetHeight;
    primaryBlob.current = mouse.current = {
      x: canvas.current.width * 0.65,
      y: canvas.current.height * 0.55
    };
    secondaryBlob.current = {
      x: primaryBlob.current.x + 200,
      y: primaryBlob.current.y - 100
    };
  }, [container]);

  // Update mouse position on mouse move
  const followMouse = useCallback((e: MouseEvent) => {
    mouse.current.x = e.x;
    mouse.current.y = e.y;
  }, []);

  // Reset blobs position on mouse out
  const resetBlobs = useCallback(() => {
    if (!canvas.current) return;
    mouse.current = {
      x: canvas.current.width * 0.65,
      y: canvas.current.height * 0.65
    };
  }, []);

  // Draw blobs on canvas
  function draw() {
    console.log('asdfasd');
    if (!ctx.current || !canvas.current) return;

    // Draw primary blob
    const primaryX = lerp(primaryBlob.current.x, mouse.current.x, 0.025);
    const primaryY = lerp(primaryBlob.current.y, mouse.current.y, 0.02);
    ctx.current.fillStyle = primaryColor;
    ctx.current.beginPath();
    ctx.current.arc(primaryX, primaryY, primaryBlobSize, 0, Math.PI * 2);
    ctx.current.closePath();
    ctx.current.fill();
    primaryBlob.current = {x: primaryX, y: primaryY};

    // Draw secondary blob
    const secondaryX = lerp(secondaryBlob.current.x, primaryBlob.current.x + 200, 0.01);
    const secondaryY = lerp(secondaryBlob.current.y, primaryBlob.current.y - 100, 0.01);
    ctx.current.fillStyle = secondaryColor;
    ctx.current.beginPath();
    ctx.current.arc(secondaryX, secondaryY, secondaryBlobSize, 0, Math.PI * 2);
    ctx.current.closePath();
    ctx.current.fill();
    secondaryBlob.current = {x: secondaryX, y: secondaryY};
  }

  // Animation loop
  function animate() {
    if (canvas.current) {
      ctx.current?.clearRect(0, 0, canvas.current.width, canvas.current.height);
      draw();
      requestAnimationFrame(animate);
    }
  }

  // Initialize canvas, blobs and mouse, and start animation on mount
  useEffect(() => {
    if (!container.current || !canvas.current) return;
    ctx.current = canvas.current.getContext('2d');
    setSize();
    container.current.addEventListener('mousemove', followMouse);
    container.current.addEventListener('mouseout', resetBlobs);
    animate();

    // Clean up event listeners on unmount
    return () => {
      container.current?.removeEventListener('mousemove', followMouse);
      container.current?.removeEventListener('mouseout', resetBlobs);
    };
  }, [followMouse, resetBlobs, setSize]);

  // Update canvas size on window resize
  useEffect(() => {
    if (isIOS) return;
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
  }, [setSize]);

  // Render canvas
  return <canvas ref={canvas} className={"blobs"}/>;
}