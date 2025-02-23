"use client"

import PageSection from "@/components/common/PageSection";
import VideoFrame from "@/components/common/VideoFrame";
import RtcList from "@/components/sections/RealTimeCoaching/components/RTCList";
import BlurredBox from "@/components/common/BlurredBox";
import Image from "next/image"
import useRealTimeCoaching from "@/components/sections/RealTimeCoaching/useRealTimeCoaching";
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

import {cn} from "@/lib/utils";
import {useRef} from "react";
import useAnchorInView from "@/hooks/useAnchorInView";

const RealTimeCoaching = () => {
  const videoFrameRef = useRef<HTMLDivElement | null>(null);
  const isVideoVisible = useAnchorInView(videoFrameRef);

  const {
    elRef,
    anchorRef,
    centralFrameRef,
    activeItem,
    setActiveItem,
    // parallaxSectionRef,
    // y
  } = useRealTimeCoaching();

  return (
    <div className={"relative -top-[900px] -mb-[900px] xl:pb-[100px] z-10-"}>
      <div
        className={"bg-pink-stripe-small lg:bg-pink-stripe side-no-mask lg:side-transparency w-full -mb-[200px] 2xl:-mb-[380px] bg-no-repeat bg-contain"}
      >
        <Image
          src={"/polaris-coach-header-bg.svg"}
          alt={"icon"}
          width={1919}
          height={672}
          className={"w-full"}
        />
      </div>

      <PageSection
        ref={elRef}
        className={"relative overflow-visible pb-0"}
        preTitle={
          <div className={"flex flex-col items-center w-full top-[50px]"}>
            <div
              className="hidden md:block absolute z-10 left-0 bottom-[100%] h-[800px] translate-y-[50px] w-[1px] border-l border-purple "/>
            <div className="hidden md:block absolute z-10 left-0 top-[50px] h-[1px] w-full" style={{
              backgroundImage: "linear-gradient(to right, var(--purple) 0%, transparent 40%, transparent 60%, var(--purple) 100%)"
            }}/>
            <div className="absolute top-0 right-0" id={'chkp61'}/>
          </div>
        }
        pageTitle={
          <div>
            <span>POLARIS COACH</span>
            <span className="absolute inset-0 flex items-center"><span id={"chkp6"}/></span>
          </div>
        }
        titleBorderBg={"linear-gradient(#FF2600,#FF2600)"}
        titleClassName={"flex items-center justify-center"}
        wrapperClassName={"lg:w-[1300px]- xl:w-full lg:px-10 2xl:px-0 "}
        pageSubtitle={<div className={"flex flex-col relative"}>
          <div className="absolute top-[150px] xl:top-0" data-sticky-activator/>
          <div className="flex flex-col gap-5 font-light">
            <h3 className={"uppercase font-bold text-[24px]"}>Enhance your gaming experience</h3>
            <p>Polaris COACH is your ultimate gaming teammate combining advanced tools to guide you in real time.</p>
            <p>From understanding your gameplay to offering tailored advice, it’s like having a <b>coach</b> who truly
              knows you and the game.</p>
          </div>
        </div>}
        subtitleClassName={"w-full"}

      >
        <div className={"absolute -top-[250px] opacity-0 text-[red] z-50"} ref={anchorRef}>anchor</div>

        <div className="hidden md:block absolute right-0 top-[50px] h-full bg-purple w-[1px]">
          <div
            className="absolute bottom-[30%] -translate-x-1/2 -rotate-90 size-[23px] bg-no-repeat bg-center bg-contain"
            style={{backgroundImage: "url('/triangle-icon-left.svg')"}}
          />
        </div>


        <div className="flex flex-col xl:flex-row mt-[100px] w-full items-center justify-center">
          <div className={"w-full lg:w-8/12 xl:w-[610px] flex-shrink-0 relative z-50 flex justify-end"} ref={videoFrameRef}>
            <div className="absolute top-0" ref={centralFrameRef}/>
            <VideoFrame variant={"normal"} className={"pb-[59%] xl:max-w-[620px]"}>
              {['1057594528', '1057594568', '1057594601'].map((videoId, i) => (
                <div
                  className={cn(
                    "absolute top-0 left-0 inset-0 transition-opacity opacity-0 z-10",
                    {"opacity-1": activeItem === (i + 1)}
                  )}
                  key={i}
                >
                  <ReactPlayer
                    url={`https://vimeo.com/${videoId}`}
                    width='100%'
                    height='100%'
                    controls={false}
                    playing={isVideoVisible && activeItem === (i + 1)}
                    loop={true}
                    muted={true}
                    playsinline
                    preload="auto"

                  />
                </div>
              ))}
            </VideoFrame>
          </div>
          <div className={"w-full lg:w-8/12 xl:w-1/2 relative -ml-[22px] py-[25px] pr-[30px] pl-[80px] z-40"}>
            <div className="hidden xl:block">
              <BlurredBox
                borderBg={"linear-gradient(var(--purple),var(--purple))"}
                bg={"linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(115, 115, 115, 0) 101%)"}
              />
            </div>
            <RtcList activeItem={activeItem} setActiveItem={setActiveItem}/>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default RealTimeCoaching;