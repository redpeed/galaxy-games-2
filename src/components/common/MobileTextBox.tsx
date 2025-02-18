import {FC, ReactNode} from "react";
import {cn} from "@/lib/utils";
import FadeInSection from "@/components/common/FadeinSection";

interface IProps {
  children: ReactNode;
  className?: string;
}

const MobileTextBox:FC<IProps> = ({children, className}) => {
  return (
    <div className={cn("font-light text-center text-20 px-2", className||'')}>
      <FadeInSection>
        {children}
      </FadeInSection>
    </div>
  );
};

export default MobileTextBox;