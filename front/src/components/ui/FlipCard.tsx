import { ReactNode } from "react";
import { getColor } from "../../constants/colors";


type FlipCardProps = {
    front: ReactNode;
    back: ReactNode;
    className?: string;
    radius?: string;
    aspectRatio?: string;
    padding?: string;
    frontBg?: string;
    backBg?: string;
};

const FlipCard: React.FC<FlipCardProps> = ({
    front,
    back,
    className = '',
    radius = '50%',
    aspectRatio = '1 / 1',
    padding = '60px',
    frontBg = getColor('overlay', 300),
    backBg = getColor('purple', 600, 0.9), // purple 600 @ 90%
}) => {
    return (
        <>
            <div className="box-item">
                <div className="flip-box">
                    <div
                        className="flip-box-front text-center glow-shadow"
                        style={{ background: frontBg, borderRadius: radius, aspectRatio: aspectRatio }}
                    >
                        <div className={`inner ${className}`} style={{padding: padding}}>
                            {front}
                        </div>
                    </div>
                    <div
                        className="flip-box-back text-center glow-shadow"
                        style={{ background: backBg, borderRadius: radius, aspectRatio: aspectRatio }}
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