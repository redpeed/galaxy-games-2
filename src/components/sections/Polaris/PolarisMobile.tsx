import React from "react";
import MobileTextBox from "@/components/common/MobileTextBox";
import FadeInSection from "@/components/common/FadeinSection";
import PurpleBorderBox from "@/components/common/PurpleBorderBox";
import Image from "next/image"

const PolarisMobile = () => {
  return (
    <div className={"flex flex-col relative z-10"}>
      <PurpleBorderBox className={"text-[32px] font-bold mb-[20px]"}>
        <FadeInSection>
          POLARIS API
        </FadeInSection>
      </PurpleBorderBox>


      <Image
        src={'/two-heads.png'}
        height={360}
        width={460}
        alt={"two heads"}
        className="w-full -top-[40px] relative"
      />

      <MobileTextBox>
        Coming soon: <br/>
        Polaris AI isn’t just for Haunted Space.
      </MobileTextBox>
      <MobileTextBox className={"mt-[20px]"}>
        game studios everywhere will be able to <b>use our API </b> to <b> integrate the Coaching Assistant</b> and <b>Accessibility
        modules</b> into <b>their own games</b>, creating more inclusive and engaging experiences for all players.
      </MobileTextBox>

    </div>
  );
};

export default PolarisMobile;