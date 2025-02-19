import PageSection from "@/components/common/PageSection";
import VideoFrame from "@/components/common/VideoFrame";
import FadeInSection from "@/components/common/FadeinSection";
import React, {useRef} from "react";
import useAnchorInView from "@/hooks/useAnchorInView";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const MakeItAccessible = () => {
  const videoFrameRef = useRef<HTMLDivElement|null>(null);
  const isVideoVisible = useAnchorInView(videoFrameRef)

  return (
    <PageSection
      pageTitle={
        <span>POLARIS ACCESSIBILITY
          <span className="absolute inset-0 flex items-center">
            <span id={"chkp7"}/>
            <span className={"absolute top-[300px]"} id={"mia-2"}/>
          </span>
        </span>
      }
      preTitle={
        <div className={"flex flex-col items-center w-full top-[50px]"}>
          <div
            className="hidden md:block absolute z-10 right-0 bottom-[100%] h-[100px] translate-y-[50px] w-[1px] border-l border-purple "/>

          <div className="hidden md:block absolute z-10 left-0 top-[50px] w-full h-[1px]"
               style={{
                 backgroundImage: "linear-gradient(to right, #AB00FF 0%, #FBC900 10%, transparent 20%, transparent 80%, #FBC900 90%, #AB00FF 100%)"
               }}
          />

          <div className="hidden md:block absolute z-10 left-0 top-0 h-[950px] md:h-[1050px] lg:h-[550px] translate-y-[50px] w-[1px] border-l border-purple ">
            <div
              className="absolute top-[50%] -translate-x-1/2 -rotate-90 size-[23px] bg-no-repeat bg-center bg-contain"
              style={{backgroundImage: "url('/triangle-icon-left.svg')"}}
            />
          </div>
          <div className="hidden md:block absolute z-10 left-0 top-[1000px] md:top-[1100px] lg:top-[600px] w-1/2 h-[1px] border-t border-purple "/>
          <div className="hidden md:block absolute z-10 left-1/2 top-[1000px] md:top-[1100px] lg:top-[600px] w-[1px] h-[200px] lg:h-[350px] border-l border-purple ">
            <div
              className="absolute top-[45%] -translate-x-1/2 -rotate-90 size-[23px] bg-no-repeat bg-center bg-contain"
              style={{backgroundImage: "url('/triangle-icon-left.svg')"}}
            />
          </div>
        </div>
      }
      className={"overflow-visible xl:mb-[200px]"}
      bgElement={<>
        <div
        className="absolute bg-no-repeat bg-contain w-[47%] right-0 top-[50px] bottom-0 z-10"
        style={{
          backgroundImage: `url(/mia-wave.svg)`,
          mixBlendMode: "hard-light",
        }}
      />
      {/*  <div*/}
      {/*  className="absolute bg-no-repeat bg-contain w-[50%] right-0 top-0 bottom-0"*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(/mia-red-waves.svg)`,*/}
      {/*    backgroundSize: "100% 100%"*/}
      {/*    // mixBlendMode: "soft-light",*/}
      {/*  }}*/}
      {/*/>*/}
      </>
      }
      titleClassName={"relative flex items-center justify-center"}
      titleBorderBg={"linear-gradient(#FBC900,#FBC900)"}
      wrapperClassName={"lg:w-[1300px] xl:w-full lg:px-10 2xl:px-0 "}
      pageSubtitle={<FadeInSection>
        <p>Polaris ACCESSIBILITY breaks barriers making gaming <b>inclusive for everyone</b>. <br/>
          With <b>innovative tools</b> it ensures no one is left behind, no matter their challenges.
        </p>
      </FadeInSection>}
      subtitleClassName={"w-full relative z-30"}
    >
      <div className="flex flex-col lg:flex-row gap-[50px] mt-[100px] w-full items-center ">
        <div
          className="absolute top-[50px] inset-0 z-10 mix-blend-luminosity"
          style={{
            backgroundImage: `url(/wire-curved.svg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        >

        </div>

        <div className={"w-full lg:w-1/2 flex-shrink-0 relative z-30 flex justify-center"} ref={videoFrameRef}>
          <VideoFrame variant={"normal"} className={"pb-[49%] xl:max-w-[620px]"}>
            <ReactPlayer
              url='https://vimeo.com/1057594331'
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
        <div className={"lg:w-1/2 relative z-20 flex items-center justify-end xl:pl-[50px]"}>
          <FadeInSection>
            <div className={"font-light text-20 lg:text-[24px] text-center lg:text-left"}>
              <b className={"uppercase"}>Physical Disabilities</b> <br/>
              Polaris provides flexible solutions: <br/>
              <li><b>Eye-tracking</b></li>
              <li><b>Customizable controls</b></li>
              <br/>

              Adapting to different physical challenges. <br/>
              Whether you use one hand, have limited mobility,
              or need a mix of tools, <br/>
              Polaris ensures seamless and <b> accessible gameplay</b>.
            </div>
          </FadeInSection>
        </div>
      </div>
    </PageSection>
  );
};

export default MakeItAccessible;