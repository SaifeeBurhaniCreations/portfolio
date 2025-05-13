import React from 'react';
import Typography from '../../typography/Typography';
import { getColor } from '../../../constants/colors';

interface ButtonProps {
  children: React.ReactNode;
  height?: number;
  width?: number;
  radius?: number;
  onClick?: () => void;
}

const HoverButton: React.FC<ButtonProps> = ({
  children,
  height = 10,
  width = 24,
  radius = 14,
  onClick,
}) => {
  const buttonStyle: React.CSSProperties = {
    borderRadius: radius,
    padding: `${height}px ${width}px`,
    backgroundColor: getColor("purple", 600),
    border: `1px solid ${getColor("purple", 400)}`,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    minWidth: 150
  };

    const buttonClassName = 'hover-button';

    const buttonStyles = `
    .${buttonClassName}::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${getColor("purple", 400)};
        transform: translateY(100%);
        transition: transform 0.3s ease;
    }

    .${buttonClassName}:hover::before {
        transform: translateY(0);
    }
    `;

  const spanStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    transition: 'color 0.3s ease, transform 0.3s ease',
    zIndex: 2,
  };

  return (
    <>
      <style>{buttonStyles}</style>
      <button 
        className={buttonClassName}
        style={buttonStyle}
        onClick={onClick}
      >
        <span className="animated-btn-text" style={spanStyle}>
          <Typography variant='b5' color={getColor('light')} family='jk'>
            {children}
          </Typography>
        </span>
      </button>
    </>
  );
};

export default HoverButton;
