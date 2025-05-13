import { getColor } from "../../constants/colors"
import AutoLayout from "../layout/AutoLayout"
import { VStack } from "../layout/VStack"
import Typography from "../typography/Typography"
import CustomImage from "./CustomImage"

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
        borderRadius: '14px',
        background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(105, 59, 147, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
        backgroundBlendMode: 'overlay, normal',
        backdropFilter: 'blur(40px)',
        padding: '30px',
        width: '110%',
        position: 'relative',
        zIndex: 9,
        marginLeft: !index ? '-10%' : '0'
    };

    return (
        <div style={cardStyle}>
            <Typography 
                variant='b3' 
                family='jk' 
                style={{ fontWeight: 500 }} 
                color={getColor('purple', 100)}
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
        </VStack>
    )
}

const ProjectBanner: React.FC<Pick<ProjectCardProps, 'banner' | 'index'>> = ({ banner, index }) => {
    const isEvenIndex = index % 2 === 0
    
    const imageStyle = {
        borderRadius: isEvenIndex 
            ? '10px 0 0 10px' 
            : '0 10px 10px 0'
    }

    const containerStyle = {
        backgroundColor: getColor("purple", 700),
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
                style={imageStyle} 
                imgStyle={imageStyle} 
                src={banner} 
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
            <ProjectBanner 
                banner={banner} 
                index={index} 
            />
        </AutoLayout>
    )
}

export default WorkDetailCard