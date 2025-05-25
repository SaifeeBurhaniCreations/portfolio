import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { StackCardProps } from "../../types";
import CustomCard from "./CustomCard";

interface CustomSliderProps {
    children: React.ReactNode[];
    visibleSlides?: number; // number of slides visible at once
    gap?: number; // px gap between slides
    className?: string;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
    children,
    visibleSlides = 1,
    gap = 16,
    className = "",
}) => {
    const totalSlides = children.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const x = useMotionValue(0);

    const maxIndex = totalSlides - visibleSlides;
    const clampedIndex = Math.max(0, Math.min(currentIndex, maxIndex));
    const slideWidth = 100 / visibleSlides;
    const containerWidthPercent = (100 / visibleSlides) * totalSlides;
    const translateXPercent = -(clampedIndex * slideWidth);

    const goToSlide = (index: number) => {
        const clamped = Math.max(0, Math.min(index, maxIndex));
        setCurrentIndex(clamped);
    };

    const next = () => goToSlide(currentIndex + 1);
    const prev = () => goToSlide(currentIndex - 1);



    return (
        <div className={`relative w-100 overflow-hidden ${className}`}>
            <motion.div
                className="d-flex"
                animate={{ transform: `translateX(${translateXPercent}%)` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                    width: `${containerWidthPercent}%`,
                    gap: `${gap}px`,
                }}
            >
                {children.map((child, index) => (
                    <div
                        key={index}
                        style={{
                            width: `${slideWidth}%`,
                            flexShrink: 0,
                        }}
                    >
                        {child}
                    </div>
                ))}
            </motion.div>

            {/* Nav buttons */}
            <button
                onClick={prev}
                className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-1 rounded"
            >
                ‹
            </button>
            <button
                onClick={next}
                className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-1 rounded"
            >
                ›
            </button>
        </div>
    );
};

const A = () => (
    <h1>Hello</h1>
)
const B = () => (
    <h1>Hello</h1>
)

const Slider: React.FC<StackCardProps> = ({ data }) => {
    return (
        <>
            <CustomSlider visibleSlides={1}>
                {
                    data?.map((item, index) => {
                        return (
                            <CustomCard
                                type={'mob'}
                                key={index}
                                heading={item.projectName}
                                description={item.description}
                                technologies={item.technologies}
                                button={item.href}
                                image={item.banner}
                            />
                        )
                    })
                }
            </CustomSlider>
        </>
    )
}

export default Slider