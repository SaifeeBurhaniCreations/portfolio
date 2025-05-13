import { FC, ReactNode, useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
// import LoadingAnimation from './LoadingAnimation';

// Loader Component
// const Loader = () => {
//   return <LoadingAnimation />;
// };

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
    // Handle smooth scrolling behavior
    useEffect(() => {
        const html = document.documentElement;
        html.style.scrollBehavior = 'smooth';

        return () => {
            html.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <>
            {/* <Loader />
            {!isLoading && (
                <ReactLenis
                    root
                    options={{
                        lerp: 0.08, // Adjusted smoothness for better Chrome compatibility
                        duration: 1.5, // Adjusted duration for smoother transition
                        smoothTouch: true, // Enables smooth scrolling on touch devices
                        scrollDisabled: false, // Allows scrolling (set to true to disable)
                        // syncTouch: true
                    }}
                >
                    {children}
                </ReactLenis>
            )} */}
            <ReactLenis
                root
                options={DEFAULT_LENIS_OPTIONS}
            >
                {children}
            </ReactLenis>
        </>
    );
};

export default SmoothScrolling;
