import Image from "next/image";
import {cn} from "@/lib/utils";
import {FC} from "react";

interface IProps {
  position: 'tl' | 'tr' | 'bl' | 'br'
}
const CurlyCornerResponsive:FC<IProps> = ({position}) => {
  return (
    <div
      className={cn(
        "absolute w-[24%] h-0 pb-[24%] z-50",
        {"left-0 top-0": position === "tl"},
        {"right-0 top-0 -scale-x-[1]": position === "tr"},
        {"right-0 bottom-0 -scale-x-[1] -scale-y-[1]": position === "br"},
        {"left-0 bottom-0 -scale-y-[1]": position === "bl"},
      )}
    >
      <div
        className="absolute inset-0 -z-10 backdrop-blur-[4px] curly-corner-clip"
      />

      <div className="absolute inset-0">
        <Image
          src={'/curly-corner.svg'}
          alt={'Curly Corner'}
          width={147}
          height={147}
          className={"absolute size-[100%]"}
        />
      </div>
    </div>
  );
};

export default CurlyCornerResponsive;