import CurlyCorner from "@/components/common/CurlyCorner";
import {FC, ReactNode} from "react";
import {cn} from "@/lib/utils";
import CurlyCornerBig from "@/components/common/CurlyCornerBig";
import CurlyCornerResponsive from "@/components/common/CurlyCornerResponsive";

interface IProps {
  children: ReactNode;
  className?: string;
  variant: "big" | "normal";
}

const VideoFrame: FC<IProps> = ({children, className, variant}) => {

  return (
    <div className={cn("relative h-0 pb-[55%] max-w-full xl:max-w-[640px] flex-grow", className || '')}>
      <CurlyCornerResponsive position={"tl"}/>
      <CurlyCornerResponsive position={"tr"}/>
      <CurlyCornerResponsive position={"bl"}/>
      <CurlyCornerResponsive position={"br"}/>

      <div className="absolute inset-0 m-[3%] border-[3px] border-purple bg-black">
        {children}
      </div>
    </div>
  );
};

export default VideoFrame;