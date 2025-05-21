import { useEffect, useRef } from 'react';
import * as anime from 'animejs';

interface AnimatedHeadlineProps {
  children: string;
}

export default function AnimatedText({ children }: AnimatedHeadlineProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    el.innerHTML = children
      ?.split('')
      ?.map((char) =>
        char === ' ' ? ' ' : `<span class="letter">${char}</span>`
      )
      .join('');

      (anime as any).timeline({ loop: true })
      ?.add({
        targets: '.letter',
        opacity: [0, 1],
        translateX: [40, 0],
        scaleX: [0.3, 1],
        easing: 'easeOutExpo',
        duration: 800,
        delay: (_el: HTMLElement, i: number) => 150 + 25 * i,
      })
      .add({
        targets: textRef.current,
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }, [children]);

  return (
    <>
      <h1 ref={textRef} className="animated-headline">
        {children}
      </h1>
    </>
  );
}
