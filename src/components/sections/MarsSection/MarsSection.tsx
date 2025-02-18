import React from "react";

const MarsSection = () => {
  return (
    <div className="relative w-full  pb-[180px] z-10">

      <div
        className="absolute top-0 w-full -z-10 h-[1250px] bg-center"
        style={{
          backgroundImage: `url('/two-globes.svg')`,
          backgroundSize: "stretch",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "-300px",
        }}
      />

      <div
        className="relative translate-y-1/2 w-full bottom-0 right-0 z-30 h-[700px] bg-right"
        style={{
          backgroundImage: `url('/mars.png')`,
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

    </div>
  );
};

export default MarsSection;