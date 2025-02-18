import {FC} from "react";
import Image from "next/image";
import {cn} from "@/lib/utils";

interface IProps {
  imageUrl: string;
  isTransparent?: boolean;
}

const AvatarBox: FC<IProps> = ({imageUrl, isTransparent}) => {
  return (
    <div
      className={"flex flex-col gap-[25px] items-center justify-center relative z-40"}
    >
      <div
        className={cn(
          "overflow-hidden cursor-pointer relative ",
          "w-[205px] md:w-[290px] h-[430px] md:h-[510px] flex items-center justify-center"
        )}
        style={{
          borderWidth: "0px, 1px, 4px, 1px",

        }}
      >
        {!isTransparent
          && <Image
            src={"/avatar-frame.png"}
            alt={""}
            width={150}
            height={150}
            style={{
              mixBlendMode: "difference"
            }}
            className={"absolute inset-0 size-full"}
          />
        }
        <div
          className="absolute z-10 inset-0 m-5"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />

        <div className={cn(
          "rounded-[30px] overflow-hidden absolute bottom-[10px] z-10 size-[90%]",
          {"hover:bg-light-up ": !isTransparent}
        )}></div>
      </div>

    </div>
  );
};

export default AvatarBox;