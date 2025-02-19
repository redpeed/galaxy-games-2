"use client"
import Desktop from "@/components/pages/home/desktop";
import Mobile from "@/components/pages/home/mobile";
import useApp from "@/hooks/useApp";


export default function Home() {
  const {isMobile, zoom} = useApp();
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
