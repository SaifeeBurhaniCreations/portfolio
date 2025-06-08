import { useEffect, useRef } from 'react';

const CANVAS_WIDTH = 180;
const CANVAS_HEIGHT = 180;

function MONOCHROME_FILL(opacity: number) {
    return `rgba(255, 255, 255, ${opacity})`;
}

function createCanvasInContainer(container: HTMLDivElement): CanvasRenderingContext2D | null {
    const canvas = document.createElement('canvas');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);
    return canvas.getContext('2d');
}

const BreathingGrid: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const ctx = createCanvasInContainer(container);
        if (!ctx) return;

        const centerX = CANVAS_WIDTH / 2;
        const centerY = CANVAS_HEIGHT / 2;
        const gridSize = 9;
        const spacing = 18;
        const waveSpeed = 60;
        const waveThickness = 40;
        const maxDist = Math.sqrt(centerX ** 2 + centerY ** 2) + waveThickness;

        const dots: Array<{ x: number, y: number }> = [];
        const gridOffsetX = centerX - ((gridSize - 1) * spacing) / 2;
        const gridOffsetY = centerY - ((gridSize - 1) * spacing) / 2;

        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                dots.push({
                    x: gridOffsetX + c * spacing,
                    y: gridOffsetY + r * spacing,
                });
            }
        }

        let time = 0;
        let lastTime = 0;

        const animate = (timestamp: number) => {
            if (!lastTime) lastTime = timestamp;
            const deltaTime = timestamp - lastTime;
            lastTime = timestamp;
            time += deltaTime * 0.001;

            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

            const currentWaveCenterDist = (time * waveSpeed) % maxDist;

            dots.forEach((dot) => {
                const distFromCanvasCenter = Math.hypot(dot.x - centerX, dot.y - centerY);
                const distToWave = Math.abs(distFromCanvasCenter - currentWaveCenterDist);
                let pulseFactor = 0;

                if (distToWave < waveThickness / 2) {
                    pulseFactor = 1 - distToWave / (waveThickness / 2);
                    pulseFactor = Math.sin((pulseFactor * Math.PI) / 2);
                }

                const dotSize = 1.5 + pulseFactor * 2.5;
                const opacity = 0.2 + pulseFactor * 0.8;

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
                ctx.fillStyle = MONOCHROME_FILL(opacity);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, []);

    return (
        <div
            className="breathing-grid-background"
            ref={containerRef}
            style={{
                width: `${CANVAS_WIDTH}px`,
                height: `${CANVAS_HEIGHT}px`,
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};

export default BreathingGrid;
