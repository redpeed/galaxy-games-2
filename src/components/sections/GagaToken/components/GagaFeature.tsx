import React, {FC, ReactNode} from "react";
import {cn} from "@/lib/utils";
import Image from "next/image";
import FadeInSection from "@/components/common/FadeinSection";

interface IProps {
  iconUrl: string;
  title: ReactNode;
  iconPositionLeft?: boolean;
  className?: string;
}

const GagaFeature: FC<IProps> = (
  {
    iconUrl,
    title,
    iconPositionLeft,
    className
  }) => {
  return (
    <div
      className={cn(
        "flex gap-2 items-center text-right",
        {"flex-row-reverse text-left": iconPositionLeft},
        className || ''
      )}
    >
      <div className={"text-20 md:text-sm xl:text-20 font-bold m-0 whitespace-nowrap uppercase"}>
        <FadeInSection>
          {title}
        </FadeInSection>
      </div>
      <Image
        src={iconUrl}
        alt={"Gaga feature icon"}
        width={90}
        height={90}
        className={"w-[66px] xl:w-[90px]}"}
      />
    </div>
  );
};

export default GagaFeature;