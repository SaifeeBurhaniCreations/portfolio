import { ReactNode } from "react";
import { getColor } from "../../../constants/colors";
import SparkClick from "../../icons/SparkClick";
import AutoLayout from "../../layout/AutoLayout";
import { HStack } from "../../layout/HStack";
import { VStack } from "../../layout/VStack";
import Typography from "../../typography/Typography";
import Button from "../Buttons/Button";
import CustomImage from "../CustomImage";
import Gradient from "../Gradient";
import useResize from "../../../hooks/useResize";

// Props for main component
interface ProjectCardProps {
    projectName: string;
    description: string;
    banner: string;
    index: number;
}

// Props for description card
interface CardContentProps {
    children: ReactNode;
    index: number;
    element?: ReactNode;
}

// Props for banner image
interface ProjectBannerProps {
    banner: string;
    index: number;
    isMobile?: boolean;
}

// Enhanced ProjectDescriptionCard
const ProjectDescriptionCard: React.FC<CardContentProps> = ({ children, index, element }) => {
    const cardStyle: React.CSSProperties = {
        borderRadius: "16px",
        background: getColor("overlay"),
        backgroundBlendMode: "overlay, normal",
        backdropFilter: "blur(40px)",
        padding: "30px",
        width: element ? "100%" : "110%",
        position: "relative",
        zIndex: 6,
        marginLeft: index % 2 !== 0 ? "-10%" : "0"
  };

    return (
        <div style={cardStyle}>
            <VStack gap={16}>
                {element}
                <Typography
                    variant={element ? "b4" : "b3"}
                    family="jk"
                    style={{ fontWeight: 500 }}
                    color={getColor("purple", 100)}
                    isAnimate={true}
                >
                    {children}
                </Typography>
            </VStack>
    </div>
  );
};

// Enhanced ProjectContent
const ProjectContent: React.FC<
    Pick<ProjectCardProps, "projectName" | "description" | "index"> & {
        children?: ReactNode;
    }
> = ({ projectName, description, index, children }) => {
    const isEvenIndex = index % 2 === 0;
    const alignment = isEvenIndex ? "start" : "end";

    return (
            <VStack justify="between" align={alignment} gap={30}>
                <VStack justify="center" align={alignment} gap={0}>
                    <Typography
                        variant={children ? "b5" : "b4"}
                        family="jk"
                        style={{ fontWeight: 600 }}
                        color={getColor("purple", 300)}
                    >
                        Featured Project
                    </Typography>
                    <Typography
                        variant={children ? "h3" : "h2"}
                        family="jk"
                        style={{ fontWeight: 600 }}
                        color={getColor("purple", 100)}
                    >
                        {projectName}
                    </Typography>
                </VStack>

                <ProjectDescriptionCard index={index} element={children}>
                    {description}
                </ProjectDescriptionCard>

                <HStack align="center" justify="center">
                    {[...Array(2)].map((_, i) => (
                        <Button key={i} height={12} width={12} border="none" bg="transparent">
                            <SparkClick />
                        </Button>
                ))}
                </HStack>
            </VStack>
        );
    };

// Enhanced ProjectBanner
const ProjectBanner: React.FC<ProjectBannerProps> = ({ banner, index, isMobile = false }) => {
    const isEvenIndex = index % 2 === 0;

    const imageStyle: React.CSSProperties = {
        borderRadius: isEvenIndex ? "10px 0 10px 0" : "0 10px 0 10px"
    };

    const padding = isMobile
        ? 0
        : isEvenIndex
            ? "30px 0 0 30px"
            : "30px 30px 0 0";

    const containerStyle: React.CSSProperties = {
        backgroundColor: getColor("purple", 700),
        overflow: "hidden",
        padding,
        height: "100%",
        borderRadius: "10px"
  };

    return (
        <div style={containerStyle}>
            <CustomImage
                borderRadius={0}
                style={{
                    display: "flex",
                    justifyContent: isEvenIndex ? "flex-end" : "flex-start"
                }}
                imgStyle={imageStyle}
                src={banner}
                direction={isEvenIndex ? "right" : "left"}
                isAnimate
                onZoom
                width={isMobile ? "100%" : "90%"}
            />
        </div>
    );
};

// Main Component: WorkDetailCard
const WorkDetailCard: React.FC<ProjectCardProps> = ({
    projectName,
    description,
    banner,
    index
}) => {
    const isMobile = useResize()

    const isEvenIndex = index % 2 === 0;
    const layoutConfig = {
        custom: isEvenIndex ? "2-1" : "1-2",
        order: !isEvenIndex ? [2, 1] : undefined
    };

    const gradientStyle = isEvenIndex
        ? { left: "35%", top: "50%", transform: "translate(-50%, -50%)" }
        : { right: "35%", top: "50%", transform: "translate(50%, -50%)" };

    return (
      <>
        {!isMobile ? (
            <AutoLayout custom={layoutConfig.custom} order={layoutConfig.order} align="center" gap={0}>
                <ProjectContent
                    projectName={projectName}
                    description={description}
                    index={index}
                />
                <div className="position-rel">
                    <Gradient width={550} coordinates={gradientStyle} />
                    <ProjectBanner banner={banner} index={index} />
                </div>
            </AutoLayout>
        ) : (
            <AutoLayout columns={1} align="center" gap={0}>
                <ProjectContent
                    projectName={projectName}
                    description={description}
                    index={index}
                >
                    <div className="position-rel">
                        <Gradient width={550} coordinates={gradientStyle} />
                        <ProjectBanner banner={banner} index={index} isMobile />
                    </div>
                </ProjectContent>
            </AutoLayout>
            )}
        </>
    );
};

export default WorkDetailCard;
