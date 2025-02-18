import Image from "next/image";
import FadeInSection from "@/components/common/FadeinSection";
import {cn} from "@/lib/utils";
import BlurredBox from "@/components/common/BlurredBox";
import React from "react";
import CircledIcon from "@/components/common/CircledIcon";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Polaris = () => {
  return (
    <section
      className={cn(
        "flex h-[1900px] xl:h-[1600px] w-full items-center flex-col z-20 relative px-20",
      )}
    >
      <div className="absolute bottom-[100%] mb-[100px]" id={"ai"}/>

      <div className="container flex flex-col items-center overflow-hidden h-full">
        <div className={"polaris-ai-logo mb-50 "}>
          <FadeInSection>
            <Image
              src={"/polaris-logo.svg"}
              alt="Polaris Logo"
              width={744}
              height={134}
            />
          </FadeInSection>
        </div>
        <h2 className={"font-bold text-[40px] mb-[25px]"}>
          <FadeInSection>
            ONE PLATFORM MULTIPLES TOOLS.
          </FadeInSection>
        </h2>
        <div className={"w-[1100px] max-w-full mx-auto text-center text-[24px]"}>
          <FadeInSection>
            <p className={"mb-50"}>Polaris AI is the All-in-one AI platform to enhance the gaming experience. <br/>It
              has 2 key missions:</p>
            <div>
              <li>To make gaming <b>accessible</b> for everyone</li>
              <li>To enhance the experience with friendly <b>real-time coaching</b>.</li>
            </div>
          </FadeInSection>
        </div>


        <div
          className="flex flex-col xl:flex-row items-center xl:items-stretch xl:gap-40 justify-between w-full py-20 relative"
          // className="bg-brain bg-center bg-no-repeat flex flex-col xl:flex-row items-center xl:items-stretch gap-40 justify-between w-full py-20 relative"
        >

          <div className="absolute h-0 w-full self-center">
            <div className="absolute w-full h-[1500px] top-0 bottom-0 bg-polaris-ai -z-10 -translate-y-1/2"/>
          </div>

          <PolarisFeature
            outerBorderClassName={"linear-gradient(270deg, #FF2600 0%, rgba(255, 38, 0, 0.25) 110.75%)"}
            iconBorderClassName={"linear-gradient(360deg, #FF2600 0%, rgba(255, 38, 0, 0) 100%)"}
            icon={"/polaris-feature-icon-1.svg"}
            title={<span className={"flex items-center"}> POLARIS COACH</span>}
            childrenClassName={"xl:text-right"}
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

          <div className="relative xl:absolute w-[60%] h-0 pb-[25%] xl:top-1/2 xl:-translate-y-1/2 xl:left-[20%]">
            <div className="absolute inset-0">
              <ReactPlayer
                url='/brain-animation.webm'
                width='100%'
                height='100%'
                playing={true}
                loop={true}
                muted={true}
              />
            </div>
          </div>

          <PolarisFeature
            outerBorderClassName={"linear-gradient(#FBC900,#FBC900)"}
            iconBorderClassName={"linear-gradient(180deg, #FFCC00 0%, rgba(255, 204, 0, 0) 100%)"}
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
      className={"relative flex flex-col items-start px-30 py-50 z-10 xl:w-5/12 min-w-[450px] xl:max-w-[500px]"}>
      <BlurredBox
        borderBg={outerBorderClassName}
        bg={"linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 89.23%)"}
      />

      <div className={cn("flex gap-[35px] items-center justify-between w-full mb-30", contentClassName || "")}>
        <h4 className={"text-[40px] leading-none font-bold m-0"}>{title}</h4>

        <CircledIcon
          icon={icon}
          iconBorderClassName={`linear-gradient(#13031B,#13031B), ${iconBorderClassName}`}
          iconSize={74}
        />
      </div>
      <div className={cn("flex flex-col gap-[25px] text-20 max-w-full", childrenClassName || '')}>
        {children}
      </div>


    </div>
  )
}


export default Polaris;