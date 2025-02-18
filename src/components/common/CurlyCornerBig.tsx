import {cn} from "@/lib/utils";
import {FC} from "react";
import Image from "next/image";

interface IProps {
  position: 'tl' | 'tr' | 'bl' | 'br';
}

const CurlyCornerBig: FC<IProps> = ({position}) => {
  const size = 200;
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
        className="absolute inset-0 -z-10 backdrop-blur-[4px] scale-105"
        style={{
          clipPath: "url(#svgPathBig)"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size} ${size}`} width={"100%"} height={"100%"}>
          <defs>
            <clipPath id="svgPathBig">
              <path
                d="M 83.344 208.33 C 83.344 222.22 69.454 222.22 69.454 222.22 C 55.563 222.22 55.563 236.11 55.563 236.11 C 55.563 250 41.672 250 41.672 250 C 27.781 250 27.781 236.11 27.781 236.11 L 27.781 152.771 C 27.781 138.881 13.891 138.881 13.891 138.881 C 0 138.881 0 124.991 0 124.991 L 0 69.449 C 0 55.559 13.891 55.559 13.891 55.559 C 27.781 55.559 27.781 41.669 27.781 41.669 C 27.781 27.78 41.672 27.78 41.672 27.78 C 55.563 27.78 55.563 13.89 55.563 13.89 C 55.563 0 69.454 0 69.454 0 L 125 0 C 138.891 0 138.891 13.89 138.891 13.89 C 138.891 27.78 152.782 27.78 152.782 27.78 L 236.109 27.78 C 250 27.78 250 41.669 250 41.669 C 250 55.559 236.109 55.559 236.109 55.559 C 222.218 55.559 222.218 69.449 222.218 69.449 C 222.218 83.339 208.328 83.339 208.328 83.339 L 125 83.339 C 111.109 83.339 111.109 69.449 111.109 69.449 C 111.109 55.559 97.218 55.559 97.218 55.559 L 72.91 55.559 C 55.546 55.559 55.546 72.921 55.546 72.921 L 55.546 97.228 C 55.546 111.118 69.437 111.118 69.437 111.118 C 83.328 111.118 83.328 125.008 83.328 125.008 L 83.328 208.347 L 83.344 208.33 Z"
                fill="none" stroke="#ffffff" strokeWidth="1"/>
            </clipPath>
          </defs>
        </svg>
      </div>

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

export default CurlyCornerBig;

