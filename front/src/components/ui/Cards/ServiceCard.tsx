import React, { useEffect, useRef } from 'react';
import CustomImage from '../CustomImage';
import { motion, useMotionValue } from 'framer-motion';
import { FooterFadeInAnimation, startCardAnimation } from '../../animation/animation';
import useHover from '../../../hooks/useHover';
import { getColor } from '../../../constants/colors';
import VStack from '../../layout/VStack';
import Typography from '../../typography/Typography';
import Verified from '../../icons/Verified';
import RightArrow from '../../icons/RightArrow';
import { useNavigate } from 'react-router-dom';
import { ContentInfo } from '../../../types';

type ServiceCardProps = ContentInfo & { index?: number };

const ServiceCard: React.FC<ServiceCardProps> = ({ title, content, icon, points = [], index = 0, id, url }) => {
    const cardRef = useRef(null);
    const navigate = useNavigate();
    const sectionRef = useRef(null)
    const { isHovered, bindHoverEvents } = useHover({ id: index });

    // Degree motion
    const degree = useMotionValue(180);
    // const animatedDegree = useSpring(degree, { stiffness: 80, damping: 18 });
    // const backgroundGradient = useTransform(animatedDegree, (deg) =>
    //     `linear-gradient(${deg}deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%)`
    // );

    useEffect(() => {
        if (cardRef.current) {
            startCardAnimation(cardRef.current, index);
        }
    }, [index]);

    useEffect(() => {
        FooterFadeInAnimation(sectionRef)
    }, [])

    // Animate gradient degree on hover
    useEffect(() => {
        degree.set(isHovered ? 220 : 180);
    }, [isHovered]);

    return (
        <motion.div
            ref={cardRef}
            {...bindHoverEvents}
            style={{
                // background: backgroundGradient as any,
                background: getColor('purple', 600, isHovered ? 0.9 : 0.6),
                borderTop: `2px solid ${getColor('purple', 300, 0.6)}`,
                borderRight: isHovered ? `1px solid ${getColor('purple', 300, 0.6)}` : 'none',
                borderBottom: isHovered ? `1px solid ${getColor('purple', 300, 0.6)}` : 'none',
                borderLeft: isHovered ? `1px solid ${getColor('purple', 300, 0.6)}` : 'none',
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="whatwedo-card"
        >
            <VStack onClick={() => navigate(`/service/${id}/${url}`)} ref={sectionRef} align="start" justify="center" gap={24}>
                <CustomImage style={{ height: '76px', width: '76px' }} imgStyle={{ objectFit: 'contain' }} src={icon} borderRadius={0} />

                <Typography variant="b1" family="jk" color={getColor('light')}>
                    {title}
                </Typography>

                <Typography variant="b3" family="jk" color={getColor('purple', 100)}>
                    {content}
                </Typography>

                <VStack align="start" justify="center" gap={8}>
                    {points.map((point, idx) => (
                        <Typography key={idx} variant="b4" family="jk" color={getColor('light')}>
                            <Verified color={getColor('purple', 200)} size={24} /> {point}
                        </Typography>
                    ))}
                </VStack>

                <Typography variant="b4" family="jk" color={getColor('purple', 100)}>
                    Learn More &nbsp; <RightArrow size={18} color={getColor('purple', 100)} />
                </Typography>
            </VStack>
        </motion.div>
    );
};

export default ServiceCard;
