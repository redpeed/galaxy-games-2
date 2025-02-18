import {RefObject, useEffect, useState} from "react";

const useAnchorInView = (
  ref: RefObject<HTMLElement|null>,
  callback?:(val:boolean)=>void,
  treshold?: number
) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
        callback && callback(entry.isIntersecting);
      },
      {threshold: treshold || 1}

    );

    if (section) {
      observer.observe(section);
    }
    return () => {
      observer.disconnect();
    };
  }, [isInView])

  return isInView;

}

export default useAnchorInView;