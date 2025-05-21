import { FC, useState, useEffect } from 'react'
import { getColor } from '../../constants/colors'
import Typography from './Typography';


interface TypewriterTextProps {
    words: string[];
    typingSpeed?: number;
    erasingSpeed?: number;
    delayBetweenWords?: number;
    color?: string;
    variant?: "span" | "h2"
}

const TypewriterText: FC<TypewriterTextProps> = ({
    words,
    typingSpeed = 100,
    erasingSpeed = 50,
    color = getColor('purple'),
    delayBetweenWords = 2000,
    variant = "span"
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isWaiting) {
            timeout = setTimeout(() => {
                setIsWaiting(false);
                setIsDeleting(true);
            }, delayBetweenWords);
            return () => clearTimeout(timeout);
        }

        if (isDeleting) {
            if (currentText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            } else {
                timeout = setTimeout(() => {
                    setCurrentText((prev) => prev.slice(0, -1));
                }, erasingSpeed);
            }
        } else {
            if (currentText === words[currentWordIndex]) {
                setIsWaiting(true);
            } else {
                timeout = setTimeout(() => {
                    setCurrentText((prev) => words[currentWordIndex].slice(0, prev.length + 1));
                }, typingSpeed);
            }
        }

        return () => clearTimeout(timeout);
    }, [currentText, currentWordIndex, isDeleting, isWaiting, words, typingSpeed, erasingSpeed, delayBetweenWords]);

    if(variant === "span") {
        return (
            <span style={{ color }}>
                {currentText}
                <span className="cursor">|</span>
            </span>
    );
    } else if(variant === "h2") {
        return (
            <Typography variant='h2' family='p' style={{fontWeight: 400}} color={getColor('light')}>{currentText}<Typography variant='h2' family='p' style={{fontWeight: 400}} color={getColor('light')} className="cursor">|</Typography></Typography>
    );
    } else {
        return (
            <span style={{ color }}>
                {currentText}
                <span className="cursor">|</span>
            </span>
    );
    }
   
};

export default TypewriterText


