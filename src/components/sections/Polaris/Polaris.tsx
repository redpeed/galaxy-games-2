import Image from "next/image";
import FadeInSection from "@/components/common/FadeinSection";
import {cn} from "@/lib/utils";
import BlurredBox from "@/components/common/BlurredBox";
import React from "react";
import CircledIcon from "@/components/common/CircledIcon";
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

const Polaris = () => {
  return (
    <section
      className={cn(
        "flex lg:h-[1400px] xl:h-[1600px] w-full items-center flex-col z-20 relative px-0 lg:px-20",
      )}
    >
      <div className="absolute bottom-[100%] mb-[100px]" id={"ai"}/>

      <div className="w-full max-w-full container flex flex-col items-center overflow-hidden- h-full">
        <div className={"polaris-ai-logo "}>
          <FadeInSection>
            <Image
              src={"/polaris-logo.svg"}
              alt="Polaris Logo"
              width={744}
              height={134}
            />
          </FadeInSection>
        </div>
        <h2 className={"font-bold text-[32px] lg:text-[40px] mb-[25px]"}>
          <FadeInSection>
            ONE PLATFORM MULTIPLE TOOLS.
          </FadeInSection>
        </h2>
        <div className={"w-[1100px] max-w-full mx-auto text-center font-light text-20 lg:text-[24px]"}>
          <FadeInSection>
            <p>Polaris AI is the All-in-one AI platform to enhance the gaming experience. <br/>It
              has 2 key missions:</p>
            <br/>
            <div>
              <li>To make gaming <b>accessible</b> for everyone</li>
              <li>To enhance the experience with friendly <b>real-time coaching</b>.</li>
            </div>
          </FadeInSection>
        </div>


        <div
          className="flex items-center xl:items-stretch lg:gap-40 justify-between w-full py-[140px] lg:py-20 relative"
        >

          <div className="absolute h-0 w-full self-center">
            <div
              className="absolute w-[300%] -left-[100%] lg:left-0 lg:w-full h-[1500px] top-0 bottom-0 bg-polaris-ai -z-10 -translate-y-1/2"/>
          </div>

          <PolarisFeature
            wrapperClassName={"-ml-[15px] lg:ml-0"}
            outerBorderClassName={"linear-gradient(270deg, #FF2600 0%, rgba(255, 38, 0, 0.25) 110.75%)"}
            iconBorderClassName={"linear-gradient(360deg, #FF2600 0%, rgba(255, 38, 0, 0) 100%)"}
            icon={"/polaris-feature-icon-1.svg"}
            title={<span className={"flex items-center"}> POLARIS COACH</span>}
            childrenClassName={"text-right"}
            contentClassName={"xl:flex-row-reverse"}
          >
            <>
              <p>Your in-game strategist and friend.
                It understands your <b>playstyle</b> and the <b>context</b> of every situation.</p>

              <p>Whether you need tips
                on defeating a tough boss, advice
                on spending your resources wisely
                or <b>suggestions for upgrades</b>.</p>

              <p>Polaris provides <b> real-time personalized guidance</b>.</p>
            </>
          </PolarisFeature>

          <div
            className="absolute w-full lg:w-[60%] lg:left-[20%] h-0 pb-[75%] lg:pb-[25%] lg:top-1/2 lg:-translate-y-1/2 ">
            <div className="absolute inset-0">
              <ReactPlayer
                url='/brain-animation.webm'
                width='100%'
                height='100%'
                playing={true}
                loop={true}
                muted={true}
                playsinline

              />
            </div>
          </div>

          <PolarisFeature
            wrapperClassName={"-mr-[15px] lg:mr-0"}
            outerBorderClassName={"linear-gradient(#FBC900,#FBC900)"}
            iconBorderClassName={"linear-gradient(180deg, #FFCC00 0%, rgba(255, 204, 0, 0) 100%)"}
            contentClassName={"items-start"}
            icon={"/polaris-feature-icon-2.svg"}
            title={<>POLARIS ACCESSIBILITY</>}
          >
            <>
              <p><b>Polaris AI</b> is built to break barriers
                and make gaming truly <b>inclusive</b>.
                With features like:</p>

              <div>
                <li>Eye-tracking</li>
                <li>Blind mode</li>
                <li>Empathic chat support</li>
              </div>

              <p>Polaris ensures that everyone
                can enjoy the thrill of gaming.</p>
            </>
          </PolarisFeature>
        </div>
      </div>


    </section>
  );
};

interface IPropsPolarisFeature {
  wrapperClassName: string;
  outerBorderClassName: string;
  iconBorderClassName: string;
  icon: string;
  title: React.ReactNode;
  contentClassName?: string;
  children: React.ReactNode;
  childrenClassName?: string;
}

function PolarisFeature(
  {
    wrapperClassName,
    contentClassName,
    outerBorderClassName,
    iconBorderClassName,
    icon,
    title,
    children,
    childrenClassName
  }: IPropsPolarisFeature
) {
  return (
    <div
      className={cn(
        "relative flex flex-col self-stretch items-start px-30 py-50 z-10 xl:w-5/12 max-w-[250px] lg:min-w-[350px] xl:min-w-[450px] xl:max-w-[500px]",
        wrapperClassName || ''
      )}
    >
      <BlurredBox
        borderBg={outerBorderClassName}
        bg={"linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 89.23%)"}
      />

      <div
        className={cn("flex flex-col-reverse xl:flex-row gap-[22px] lg:gap-[35px] items-end lg:items-center justify-between w-full mb-30", contentClassName || "")}>
        <h4 className={"text-[24px] lg:text-[40px] leading-none font-bold m-0"}>{title}</h4>

        <CircledIcon
          icon={icon}
          iconBorderClassName={`linear-gradient(#13031B,#13031B), ${iconBorderClassName}`}
          iconSize={74}
        />
      </div>
      <div
        className={cn("flex flex-col gap-[25px] text-base lg:text-20 font-light max-w-full", childrenClassName || '')}>
        {children}
      </div>


    </div>
  )
}


export default Polaris;