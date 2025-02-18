"use client"
import Image from "next/image";
import React, {FC, ReactNode} from "react";
import BlurredBox from "@/components/common/BlurredBox";
import FadeInSection from "@/components/common/FadeinSection";
import PurpleBorderBox from "@/components/common/PurpleBorderBox";
import {cn} from "@/lib/utils";

const PolarisAiApiMobile = () => {
  return (
    <>
      <div
        className="w-full h-[360px]"
        style={{
          backgroundImage: `url('/polaris-ai-mobile-header.svg')`,
          backgroundSize: "auto 100%",
          backgroundPosition: "top left",
          backgroundRepeat: "repeat-x"
        }}
      />
      <div className="flex justify-center mb-[70px] -mt-[140px] relative px-2.5">
        <Image
          src={"/polaris-ai-mobile-logo.svg"}
          alt={"ai-mobile"}
          width={366}
          height={65}
        />

        <div
          className={"absolute -z-10 h-[950px] -top-[100px] w-full bg-no-repeat mix-blend-hard-light"}
          style={{
            backgroundImage: `url('/pixel-planet.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "left top",
          }}
        />
      </div>

      <PurpleBorderBox
        className={"mb-[130px]"}
        heading={<>ONE PLATFORM <br/>MULTIPLES TOOLS.</>}
      >
        <span className={"inline-block mb-5"}>
          <b>Polaris AI</b> is the All-in-one Ai platform to enhance the gaming experience.
          It has two key missions:
        </span>
        <ul className={"list-disc pl-5 font-light text-20"}>
          <li>To make gaming <b>accessible</b> for everyone</li>
          <li>To enhance the experience with friendly <b>real-time coaching</b>.</li>
        </ul>
      </PurpleBorderBox>

      <PolarisAITextBox
        title={<>POLARIS <br/>COACH</>}
        outerBorderClassName={"linear-gradient(359.12deg, #FF2600 0%, rgba(255, 38, 0, 0) 138.68%)"}
        iconBorderClassName={"linear-gradient(#010103,#010103), linear-gradient(359.1deg, #FF2600 1.44%, rgba(255, 38, 0, 0) 98.56%)"}
        icon={"/polaris-feature-icon-1.svg"}
      >
        <>
          Your in-game strategist and friend.
          It understands your <b>playstyle</b> and the <b>context</b> of every situation. <br/><br/>

          Whether you need tips <br/>
          on defeating a tough boss, advice
          on spending your resources wisely
          or <b>suggestions for upgrades</b>.
          Polaris provides <b>real-time</b>
          <b>personalized guidance</b>.
        </>
      </PolarisAITextBox>

      <div className="h-[700px] relative -mt-[175px] z-10">
        <div className={"absolute inset-0 z-10 bg-space-big"}/>

        <div
          className="absolute inset-0 z-30 mix-blend-soft-light"
          style={{
            backgroundImage: `url('/polaris-ai-underbrain-mobile.png')`,
            backgroundSize: "80% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50%"
          }}
        >
        </div>

        <div
          className="absolute inset-0 z-40 mix-blend-plus-lighter"
          style={{
            backgroundImage: `url('/polaris-ai-brain-mobile.png')`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center"
          }}
        />
      </div>


      <PolarisAITextBox
        title={<>POLARIS <br/>ACCESSIBILITY</>}
        outerBorderClassName={"linear-gradient(178.71deg, #FFCC00 1.1%, rgba(255, 204, 0, 0.15) 98.84%)"}
        iconBorderClassName={"linear-gradient(#010103,#010103), linear-gradient(178.71deg, #FFCC00 1.1%, rgba(255, 204, 0, 0) 98.84%)"}
        icon={"/polaris-feature-icon-2.svg"}
        className={"-mt-[180px]"}
      >
        <>
          <span className={"mb-5 inline-block"}><b>Polaris AI</b> is built to break barriers
            and make gaming truly <b>inclusive</b>.
            With features like:</span>

          <div className={"list-disc mb-5 flex flex-col justify-center font-bold"}>
            <li>Eye-tracking</li>
            <li>Blind mode</li>
            <li>Empathic chat support</li>
          </div>

          <span>Polaris ensures that everyone <br/>
            can enjoy the thrill of gaming.</span>
        </>
      </PolarisAITextBox>
    </>
  );
};

interface PolarisAiApiMobileProps {
  children: ReactNode;
  icon: string;
  title: ReactNode;
  className?: string;
  outerBorderClassName?: string;
  iconBorderClassName?: string;
}

const PolarisAITextBox: FC<PolarisAiApiMobileProps> = (
  {
    title,
    children,
    icon,
    className,
    outerBorderClassName,
    iconBorderClassName
  }) => {
  return (
    <div className={cn("z-20 relative px-5 py-10 mx-auto w-[calc(100%_-_20px)] text-20", className||"")}>
      <BlurredBox
        bg={"linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)"}
        borderBg={outerBorderClassName}
      />
      <div className="flex items-center justify-center gap-2.5 mb-5">
        <div
          className={"size-[80px] rounded-full border flex items-center justify-center"}
          style={{
            border: "double 1px transparent",
            backgroundImage: iconBorderClassName,
            backgroundOrigin: "border-box",
            backgroundClip: "content-box, border-box"
          }}
        >
          <Image
            src={icon}
            alt={"polaris feature icon"}
            width={80}
            height={80}
          />
        </div>
        <h3 className={"text-32 leading-none font-bold"}>{title}</h3>
      </div>

      <div className={"text-center"}>
        <FadeInSection>
          {children}
        </FadeInSection>
      </div>
    </div>
  )
}


export default PolarisAiApiMobile;