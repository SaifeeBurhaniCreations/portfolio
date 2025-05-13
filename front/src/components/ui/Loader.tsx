import { memo, useEffect, useRef } from 'react';
import { useMemoizedStyle } from '../../hooks/useMemoizedStyle';
import { loaderProps } from '../../types';
import { getColor } from '../../constants/colors';

const Loader = ({ size = 50, strokeWidth = 8, color = "purple", style }: loaderProps) => {
  const rotateAnim = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      rotateAnim.current = (rotateAnim.current + 1) % 360;
    }, 16); // Roughly 60fps
    return () => clearInterval(interval);
  }, []);

  const containerStyle = useMemoizedStyle({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }, []);

  const svgStyle = {
    transform: `rotate(${rotateAnim.current}deg)`,
    transition: 'transform 0.016s linear',
  };

  return (
    <div style={{ ...containerStyle, ...style }}>
      <div style={svgStyle}>
        <svg width={size} height={size} viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor={getColor(color, 500)} stopOpacity="1" />
              <stop offset="0%" stopColor={getColor(color, 500)} stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#grad)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray="200"
            strokeDashoffset="100"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default memo(Loader);

