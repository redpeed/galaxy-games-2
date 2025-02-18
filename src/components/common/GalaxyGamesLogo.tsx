import Image from "next/image"
import {cn} from "@/lib/utils";

const GalaxyGamesLogo = ({size=96}:{size?: number}) => {
  return <div
    className={cn(`flex-shrink-0`)}
    style={{
      width: `${size}px`,
      height: `${size}px`,
    }}
  >
    <Image

    src={"/galaxy-logo.svg"}
    alt={"GalaxyGames Logo"}
    width={size}
    height={size}
  />
  </div>;
};

export default GalaxyGamesLogo;