import { FC, useEffect, useState } from 'react';
import { GradientProps } from '../../types';

const Gradient: FC<GradientProps> = ({
  width = 600,
  size = 50,
  coordinates = { left: '0', top: '0' }  
}) => {

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        checkMobile(); // Initial check
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

  const gradientStyle: React.CSSProperties = {
    borderRadius: '700px',
    width: `${width}px`,
    aspectRatio: 1,
    flexShrink: 0,
    background: `radial-gradient(${size}% ${size}% at ${size}% ${size}%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)`,
    zIndex: -1,
    position: 'absolute',
    ...coordinates, 
  };

  if(isMobile) return null

  return <div style={gradientStyle} />;
};

export default Gradient;
