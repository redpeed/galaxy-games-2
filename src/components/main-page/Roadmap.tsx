import React from 'react';
import EmblaCarouselDesktop from '@/components/embla/EmblaCarouselDesktop';
import EmblaCarousel from '@/components/embla/EmblaCarousel';
import Image from 'next/image';

function Roadmap() {
  return (
    <div
      id="roadmap"
      className="2xl:min-h-[70vh] 2xl:pt-52 relative p-6 bg-cover bg-top bg-no-repeat bg-primary bg-roadmap text-white z-10 flex items-start justify-center pt-7 "
    >
      <div className="absolute top-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-b from-[#01001e] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-t from-[#01001e] to-transparent"></div>
      <div className="absolute inset-0 bg-primary/40 "></div>
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center relative z-10 w-full"
      >
        <Image
          className="w-40 h-16 md:w-48 md:h-20 bg-cover -mt-6 md:mt-0 md:mb-10"
          src="https://cdn.hauntedspace.io/galaxy-games/Lens_Flare_purple_PNG.webp"
          alt=""
          width={160}
          height={64}
        />
        <h1 className="text-4xl uppercase tracking-wide -mt-3 md:-mt-14 mb-3 md:mb-16">
          Roadmap
        </h1>
        <EmblaCarouselDesktop />
        <EmblaCarousel />
      </div>
    </div>
  );
}

export default Roadmap;
