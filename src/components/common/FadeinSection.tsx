"use client"

import {ReactNode, useEffect, useRef, useState} from "react";

function FadeInSection({children}:{children: ReactNode}) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<HTMLSpanElement|null>(null);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const currentDomRef = domRef.current;
    if (currentDomRef) observer.observe(currentDomRef);
    return () => currentDomRef && observer.unobserve(currentDomRef);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      // @ts-ignore
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;