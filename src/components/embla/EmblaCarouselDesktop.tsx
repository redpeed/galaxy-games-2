'use client';
import { EmblaOptionsType } from 'embla-carousel';
import React, {useState, useEffect} from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import RoadmapCard from './RoadmapCard';
import { roadmapData } from './RoadmapData';
import Image from "next/image";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarouselDesktop: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop: false,      // Ensures no infinite scrolling
    align: 'start',   // Ensures the slide aligns to the start
    skipSnaps: false, // Ensures full snap to each slide
  });

  // State to track current index for progress bar
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

    // Update currentIndex whenever slide changes
    useEffect(() => {
      if (!emblaApi) return;
  
      const onSelect = () => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      };
  
      emblaApi.on('select', onSelect); // Listen to 'select' event
  
      // Cleanup event listener when component unmounts or emblaApi changes
      return () => {
        emblaApi.off('select', onSelect);
      };
    }, [emblaApi]);

      // Total number of slides (roadmapData length)

  // Calculate width percentage for progress bar based on currentIndex and intervals
  // const getProgressWidth = () => {
  //   const percentage = ((currentIndex + 2) / totalSlides) * 100;
  //   console.log("percentage", percentage)
  //   return percentage;
  // };

  const getProgressWidth = () => {
    let percentage = 0;
  
    // Define the mapping between index and percentage
    if (currentIndex === 0) {
      percentage = 10;
    } else if (currentIndex === 4) {
      percentage = 48;
    } else if (currentIndex === 8) {
      percentage = 83.3;
    } else {
      // Calculate for other indices
      const minIndex = 0;
      const maxIndex = 8;
      const minPercentage = 17;
      const maxPercentage = 83.3;
  
      // Linear interpolation formula
      percentage = ((currentIndex - minIndex) / (maxIndex - minIndex)) * (maxPercentage - minPercentage) + minPercentage;
    }
  
    return percentage;
  };

  return (
    <section className="embla_desktop relative md:block hidden">
      <div className="embla__controls pb-2 max-w-24 ml-auto">
        <div className="embla__buttons space-x-1">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {roadmapData.map((val, ind: number) => (
            <div className="embla__slide" key={ind}>
              <div className="embla__slide__number">
                <RoadmapCard
                  heading={val.heading}
                  span={val.span}
                  paragraph={val.paragraph}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-auto w-3/4 mt-6">
      {/* Outer container of the progress bar */}
      <div className="w-[120%] h-[1.5px] bg-gray-300 bg-opacity-50 relative rounded-full overflow-visible">
        {/* Inner progress bar that fills up */}
        <div
          className="h-full bg-white transition-all duration-500 ease-in-out"
          style={{
            width: `${getProgressWidth()}%`,
          }}
        ></div>

        {/* Custom image placed at the end of the progress */}
        <div
          className="absolute top-[7px] left-0 transform -translate-y-1/2"
          style={{
            left: `${getProgressWidth()}%`,
          }}
        >
          {/* Image instead of diamond shape */}
          <Image
            src="/desktop/diamond.png"
            alt="Progress Indicator"
            width={32}
            height={12}
            className="w-8 h-3 -mt-3"
          />
        </div>
        {/* Middle dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gray-300 rounded-full" />

        {/* End dot */}
        <div className="absolute top-1/2 right-[120px] transform translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gray-300 rounded-full" />
      </div>

      {/* Labels for past, present, future below the progress bar */}
      <div className="flex justify-between w-full text-sm mt-4">
        <span className="ml-4">Our Past</span>
        <span className="text-center ml-5">Our Present</span>
        <span className="mr-4">Our Future</span>
      </div>
    </div>






      {/* <div className="flex justify-center items-center mx-auto w-3/4 mt-6">
        <div className="w-full h-2 bg-gray-300 relative rounded-full overflow-hidden">
          <div
            className={`h-full bg-cyan-400 transition-width duration-500`}
            style={{
              width: `${
                currentIndex >= 0 && currentIndex <= 4
                  ? '33%' // Fill up to the first 4 items
                  : currentIndex >= 5 && currentIndex <= 8
                  ? '66%' // Fill up to the middle
                  : currentIndex >= 9 && currentIndex <= 12
                  ? '100%' // Fill to the end
                  : '0%' // Default to 0 if something goes wrong
              }`,
            }}
          ></div>
        </div>
      </div> */}







{/* <div className="flex justify-center items-center mx-auto w-3/4">
  <div className="w-full h-0.5 bg-gray-300 relative">
    <div className="absolute left-1/4 top-0 -translate-x-1/2 text-center">
      <img
        className="w-32 h-8 relative top-[0.5px] -translate-y-1/2"
        src="/desktop/Lens_Flare_purple_PNG.png"
        alt="Our past dot"
      />
      <p className="text-xs mt-[-6px]">Our past</p>
    </div>
    <div className="absolute left-1/2 top-[-6px] -translate-x-1/2 text-center">
      <span className="h-2 w-2 bg-cyan-400 rounded-full inline-block relative  -translate-y-1/2"></span>
      <p className="text-xs mt-2">Our future</p>
    </div>
    <div className="absolute left-3/4 top-[-6px] -translate-x-1/2 text-center">
      <span className="h-2 w-2 bg-cyan-400 rounded-full inline-block relative  -translate-y-1/2"></span>
      <p className="text-xs mt-2">Our future</p>
    </div>
  </div>
</div> */}
    </section>
  );
};

export default EmblaCarouselDesktop;
