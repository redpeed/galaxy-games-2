"use client"
import Navbar from "@/components/sections/Navbar/Navbar";
import NebulaWrapper from "@/components/common/NebulaWrapper";
import Hero from "@/components/sections/Hero/Hero";
import Polaris from "@/components/sections/Polaris/Polaris";
import AvatarSelector from "@/components/sections/AvatarSelector/AvatarSelector";
import RealTimeCoaching from "@/components/sections/RealTimeCoaching/RealTimeCoaching";
import MakeItAccessible from "@/components/sections/MakeItAccessible/MakeItAccessible";
import PolarisInAction from "@/components/sections/PolarisInAction/PolarisInAction";
import GagaToken from "@/components/sections/GagaToken/GagaToken";
import Partners from "@/components/sections/Partners/Partners";
import PolarisAiApi from "@/components/sections/PolarisAIApi/PolarisAIApi";
import Footer from "@/components/sections/Footer/Footer";
import React, {useRef} from "react";
import useAnchorInView from "@/hooks/useAnchorInView";
import Railway from "@/components/common/Railway";

const Desktop = () => {
  const heroAnchor = useRef<HTMLDivElement|null>(null)
  const isAnchorInView = useAnchorInView(heroAnchor)

  return (
    <>
      {/*<Railway/>*/}
      <div className="absolute inset-0 bg-space -z-10"/>

      <Navbar isHeroAnchorInView={isAnchorInView}/>
      <NebulaWrapper>
        <Hero heroAnchor={heroAnchor} isHeroAnchorInView={isAnchorInView}/>

        <Polaris/>

        <AvatarSelector/>
        <RealTimeCoaching/>
        <MakeItAccessible/>
        <PolarisInAction/>
        <GagaToken/>
        <Partners/>

        <PolarisAiApi/>

      </NebulaWrapper>

      <Footer/>
    </>
  );
};

export default Desktop;