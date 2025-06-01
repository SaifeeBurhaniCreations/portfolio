import React, { useEffect, useRef } from 'react';
import { HStack } from "../../layout/HStack"
import CustomImage from '../CustomImage';
import { VStack } from '../../layout/VStack';
import Typography from '../../typography/Typography';
import { getColor } from '../../../constants/colors';
import HoverButton from '../Buttons/HoverButton';
import { startCardAnimation } from '../../animation/animation';
import { ProjectCardProps } from '../../../types';
import useResize from '../../../hooks/useResize';
import { useNavigate } from 'react-router-dom';



const ProjectCard: React.FC<ProjectCardProps> = ({ index, banner, heading, description, button, href }) => {

    const isMobile = useResize()
    const navigate = useNavigate();
    const cardRef = useRef(null);

    useEffect(() => {
        startCardAnimation(cardRef.current, index);
    }, [index]);

    const degrees = [96, 110, 150, 120, 170, 190, 200];

    const degree = degrees[index % degrees.length];

    const containerStyle: React.CSSProperties = {
        borderRadius: 16,
        background: `linear-gradient(${degree}deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%)`,
        boxShadow: '4px 7px 26px 0px rgba(0, 0, 0, 0.12)',
        padding: isMobile ? 18 : 30,
        borderTop: `2px solid ${getColor("purple", 300)}`
    };

    return (
        <>
            <HStack justify="start" align="center" gap={10} style={containerStyle} ref={cardRef} >
                <CustomImage borderRadius={0} width={115} height={115} src={banner} imgStyle={{ mixBlendMode: "lighten" }} />
                <VStack align='start' justify='center' gap={10} maxW={'90%'}>
                    <Typography variant={isMobile ? 'b2' : 'b1'} family='jk' color={getColor('light')}>{heading}</Typography>
                    <Typography variant={isMobile ? 'caption' : 'b5'} family='jk' color={getColor('light')} isAnimate={true} >{description}</Typography>
                    {
                        button &&
                        <HoverButton onClick={() => navigate(`${href}`)}>
                            {button}
                        </HoverButton>
                    }
                </VStack>
            </HStack>
        </>
    )
}

export default ProjectCard