import React from 'react';
import { getColor } from "../../../constants/colors";
import Typography from '../../typography/Typography';
import { ButtonProps } from '../../../types';

const Button: React.FC<ButtonProps> = ({
    children,
    height = 10, 
    width = 24,  
    radius = 14,
    bg = getColor("purple", 600),
    border = `1px solid ${getColor("purple", 400)}`,
    onClick,
}) => {
    const containerStyle: React.CSSProperties = {
        borderRadius: radius,
        padding: `${height}px ${width}px`, // Adjusted padding calculation
        backgroundColor: bg,
        border,
        cursor: 'pointer', // Indicate that the element is clickable
    };

  return (
    <button style={containerStyle} onClick={onClick}>
        <Typography variant='b5' color={getColor('light')} family='jk'>{children}</Typography>
    </button>
  );
}

export default Button;