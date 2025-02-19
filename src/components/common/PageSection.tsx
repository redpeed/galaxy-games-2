import {CSSProperties, FC, ReactNode} from "react";
import {cn} from "@/lib/utils";
import BlurredBox from "@/components/common/BlurredBox";
import FadeInSection from "@/components/common/FadeinSection";
import type {Ref} from 'react'
import _ from 'lodash'

interface IProps {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  titleBorderBg?: string;
  preTitle?: ReactNode;
  pageTitle: string | ReactNode;
  pageSubtitle?: string | ReactNode;
  ref?: Ref<HTMLDivElement>;
  titleId?: string;
  bgElement?: ReactNode;
  style?: CSSProperties;
}

const PageSection: FC<IProps> = (
  {
    children,
    className,
    wrapperClassName,
    titleClassName,
    subtitleClassName,
    preTitle,
    titleBorderBg,
    pageTitle,
    pageSubtitle,
    titleId,
    bgElement,
    ...rest
  }) => {
  return (
    <section className={cn("w-full 2xl:w-[1500px] px-10 2xl:px-0 2xl:mx-auto pb-[180px] relative z-30- overflow-hidden max-w-full", className || '')} {...rest}>
      {bgElement}
      <div
        className={
          cn(`w-full 2xl:w-[1052px]- mx-auto px-10 relative flex flex-col items-center justify-center max-w-full`, wrapperClassName || '')
        }
      >
        {preTitle}
        <h2
          className={cn(`lg:max-w-full w-full lg:w-[1052px] font-bold text-[40px] py-[25px] relative text-center mb-10 uppercase z-40 h-[100px] bg-blur-`, titleClassName || '')}
          id={titleId || _.kebabCase(typeof pageTitle === "string" ? pageTitle : '')}
        >
          <BlurredBox
            bg={"linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(115, 115, 115, 0) 101%)"}
          borderBg={titleBorderBg || "linear-gradient(var(--purple),var(--purple))"}
          />
          <FadeInSection>{pageTitle}</FadeInSection>
        </h2>

        {pageSubtitle && <div
          className={cn("md:w-[75%] lg:w-[600px] max-w-full mx-auto font-light text-20 text-center z-10", subtitleClassName || '')}
        ><FadeInSection>{pageSubtitle}</FadeInSection></div>}

        <>{children}</>
      </div>
    </section>
  );
};

export default PageSection;