"use client"

import React, {useCallback, useEffect, useRef, useState} from "react";
import EmblaCarousel from "@/components/common/Carousel/Carousel";
import TwoSidesBlurredBox from "@/components/common/TwoSidesBlurredBox";
import {EmblaCarouselType} from "embla-carousel";
import VideoVerticalFramed from "@/components/common/VideoVerticalFramed";
import useAnchorInView from "@/hooks/useAnchorInView";
import RtcList from "@/components/sections/RealTimeCoaching/components/RTCList";


const RealTimeCoachingMobile = () => {
  const videoFrameRef = useRef<HTMLDivElement | null>(null);
  const isVideoVisible = useAnchorInView(videoFrameRef);

  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    const slidesInView = emblaApi.slidesInView()
    setCurrentSlide((slidesInView || [0])[0] || 0)
  }, [])

  useEffect(() => {
    if (emblaApi) emblaApi.on('slidesInView', logSlidesInView)
  }, [emblaApi, logSlidesInView])

  return (
    <div
    id={"real-time-coaching"}
      className="relative pt-[100px] z-30"
    >
      <h2 className={"font-bold text-[60px] text-center"}>OUR TOOLS</h2>

      <div
        className="w-full h-[150px]"
        style={{
          backgroundImage: `url('/our-tools-header-bg.svg')`,
          backgroundPosition: "center top",
        }}
      />

      <TwoSidesBlurredBox
        title={"POLARIS COACH"}
        color={"#FF0000"}
        className="text-left"
      >
        <h4 className={"text-20 font-bold"}>ENHANCE YOUR GAMING EXPERIENCE</h4>
        <p>Polaris COACH is your ultimate <b>gaming teammate</b> combining advanced tools to guide you in real time.</p>
        <p>From understanding your gameplay to offering tailored advice,
          it’s like having a <b>coach</b>
          who truly knows you and the game.</p>
      </TwoSidesBlurredBox>


      <div className="size-[70px] bg-cover mx-auto mt-[60px] mb-[45px]"
           style={{backgroundImage: `url(/dots-ball.svg)`,}}/>

      <div ref={videoFrameRef}>
        <EmblaCarousel
          // @ts-ignore
          setEmblaApi={setEmblaApi}
          className={"mb-10 max-w-full"}
          slides={[
            <VideoVerticalFramed url={`https://vimeo.com/1057592135`} playing={isVideoVisible && currentSlide === 0}/>,
            <VideoVerticalFramed url={`https://vimeo.com/1057592159`} playing={isVideoVisible && currentSlide === 1}/>,
            <VideoVerticalFramed url={`https://vimeo.com/1057592184`} playing={isVideoVisible && currentSlide === 2}/>,
          ]}/>
      </div>

      <div className="text-20 text-center mb-[180px]">
        <RtcList activeItem={currentSlide + 1}/>
      </div>

    </div>
  );
};


export default RealTimeCoachingMobile;