import {CSSProperties, FC} from "react";

interface IProps {
  style?: CSSProperties;
}

const BlurredBox2:FC<IProps> = ({style}) => {
  return (
    <>
      <div
        className={"absolute -z-30 inset-0"}
        style={{
          clipPath: "polygon(10px 2px, calc(100% - 10px) 2px, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) calc(100% - 2px), 10px calc(100% - 2px), 2px calc(100% - 10px), 2px 10px, 30px 0, calc(100% - 10px) 0px, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) calc(100% - 0px), 10px calc(100% - 0px), 0px calc(100% - 10px), 2px 10px)",
          backdropFilter: "blur(80px)",
          background: "radial-gradient(29.14% 1335.35% at 22.82% 743.23%, #FEAB4C 0%, rgba(255, 255, 255, 0) 100%) radial-gradient(38.92% 1755.47% at 41.09% 1062.41%, #BC33FF 0%, rgba(135, 38, 183, 0) 100%)",
          boxShadow: "0px 12px 23.5px 0px #0000008A",
          ...style
        }}
      />

      <div
        className={"absolute inset-0 -z-20"}
        style={{
          background: "linear-gradient(90.12deg, rgba(255, 196, 165, 0.2) 14.87%, rgba(255, 50, 50, 0) 81.52%)",
          clipPath: "polygon(0% 10px, 0px calc(100% - 10px), 10px 100%, 12px calc(100% - 2px), 2px calc(100% - 12px), 2px 12px, 12px 2px, calc(100% - 12px) 2px, calc(100% - 2px) 12px, calc(100% - 2px) calc(100% - 12px), calc(100% - 12px) calc(100% - 2px), 12px calc(100% - 2px), 12px 100%, calc(100% - 10px) 100%, 100% calc(100% - 10px), 100% 10px, calc(100% - 10px) 0px, 10px 0px)",
          ...style
        }}
      >
      </div>
    </>
  );
};

export default BlurredBox2;