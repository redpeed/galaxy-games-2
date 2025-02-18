"use client"

import {checkPoints, IPoint} from "@/lib/const";
import Image from "next/image";
import {parsePoints} from "@/lib/path";
import {useEffect, useState} from "react";

const BlurredSide = () => {
  const [clipPath, setClipPath] = useState("");
  const [parsedCheckpoints, setParsedCheckpoints] = useState<IPoint[]>([]);

  useEffect(() => {
    const points = parsePoints(checkPoints);
    setParsedCheckpoints(points);
    const path = "polygon(0 0, "
      + points.map(p => `${p.x as string} ${p.y as string}`)
      + ",0 100%, 0 0)"
    setClipPath(path)
  },[])


  if (!clipPath) {  return null}

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
    <div className={"absolute top-0 bottom-0 w-full pointer-events-none z-20"}>
      {/*<div*/}
      {/*  className={"absolute top-0 bottom-0 w-full bg-amber-100/10 pointer-events-none"}*/}
      {/*  style={{*/}
      {/*    clipPath,*/}
      {/*    backdropFilter: "blur(5px)",*/}
      {/*    boxShadow: "0px 12px 23.5px 0px #0000008A"*/}
      {/*  }}*/}
      {/*/>*/}

      {parsedCheckpoints.map((point, i, arr) => {
        const nextPoint = arr[i + 1]
        if (!nextPoint) return null;
        const isVertical = point.x === nextPoint.x

        return <div
          key={i}
          className={"absolute z-10 overflow-hidden-"}
          style={{
            left: isVertical ? point.x as string : `min(${point.x}, ${nextPoint.x})`,
            top: isVertical ? point.y as string : `min(${point.y}, ${nextPoint.y})`,
            height: isVertical ? `calc(max(${point.y},${nextPoint.y}) - min(${point.y},${nextPoint.y}))` : "1px",
            width: isVertical ? "1px" : `calc(max(${point.x},${nextPoint.x}) - min(${point.x},${nextPoint.x}))`,
            background: "radial-gradient(166.99% 90.38% at 56.4% 3.3%, rgba(255, 79, 79, 0.5) 0%, rgba(255, 149, 0, 0.5) 100%),linear-gradient(0deg, rgba(255, 234, 177, 0) 6.33%, rgba(153, 0, 255, 0.5) 96.7%)",
            boxShadow: "5px 6px 10px 2px #0000008A"
          }}
        >
          {renderExtensions(point)}
        </div>
      })}
    </div>

  );
};

export default BlurredSide;