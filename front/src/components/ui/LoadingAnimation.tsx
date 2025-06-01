import MainWrapper from "../layout/MainWrapper"
import VStack from "../layout/VStack"
// import loaderAnimation from '../../assets/video/SBC Aimation_1.mp4'
import { useEffect } from "react"

const LoadingAnimation = () => {
    // Prevent background scrolling while loader is visible
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                zIndex: 9999999999,
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(30, 30, 30, 0.6)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'auto', // allow pointer events on loader
            }}
        >
            <MainWrapper>
                <VStack
                    style={{
                            width: 'min(90vw, 400px)',
                            height: 'min(90vw, 400px)',
                        }}
                >
                    <video
                        src={''}
                        width="100%"
                        height="100%"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </VStack>
            </MainWrapper>
        </div>
    )
}

export default LoadingAnimation