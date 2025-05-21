import { getColor } from "../../constants/colors"
import SparkClick from "../icons/SparkClick"
import AutoLayout from "../layout/AutoLayout"
import { HStack } from "../layout/HStack"
import { VStack } from "../layout/VStack"
import Typography from "../typography/Typography"
import Button from "./Buttons/Button"
import CustomImage from "./CustomImage"
import Gradient from "./Gradient"

interface ProjectCardProps {
    projectName: string;
    description: string;
    banner: string;
    index: number;
}

interface CardContentProps {
    children: React.ReactNode;
    index: boolean;
}

const ProjectDescriptionCard: React.FC<CardContentProps> = ({ children, index }) => {
    const cardStyle: React.CSSProperties = {
        borderRadius: '16px',
        background: getColor('overlay'),
        backgroundBlendMode: 'overlay, normal',
        backdropFilter: 'blur(40px)',
        padding: '30px',
        width: '110%',
        position: 'relative',
        zIndex: 6,
        marginLeft: !index ? '-10%' : '0'
    };

    return (
        <div style={cardStyle}>
            <Typography 
                variant='b3' 
                family='jk' 
                style={{ fontWeight: 500 }} 
                color={getColor('purple', 100)}
                isAnimate={true}
            >
                {children}
            </Typography>
        </div>
    );
};

const ProjectContent: React.FC<Pick<ProjectCardProps, 'projectName' | 'index' | 'description'>> = ({ projectName, description, index }) => {
    const isEvenIndex = index % 2 === 0
    const alignment = isEvenIndex ? 'start' : 'end'

    return (
        <VStack justify='between' align={alignment} gap={30}>
            <VStack justify='center' align={alignment} gap={0}>
                <Typography 
                    variant='b4' 
                    family='jk' 
                    style={{ fontWeight: 600 }} 
                    color={getColor('purple', 300)}
                >
                    Featured Project
                </Typography>
                <Typography 
                    variant='h2' 
                    family='jk' 
                    style={{ fontWeight: 600 }} 
                    color={getColor('purple', 100)}
                >
                    {projectName}
                </Typography>
            </VStack>
            <ProjectDescriptionCard index={isEvenIndex}>
                {description}
            </ProjectDescriptionCard>
            <HStack align="center" justify="center">
                <Button height={12} border="none" bg="transparent" width={12} >
                    <SparkClick />
                </Button>
                <Button height={12} border="none" bg="transparent" width={12} >
                    <SparkClick />
                </Button>
            </HStack>
        </VStack>
    )
}

const ProjectBanner: React.FC<Pick<ProjectCardProps, 'banner' | 'index'>> = ({ banner, index }) => {
    const isEvenIndex = index % 2 === 0
    
    const imageStyle: React.CSSProperties = {
        borderRadius: isEvenIndex 
            ? '10px 0 0 10px' 
            : '0 10px 10px 0'
    }

    const containerStyle: React.CSSProperties = {
        backgroundColor: getColor("purple", 700),
        overflow: 'hidden',
        padding: isEvenIndex 
            ? '30px 0 0 30px' 
            : '30px 30px 0 0',
        height: '100%',
        borderRadius: '10px'
    }

    return (
        <div style={containerStyle}>
            <CustomImage 
                borderRadius={0} 
                style={{
                    display: "flex",
                    justifyContent: isEvenIndex 
                    ? 'flex-end' 
                    : 'flex-start',
                }} 
                imgStyle={imageStyle} 
                src={banner} 
                direction={isEvenIndex ? 'right' : 'left'}
                isAnimate={true}
                onZoom={true}
                width={"90%"}
            />
        </div>
    )
}

const WorkDetailCard: React.FC<ProjectCardProps> = ({ projectName, description, banner, index }) => {
    const isEvenIndex = index % 2 === 0
    const layoutConfig = {
        custom: isEvenIndex ? "2-1" : "1-2",
        order: !isEvenIndex ? [2, 1] : undefined
    }

    const gredientStyle = isEvenIndex ? 
        { left: '35%', top: '50%', transform: `translate(-50%, -50%)` } :
        { right: '35%', top: '50%', transform: `translate(50%, -50%)` }

    return (
        <AutoLayout 
            custom={layoutConfig.custom} 
            order={layoutConfig.order} 
            align='center' 
            gap={0}
        >
            <ProjectContent 
                projectName={projectName} 
                description={description} 
                index={index} 
            />
            <div className="position-rel">
                <Gradient width={550} position={gredientStyle} />
                <ProjectBanner 
                    banner={banner} 
                    index={index} 
                />
            </div>
        </AutoLayout>
    )
}

export default WorkDetailCard