import { ReactNode } from "react";
import { getColor } from "../../../constants/colors";


type FlipCardProps = {
    front: ReactNode;
    back: ReactNode;
    className?: string;
    radius?: string;
    aspectRatio?: string;
    padding?: string;
    frontBg?: string;
    style?: React.CSSProperties;
    backBg?: string;
    height?: string | number;
    width?: string | number;
};

const FlipCard: React.FC<FlipCardProps> = ({
    front,
    back,
    className = '',
    radius = '50%',
    aspectRatio = '1 / 1',
    style,
    padding = '60px',
    frontBg = getColor('overlay', 300),
    backBg = getColor('purple', 600, 0.9), // purple 600 @ 90%
    height = '100%',
    width = '400px',
}) => {
    // Combine custom style with height/width
    const cardStyle = { height, width, ...style };

    return (
        <>
            <div className="box-item" style={cardStyle}>
                <div className="flip-box" style={{ height: '100%', width: '100%' }}>
                    <div
                        className="flip-box-front text-center glow-shadow"
                        style={{ background: frontBg, borderRadius: radius, aspectRatio: aspectRatio, height: '100%', width: '100%' }}
                    >
                        <div className={`inner ${className}`} style={{padding: padding}}>
                            {front}
                        </div>
                    </div>
                    <div
                        className="flip-box-back text-center glow-shadow"
                        style={{ background: backBg, borderRadius: radius, aspectRatio: aspectRatio, height: '100%', width: '100%' }}
                    >
                        <div className={`inner ${className}`} style={{padding: padding}}>
                            {back}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlipCard