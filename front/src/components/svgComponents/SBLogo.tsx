import { useEffect, useRef, FC } from "react";
import { AnimatedLogoProps } from "../../types";
import { sbLogoAnimation } from "../animation/animation";


const SBLogo: FC<AnimatedLogoProps> = ({ position, isAnimate, height = 70, width = 85 }) => {
  if(!isAnimate) return ;
  const pathRefs = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    sbLogoAnimation(pathRefs, isAnimate)
  }, [isAnimate]);

  const svgStyle: React.CSSProperties = {
    ...position
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 85 70"
      style={svgStyle}
    >
      <path
        ref={el => {
          if (el) pathRefs.current[0] = el;
        }}
        d="M36.6378 0.245726L30.7757 7.88672C-0.295275 4.2957 4.79383 39.7526 25.6905 40.905C26.4857 40.9488 26.9916 41.8518 26.5551 42.5239L13.1896 63.0983H39.5687L54.0891 43.9855C55.3847 42.2802 55.089 39.842 53.424 38.5025L38.7394 26.6874C38.5246 26.5147 38.4933 26.1971 38.6699 25.9848L43.1638 20.586C43.3368 20.3782 43.6438 20.3507 43.8507 20.5245L63.9763 37.4491C65.6134 38.8258 65.8556 41.2721 64.5211 42.9486L42.9883 69.9997H0L15.8764 46.3381C-12.4568 29.8229 6.35054 -0.494358 21.2499 0.245726H36.6378Z"
        fill="white"
      />
      <path
         ref={el => {
          if (el) pathRefs.current[1] = el;
        }}
        d="M48.3622 69.754L54.2243 62.1131C85.2953 65.7041 80.2063 30.2471 59.3095 29.0948C58.5144 29.051 58.0084 28.1479 58.445 27.4759L71.8105 6.90154H45.4313L30.911 26.0143C29.6153 27.7195 29.911 30.1577 31.576 31.4973L46.2607 43.3123C46.4754 43.4851 46.5068 43.8027 46.3301 44.0149L41.8362 49.4136C41.6632 49.6216 41.3562 49.6491 41.1494 49.4753L21.0237 32.5507C19.3867 31.174 19.1444 28.7277 20.4789 27.0512L42.0117 0H85L69.1237 23.6617C97.4569 40.1769 78.6495 70.494 63.7501 69.754H48.3622Z"
        fill="white"
      />
    </svg>
  );
}

export default SBLogo