// src/components/animations/SequentialRings.tsx
import { useEffect } from 'react';
import './SequentialRings.css'; // Import the styles

const SequentialRings: React.FC = () => {

  useEffect(() => {
    const c = document.getElementById('anim3');
    if (!c) return;

    c.innerHTML = ''; // Clear previous elements

    const cd = document.createElement('div');
    cd.className = 'dot';
    cd.style.width = cd.style.height = '6px';
    cd.style.left = 'calc(50% - 3px)';
    cd.style.top = 'calc(50% - 3px)';
    c.appendChild(cd);

    for (let i = 0; i < 7; i++) {
      const rad = 15 + i * 15;
      const count = 8 + i * 4;

      for (let j = 0; j < count; j++) {
        const d = document.createElement('div');
        d.className = 'dot sequential-dot';

        const angle = (j / count) * 2 * Math.PI;
        const x = Math.cos(angle) * rad;
        const y = Math.sin(angle) * rad;
        const sz = 3 + i * 0.2;

        d.style.width = d.style.height = `${sz}px`;
        d.style.left = `calc(50% + ${x}px - ${sz / 2}px)`;
        d.style.top = `calc(50% + ${y}px - ${sz / 2}px)`;
        d.style.animation = `expandRing 3s infinite`;
        d.style.animationDelay = `${i * 0.3 + (j / count) * 0.1}s`;
        d.style.background = `rgba(255,255,255,${(90 - i * 15) / 100})`;

        c.appendChild(d);
      }
    }
  }, []);

  return (
    <div className="animation-container">
        <div id="anim3" className="circle-container" />
    </div>
  );
};

export default SequentialRings;
