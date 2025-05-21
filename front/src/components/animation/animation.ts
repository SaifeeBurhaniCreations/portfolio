import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getColor } from '../../constants/colors';

export const startCardAnimation = (element:  any, index: number) => {
    gsap.registerPlugin(ScrollTrigger);

    // Different y offset based on index
    const yOffset = 100 + (index * 10);
    const yOffsetNormal = -0 + (index * 5);

    gsap.fromTo(element, {
        y: yOffset,
    }, {
        y: yOffsetNormal,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
            toggleActions: "play none none reverse"
        }
    });
};

export const textBlurAnimation = (spanRef:  any) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(spanRef.current,
        { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: spanRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
            }
        }
    );
}

export const FooterFadeInAnimation = (sectionRef:  any) => {
    gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(sectionRef.current,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play none none reverse"
                }
            }
        )
}

export const textSplitAnimation = (spanRef:  any) => {
    gsap.registerPlugin(ScrollTrigger);
    // Split the text into individual letters
    const letters = spanRef.current.textContent?.split("") || [];

    // Clear the existing text
    spanRef.current.textContent = "";

    // Add each letter one by one
    letters.forEach((letter: string, index: number) => {
        const letterSpan = document.createElement("span");
        letterSpan.textContent = letter;
        spanRef.current?.appendChild(letterSpan);

        gsap.fromTo(
            letterSpan,
            { scale: 0.7, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.05, // Delay for each letter
                ease: "back.out(1.7)", // Bounce effect for a unique feel
            }
        );
    });

    // Apply ScrollTrigger to start animation when the element enters the viewport
    gsap.fromTo(spanRef.current,
        { opacity: 0 },
        {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: spanRef.current,
                start: "top 90%", // Trigger animation when the element comes into view
                toggleActions: "play none none none",
            }
        }
    );
}

export const sbLogoAnimation = (pathRefs: React.RefObject<SVGPathElement[]>, isAnimate: boolean) => {
    gsap.registerPlugin(ScrollTrigger);

    if (isAnimate) {
        pathRefs.current.forEach((path) => {
            const length = path.getTotalLength();

            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                stroke: getColor('light'),      // visible stroke
                fill: "transparent", // no fill initially
            });

            gsap.to(path, {
                strokeDashoffset: 0,
                duration: 1.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: path,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                    gsap.to(path, {
                        fill: "#fff", // animate in fill after stroke draws
                        duration: 0.3,
                        delay: 0.1,
                    });
                },
            });
        });
    }
}

export const imageFadeAnimation = (imgRef: any, direction: "left" | "right" | "top" |"bottom") => {
    gsap.registerPlugin(ScrollTrigger);

    let x = 0, y = 0;

    switch (direction) {
        case 'left': x = -50; break;
        case 'right': x = 50; break;
        case 'top': y = -50; break;
        case 'bottom': y = 50; break;
        default: x = -50;
    }

    gsap.fromTo(
        imgRef.current,
        { opacity: 0, x, y },
        {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: imgRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        }
    );
}
