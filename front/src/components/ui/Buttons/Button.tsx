import React, { useEffect, useState } from 'react';
import { getColor } from "../../../constants/colors";
import Typography from '../../typography/Typography';
import { ButtonProps } from '../../../types';

const Button: React.FC<ButtonProps> = ({
    children,
    height = 12, 
    width = 24,  
    radius = 16,
    bg = getColor("purple", 600),
    border = `1px solid ${getColor("purple", 400)}`,
    onClick,
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

    const containerStyle: React.CSSProperties = {
        borderRadius: radius,
        padding: `${height}px ${width}px`, // Adjusted padding calculation
        backgroundColor: bg,
        border,
        cursor: 'pointer', // Indicate that the element is clickable
    };

  return (
    <button style={containerStyle} onClick={onClick}>
        <Typography variant={isMobile ? 'caption' : 'b5'} color={getColor('light')} family='jk'>{children}</Typography>
    </button>
  );
}

export default Button;