import {FC} from "react";
import Image from "next/image";
import {cn} from "@/lib/utils";

interface IProps {
  toLeftDirection: boolean;
  images: string[];
  className?: string;
}

const PartnersRunningLine: FC<IProps> = ({toLeftDirection, images, className}) => {
  return (
    <div className={cn("wrapper w-full", className)}>
      {images.map((image, index) => {
        return (
          <div
            className={`${toLeftDirection?'scrollLeft':'scrollRight'} flex items-center justify-center`}
            key={index}
            style={{
              animationDelay: `calc(30s / 8 * (8 - ${index+1}) * -1)`,
            }}
          >
            <Image
              src={image}
              alt={`Partner ${index+1}`} width={188} height={111}
              style={{
                // filter: "sepia(1) hue-rotate(45deg) saturate(200) contrast(1) brightness(1)"
              }}
            />
          </div>
        )
      })
      }
    </div>
  );
};

export default PartnersRunningLine;