import React from "react";
import PartnersRunningLine from "@/components/sections/Partners/components/PartnersRunningLine";
import FadeInSection from "@/components/common/FadeinSection";
import PurpleBorderBox from "@/components/common/PurpleBorderBox";

function PartnersMobile() {
  return (
    <div
    id={"partners"}
      className={"flex flex-col md:hidden relative"}
    >
      <PurpleBorderBox className={"text-[32px] font-bold mb-[20px]"}>
        <FadeInSection>
          PARTNERS
        </FadeInSection>
      </PurpleBorderBox>

      <div className="flex flex-col items-center justify-center w-full mb-[170px] ">
        <PartnersRunningLine
          toLeftDirection={true}
          className={"mt-0"}
          images={[
            '/partners/11-07.png',
            '/partners/11-08.png',
            '/partners/11-09.png',
            '/partners/11-10.png',
            '/partners/11-11.png',
            '/partners/11-14.png',
            '/partners/11-07.png',
            '/partners/11-08.png',
          ]}
        />
        <PartnersRunningLine
          toLeftDirection={false}
          className={"mt-6"}
          images={[
            '/partners/Avalanche_png.png',
            '/partners/MeritCircle_png.png',
            '/partners/12-06.png',
            '/partners/12-07.png',
            '/partners/12-08.png',
            '/partners/11-08.png',
            '/partners/11-10.png',
            '/partners/11-11.png',
          ]}
        />
      </div>


    </div>
  );
}

export default PartnersMobile;
