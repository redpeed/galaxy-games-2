"use client"

import dynamic from 'next/dynamic'
import React, {useRef} from "react";
import useAnchorInView from "@/hooks/useAnchorInView";

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});


const GameControl = () => {
  const videoFrameRef = useRef<HTMLDivElement | null>(null);
  const isVideoVisible = useAnchorInView(videoFrameRef)

  return (
    <div
      className={"relative flex px-10 items-center justify-center w-full"}
    >
      <div
        className="absolute left-[3%] w-[10%] h-0 pb-[10%] bg-no-repeat bg-contain hidden lg:block"
        style={{
          backgroundImage: `url(/game-control-left.svg)`,
        }}
      >
        {/*<GameControlLeftButtons/>*/}
      </div>

      <div
        ref={videoFrameRef}
        className="w-[75%] h-0 pb-[35%] bg-no-repeat bg-cover rounded-[60px] overflow-hidden relative"
        style={{
          borderWidth: "0 1px 4px",
          borderColor: "#B843FF",
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%]">
            <ReactPlayer
              url='https://vimeo.com/1057444984'
              width='100%'
              height='100%'
              controls={false}
              playing={isVideoVisible}
              loop={true}
              muted={true}
              playsinline

            />
          </div>
        </div>

      </div>

      <div
        className="w-[10%] h-0 pb-[10%] absolute right-[3%] bg-no-repeat bg-contain hidden lg:block"
        style={{
          backgroundImage: `url(/game-control-right.svg)`,
        }}
      />

    </div>
  );
};

export default GameControl;