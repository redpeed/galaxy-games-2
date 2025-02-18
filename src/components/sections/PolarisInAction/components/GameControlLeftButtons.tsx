import {cn} from "@/lib/utils";

const GameControlLeftButtons = () => {
  return (
    <div className={"relative size-[130px]"}>
      <ControlButton pos={0}/>
      <ControlButton pos={1}/>
      <ControlButton pos={2}/>
      <ControlButton pos={3}/>
    </div>
  );
};

function ControlButton({pos}: { pos: number }) {
  return (
    <div className={cn("absolute",
      {"top-0 left-1/2 -translate-x-1/2 rotate-180": pos === 0},
      {"top-1/2 right-0 -translate-y-1/2 -rotate-90": pos === 1},
      {"left-1/2 bottom-0 -translate-x-1/2 ": pos === 2},
      {"top-1/2 left-0 -translate-y-1/2 rotate-90": pos === 3},
    )}>
      <svg width="30%" height="30%" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={"0 0 40 45"}>

        <g>
          <title>Layer 1</title>
          <g stroke="null" id="svg_1">
            <path stroke="null" id="svg_2" fill="red"
                  d="m9.75,45l10,0l10.5,0c5.5228,0 10,-4.477 10,-10l0,-15.8885c0,-2.9262 -1.2817,-5.7057 -3.5074,-7.6056l-10.4192,-8.8945c-3.775,-3.2225 -9.3424,-3.1885 -13.0777,0.0799l-10.0807,8.8206c-2.1702,1.8989 -3.415,4.6422 -3.415,7.5258l0,15.9623c0,5.523 4.4772,10 10,10z"/>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default GameControlLeftButtons;