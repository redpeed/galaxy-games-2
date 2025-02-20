import AvatarBox from "@/components/sections/AvatarSelector/components/AvatarBox";
import EmblaCarousel from "@/components/common/Carousel/Carousel";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {EmblaCarouselType, EmblaOptionsType} from "embla-carousel";
import PurpleBorderBox from "@/components/common/PurpleBorderBox";
import Link from "next/link";
import useAnchorInView from "@/hooks/useAnchorInView";

const OPTIONS: EmblaOptionsType = {}

const AvatarSelectorMobile = () => {
  const videoFrameRef = useRef<HTMLDivElement|null>(null);
  const isVideoVisible = useAnchorInView(videoFrameRef, undefined, 0.5)

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
    <>
      <div className="relative z-30 -mt-[180px]">
        <PurpleBorderBox
          heading={<>YOUR AVATAR <br/>IS YOUR GUIDE</>}
          className={"mb-[100px]"}
        >
          <>
            <div
              className="w-full bg-purple h-[1px] relative before:absolute before:w-[200%] before:-left-[50%] before:h-[1px] before:bg-purple"/>

            <p className={"mt-5"}>You can navigate into our ecosystem and your games through your <b>personal - fully
              customizable ai companion</b>, which will remember everything about you,
              just like <b>your best friend would</b>.</p><br/>
            You will be able to fully <b>customize every detail</b>, both aesthetic and personality-related, creating
            an <b>assistant</b> that's complete for you.
          </>
        </PurpleBorderBox>
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px]" ref={videoFrameRef}/>

        <EmblaCarousel
          // @ts-ignore
          setEmblaApi={setEmblaApi}
          slides={[
            <AvatarBox playing={isVideoVisible && currentSlide === 0} videoId={"1058532377"}/>,
            <AvatarBox playing={isVideoVisible && currentSlide === 1} videoId={"1058532405"}/>,
            <AvatarBox playing={isVideoVisible && currentSlide === 2} videoId={"1058532428"}/>
          ]} options={OPTIONS}/>

        <Link
          href={"#real-time-coaching"}
          className="block my-[180px] size-[30px] bg-contain bg-no-repeat mx-auto"
          style={{
            backgroundImage: `url('/triangle-down.svg')`,
          }}
        />

      </div>
    </>
  )
};

export default AvatarSelectorMobile;