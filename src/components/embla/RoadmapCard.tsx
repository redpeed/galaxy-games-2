import React from 'react';
import Image from 'next/image';

type Props = {
  heading: string;
  span: string;
  paragraph: string;
};

function RoadmapCard({ heading, paragraph, span }: Props) {
  return (
    <div className="rounded-xl bg-[#4e7dd3]/10 backdrop-blur-sm p-6 h-[160px]  w-[250px] text-sm relative">
      <Image
        className="w-40 h-16 bg-cover absolute -top-[21%] left-[15%]"
        src="https://cdn.hauntedspace.io/galaxy-games/Lens_Flare_purple_PNG.webp"
        alt="indicator"
        width={160}
        height={64}
      />
      <div className="space-y-4 w-[170px] 2xl:text-[15px]">
        <div className="tracking-[2.7px]">
          {heading} <span className="text-[#4e7dd3]">{span}</span>
        </div>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default RoadmapCard;
