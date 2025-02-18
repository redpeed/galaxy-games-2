"use client"
import Script from 'next/script';

const VantaAnimation = () =>{
  return (
    <div
      className={"absolute inset-0 pointer-events-none"}
      style={{
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
      }}
    >
      <div id="hero-background"></div>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"
        strategy="beforeInteractive"
      />
      <Script id="script">
        {`VANTA.FOG({
  el: "#hero-background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 940.00,
  minWidth: 200.00,
  highlightColor: 0x1e2961,
  midtoneColor: 0x2921dc,
  lowlightColor: 0x413093,
  baseColor: 0x373dd7,
  blurFactor: 0.61,
  speed: 1.90,
  zoom: 0.90
});`}
      </Script>
    </div>
  )
}

export default VantaAnimation;