import React from 'react';
import './Timeline.css';
import { getColor } from '../../../constants/colors';
import Typography from '../../typography/Typography';
import { motion } from 'framer-motion'
import VStack from '../../layout/VStack';

// Define your theme colors
const themeColors = {
    100: "#CCD6F6", // Lightest
    200: "#B999E6",
    300: "#9857D3",
    400: "#693B93",
};

type TimelineStepType = keyof typeof themeColors;

export interface TimelineEvent {
    id: string;
    step: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface TimelineProps {
    events: TimelineEvent[];
    className?: string;
    iconSize?: string;
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Timeline: React.FC<TimelineProps> = ({ events, className }) => {
    return (
        // <div className={`timeline ${className || ''}`}>
        <motion.div
            className={`timeline ${className || ''}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >

            {events.map((event, index) => {
                // Cycle through theme colors (100, 200, 300, 400, then back to 100)
                const stepType = ((index % 4) + 1) * 100 as TimelineStepType;
                return (
                    <TimelineEventItem
                    key={index}
                    step={index + 1}
                    event={event}
                    stepType={stepType}
                    isOdd={index % 2 === 0}
                    isLast={index === events.length - 1}
                    />
                );
            })}
        </motion.div>
        // </div>
    );
};

interface TimelineEventItemProps {
    event: TimelineEvent;
    stepType: TimelineStepType;
    isOdd: boolean;
    isLast: boolean;
    step: number;
}

const TimelineEventItem: React.FC<TimelineEventItemProps> = ({
    event,
    stepType,
    isOdd,
    isLast,
    step,
}) => {
    const eventClasses = [
        'timeline__event',
        'animated',
        'fadeInUp',
        isOdd ? 'timeline__event--odd' : '',
        isLast ? 'timeline__event--last' : '',
    ].join(' ');

    // Get colors based on step type
    const iconBgColor = getColor('purple', stepType);
    const textColor = getContrastColor(getColor('purple', stepType));
    const dateBgColor = darkenColor(getColor('purple', stepType), 20);
    const contentBgColor = getContentBackground(getColor('purple', stepType));


    return (
        <div className={eventClasses}>
            <div
                className="timeline__event__icon"
                style={{
                    backgroundColor: iconBgColor,
                    color: textColor,
                }}
            >
                
            </div>

            <VStack
                align='center'
                justify='center'
                className="timeline__event__date"
                style={{
                    backgroundColor: dateBgColor,
                    color: textColor,
                }}
            >
                <Typography variant='b3' family='p' >{step}</Typography>
            </VStack>

            <div
                className="timeline__event__content"
                style={{
                    backgroundColor: contentBgColor,
                    backdropFilter: 'blur(10px)',
                }}
            >
                <div
                    className="timeline__event__title"
                    style={{ color: dateBgColor }}
                >
                    <Typography variant='h3' family='p'>{event.title}</Typography>
                </div>
                <div className="timeline__event__description">
                    <Typography variant='b4' family='jk' color={getColor('light')}>{event.description}</Typography>
                </div>
            </div>
        </div>
    );
};

// Helper functions for color manipulation
function getContrastColor(hexColor: string): string {
    // Convert hex to RGB
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black or white depending on luminance
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

function getContentBackground(color: string): string {
    // Convert hex to RGB
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);

    // Darken the color slightly and add opacity
    return `rgba(${Math.max(0, r - 30)}, ${Math.max(0, g - 30)}, ${Math.max(0, b - 30)}, 0.2)`;
}

function darkenColor(hexColor: string, percent: number): string {
    // Convert hex to RGB
    let r = parseInt(hexColor.substr(1, 2), 16);
    let g = parseInt(hexColor.substr(3, 2), 16);
    let b = parseInt(hexColor.substr(5, 2), 16);

    // Darken each component
    r = Math.max(0, r * (100 - percent) / 100);
    g = Math.max(0, g * (100 - percent) / 100);
    b = Math.max(0, b * (100 - percent) / 100);

    // Convert back to hex
    return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}

export default Timeline;