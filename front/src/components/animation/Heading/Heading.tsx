import { memo, CSSProperties, useEffect, useRef, useState } from "react";
import { textBlurAnimation } from "../animation/animation";
import gsap from "gsap";

const typographyStyles: Record<string, CSSProperties> = {
  xl: { fontSize: '70px', fontWeight: "bold", lineHeight: '81px', letterSpacing: '0.4px' },
  h1: { fontSize: '50px', fontWeight: "bold", lineHeight: '61px', letterSpacing: '0.4px' },
  h2: { fontSize: '40px', fontWeight: "700", lineHeight: '50px', letterSpacing: '0.4px' },
  h3: { fontSize: '24px', fontWeight: "600", lineHeight: '32px', letterSpacing: '0.4px' },
  h4: { fontSize: '20px', fontWeight: "600", lineHeight: '26px', letterSpacing: '0.4px' },
  h5: { fontSize: '18px', fontWeight: "600", lineHeight: '24px', letterSpacing: '0.4px' },
  h6: { fontSize: '16px', fontWeight: "500", lineHeight: '22px', letterSpacing: '0.4px' },
  b1: { fontSize: '26px', fontWeight: "600", lineHeight: '32px', letterSpacing: '0.6px' },
  b2: { fontSize: '20px', fontWeight: "600", lineHeight: '30px', letterSpacing: '0.6px' },
  b3: { fontSize: '18px', fontWeight: "400", lineHeight: '26px', letterSpacing: '0.4px' },
  b4: { fontSize: '16px', fontWeight: "500", lineHeight: '22px', letterSpacing: '0.4px' },
  b5: { fontSize: '14px', fontWeight: "400", lineHeight: '20px', letterSpacing: '0.4px' },
  b6: { fontSize: '10px', fontWeight: "400", lineHeight: '14px', letterSpacing: '0.4px' },
  caption: { fontSize: '12px', fontWeight: "400", lineHeight: '16px', color: 'green' },
} as const;

const familyMapping = {
  p: "Preahvihear",
  jk: "Plus Jakarta Sans",
} as const;

type TypographyProps = {
  variant: keyof typeof typographyStyles;
  color?: string;
  align?: "left" | "center" | "right";
  style?: CSSProperties;
  className?: string;
  family?: keyof typeof familyMapping;
  children: React.ReactNode;
  animate3D?: boolean;
  isAnimate?: boolean;
};

const Typography = memo(({
  variant,
  color = 'dark',
  align = 'left',
  style,
  className,
  family = "jk",
  children,
  animate3D = false,
  isAnimate = false,
}: TypographyProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const splitTextIntoLines = () => {

    const el = spanRef.current;
    if (!el || typeof children !== "string") return;

    const headingElement = el;
    if (!headingElement) return;

    const containerWidth = headingElement.offsetWidth;
    const words = children && children?.split(' '); // Split the text into words
    const lines: string[] = [];
    let currentLine = '';
    let currentLineWidth = 0;

    // Create a temporary span to check the width of words
    words?.forEach((word) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.visibility = 'hidden';
      wordSpan.innerText = word;
      headingElement.appendChild(wordSpan);

      const wordWidth = wordSpan.offsetWidth;
      headingElement.removeChild(wordSpan);

      // If adding this word exceeds the container width, push the current line to lines
      if (currentLineWidth + wordWidth > containerWidth) {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
        currentLineWidth = wordWidth;
      } else {
        currentLine += word + ' ';
        currentLineWidth += wordWidth;
      }
    });

    // Add the last line if it has content
    if (currentLine.trim()) {
      lines.push(currentLine.trim());
    }

    setLines(lines); // Update the state with the split lines
  };

  const animateLines = () => {
    const lineElements = spanRef.current?.querySelectorAll('.line');
    if (lineElements) {
      lineElements.forEach((line, index) => {
        gsap.fromTo(
          line,
          {
            opacity: 0,
            transform: 'translate3d(0px, 49.2404px, -41.3176px)',
            rotationX: '-80deg',
            transformOrigin: '50% 0',
            scale: 1,
            y: 0,
          },
          {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
            rotationX: '0deg',
            transformOrigin: '300px 30px',
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'none',
            delay: index * 0.1,
          }
        );
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      splitTextIntoLines(); // Recalculate the lines on window resize
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateLines();
          observer.disconnect();
        }
      });
    });

    splitTextIntoLines(); // Split text initially
    window.addEventListener('resize', handleResize);

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [children]);

  useEffect(() => {
    if (isAnimate && spanRef.current) {
      textBlurAnimation(spanRef)
    }
  }, [isAnimate]);

  const textStyle: CSSProperties = {
    ...typographyStyles[variant],
    transition: '0.3s ease',
    color,
    textAlign: align,
    fontFamily: familyMapping[family],
    width: animate3D ? '100%' : 'max-content'
  };

  return (
    <span ref={spanRef} className={className} style={{ ...textStyle, ...style }}>
      {animate3D ? (
        lines.map((line, index) => (
          <span key={index} className="line" style={{ display: "block" }}>
            {line}
          </span>
        ))
      ) : (
        children
      )}
    </span>
  );
});

export default Typography;
