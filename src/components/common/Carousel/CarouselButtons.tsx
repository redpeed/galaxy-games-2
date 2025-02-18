import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg width="12" height="25"  viewBox="0 0 12 25">
        <path d="M11.5 24L2.12132 14.6213C0.949748 13.4497 0.949747 11.5503 2.12132 10.3787L11.5 1" stroke="currentColor"
              strokeLinecap="round"/>
      </svg>
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const {children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg width="12" height="25"  viewBox="0 0 12 25">
        <path d="M1 24L10.3787 14.6213C11.5503 13.4497 11.5503 11.5503 10.3787 10.3787L1 1" stroke="currentColor"
              strokeLinecap="round"/>

      </svg>
      {children}
    </button>
  )
}
