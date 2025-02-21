"use client"

import React, {useRef} from "react";
import MobileTextBox from "@/components/common/MobileTextBox";
import FadeInSection from "@/components/common/FadeinSection";
import PurpleBorderBox from "@/components/common/PurpleBorderBox";
import Image from "next/image"
import dynamic from "next/dynamic";
import useAnchorInView from "@/hooks/useAnchorInView";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

const PolarisInActionMobile = () => {
  const videoFrameRef = useRef<HTMLDivElement | null>(null);
  const isVideoVisible = useAnchorInView(videoFrameRef)

  return (
    <div
      id={"polaris-in-action"}
      className={"flex flex-col md:hidden relative"}
    >

      <div className="relative text-center mb-[40px] z-10">
        <PurpleBorderBox
          className={"font-bold text-left text-[32px]"}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(115, 115, 115, 0) 101%)`,
          }}
        >
          <FadeInSection>
            POLARIS AI IN ACTION
          </FadeInSection>
        </PurpleBorderBox>

        <Image
          src="/polaris-in-action-title-frame.png"
          width={400}
          height={160}
          alt={"frame"}
          className={"absolute w-full h-[150px] -top-[60px] -z-10 "}
        />

      </div>

      <MobileTextBox className={"mb-[100px] text-left"}>
        We use <b>Polaris AI</b> directly on our own <b>WEB3</b> game <b>Haunted
        Space</b>, out soon on Playstation, Xbox and Epic.
      </MobileTextBox>


      <div
        className="mb-4 pointer-events-none w-[95%] h-0 pb-[50%] relative mx-auto"
        ref={videoFrameRef}
      >
        <div
          className="absolute inset-0 rounded-[30px] overflow-hidden"
          style={{
            borderWidth: "0 1px 4px",
            borderColor: "#B843FF",
          }}
        >
          <div className="absolute w-[130%] h-[120%] -top-[10%] -left-[15%]">
            <ReactPlayer
              url='https://vimeo.com/1057444984'
              width='100%'
              height='100%'
              controls={false}
              playing={isVideoVisible}
              loop={true}
              muted={true}
              playsinline
              preload="auto"

            />
          </div>
        </div>
      </div>

      <Link
        href={"#gaga-token"}
        className=" block my-[120px] size-[30px] bg-contain bg-no-repeat mx-auto"
        style={{
          backgroundImage: `url('/triangle-down.svg')`,
        }}
      />
    </div>
  );
};

export default PolarisInActionMobile;