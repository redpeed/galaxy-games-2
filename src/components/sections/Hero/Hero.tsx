"use client"
import Image from "next/image"
import {cn} from "@/lib/utils";
import React, {FC, RefObject, useCallback, useEffect, useRef, useState} from "react";
import useHero from "@/components/sections/Hero/useHero";

interface IProps {
  heroAnchor: RefObject<HTMLDivElement|null>;
  isHeroAnchorInView: boolean;
}
const Hero: FC<IProps> = ({heroAnchor,isHeroAnchorInView}) => {
  const {
    topLineRef
  } = useHero()

  return (
    <section className={"flex items-center flex-col relative"} id={"home"}>
      <div className="absolute top-[200px]" ref={heroAnchor}/>

      <div
        className={cn(
          "inline-flex bg-nebula-1- relative mt-[290px] mb-[170px] px-[60px] py-50 mx-auto justify-center bg-hero-nebula- bg-cover bg-no-repeat z-10",
          "border border-purple rounded-[8px] relative",
          "after:absolute after:w-[1px] after:h-[200px] after:top-[100%] after:bg-purple-gradient-down after:left-0 after:right-0 after:mx-auto",
        )}
      >
        <div className="absolute w-[1px] h-[200px] bottom-[100%] bg-purple left-0 right-0 mx-auto" ref={topLineRef}/>

        <div className="absolute top-0 left-0" id={'chkp1'}/>
        <div className="absolute bottom-0 left-0" id={'chkp2'}/>
        <div className="absolute bottom-0 left-1/2" id={'chkp3'}/>
        <Image
          src={"/galaxy-lab-logo.svg"}
          alt={"Hero logo"}
          width={421}
          height={130}
          className={"z-30"}
        />
      </div>

      <h1 className={"inline-block text-center text-[80px] font-light leading-[0.83]"}>
        LEVERAGE <b className={"text-purple"}>AI</b> AND <b className={"text-purple"}>WEB3</b> <br/>
        TO ENHANCE <b className={"text-purple"}>GAMING</b>
      </h1>
      <div
        className="mt-50 mb-[250px] size-[30px] bg-contain bg-no-repeat mx-auto"
        style={{backgroundImage: `url('/triangle-down.svg')`}}
      />
    </section>
  );
};

export default Hero;