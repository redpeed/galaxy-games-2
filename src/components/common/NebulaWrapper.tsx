"use client"

import useNebula from "@/hooks/useNebula";
import {ReactNode} from "react";


const NebulaWrapper = ({children}: {children:ReactNode} ) => {
  useNebula();
  
  return (
    <div className={"outer-container w-full flex flex-col relative"}>
      <canvas className={"fixed inset-0 -z-10 mix-blend-screen opacity-40"} id={"render-canvas"}/>
      <canvas className={"fixed inset-0 z-30"} id={"events-canvas"}/>
      {children}
    </div>
  );
};

export default NebulaWrapper;