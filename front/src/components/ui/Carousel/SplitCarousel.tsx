import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carousel.css'; // This will contain your CSS (converted to regular CSS or CSS Modules)
import { getColor } from '../../../constants/colors';
import VStack from '../../layout/VStack';
import Typography from '../../typography/Typography';

interface CarouselItem {
    title: string;
    content: string;
    image: string;
}

interface CarouselProps {
    items: CarouselItem[];
    bg: string;
    spinDuration?: number;
    autoSlide?: boolean;
    autoSlideInterval?: number; // in ms
}

const Carousel: React.FC<CarouselProps> = ({
    items,
    bg = getColor('purple', 600),
    spinDuration = 1000,
    autoSlide = true,
    autoSlideInterval = 5000,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const stageRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [nextIndex, setNextIndex] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const autoSlideTimer = useRef<NodeJS.Timeout | null>(null);
    const [isPaused, setIsPaused] = useState(false);


    const spin = useCallback((targetIndex: number) => {
        if (disabled || !stageRef.current || targetIndex === activeIndex) return;

        setNextIndex(targetIndex);
        setIsAnimating(true);
        setDisabled(true);

        // Animation direction (optional, for class)
        const increment = targetIndex > activeIndex ? 1 : -1;
        if (increment > 0) {
            stageRef.current.classList.add('js-spin-fwd');
        } else {
            stageRef.current.classList.add('js-spin-bwd');
        }

        setTimeout(() => {
            stageRef.current?.classList.add('js-transitions-disabled');
            stageRef.current?.classList.remove('js-spin-fwd', 'js-spin-bwd');

            setActiveIndex(targetIndex);
            setNextIndex(null);
            setTimeout(() => {
                stageRef.current?.classList.remove('js-transitions-disabled');
                setDisabled(false);
                setIsAnimating(false);
            }, 100);
        }, spinDuration);
    }, [activeIndex, disabled, spinDuration]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            if (disabled) return;
            if (e.key === 'ArrowUp') {
                spin((activeIndex - 1 + items.length) % items.length);
            } else if (e.key === 'ArrowDown') {
                spin((activeIndex + 1) % items.length);
            }
        };

        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [spin, activeIndex, items.length, disabled]);

    // Auto-slide logic
    useEffect(() => {
        if (!autoSlide || isPaused) return;
        if (autoSlideTimer.current) clearTimeout(autoSlideTimer.current);

        autoSlideTimer.current = setTimeout(() => {
            spin((activeIndex + 1) % items.length);
        }, autoSlideInterval);

        return () => {
            if (autoSlideTimer.current) clearTimeout(autoSlideTimer.current);
        };
    }, [activeIndex, autoSlide, autoSlideInterval, items.length, spin, isPaused]);

    // Pause on hover/focus
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    const handleFocus = () => setIsPaused(true);
    const handleBlur = () => setIsPaused(false);

    return (
        <div
            className="carousel"
            tabIndex={0}
            aria-roledescription="carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            {/* Controls */}
            <div className="carousel__control" style={{ backgroundColor: getColor('purple', 200) }}>
                <VStack justify='center' align='center' style={{ height: '100%' }}>
                    {items.map((_, index) => (
                        <a
                            key={index}
                            href="#"
                            data-index={index}
                            className={index === activeIndex ? 'active' : ''}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={index === activeIndex}
                            tabIndex={0}
                            onClick={(e) => {
                                e.preventDefault();
                                if (!disabled && index !== activeIndex) {
                                    spin(index);
                                }
                            }}
                            onKeyDown={(e) => {
                                if ((e.key === 'Enter' || e.key === ' ') && !disabled && index !== activeIndex) {
                                    e.preventDefault();
                                    spin(index);
                                }
                            }}
                        ></a>
                    ))}
                </VStack>
            </div>

            {/* Carousel Stage */}
            <div className="carousel__stage" ref={stageRef}>
                {/* Left Spinner */}
                <div className="spinner__left">
                    {items.map((item, index) => {
                        const isActive = index === activeIndex;
                        const isNext = nextIndex === index;
                        return (
                            <>
                                <div
                                    key={`left-${index}`}
                                    className={`spinner__face__left ${isActive ? 'js-active' : ''} ${isNext ? 'js-next' : ''}`}
                                    data-bg={bg}
                                >
                                    <div className="content" data-type={index}>
                                        <div
                                            className={`content__left${isNext && isAnimating ? ' split-anim-left' : ''}`}
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        >
                                            {/* <Typography variant='h2' align='center' color={getColor('light')} className='carousel-title'>
                                                {item.title.toUpperCase()}
                                            </Typography> */}
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="spinner__right">
                    {items.map((item, index) => {
                        const isActive = index === activeIndex;
                        const isNext = nextIndex === index;
                        return (
                            <>
                                <div
                                    key={`left-${index}`}
                                    className={`spinner__face__right ${isActive ? 'js-active' : ''} ${isNext ? 'js-next' : ''}`}
                                    data-bg={bg}
                                >
                                    <div className="content" data-type={index}>
                                        <div
                                            className={`content__right${isNext && isAnimating ? ' split-anim-right' : ''}`}
                                            style={{ backgroundColor: getColor('purple', 600) }}
                                        >
                                            <div className="content__main">
                                                <VStack align='start'>
                                                    <Typography variant='h3' align='left' color={getColor('light')}>
                                                        {item.title.toUpperCase()}
                                                    </Typography>
                                                    <Typography align='left' variant='b3' color={getColor('light')}>{item.content}</Typography>
                                                </VStack>
                                            </div>
                                            <h3 className="content__index">
                                                {String(index + 1).padStart(2, '0')}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Carousel;