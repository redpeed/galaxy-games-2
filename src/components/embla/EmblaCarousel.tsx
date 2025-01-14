'use client';
import { EmblaOptionsType } from 'embla-carousel';
import React, {useEffect, useState} from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselMobileButtons';
import RoadmapCard from './RoadmapCard';
import { roadmapData } from './RoadmapData';
import Image from "next/image";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
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
const totalSlides = roadmapData.length;

// Calculate width percentage for progress bar based on currentIndex and intervals
const getProgressWidth = () => {
  // Calculate width percentage based on currentIndex
  const percentage = ((currentIndex + 0.7) / totalSlides) * 100;
  
  return percentage;
};

  return (
    <section className="embla flex flex-col items-center justify-center  md:hidden relative ">
       <div className="embla__controls pb-2">
        {/* <div className="embla__buttons space-x-1"> */} 
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      {/* </div>
      </div> */}
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
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto w-3/4 mt-6">
      {/* Outer container of the progress bar */}
      <div className="w-[80vw] h-[1.5px] bg-gray-300 bg-opacity-50 relative rounded-full overflow-visible">
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
        <div className="absolute top-1/2 right-5 transform translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gray-300 rounded-full" />
      </div>

      {/* Labels for past, present, future below the progress bar */}
      <div className="flex justify-between w-[80vw] text-sm mt-4">
        <span className="ml-4">Our Past</span>
        <span className="text-center">Our Present</span>
        <span className="mr-4">Our Future</span>
      </div>
    </div>
    </section>
  );
};

export default EmblaCarousel;
