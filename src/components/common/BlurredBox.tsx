import {CSSProperties, FC} from "react";

interface IProps {
  bg?: string;
  borderBg?: string;
  style?: CSSProperties;
}
const BlurredBox:FC<IProps> = ({bg, borderBg, style}) => {
  return (
    <>
      <div
        className={"absolute -z-30 inset-0"}
        style={{
          clipPath: "polygon(10px 1px, calc(100% - 10px) 1px, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) calc(100% - 1px), 10px calc(100% - 1px), 1px calc(100% - 10px), 1px 10px, 30px 0, calc(100% - 30px) 0px, 100% 30px, 100% calc(100% - 30px), calc(100% - 30px) calc(100% - 0px), 30px calc(100% - 0px), 0px calc(100% - 30px), 1px 10px)",
          background: bg || "radial-gradient(115.68% 687.6% at -3.62% 20%, rgba(255, 165, 165, 0.25) 0%, rgba(0, 133, 255, 0.125) 100%)",
          backdropFilter: "blur(10px)",
          ...(style || {})
        }}
      >
      </div>

      <div
        className={"absolute inset-0 -z-20"}
        style={{
          clipPath: "polygon(0px 10px, 0px calc(100% - 10px), 10px 100%, 11px calc(100% - 1px), 1px calc(100% - 11px), 1px 11px, 11px 1px, calc(100% - 11px) 1px, calc(100% - 1px) 11px, calc(100% - 1px) calc(100% - 11px), calc(100% - 11px) calc(100% - 1px), 11px calc(100% - 1px), 10px 100%, calc(100% - 10px) 100%, 100% calc(100% - 10px), 100% 10px, calc(100% - 10px) 0px, 10px 0px)",
          background: borderBg || "radial-gradient(7.86% 112.61% at -6.47% 3.09%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%),radial-gradient(7.89% 105.67% at 5.47% 66.33%, #FF4400 0%, rgba(171, 0, 255, 0.5) 100%)",
        }}
      >

      </div>
    </>
  );
};

export default BlurredBox;