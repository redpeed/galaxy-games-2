"use client"

import React, {useRef} from "react";
import MobileTextBox from "@/components/common/MobileTextBox";
import TwoSidesBlurredBox from "@/components/common/TwoSidesBlurredBox";
import VideoVerticalFramed from "@/components/common/VideoVerticalFramed";
import useAnchorInView from "@/hooks/useAnchorInView";
import Link from "next/link";

const MakeItAccessibleMobile = () => {
  const videoFrameRef = useRef<HTMLDivElement|null>(null);
  const isVideoVisible = useAnchorInView(videoFrameRef)

  return (
    <div className={"flex flex-col relative"}>
      <div
        className="w-full h-[200px] bg-bottom"
        style={{
          backgroundImage: `url('/accessibility-header.svg')`,
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <TwoSidesBlurredBox
        title={<>POLARIS <br/>ACCESSIBILITY</>}
        color={"#FFCC00"}
        className={"mb-[130px]"}
      >
        Polaris Accessibility breaks barriers
        making gaming <b>inclusive for everyone</b>.
        With <b>innovative tools</b> it ensures no one is left behind, no matter their challenges
      </TwoSidesBlurredBox>


      <div
        className="absolute w-[80%] h-[650px] top-[250px] right-0 bg-right "
        style={{
          backgroundImage: `url('/vertical-wave.svg')`,
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-20 w-[260px] h-[460px] mx-auto mb-10" ref={videoFrameRef}>
        <VideoVerticalFramed url={`https://vimeo.com/1057591770`} playing={isVideoVisible}/>
      </div>


      <MobileTextBox className={"relative"}>
        <div
          className="absolute w-full h-[650px] -top-[430px] left-0 z-10"
          style={{
            backgroundImage: `url('/vertical-wave-2.svg')`,
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat",
          }}
        />


        <>
          <b className={"block uppercase mb-1 text-20"}>Physical Disabilities</b>
          <p>Polaris provides flexible solutions:</p>
          <div className={"mb-5"}>
            <li>Eye-tracking</li>
            <li>Customizable controls</li>
          </div>
          <p>
            Adapting to different physical challenges.
            Whether you use one hand, have limited mobility, or need a mix of tools,
            Polaris ensures seamless and <b>accessible gameplay</b>.
          </p>
        </>
      </MobileTextBox>


      <Link
        href={"#polaris-in-action"}
        className="block mt-[120px] mb-[150px] size-[30px] bg-contain bg-no-repeat mx-auto"
        style={{
          backgroundImage: `url('/triangle-down.svg')`,
        }}
      />

    </div>
  );
};

export default MakeItAccessibleMobile;