import Image from "next/image"
import {cn} from "@/lib/utils";
import {Dispatch, FC, SetStateAction} from "react";

interface IProps {
  activeItem: number;
  setActiveItem?: Dispatch<SetStateAction<number>>;
}
const RtcList: FC<IProps> = ({activeItem, setActiveItem}) => {

  return (
    <div
      className={"flex flex-col gap-5 relative pt-10 lg:pt-0 pb-[150px] lg:pb-0 z-50"}
    >
      <RTCListItem
        icon={"/rtc-icon-1.svg"}
        title={"SCREEN CONTEXT"}
        isActive={activeItem === 1}
        onHover={() => (setActiveItem ? setActiveItem(1) : {})}
        content={<><b>Understands what’s happening in your game</b><br className={"inline lg:hidden"}/> by analyzing the
          screen in real time.<br/>
          Whether you’re stuck on a boss fight or managing resources,<br/>
          it provides the tips you need, right when you need them.</>}
      />
      <RTCListItem
        icon={"/rtc-icon-2.svg"}
        title={"GAME KNOWLEDGE"}
        isActive={activeItem === 2}
        onHover={() => (setActiveItem ? setActiveItem(2) : {})}
        content={<>With deep knowledge of game mechanics, <br className={"inline lg:hidden"}/>strategies and
          content.<br/>
          <b>Polaris helps you make smarter decisions.</b><br/>
          Need advice on upgrades or resource management? Polaris has you covered.</>}
      />
      <RTCListItem
        icon={"/rtc-icon-3.svg"}
        title={"Playstyle Analysis"}
        isActive={activeItem === 3}
        onHover={() => (setActiveItem ? setActiveItem(3) : {})}
        content={<><b>Polaris learns how you play,</b><br className={"inline xl:hidden"}/> tailoring its advice to fit your style.<br/>
          Whether you’re a strategist <br className={"inline lg:hidden"}/> or a risk-taker, it gives suggestions
          <br className={"inline lg:hidden"}/> that feel natural and personalized.</>}
      />
    </div>
  );
};


function RTCListItem({icon, title, content, isActive, onHover}: {
  icon: string,
  title: string,
  content: React.ReactNode,
  isActive?: boolean,
  onHover: () => void,
}) {
  return (<div
    className={cn(
      "flex items-center justify-center lg:justify-start gap-5 opacity-0 lg:opacity-25 transition-all cursor-pointer",
      "absolute inset-0 lg:static",
      {"opacity-100 lg:opacity-100 lg:-translate-x-[40px]": isActive}
    )}
    onMouseOver={()=>onHover()}
  >
    <div className="hidden lg:flex items-center justify-center size-[90px] relative flex-shrink-0">
      <div className="absolute inset-0 m-3">
        <Image
          src={icon}
          alt={title}
          fill={true}
        />
      </div>
    </div>
    <div className="flex flex-col">
      <h3 className={"font-bold text-20 uppercase"}>{title}</h3>
      <p className={"font-light text-20 lg:text-sm"}>{content}</p>
    </div>
  </div>)
}

export default RtcList;