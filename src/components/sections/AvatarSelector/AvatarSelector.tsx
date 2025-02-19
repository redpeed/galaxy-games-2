"use client"
import FadeInSection from "@/components/common/FadeinSection";
import PageSection from "@/components/common/PageSection";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import VideoFrame from "@/components/common/VideoFrame";
import React, {useRef} from "react";
import useAnchorInView from "@/hooks/useAnchorInView";


const AvatarSelector = () => {
  const videoFrameRef = useRef<HTMLDivElement|null>(null);
  const isVideoVisible = useAnchorInView(videoFrameRef, undefined, 0.5)

  return (
    <div className={"relative xl:-mt-[300px] pb-[1100px]"}>
      <div className="absolute bottom-[100%] mb-[100px]" id={"avatar"}/>

      <div className="absolute w-full h-full top-0 lg:w-[1500px] mx-auto left-1/2 -translate-x-1/2"
           style={{
             backgroundImage: `url(/select-avatar-bg.png)`,
             backgroundSize: "100% 100%",
             backgroundRepeat: "no-repeat",
           }}
      />

      <div
        className="hidden md:block absolute left-1/2 bottom-[100%] h-[240px] w-[1px]"
        style={{
          backgroundImage: `linear-gradient(0deg, #AB00FF 0.21%, rgba(171, 0, 255, 0) 99.9%)`,
        }}
      >
        <div
          className="absolute bottom-0 translate-y-1/2 -translate-x-1/2 size-[23px] bg-no-repeat bg-center bg-contain"
          style={{backgroundImage: "url('/triangle-icon-left.svg')"}}
        />
      </div>

      <PageSection
        pageTitle={<>YOUR AVATAR IS YOUR GUIDE</>}
        className={"overflow-visible left-0 w-full pb-0"}
        wrapperClassName={"pt-[60px]"}
      >
        <div className="absolute left-1/2 top-0" id={'chkp4'}/>
        <div className="hidden md:block absolute left-0 top-0 h-full bg-purple w-[1px]" id={'chkp5'}>
          <div
            className="absolute bottom-[30%] -translate-x-1/2 -rotate-90 size-[23px] bg-no-repeat bg-center bg-contain"
            style={{backgroundImage: "url('/triangle-icon-left.svg')"}}
          />
        </div>

        <div className="absolute top-0 w-full h-[1px] bg-purple">
          <div className="absolute right-0 -translate-y-1/2 translate-x-1/2 size-[4px] rotate-[45deg] bg-purple"></div>
        </div>


        <div className={"text-20 font-light mb-[45px] text-center w-[80%] mx-auto"}>
          <FadeInSection>
            With <b>Polaris AI</b>, your
            assistant feels like it’s truly yours.
            Start by choosing from a range of preset avatars and adjust them to <b>match your style</b>.
            Soon, you’ll even be able to fully customize every detail, creating an assistant that’s completely unique to
            you.
          </FadeInSection>
        </div>

        <div className="xl:w-[1130px] mx-auto flex w-full relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px]"  ref={videoFrameRef}/>
          <VideoFrame
            variant={"big"}
            className={"aspect-video xl:max-w-full"}
          >
            <ReactPlayer
              url='https://vimeo.com/1057594101'
              width='100%'
              height='100%'
              controls={false}
              playing={isVideoVisible}
              loop={true}
              muted={true}
              playsinline

            />
          </VideoFrame>

        </div>
      </PageSection>
    </div>
  )
};

export default AvatarSelector;