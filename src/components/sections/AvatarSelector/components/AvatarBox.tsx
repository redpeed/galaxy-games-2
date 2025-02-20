"use client"

import React, {FC} from "react";
import {cn} from "@/lib/utils";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface IProps {
  videoId: string;
  playing: boolean;
}

const AvatarBox: FC<IProps> = ({videoId, playing}) => {

  return (
    <div
      className={"flex flex-col gap-[25px] items-center justify-center relative z-40"}
    >
      <div
        className={cn(
          "overflow-hidden cursor-pointer relative ",
          "w-[90%] md:w-[290px] h-[430px] md:h-[510px] flex items-center justify-center"
        )}
        style={{
          borderWidth: "0px, 1px, 4px, 1px",

        }}
      >
        <div className="absolute z-10 inset-0 m-5">
          <ReactPlayer
            url={`https://vimeo.com/${videoId}`}
            width='100%'
            height='100%'
            controls={false}
            playing={playing}
            loop={true}
            muted={true}
            playsinline
            preload="auto"
          />
        </div>

        <div className={cn(
          "rounded-[30px] overflow-hidden absolute bottom-[10px] z-10 size-[90%]"
        )}></div>
      </div>

    </div>
  );
};

export default AvatarBox;