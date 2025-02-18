import React, {FC, ReactNode} from "react";
import {cn} from "@/lib/utils";
import BlurredBoxRectangle from "@/components/common/BlurredBoxRectangle";
import FadeInSection from "@/components/common/FadeinSection";

interface IProps {
  title: string|React.ReactNode;
  children: React.ReactNode;
  color: string;
  className?: string;
}
const TwoSidesBlurredBox:FC<IProps> = ({title, children, color, className}) => {
  return (
    <div className={cn("flex flex-col w-full", className||"")}>
      <BlurredTextBox
        outerBorderClassName={`linear-gradient(360deg, ${color} 0.57%, rgba(255, 0, 0, 0) 100%)`}
        className={"text-[32px] font-bold leading-none py-5 px-3"}
      >
        {title}
      </BlurredTextBox>

      <BlurredTextBox
        outerBorderClassName={`linear-gradient(360deg, rgba(255, 0, 0, 0) 0%, ${color} 100%)`}
        className={"-mt-[2px] py-5 px-3"}
      >
        {children}
      </BlurredTextBox>

    </div>
  );
};

interface PolarisAiApiMobileProps {
  children: ReactNode;
  className?: string;
  outerBorderClassName?: string;
}
const BlurredTextBox: FC<PolarisAiApiMobileProps> = (
  {
    children,
    className,
    outerBorderClassName,
  }) => {
  return (
    <div className={cn("z-20 relative px-4 py-2.5", className || "")}>
      <BlurredBoxRectangle
        bg={"linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)"}
        borderBg={outerBorderClassName}
        className={"backdrop-blur"}
      />

      <div>
        <FadeInSection>
          {children}
        </FadeInSection>
      </div>
    </div>
  )
}

export default TwoSidesBlurredBox;