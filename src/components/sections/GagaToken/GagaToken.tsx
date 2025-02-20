import PageSection from "@/components/common/PageSection";
import Image from "next/image";
import GagaFeature from "@/components/sections/GagaToken/components/GagaFeature";
import React from "react";

const GagaToken = () => {
  return (
    <PageSection
      pageTitle={"GALAXY LAB TOKEN"}
      titleClassName={"linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(115, 115, 115, 0) 101%)"}
      wrapperClassName={"lg:w-[1546px] xl:w-full lg:px-10 2xl:px-0"}
      className={"2xl:w-full"}
      pageSubtitle={<span>One token as a <b>payment method</b> of all our ecosystem From api to all our games (former
        Haunted Space)</span>}
      subtitleClassName={"w-full"}
    >
      <div className="absolute bottom-[100%] mb-[100px]" id={"gaga-token"}/>

      <div className="flex gap-[60px] items-center justify-between py-[60px] max-w-full">
        <div className="flex flex-col items-end gap-[60px]">
          <GagaFeature
            iconUrl={"/gaga-icon-1.svg"}
            title={<span>MAIN ECOSYSTEM <br/> PAYMENT METHOD</span>}
          />
          <GagaFeature
            iconUrl={"/gaga-icon-2.svg"}
            title={<span>ENABLES A <br/> SUSTAINABLE ECONOMY</span>}
            className={"mr-50"}
          />
          <GagaFeature
            iconUrl={"/gaga-icon-3.svg"}
            title={<span>STAY COMMITTED <br/> AND GET BENEFITS</span>}
          />
        </div>

        <div className="w-[40%] relative">
          <div className="absolute top-1/2 left-1/2">
            <div
              className="absolute size-[1123px] -translate-x-1/2 -translate-y-1/2 -z-10"
              style={{
                backgroundImage: `url('/gaga-token-bg.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </div>
          <Image
            src={"/gaga-token.png"}
            alt={"Gaga Token"}
            width={639}
            height={622}
            className={"w-full"}
          />
        </div>

        <div className="flex flex-col items-start gap-[60px]">
          <GagaFeature
            iconUrl={"/gaga-icon-4.svg"}
            title={<span>STAKE TO ACCESS <br/> NON INFLATIONARY PERKS</span>}
            iconPositionLeft={true}
          />
          <GagaFeature
            iconUrl={"/gaga-icon-5.svg"}
            title={<span>DEFLATIONARY<br/> TOKENOMICS</span>}
            iconPositionLeft={true}
            className={"ml-50"}
          />
          <GagaFeature
            iconUrl={"/gaga-icon-6.svg"}
            title={<span>one token to rule them all<br/> (games and gamers)</span>}
            iconPositionLeft={true}
          />
        </div>

      </div>
    </PageSection>
  );
};

export default GagaToken;