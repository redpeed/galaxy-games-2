import AvatarBox from "@/components/sections/AvatarSelector/components/AvatarBox";
import EmblaCarousel from "@/components/common/Carousel/Carousel";
import React from "react";
import {EmblaOptionsType} from "embla-carousel";
import PurpleBorderBox from "@/components/common/PurpleBorderBox";

const OPTIONS: EmblaOptionsType = {}

const AvatarSelectorMobile = () => {
  return (
    <>
      <div className="relative z-30 -mt-[180px]">
        <PurpleBorderBox
          heading={<>YOUR AVATAR <br/>IS YOUR GUIDE</>}
          className={"mb-[100px]"}
        >
          <>
            <div
              className="w-full bg-purple h-[1px] relative before:absolute before:w-[200%] before:-left-[50%] before:h-[1px] before:bg-purple"/>

            <p className={"mt-5"}>You can navigate into our ecosystem and your games through your <b>personal - fully
              customizable ai companion</b>, which will remember everything about you,
              just like <b>your best friend would</b>.</p><br/>
            You will be able to fully <b>customize every detail</b>, both aesthetic and personality-related, creating
            an <b>assistant</b> that's complete for you.
          </>
        </PurpleBorderBox>

        <EmblaCarousel slides={[
          <AvatarBox isTransparent={true} imageUrl={"/avatar-natalia.png"} />,
          <AvatarBox isTransparent={true} imageUrl={"/avatar-ettore.png"}/>,
          <AvatarBox isTransparent={true} imageUrl={"/avatar-homerino.png"}/>
        ]} options={OPTIONS}/>

        <div
          className="my-[180px] size-[30px] bg-contain bg-no-repeat mx-auto"
          style={{
            backgroundImage: `url('/triangle-down.svg')`,
          }}
        />

      </div>
    </>
  )
};

export default AvatarSelectorMobile;