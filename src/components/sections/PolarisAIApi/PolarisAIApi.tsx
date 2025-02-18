"use client"
import PageSection from "@/components/common/PageSection";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import useSectionScroll from "@/hooks/useSectionScroll";
const PolarisAiApi = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const [faceOpacity, setFaceOpacity] = useState(0);
  useSectionScroll(elRef,
    (percentage) => {
      setFaceOpacity(percentage)
  }, 0)


  return (
    <PageSection
      pageTitle={`POLARIS AI API`}
      className={"2xl:w-full overflow-visible z-unset pb-[150px]"}
      titleClassName={"z-10"}
      ref={elRef}
      pageSubtitle={<p>Coming soon: <br/>
        Polaris AI isn’t just for Haunted Space. Soon, game studios everywhere will be able to <b>use our API</b> to
        <b> integrate the Coaching Assistant</b> and <b>Accessibility modules</b> into <b> their own games</b>, creating
        more inclusive and engaging experiences for all players.
      </p>}
    >


      <div
        className="side-transparency absolute flex justify-between overflow-hidden mix-blend-difference transition-opacity max-w-full w-full flex-shrink-0"
      >
        <Image
          src={"/profile-face-left.png"}
          alt={"Profile face"}
          width={1156}
          height={1156}
          className={"relative -left-[250px]  size-[50%]"}
        />
        <Image
          src={"/profile-face-right.png"}
          alt={"Profile face"}
          width={1156}
          height={1156}
          className={"relative -right-[250px] size-[50%]"}
        />
      </div>
    </PageSection>
  );
};

export default PolarisAiApi;