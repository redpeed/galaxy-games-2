import {FC} from "react";
import {cn} from "@/lib/utils";

interface IProps {
  bg?:string;
  borderBg?:string;
  className?:string;
}
const BlurredBoxRectangle:FC<IProps> = ({bg, borderBg, className}) => {
  return (
    <>
      <div
        className={cn("absolute -z-30 inset-0", className||'')}
        style={{
          clipPath: "polygon(2px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 2px), 2px calc(100% - 2px))",
          background: bg || "radial-gradient(115.68% 687.6% at -3.62% 20%, rgba(255, 165, 165, 0.25) 0%, rgba(0, 133, 255, 0.125) 100%)",
        }}
      />

      <div
        className={"absolute inset-0 -z-20"}
        style={{
          clipPath: "polygon(2px 2px, calc(100% - 2px) 2px, calc(100% - 2px) 0, 0 0, 0 100%, 100% 100%, 100% 0, calc(100% - 2px) 0, calc(100% - 2px) calc(100% - 2px), 2px calc(100% - 2px))",
          background: borderBg || "linear-gradient(0deg, #FF4433 -0.12%, #AB00FF 100%)"
        }}
      >
      </div>
    </>
  );
};

export default BlurredBoxRectangle;