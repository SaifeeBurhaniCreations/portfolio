import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Accordion.css';
import DownAngle from '../../icons/DownAngle';
import Cross from '../../icons/Cross';

interface AccordionItem {
  id: string;
  number: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  title?: string;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, title, className = '' }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [offsets, setOffsets] = useState<number[]>([]);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const animationRefs = useRef<Record<string, Animation[]>>({});

  useEffect(() => {
    const newOffsets = items.map((_, i) => i * 12);
    setOffsets(newOffsets);
  }, [items]);

  useEffect(() => {
    return () => {
      Object.values(animationRefs.current).forEach(animations => animations.forEach(animation => animation.cancel()));
    };
  }, []);

  const animateTextLines = useCallback((element: HTMLElement, isOpening: boolean) => {
    const text = element.textContent || '';
    element.textContent = '';

    if (animationRefs.current[element.id]) {
      animationRefs.current[element.id].forEach(anim => anim.cancel());
      delete animationRefs.current[element.id];
    }

    const sentences = text.split('. ').filter(Boolean);
    const animations: Animation[] = [];

    sentences.forEach((sentence, index) => {
      const lineDiv = document.createElement('div');
      lineDiv.style.overflow = 'hidden';
      lineDiv.style.marginBottom = index < sentences.length - 1 ? '0.5rem' : '0';

      const lineSpan = document.createElement('span');
      lineSpan.textContent = sentence + (index < sentences.length - 1 ? '.' : '');
      lineSpan.style.display = 'inline-block';
      lineSpan.style.transform = isOpening ? 'translateY(100%)' : 'translateY(0)';
      lineSpan.style.opacity = isOpening ? '0' : '1';
      lineSpan.style.willChange = 'transform, opacity';

      lineDiv.appendChild(lineSpan);
      element.appendChild(lineDiv);

      const anim = lineSpan.animate(
        isOpening
          ? [
              { transform: 'translateY(100%)', opacity: 0 },
              { transform: 'translateY(-15%)', opacity: 0.8, offset: 0.7 },
              { transform: 'translateY(0)', opacity: 1 },
            ]
          : [
              { transform: 'translateY(0)', opacity: 1 },
              { transform: 'translateY(100%)', opacity: 0 },
            ],
        {
          duration: isOpening ? 500 : 300,
          delay: isOpening ? index * 150 : index * 75,
          easing: isOpening ? 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' : 'ease-in',
          fill: 'forwards',
        }
      );

      animations.push(anim);
    });

    animationRefs.current[element.id] = animations;
  }, []);

  const animateContentHeight = useCallback((content: HTMLDivElement, isOpening: boolean) => {
    const existingAnim = content.getAnimations().find(a => a.id === 'height-anim');
    if (existingAnim) existingAnim.cancel();

    if (isOpening) {
      content.style.display = 'block';
      const endHeight = content.scrollHeight;

      content.animate(
        [
          { height: '0px' },
          { height: `${endHeight}px` },
        ],
        {
          id: 'height-anim',
          duration: 400,
          easing: 'ease-out',
          fill: 'forwards',
        }
      );
    } else {
      const startHeight = content.scrollHeight;

      const anim = content.animate(
        [
          { height: `${startHeight}px` },
          { height: '0px' },
        ],
        {
          id: 'height-anim',
          duration: 300,
          easing: 'ease-in',
          fill: 'forwards',
        }
      );

      anim.onfinish = () => {
        content.style.display = 'none';
      };
    }
  }, []);

  const toggleAccordion = (id: string) => {
    const isSameItem = activeId === id;
    const prevId = activeId;
    const newActiveId = isSameItem ? null : id;
  
    // Close previously active item if it exists
    if (prevId && contentRefs.current[prevId]) {
      const prevContent = contentRefs.current[prevId];
      animateContentHeight(prevContent, false);
  
      const prevText = prevContent.querySelector('p');
      if (prevText) {
        prevText.id = `text-${prevId}`;
        animateTextLines(prevText, false);
      }
    }
  
    // Open new item if it's different
    if (!isSameItem && contentRefs.current[id]) {
      const newContent = contentRefs.current[id];
      animateContentHeight(newContent, true);
  
      const newText = newContent.querySelector('p');
      if (newText) {
        newText.id = `text-${id}`;
        animateTextLines(newText, true);
      }
    }
  
    setActiveId(newActiveId);
  };

  // const toggleAccordion = (id: string) => {
  //   setActiveId(prevId => {
  //     const newActiveId = prevId === id ? null : id;
  //     const content = contentRefs.current[id];
      
  //     if (content) {
  //       animateContentHeight(content, newActiveId === id);
        
  //       const textElement = content.querySelector('p');
  //       if (textElement) {
  //         textElement.id = `text-${id}`;
  //         animateTextLines(textElement, newActiveId === id);
  //       }
  //     }
      
  //     return newActiveId;
  //   });
  // };

  return (
    <div className={`wrapper w-100 ${className}`}>
      {title && <h1 className="title">{title}</h1>}
      <ul className="accordion" style={{ visibility: offsets.length > 0 ? 'visible' : 'hidden' }}>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`accordion__item ${activeId === item.id ? 'active' : ''}`}
            style={{
              top: `-${offsets[index]}px`,
              backgroundColor: activeId === item.id ? 'var(--light-color)' : 'var(--primary-color)',
              transition: 'background-color 0.3s ease',
            }}
          >
            <div
              className="label"
              onClick={() => toggleAccordion(item.id)}
              style={{
                color: activeId === item.id ? 'var(--secondary-color)' : 'var(--light-color)',
                transition: 'color 0.3s ease',
              }}
            >
              <span className="number">{item.number}</span>
              <p className="title">{item.title}</p>
              <span className="action__buttons">
                <button
                  className={`open__accordion ${activeId === item.id ? 'hidden' : ''}`}
                  onClick={() => toggleAccordion(item.id)}
                  aria-label={`Open ${item.title} section`}
                  aria-expanded={activeId === item.id}
                >
                  <DownAngle />
                </button>
                <button
                  className={`close__accordion ${activeId !== item.id ? 'hidden' : ''}`}
                  onClick={() => toggleAccordion(item.id)}
                  aria-label={`Close ${item.title} section`}
                  style={{ backgroundColor: 'var(--secondary-color)', color: 'var(--light-color)' }}
                >
                  <Cross size={16} />
                </button>
              </span>
            </div>
            <div
              className="content"
              ref={el => (contentRefs.current[item.id] = el)}
              style={{ display: 'none', overflow: 'hidden', padding: '0px 40px' }}
            >
              <p className="paragraph" style={{ color: 'var(--secondary-color)' }}>
                {item.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;