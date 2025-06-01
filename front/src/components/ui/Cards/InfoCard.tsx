import React, { useEffect, useRef, useCallback } from 'react';
import CustomImage from '../CustomImage';
import { AnimatePresence, motion } from 'framer-motion';
import { FooterFadeInAnimation, startCardAnimation } from '../../animation/animation';
import useHover from '../../../hooks/useHover';
import { getColor } from '../../../constants/colors';
import VStack from '../../layout/VStack';
import Typography from '../../typography/Typography';
import Verified from '../../icons/Verified';
import { mapIcon } from '../../../utils/mapIcon';

interface InfoCardProps {
    title?: string;
    content?: string;
    icon?: keyof typeof mapIcon;
    iconSize?: 'lg' | 'md' | 'sm';
    points?: string[];
    index?: number;
    onClick?: () => void;
    banner?: string;
}


interface IconMapProps {
    lg: { height: string, width: string },
    md: { height: string, width: string },
    sm: { height: string, width: string },
}

const iconSizeMap: IconMapProps = {
    'lg': { height: '76px', width: '76px' },
    'md': { height: '56px', width: '56px' },
    'sm': { height: '36px', width: '36px' },
}

const InfoCard: React.FC<InfoCardProps> = ({
    title = '',
    content = '',
    icon = '',
    points = [],
    index = 0,
    iconSize = 'lg',
    onClick,
    banner,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { isHovered, bindHoverEvents } = useHover({ id: index });
    const extractIcon = icon && icon in mapIcon ? mapIcon[icon] : undefined;

    useEffect(() => {
        if (cardRef.current) {
            startCardAnimation(cardRef.current, index);
        }
    }, [index]);

    useEffect(() => {
        FooterFadeInAnimation(sectionRef);
    }, []);

    const handleClick = useCallback(() => {
        if (onClick) onClick();
    }, [onClick]);

    const flexStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        gap: '24px'
    }

    // Guard against missing icon/banner
    const renderImage = () => {
        if (banner) {
            return (
                <div style={{ width: "100%", position: "relative" }}>
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                                className="project-cards-overlay"
                                style={{
                                    bottom: "0",
                                    right: "0",
                                    zIndex: 2,
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <CustomImage
                        borderRadius={0}
                        imgStyle={{ objectFit: "cover" }}
                        direction="left"
                        style={{ height: "200px", width: "100%" }}
                        src={banner}
                    />
                </div>
            );
        }
        if (icon) {
            return (
                <CustomImage
                    style={iconSizeMap[iconSize]}
                    imgStyle={{ objectFit: 'contain' }}
                    src={extractIcon}
                    borderRadius={0}
                />
            );
        }
        return null;
    };

    return (
        <motion.div
            ref={cardRef}
            {...bindHoverEvents}
            onClick={handleClick}
            tabIndex={0}
            role="button"
            aria-label={title || 'Info Card'}
            style={{
                background: getColor('purple', 600, isHovered ? 0.9 : 0.6),
                borderTop: `2px solid ${getColor('purple', 300, 0.6)}`,
                borderRight: isHovered ? `1px solid ${getColor('purple', 300, 0.6)}` : `1px solid ${getColor('purple', 600, 0.6)}`,
                borderBottom: isHovered ? `1px solid ${getColor('purple', 300, 0.6)}` : `1px solid ${getColor('purple', 600, 0.6)}`,
                borderLeft: isHovered ? `1px solid ${getColor('purple', 300, 0.6)}` : `1px solid ${getColor('purple', 600, 0.6)}`,
                padding: banner ? '0' : '24px',
                cursor: onClick ? 'pointer' : 'default',
                outline: 'none',
                ...flexStyle
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="whatwedo-card"
            onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') handleClick();
            }}
        >
            {renderImage()}
            <VStack
                style={{ padding: banner ? '24px' : '0' }}
                ref={sectionRef}
                align="start"
                justify="center"
                gap={24}
            >
                {title && (
                    <Typography variant="b1" family="jk" color={getColor('light')}>
                        {title}
                    </Typography>
                )}
                {content && (
                    <Typography variant="b3" family="jk" color={getColor('purple', 100)}>
                        {content}
                    </Typography>
                )}
                {/* Render points if available */}
                {Array.isArray(points) && points.length > 0 && (
                    <VStack align="start" justify="center" gap={8}>
                        {points.map((point, idx) => (
                            <Typography key={idx} variant="b4" family="jk" color={getColor('light')}>
                                <Verified color={getColor('purple', 200)} size={24} /> {point}
                            </Typography>
                        ))}
                    </VStack>
                )}
            </VStack>
        </motion.div>
    );
};

export default InfoCard;
