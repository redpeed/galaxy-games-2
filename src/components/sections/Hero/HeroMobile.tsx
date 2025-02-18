import Image from "next/image"
import GalaxyGamesLogo from "@/components/common/GalaxyGamesLogo";
import BlurredBoxRectangle from "@/components/common/BlurredBoxRectangle";

const HeroMobile = () => {
  return (
    <section
      className={"flex flex-col relative pt-5 pb-[110px] mx-auto w-full items-center bg-cover bg-no-repeat z-10"}
    >
      <BlurredBoxRectangle
        borderBg={"linear-gradient(var(--purple),var(--purple))"}
        bg={"transparent"}
      />

      <div
        className={"size-[70px] rounded-full border flex items-center justify-center mb-50 "}
        style={{
          border: "double 1px transparent",
          backgroundImage: "url('/bg-space.png'), linear-gradient(rgb(255, 255, 255) 0%, rgba(56, 20, 168, 0) 50%)",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box"
        }}
      >
        <GalaxyGamesLogo size={52}/>
      </div>

      <GalaxyLabBox/>

      <p className={"text-50 leading-[56px] font-light mb-[100px] w-full px-4"}>
        LEVERAGE <br/>
        <span className={"font-bold text-purple"}>AI</span> AND <br/>
        <span className={"font-bold text-purple"}>WEB3</span> <br/>
        TO ENHANCE <br/>
        <span className={"font-bold text-purple"}>GAMING</span>
      </p>

      <Image
        src={"/triangle-down.svg"}
        alt={"arrows-down"}
        width={30}
        height={23}
      />
    </section>
  );
};

function GalaxyLabBox() {
  return (
    <div
      className={"rounded-[10px] flex items-center justify-center mb-20"}
      style={{
        border: "double 2px transparent",
        backgroundImage: "url('/space-desktop-short.jpg'), linear-gradient(var(--purple),var(--purple))",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
        backgroundSize: "contain",
      }}
    >
      <div className={"px-[30px] py-50"}>
        <Image
          src={"/galaxy-lab-logo.svg"}
          alt={"GalaxyGames Logo"}
          width={174}
          height={57}
        />
      </div>
    </div>
  )
}


export default HeroMobile;