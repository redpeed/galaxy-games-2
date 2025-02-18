"use client"

import Link from "next/link";
import GalaxyGamesLogo from "@/components/common/GalaxyGamesLogo";
import {cn} from "@/lib/utils";
import {navbarHeight, navbarTopOffset} from "@/lib/const";
import useNavbar from "@/components/sections/Navbar/useNavbar";
import BlurredBox from "@/components/common/BlurredBox";
import {FC} from "react";

interface IProps {
  isHeroAnchorInView: boolean;
}
const Navbar:FC<IProps> = ({isHeroAnchorInView}) => {
  const {
    isScrolled,
    isExpanded,
    expandDirection,
    leftOffset,
    navbarWidth,
    toggleMenu,
    logoRef,
    navbarRef,
    zoomRatio
  } = useNavbar();

  const goToAnchor: React.MouseEventHandler<HTMLElement> = (e) => {
    const el = e.target as HTMLAnchorElement
    if (el.tagName==="A") {
      e.preventDefault()
      const hash = el.getAttribute('href')?.replace(/\//g,'')
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  return (
    <div
      ref={navbarRef}
      className={cn(
        `outer-container flex fixed w-1/2 max-w-[960px] min-w-[666px] z-99 items-center justify-center` ,
      )}
      style={{
        transition: "width 0.3s ease, transform 0.3s ease",
        transform: leftOffset ? isScrolled ? isExpanded ? `translateX(${leftOffset/2 - navbarWidth/2}px)` : `translateX(${leftOffset/2}px)` : `translateX(${leftOffset/2 - navbarWidth/2}px)` : 'translateX(50vw)',
        ...(isScrolled && isExpanded ? {
          justifyContent: "flex-start",
        } : {}),
        height: `${navbarHeight}px`,
        top: `${navbarTopOffset}px`
      }}
    >


      <div
        className={cn(
          "flex relative z-10 py-[15px] transition-all duration-300 ease-in-out w-full max-w-full",
          "px-20 h-[64px] ",
          {"px-0 lg:px-0": isScrolled && !isExpanded},
          {"lg:pl-[100px] lg:pr-50": isScrolled && isExpanded && expandDirection !== 1},
          {"lg:pl-50 lg:pr-[100px]": isScrolled && isExpanded && expandDirection === 1},
        )}

      >
        <div
          className={cn(
            "absolute top-0 bottom-0 flex items-center justify-center flex-shrink-0 cursor-pointer",
            "z-10 left-0 -translate-x-1/2",
          )}
          onClick={() => toggleMenu()}
          ref={logoRef}
        >
          <GalaxyGamesLogo size={88}/>
        </div>

        <div
          className={cn(
            "transition-all duration-300 ease-in-out w-full overflow-hidden-",
            "flex justify-center scale-x-1 absolute inset-0",
            {"opacity-0 scale-x-0 pointer-events-none": isScrolled && !isExpanded},
            )}
          style={{
            transformOrigin: "left",
          }}
        >

          <BlurredBox
            borderBg={"linear-gradient(var(--purple),var(--purple))"}
            bg={"#000"}
          />

          <ul
            className={"flex gap-[80px] items-center justify-between  flex-shrink-0 justify-self-center whitespace-nowrap"}
            onClick={goToAnchor}
          >
            <li><MenuItem url={"#home"} title={"Home"}/></li>
            <li><MenuItem url={"#ai"} title={"AI"}/></li>
            <li><MenuItem url={"#avatar"} title={"Avatar"}/></li>
            <li><MenuItem url={"#gaga-token"} title={"GAGA TOKEN"}/></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

function MenuItem({url, title}: { url: string, title: string }) {
  return (<Link href={url} className={"uppercase font-light flex-shrink-0 hover:blur-[1px]"}>{title}</Link>)
}

export default Navbar;