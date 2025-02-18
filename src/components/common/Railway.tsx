"use client"

import { IPoint} from "@/lib/const";
import Image from "next/image";
import {parsePoints} from "@/lib/path";
import {useEffect, useState} from "react";

const checkPoints: IPoint[] = [
  {x: '50%', y: '0px'},
  {x: '50%', y: '#chkp1'},
  {x: '#chkp1', y: '#chkp1'},
  {x: '#chkp2', y: '#chkp2'},
  {x: '#chkp3', y: '#chkp3'},
  {x: '#chkp4', y: '#chkp4'},
  {x: '#chkp5', y: '#chkp5'},
  {x: '#chkp5', y: '#chkp6'},
  {x: '#chkp61', y: '#chkp6'},
  {x: '#chkp61', y: '#chkp7'},
  {x: '#chkp5', y: '#chkp7'},
]

const Railway = () => {
  const [parsedCheckpoints, setParsedCheckpoints] = useState<IPoint[]>([]);

  function updateCheckpoints() {
    const points = parsePoints(checkPoints);
    // console.log('parsedCheckpoints11',points);
    setParsedCheckpoints(points);
  }


  useEffect(() => {
    updateCheckpoints()
    window.addEventListener("resize", updateCheckpoints);

    return () => {
      window.removeEventListener("resize", updateCheckpoints);
    };
  },[setParsedCheckpoints])

  function renderExtensions(point:IPoint) {
    if (!point.ext) return null;

    return point.ext.map((ext,i) => {
      return(
        <Image
          key={i}
          src={ext.url}
          alt="line extension"
          width={ext.w}
          height={ext.h}
          style={{
            position:"absolute",
            width: ext.w,
            height: ext.h,
            maxWidth:ext.w,
            ...ext
          }}
        />
      )
    })
  }

  return (
    <div className={"absolute top-0 bottom-0 w-full pointer-events-none z-10"} data-railway>
      <div className="relative">
        {parsedCheckpoints.map((point, i, arr) => {
          const nextPoint = arr[i + 1]
          if (!nextPoint) return null;
          const isVertical = point.y !== nextPoint.y

          return <div
            key={i}
            className={"absolute z-10 bg-[red]"}
            style={{
              left: `min(${point.x}, ${nextPoint.x})`,
              top: `min(${point.y}, ${nextPoint.y})`,
              height: isVertical ? `calc(max(${point.y},${nextPoint.y}) - min(${point.y},${nextPoint.y}))` : "1px",
              width: isVertical ? "1px" : `calc(max(${point.x},${nextPoint.x}) - min(${point.x},${nextPoint.x}))`,
            }}
            data-points={`${point.origin}:${nextPoint.origin}`}
          >
            {renderExtensions(point)}
            <div className="absolute text-sm text-white" style={{left: 0, top: 0}}>{point?.origin}</div>
          </div>
        })}
      </div>


    </div>

  );
};

export default Railway;