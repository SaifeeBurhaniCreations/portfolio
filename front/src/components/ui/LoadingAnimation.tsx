import VStack from "../layout/VStack"
import loaderAnimation from '../../assets/videos/sbc_intro.mp4'
import { useEffect, useState } from "react"
import { getColor } from "../../constants/colors";

const LoadingAnimation = () => {
    const [opacity, setOpacity] = useState(1);
    const [display, setDisplay] = useState('flex');

    // Prevent background scrolling while loader is visible and handle fade-out
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        // Start fade out after 3300ms (3.3 seconds)
        const fadeTimeout = setTimeout(() => {
            setOpacity(0);
        }, 3100);

        // Hide component completely after fade-out transition (assuming 500ms transition)
        const displayTimeout = setTimeout(() => {
            setDisplay('none');
        }, 3300 + 500); // 3.3 seconds + transition duration

        return () => {
            document.body.style.overflow = originalOverflow;
            clearTimeout(fadeTimeout); // Clean up timeouts
            clearTimeout(displayTimeout);
        };
    }, []);

    return (
        <VStack
            align='center'
            justify='center'
            style={{
                width: '100vw',
                height: '100vh',
                zIndex: 9999,
                backgroundColor: getColor('purple', 900),
                opacity: opacity,
                transition: 'opacity 500ms ease-in-out',
                display: display,
                pointerEvents: opacity === 0 ? 'none' : 'auto'
            }}
        >
            <video
                src={loaderAnimation}
                width="100%"
                height="100%"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                autoPlay
                loop
                muted
                playsInline
            />
        </VStack>
    )
}

export default LoadingAnimation