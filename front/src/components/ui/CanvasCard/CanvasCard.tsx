import React, { useState, useEffect, useRef } from 'react';
import './CanvasCard.css'; // We'll extract the CSS separately
import Typography from '../../typography/Typography';
import { getColor } from '../../../constants/colors';
import { HStack } from '../../layout/HStack';
import CustomImage from '../CustomImage';

interface CanvasCardProps {
    imageUrl: string;
    icon: string;
    titleLines: string[];
    details?: string;
    gradientColors?: {
        start: string;
        end: string;
    };
    position?: 'left' | 'right';
    animationDelay?: number;
    className?: string;
}

const CanvasCard: React.FC<CanvasCardProps> = ({
    imageUrl,
    icon,
    titleLines,
    gradientColors = { start: '#4285F4', end: '#3367D6' },
    position = 'right',
    animationDelay = 0,
    className = '',
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const svgRef = useRef<SVGRectElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    // Animation effect
    useEffect(() => {
        if (!svgRef.current) return;

        const svgElement = svgRef.current;
        const totalLength = 2000; // Approximate path length

        if (isHovered) {
            // Draw animation
            svgElement.style.strokeDashoffset = '0';
            svgElement.style.transition = `stroke-dashoffset 3s cubic-bezier(0.19, 1, 0.22, 1) ${animationDelay}ms`;
        } else {
            // Erase animation
            svgElement.style.strokeDashoffset = totalLength.toString();
            svgElement.style.transition = `stroke-dashoffset 1s ease-in-out ${animationDelay}ms`;
        }
    }, [isHovered, animationDelay]);

    // Intersection Observer for lazy animation
    useEffect(() => {
        if (!cardRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Card is in view, you could trigger animations here if needed
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(cardRef.current);

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <HStack
            ref={cardRef}
            className={`canvas-wrapper ${className}`}
            style={{ animationDelay: `${animationDelay}ms` }}
        >
            <div
                className="canvas"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="canvas_border">
                    <svg>
                        <defs>
                            <linearGradient id={`grad-${gradientColors.start.replace(/#|,/g, '')}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={gradientColors.start} />
                                <stop offset="100%" stopColor={gradientColors.end} />
                            </linearGradient>
                        </defs>
                        <rect
                            ref={svgRef}
                            className="rect-gradient"
                            fill="none"
                            stroke={`url(#grad-${gradientColors.start.replace(/#|,/g, '')})`}
                            strokeLinecap="square"
                            strokeWidth="4"
                            strokeMiterlimit="30"
                            width="100%"
                            height="100%"
                            style={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
                        />
                    </svg>
                </div>
                <HStack align='center' justify='center' className="canvas_img-wrapper" style={{background: getColor('purple', 600), border: `1px solid ${getColor('purple', 400, 0.8)}`}}>
                    <img
                        className="canvas_img"
                        src={imageUrl}
                        alt=""
                        loading="lazy"
                    />
                </HStack>
                <div className={`canvas_copy ${position === 'left' ? 'canvas_copy--left' : ''}`}>
                    {/* <Typography variant='b2' family='jk' color={getColor('purple', 100)} className="canvas_copy_subtitle">{icon}</Typography> */}
                    <CustomImage style={{width: '70px', height: '70px'}} borderRadius={0} imgStyle={{objectFit: 'contain', width: '70px', height: '70px'}} src={icon} className="canvas_copy_subtitle" />
                    {titleLines.map((line, index) => (
                        <Typography
                            variant='h2'
                            family='p'
                            key={index}
                            color={getColor('purple', 300)}
                            className="canvas_copy_title"
                            style={{
                                transitionDelay: `${0.1 + (index * 0.1)}s`,
                                fontSize: '30px',
                                lineHeight: '40px',
                                opacity: isHovered ? 1 : 0,
                                transform: isHovered ? 'translateX(0)' : 'translateX(-80px)'
                            }}
                        >
                            {line}
                        </Typography>
                    ))}
                    {/* <span
                        className="canvas_copy_details"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? 'translateX(0)' : 'translateX(-80px)'
                        }}
                    >
                        {details}
                    </span> */}
                </div>
            </div>
        </HStack>
    );
};

export default CanvasCard;