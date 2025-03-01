import {FC} from "react";
import Image from "next/image";

interface IProps {
  className?: string,
}
const Logo:FC<IProps> = ({className}) => {
  return (
    <Image src={"/desktop/logo-white.svg"} alt="Logo" className={className} width={667} height={63}/>
  );
};

export default Logo;