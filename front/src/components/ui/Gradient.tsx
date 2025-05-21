import { FC } from 'react';
import { GradientProps } from '../../types';

const Gradient: FC<GradientProps> = ({ 
    width = 600, 
    size = 50, 
    position = { left: '0', top: '0' } 
}) => {
    const gradientStyle: React.CSSProperties = {
        borderRadius: '700px',
        width: `${width}px`,
        aspectRatio: 1,
        flexShrink: 0,
        background: `radial-gradient(${size}% ${size}% at ${size}% ${size}%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)`,
        zIndex: -1,
        position: 'absolute',
        ...position
    };

    return <div style={gradientStyle} />;
};

export default Gradient;