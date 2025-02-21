"use client"

import React from "react";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});
import BlurredBox from "@/components/common/BlurredBox";

function VideoVerticalFramed({url, playing}: {url: string; playing: boolean} ) {

  return (
    <div className="relative w-[260px] h-[460px] bg-cover mx-auto"
    >
      <BlurredBox
        borderBg={"radial-gradient(100% 324.56% at 100% 49.82%, #FFCC00 0%, #AB00FF 100%)"}
      />
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(12px 2px, calc(100% - 12px) 2px, 100% 12px, calc(100% - 2px) calc(100% - 12px), calc(100% - 12px) calc(100% - 2px), 12px calc(100% - 2px), 2px calc(100% - 12px), 2px 12px)",
        }}
      >
        <ReactPlayer
          url={url}
          width='100%'
          height='100%'
          playing={playing}
          loop={true}
          muted={true}
          playsinline
          preload="auto"

        />
      </div>
    </div>
  )
}

export default VideoVerticalFramed;