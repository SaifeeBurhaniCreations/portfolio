import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SolarBall.css';
import Instagram from '../../icons/Instagram';
import logo from '../../../assets/images/svg/sbc.svg';
import { getColor } from '../../../constants/colors';

// Arrange icons in a semi-circle with equal spacing (e.g., -90 to 90 degrees)
const socialLinks = Array.from({ length: 5 }, (_, i) => {
    const angle = -90 + (i * 45); // spread from -90° to 90°
    const radius = 120; // adjust orbit radius
    const rad = (angle * Math.PI) / 180;
    return {
        icon: <Instagram color={getColor('purple', 100)} />,
        link: `https://example.com/${i}`,
        offset: { x: radius * Math.cos(rad), y: radius * Math.sin(rad) },
    };
});

export const SolarBall: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [highlight, setHighlight] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!open) {
                setHighlight(true);
                setTimeout(() => setHighlight(false), 1000);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [open]);

    return (
        <div className="orbit-wrapper">
            <div className="central-wrapper">
                <motion.div
                    className={`central-ball ${highlight ? 'pulse' : ''}`}
                    onClick={() => setOpen(prev => !prev)}
                    animate={{ x: open ? '80%' : '0%' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                    <img src={logo} alt="Logo" className="logo-img" />
                </motion.div>

                <AnimatePresence>
                    {open &&
                        socialLinks.map(({ icon, link, offset }, index) => (
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
                                style={{ color: getColor('purple', 200), backgroundColor: getColor('purple', 400) }}
                            >
                                {icon}
                            </motion.a>
                        ))}
                </AnimatePresence>
            </div>
        </div>
    );
};
