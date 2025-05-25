import { NavLink } from "react-router-dom";
import { getColor } from "../../constants/colors";
import useResize from "../../hooks/useResize";
import { CardProps } from "../../types"
import AutoLayout from "../layout/AutoLayout";
import { HStack } from "../layout/HStack";
import VStack from "../layout/VStack";
import Typography from "../typography/Typography";
import CustomImage from "./CustomImage";
import PageTitleBadge from "./PageTitleBadge";
import HoverButton from "./Buttons/HoverButton";
import AnchorArrow from '../icons/AnchorArrow'

const CustomCard: React.FC<CardProps> = ({
    type,
    heading,
    description,
    technologies = [],
    button,
    image
}) => {

    const isMobile = useResize();
    const isEven = type === 'even';
    const layout = type === 'mob' ? '1' : isEven ? '2-1' : '1-2';

    return (
        <>
            <AutoLayout
                custom={layout}
                style={{ background: getColor('purple', 600) }}
                className="card-layout"
                align="stretch"
                gap={8}
            >
                {/* Left image for odd, right for even */}
                {!isEven && (
                    <div className="image" style={{width : type === 'mob' ? '250px' : 'auto'}}>
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

                <VStack align="start" justify="center" gap={32} style={{ padding: "32px" }}>
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
        </>
    )
}

export default CustomCard