import React, { useEffect, useRef, useState } from "react";

type CountUpProps = {
    end: number;
    duration?: number; // in ms
    prefix?: string;
    className?: string;
};

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1200, prefix = "", className }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new window.IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    let start = 0;
                    const increment = end / (duration / 16); // 16ms per frame
                    let frame: number;

                    const animate = () => {
                        start += increment;
                        if (start < end) {
                            setCount(Math.floor(start));
                            frame = requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                            setHasAnimated(true);
                        }
                    };

                    frame = requestAnimationFrame(animate);

                    // Clean up animation frame on unmount
                    return () => cancelAnimationFrame(frame);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(node);

        // Clean up observer on unmount
        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return <span ref={ref} className={className}>{count}{prefix}</span>;
};

export default CountUp;
