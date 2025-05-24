// StackCard.tsx
import React from "react";
import { getColor } from "../../constants/colors";
import AutoLayout from "../layout/AutoLayout";
import { HStack } from "../layout/HStack";
import VStack from "../layout/VStack";
import Typography from "../typography/Typography";
import HoverButton from "./Buttons/HoverButton";
import CustomImage from "./CustomImage";
import AnchorArrow from "../icons/AnchorArrow";
import useResize from "../../hooks/useResize";
import { NavLink } from "react-router-dom";
import MainWrapper from "../layout/MainWrapper";
import PageTitleBadge from "./PageTitleBadge";
import { CardProps, StackCardProps } from "../../types";



const Card: React.FC<CardProps> = ({
    type,
    heading,
    description,
    technologies = [],
    button,
    image
}) => {
    const isMobile = useResize();
    const isEven = type === 'even';
    const layout = isEven ? '2-1' : '1-2';

    return (
        <AutoLayout
            custom={layout}
            style={{ background: getColor('purple', 600) }}
            className="card-layout"
            align="stretch"
            gap={8}
        >
            {/* Left image for odd, right for even */}
            {!isEven && (
                <div className="image">
                    <CustomImage
                        borderRadius={12}
                        onZoom
                        isAnimate
                        direction="left"
                        style={{ height: '100%', overflow: 'hidden' }}
                        src={image}
                    />
                </div>
            )}

            <VStack align="start" justify="center" gap={48} style={{ padding: "42px" }}>
                <Typography isAnimate variant="h2" family="p" color={getColor('light')}>
                    {heading}
                </Typography>

                <VStack gap={24} align="start">
                    <Typography isAnimate variant="b4" family="jk" color={getColor('purple', 100)}>
                        {description}
                    </Typography>

                    {technologies.length > 0 && (
                        <HStack align="center" justify="start" gap={16}>
                            {technologies.map((tech, index) => (
                                <PageTitleBadge
                                    key={index}
                                    bg={getColor('purple', 400)}
                                    color={getColor('purple', 100)}
                                    badge={false}
                                >
                                    {tech}
                                </PageTitleBadge>
                            ))}
                        </HStack>
                    )}
                </VStack>

                <NavLink to={button || "#"} style={{ alignSelf: isEven ? "start" : "end" }}>
                    <HoverButton height={isMobile ? 8 : 10} width={isMobile ? 16 : 24}>
                        <HStack gap={4}>
                            View Details <AnchorArrow />
                        </HStack>
                    </HoverButton>
                </NavLink>
            </VStack>

            {isEven && (
                <div className="image">
                    <CustomImage
                        borderRadius={12}
                        onZoom
                        isAnimate
                        direction="right"
                        style={{ height: '100%', overflow: 'hidden' }}
                        src={image}
                    />
                </div>
            )}
        </AutoLayout>
    );
};


const StackCard: React.FC<StackCardProps> = ({ data }) => {
    return (
        <MainWrapper>
            <ul id="cards-cs">
                {data.map((item, index) => {
                    const delay = `${index * 0.5}s`;
                    const type = (index + 1) % 2 === 0 ? 'even' : 'odd';

                    return (
                        <li
                            key={index}
                            className="card-cs"
                            id={`card-${index + 1}`}
                            style={{
                                animation: "scale 1s ease-out",
                                animationDelay: delay,
                                animationFillMode: "both",
                            }}
                        >
                            <Card
                                type={type}
                                heading={item.projectName}
                                description={item.description}
                                technologies={item.technologies}
                                button={item.href}
                                image={item.banner}
                            />
                        </li>
                    );
                })}
            </ul>
        </MainWrapper>
    );
};

export default StackCard;
