"use client"
import React, {Dispatch, ReactNode, SetStateAction, useEffect} from 'react'
import {EmblaCarouselType, EmblaOptionsType} from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselButtons'
import useEmblaCarousel from 'embla-carousel-react'
import {cn} from "@/lib/utils";

type PropType = {
  slides: ReactNode[]
  options?: EmblaOptionsType
  className?: string;
  setEmblaApi?: Dispatch<SetStateAction<EmblaCarouselType>>
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, className, setEmblaApi } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  useEffect(() => {
    if (!emblaApi || !setEmblaApi) return;
    setEmblaApi(emblaApi)
  }, [emblaApi, setEmblaApi])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className={cn("embla relative max-w-full", className||"")}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-0 flex items-center">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="absolute top-0 bottom-0 right-0 flex items-center">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  )
}

export default EmblaCarousel
