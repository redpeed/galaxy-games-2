import FadeInSection from "@/components/common/FadeinSection";
import {CSSProperties, FC, ReactNode} from "react";
import {cn} from "@/lib/utils";

interface IProps {
  heading?: string|ReactNode;
  children?: string|ReactNode;
  className?: string;
  style?: CSSProperties;
}
const PurpleBorderBox:FC<IProps> = ({heading, children, className, style}) => {
  return (
    <div className={cn("border border-purple backdrop-blur p-3 overflow-hidden text-20", className||'')} style={style}>
      {heading && <h2 className={"font-bold text-32 leading-none mb-5 text-white"}>
        <FadeInSection>
          {heading}
        </FadeInSection>
      </h2>
      }

      {children && <FadeInSection>
        {children}
      </FadeInSection>
      }
    </div>

  );
};

export default PurpleBorderBox;