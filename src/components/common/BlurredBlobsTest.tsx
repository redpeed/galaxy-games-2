"use client"
import React, {useRef} from 'react';
import BlurredBlobs from "@/components/common/BlurredBlobs";

const BlurredBlobsTest = () => {
  // @ts-ignore
  const containerRef = useRef<HTMLDivElement>();

  const blobColors = { primary: '#5121BC', secondary: '#35186A' };
  return (
    <div ref={containerRef} className={"w-full h-[500px] z-50 relative"}>
      <BlurredBlobs
        primaryColor={blobColors?.primary}
        secondaryColor={blobColors?.secondary}
        container={containerRef}
      />
    </div>
  );
};

export default BlurredBlobsTest;