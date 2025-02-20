import HeroMobile from "@/components/sections/Hero/HeroMobile";
import PolarisAiApiMobile from "@/components/sections/PolarisAIApi/PolarisAIApiMobile";
import MarsSection from "@/components/sections/MarsSection/MarsSection";
import AvatarSelectorMobile from "@/components/sections/AvatarSelector/AvatarSelectorMobile";
import RealTimeCoachingMobile from "@/components/sections/RealTimeCoaching/RealTimeCoachingMobile";
import MakeItAccessibleMobile from "@/components/sections/MakeItAccessible/MakeItAccessibleMobile";
import PolarisInActionMobile from "@/components/sections/PolarisInAction/PolarisInActionMobile";
import GagaTokenMobile from "@/components/sections/GagaToken/GagaTokenMobile";
import PartnersMobile from "@/components/sections/Partners/PartnersMobile";
import PolarisMobile from "@/components/sections/Polaris/PolarisMobile";
import FooterMobile from "@/components/sections/Footer/FooterMobile";
import FooterMobileBg from "@/components/sections/Footer/FooterMobileBg";

const Mobile = () => {
  return (
    <>
      <div className="absolute inset-0 w-[calc(100%_+1px)] bg-black -z-20 "/>
      <div className="absolute inset-0 bg-space -z-10" />

      <HeroMobile/>
      <PolarisAiApiMobile/>

      <MarsSection/>
      <AvatarSelectorMobile/>
      <RealTimeCoachingMobile/>
      <MakeItAccessibleMobile/>
      <PolarisInActionMobile/>
      <GagaTokenMobile/>
      <PartnersMobile/>
      <PolarisMobile/>
      <FooterMobile/>
      <FooterMobileBg/>
    </>
  );
};

export default Mobile;