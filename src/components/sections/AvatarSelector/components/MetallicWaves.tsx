"use client"
import Image from "next/image";
import {useRef, useState} from "react";
import useSectionScroll from "@/hooks/useSectionScroll";

const MetallicWaves = () => {

  const elRef = useRef<HTMLDivElement>(null);
  const [transformFactors, setTransformFactors] = useState<{
    rotate: number,
    skew: number,
    left: number,
    top: number
  }[]>([])

  useSectionScroll(elRef, (percentage) => {
    setTransformFactors([
      {
        rotate: 250 + 100 * percentage,
        skew: 150 + 70 * percentage,
        left: +250 * percentage,
        top: 150 * percentage
      },
      {
        rotate: 250 - 100 * percentage,
        skew: 150 + 70 * percentage,
        left: -150 * percentage,
        top: -300 * percentage
      },
      {
        rotate: 250 + 200 * percentage,
        left: -350 * percentage,
        top: 300 * percentage,
        skew: 0,

      },
    ])
  })


  return (
    <div
      className={"absolute inset-0 pointer-events-none overflow-hidden"}
      ref={elRef}
    >
      <div
        className={"absolute rotate(-54deg) z-20 transition-transform"}
        style={{
          top: "10%",
          left: "50%",
          transform: `translateX(${transformFactors[0]?.left}px) translateY(${transformFactors[0]?.top}px)`,
        }}
      >
        <Image
          src={"/metallic-liquid-wave-1.png"}
          alt="Metallic Liquid"
          width={363}
          height={363}
          className={"transition-transform"}
          style={{
            transform: `rotate(-${transformFactors[0]?.rotate}deg) skewX(${transformFactors[0]?.skew}deg)`,
          }}
        />
      </div>
      <div
        className={"absolute rotate(-96deg) z-20 transition-transform"}
        style={{
          bottom: "10%",
          left: "50%",
          transform: `translateX(${transformFactors[1]?.left}px) translateY(${transformFactors[1]?.top}px)`,
        }}
      >
        <Image
          src={"/metallic-liquid-wave-2.png"}
          alt="Metallic Liquid 2"
          width={500}
          height={500}
          className={"transition-transform"}
          style={{
            transform: `rotate(-${transformFactors[1]?.rotate}deg) skewX(${transformFactors[1]?.skew}deg)`,
          }}
        />
      </div>

      <div
        className={"absolute rotate(-15deg) z-10 transition-transform"}
        style={{
          top: "10%",
          left: "30%",
          transform: `translateX(${transformFactors[2]?.left}px) translateY(${transformFactors[2]?.top}px)`,
        }}
      >
        <Image
          src={"/metallic-liquid-wave-3.png"}
          alt="Metallic Liquid 3"
          width={376}
          height={376}
          className={"transition-transform"}
          style={{
            transform: `rotate(${transformFactors[2]?.rotate}deg) skewX(${transformFactors[2]?.skew}deg)`,
          }}
        />
      </div>
    </div>
  );
};

export default MetallicWaves;