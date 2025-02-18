import {FC, ReactNode} from "react";
import Image from "next/image";
import {cn} from "@/lib/utils";
import BlurredBox from "@/components/common/BlurredBox";

interface IProps {
  icon: string;
  title: string;
  description: ReactNode;
}

const PolarisFeatureBox: FC<IProps> = ({icon, title, description, ...rest}) =>
{
  return (
    <div
      className={cn(
        "py-50 px-[15px] relative w-4/12 z-10 text-center",
      )}
      {...rest}
    >
      <BlurredBox/>

      <div className={"absolute top-0 left-0 right-0 -translate-y-1/2 text-center"}>
        <Image
          src={icon}
          alt={'section icon'}
          className={"inline-block"}
          width={58}
          height={58}
        />
      </div>
      <h4 className={"font-bold"}>{title}</h4>
      <div className={"font-light"}>{description}</div>
    </div>
  );
};

export default PolarisFeatureBox;