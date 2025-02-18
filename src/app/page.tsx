"use client"
import Desktop from "@/components/pages/home/desktop";
import Mobile from "@/components/pages/home/mobile";
import {useMediaQuery} from "@/hooks/useMediaQuery";
import {useEffect, useState} from "react";

export default function Home() {
  const isMobile = useMediaQuery('mobile');
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    if (!isMobile) {
      const baseEl = document.getElementById('home')
      if (baseEl) {
        setZoom(window.innerHeight / baseEl.getBoundingClientRect().height);
      }
    }
  }, [isMobile])
  return (
    <>
      {/*Desktop view*/}
      {!isMobile && <main className={"hidden md:block relative"} style={{zoom}}>
        <Desktop/>
      </main>
      }

      {/*Mobile view*/}
      {isMobile && <main className={"md:hidden relative max-w-full z-10"}>
        <Mobile/>
      </main>
      }
    </>
  );
}
