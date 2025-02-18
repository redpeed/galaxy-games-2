import Image from "next/image";
import {FC} from "react";

interface IProps {
  icon: string;
  iconSize: number;
  iconBorderClassName: string;
}
const CircledIcon:FC<IProps> = ({icon, iconSize, iconBorderClassName}) => {
  return (
    <div className="flex items-center justify-center gap-2.5">
      <div
        className={"rounded-full border flex items-center justify-center"}
        style={{
          border: "double 1px transparent",
          backgroundImage: iconBorderClassName,
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          height: `${iconSize * 1.1}px`,
          width: `${iconSize * 1.1}px`,
        }}
      >
        <Image
          src={icon}
          alt={"polaris feature icon"}
          width={iconSize}
          height={iconSize}
        />
      </div>
    </div>
  )
}

export default CircledIcon;