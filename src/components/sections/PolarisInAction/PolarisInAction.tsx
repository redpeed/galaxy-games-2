import PageSection from "@/components/common/PageSection";
import VideoFrame from "@/components/common/VideoFrame";
import GameControl from "@/components/sections/PolarisInAction/components/GameControl";

const PolarisInAction = () => {

  return (
    <PageSection
      pageTitle={"THE FIRST GAME WITH POLARIS"}
      className={"2xl:w-full z-unset- overflow-visible pb-0 -mb-[100px]"}
      titleClassName={"relative flex items-center justify-center"}
      wrapperClassName={"lg:w-[1487px] xl:w-[1450px] px-10 2xl:px-0 relative "}
      subtitleClassName={"w-full "}
      pageSubtitle={<>We use Polaris ai directly on our own web3 game Haunted
        space, out soon on Playstation, Xbox and Epic.
      </>}
    >
      <div
        className={"relative w-[1487px] h-0 pb-[103.2%] max-w-full -top-[300px] xl:-top-[400px] mt-[15%] lg:mt-[10%] xl:mt-[3%] -mb-[200px] xl:-mb-[300px]"}
      >
        <div className="absolute inset-0"
             style={{
               backgroundImage: "url('/pia-bg-shape.svg')",
               backgroundPosition: "top center",
               backgroundSize: "cover",

             }}
        />
        <div className="flex absolute w-full items-center justify-center pt-[32%] xl:pt-[32%]">
          <GameControl/>

        </div>
      </div>
    </PageSection>
  );
};

export default PolarisInAction;