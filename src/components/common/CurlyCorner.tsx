import Image from "next/image";
import {cn} from "@/lib/utils";
import {FC} from "react";

interface IProps {
  position: 'tl' | 'tr' | 'bl' | 'br'
}
const CurlyCorner:FC<IProps> = ({position}) => {
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
          clipPath: "url(#svgPath)"
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.58 147.59">
          <defs>
            <clipPath id="svgPath">
              <path
                transform="translate(2, 2)"
                d="M49.2,122.99c0,8.2-8.2,8.2-8.2,8.2-8.2,0-8.2,8.2-8.2,8.2,0,8.2-8.2,8.2-8.2,8.2-8.2,0-8.2-8.2-8.2-8.2v-49.2c0-8.2-8.2-8.2-8.2-8.2C0,81.99,0,73.79,0,73.79v-32.79c0-8.2,8.2-8.2,8.2-8.2,8.2,0,8.2-8.2,8.2-8.2,0-8.2,8.2-8.2,8.2-8.2,8.2,0,8.2-8.2,8.2-8.2C32.8,0,41,0,41,0h32.79c8.2,0,8.2,8.2,8.2,8.2,0,8.2,8.2,8.2,8.2,8.2h49.19c8.2,0,8.2,8.2,8.2,8.2,0,8.2-8.2,8.2-8.2,8.2-8.2,0-8.2,8.2-8.2,8.2,0,8.2-8.2,8.2-8.2,8.2h-49.19c-8.2,0-8.2-8.2-8.2-8.2,0-8.2-8.2-8.2-8.2-8.2h-14.35c-10.25,0-10.25,10.25-10.25,10.25v14.35c0,8.2,8.2,8.2,8.2,8.2,8.2,0,8.2,8.2,8.2,8.2v49.2Z"/>
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

export default CurlyCorner;