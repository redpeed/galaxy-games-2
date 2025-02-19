import Image from "next/image";
import BlurredBoxRectangle from "@/components/common/BlurredBoxRectangle";
import React from "react";
import MobileTextBox from "@/components/common/MobileTextBox";
import GagaFeature from "@/components/sections/GagaToken/components/GagaFeature";
import FadeInSection from "@/components/common/FadeinSection";
import PurpleBorderBox from "@/components/common/PurpleBorderBox";
import Link from "next/link";

const GagaTokenMobile = () => {
  return (
    <div
      id={"gaga-token"}
      className={"flex flex-col md:hidden relative"}
    >
      <PurpleBorderBox className={"text-[32px] font-bold mb-[25px]"}>
        <FadeInSection>
          GAGA TOKEN
        </FadeInSection>
      </PurpleBorderBox>


      <MobileTextBox className={"text-left mb-[35px]"}>
        One token as a <b>payment method</b> of all our ecosystem From api to all our games (former Haunted Space)
      </MobileTextBox>

      <div
        className="py-20 bg-center px-10"
        style={{
          backgroundImage: `url('/gaga-token-bg.svg')`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={"/gaga-token.png"}
          alt={"Gaga Token"}
          width={639}
          height={622}
          className={"w-full"}
        />
      </div>

      <div className="flex flex-col gap-[10px] px-5">
        <GagaFeature
          iconPositionLeft={true}
          iconUrl={"/gaga-icon-1.svg"}
          className={"[&_span]:font-light justify-end"}
          title={<span>MAIN ECOSYSTEM <br/> PAYMENT METHOD</span>}
        />
        <GagaFeature
          iconPositionLeft={true}
          iconUrl={"/gaga-icon-2.svg"}
          className={"[&_span]:font-light justify-end"}
          title={<span>ENABLES A <br/>SUSTAINABLE ECONOMY</span>}
        />
        <GagaFeature
          iconPositionLeft={true}
          iconUrl={"/gaga-icon-3.svg"}
          className={"[&_span]:font-light justify-end"}
          title={<span>STAY COMMITTED <br/>AND GET BENEFITS</span>}
        />
        <GagaFeature
          iconPositionLeft={true}
          iconUrl={"/gaga-icon-4.svg"}
          className={"[&_span]:font-light justify-end"}
          title={<span>STAKE TO ACCESS <br/>NON INFLATIONARY PERKS</span>}
        />
        <GagaFeature
          iconPositionLeft={true}
          iconUrl={"/gaga-icon-5.svg"}
          className={"[&_span]:font-light justify-end"}
          title={<span>DEFLATIONARY <br/>TOKENOMICS</span>}
        />
        <GagaFeature
          iconPositionLeft={true}
          iconUrl={"/gaga-icon-6.svg"}
          className={"[&_span]:font-light justify-end"}
          title={<span>one token to rule <br/>them all <br/>(games and gamers)</span>}
        />
      </div>

      <Link
        href={"#partners"}
        className="block my-[120px] size-[30px] bg-contain bg-no-repeat mx-auto"
        style={{
          backgroundImage: `url('/triangle-down.svg')`,
        }}
      />
    </div>
  );
};

export default GagaTokenMobile;