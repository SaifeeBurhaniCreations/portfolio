import { FC, ReactNode, useEffect, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import LoadingAnimation from '../ui/LoadingAnimation';
// import LoadingAnimation from './LoadingAnimation';

// Loader Component
const Loader = () => {
    return <LoadingAnimation />;
};

interface SmoothScrollingProps {
    children: ReactNode;
}

interface LenisOptions {
    lerp: number;
    duration: number;
    smoothTouch: boolean;
    scrollDisabled: boolean;
}

const DEFAULT_LENIS_OPTIONS: LenisOptions = {
    lerp: 0.08,
    duration: 1.5,
    smoothTouch: true,
    scrollDisabled: false
};

const SmoothScrolling: FC<SmoothScrollingProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    // Handle smooth scrolling behavior
    useEffect(() => {
        const html = document.documentElement;
        html.style.scrollBehavior = 'smooth';

        // Simulate loading (e.g., 2 seconds). Replace with your real loading logic if needed.
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => {
            html.style.scrollBehavior = 'auto';
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <ReactLenis root options={DEFAULT_LENIS_OPTIONS}>
                    {children as any}
                </ReactLenis>
            )}
            {/* <ReactLenis
                root
                options={DEFAULT_LENIS_OPTIONS}
            >
                {children as any}
            </ReactLenis> */}
        </>
    );
};

export default SmoothScrolling;
