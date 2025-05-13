import React from 'react';
import { getColor } from "../../../constants/colors";
import Typography from '../../typography/Typography';

interface ButtonProps {
    children: React.ReactNode;
    height?: number;
    width?: number;
    radius?: number;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    height = 10, // Default height
    width = 24,  // Default width
    radius = 14,
    onClick,
}) => {
    const containerStyle: React.CSSProperties = {
        borderRadius: radius,
        padding: `${height}px ${width}px`, // Adjusted padding calculation
        backgroundColor: getColor("purple", 600),
        border: `1px solid ${getColor("purple", 400)}`,
        cursor: 'pointer', // Indicate that the element is clickable
    };

  return (
    <button style={containerStyle} onClick={onClick}>
        <Typography variant='b5' color={getColor('light')} family='jk'>{children}</Typography>
    </button>
  );
}

export default Button;