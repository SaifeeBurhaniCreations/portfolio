import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SolarBall.css'; // Rename this to OrbitSocialHub.css if possible
import { getColor } from '../../../constants/colors';
import logo from '../../../assets/images/svg/sbc.svg';
import Instagram from '../../icons/Instagram';
import LinkedIn from '../../icons/LinkedIn';
import GitHub from '../../icons/GitHub';
import Facebook from '../../icons/Facebook';
import Twitter from '../../icons/Twitter';
import { inactiveTime, instagramUrl, twitterUrl } from '../../../utils/common';

interface SocialMediaLink {
    icon: JSX.Element;
    link: string;
}

interface OrbitSocialHubProps {
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrbitSocialHub: React.FC<OrbitSocialHubProps> = ({ open = false, setOpen }) => {
    const [highlight, setHighlight] = useState(false);
    const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
    const isHoveringRef = useRef(false);

    const socialMedia: SocialMediaLink[] = useMemo(() => [
        { icon: <Instagram color={getColor('purple', 100)} size={24} />, link: instagramUrl },
        { icon: <LinkedIn color={getColor('purple', 100)} size={24} />, link: 'https://linkedin.com' },
        { icon: <GitHub color={getColor('purple', 100)} size={28} />, link: 'https://github.com' },
        { icon: <Facebook color={getColor('purple', 100)} size={24} />, link: 'https://facebook.com' },
        { icon: <Twitter color={getColor('purple', 100)} size={20} />, link: twitterUrl },
    ], []);

    const socialLinks = useMemo(() =>
        socialMedia.map((value, index) => {
            const angle = 90 + index * 45;
            const rad = (angle * Math.PI) / 180;
            const radius = 80;
            return {
                ...value,
                offset: { x: radius * Math.cos(rad), y: radius * Math.sin(rad) },
            };
        }), [socialMedia]
    );

    useEffect(() => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
        }

        if (open && !isHoveringRef.current) {
            closeTimerRef.current = setTimeout(() => {
                setOpen?.(false);
            }, inactiveTime);
        }

        return () => {
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current);
            }
        };
    }, [open, setOpen, inactiveTime]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!open) {
                setHighlight(true);
                setTimeout(() => setHighlight(false), 1000);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [open]);

    const handleMouseEnter = () => {
        isHoveringRef.current = true;
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    };

    const handleMouseLeave = () => {
        isHoveringRef.current = false;
        if (open) {
            closeTimerRef.current = setTimeout(() => {
                setOpen?.(false);
            }, inactiveTime);
        }
    };

    return (
        <div className="orbit-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="central-wrapper">
                <motion.div
                    className={`central-ball ${highlight ? 'pulse' : ''}`}
                    onClick={() => setOpen?.(!open)}
                    onMouseEnter={() => setOpen?.(true)}
                    animate={{ x: open ? '-80%' : '0%' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                    <img src={logo} alt="Logo" className="logo-img" />
                </motion.div>

                <AnimatePresence>
                    {open && socialLinks.map(({ icon, link, offset }, index) => (
                        <motion.a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="planet-icon"
                            initial={{ opacity: 0, x: 0, y: 0 }}
                            animate={{ opacity: 1, x: offset.x, y: offset.y }}
                            exit={{ opacity: 0, x: 0, y: 0 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                            style={{
                                color: getColor('purple', 200),
                                backgroundColor: getColor('purple', 400),
                            }}
                        >
                            {icon}
                        </motion.a>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default OrbitSocialHub;
