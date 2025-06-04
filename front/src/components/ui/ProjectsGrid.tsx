import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getColor } from "../../constants/colors";
import AutoLayout from "../layout/AutoLayout";
import VStack from "../layout/VStack";
import { HStack } from "../layout/HStack";
import Typography from "../typography/Typography";
import CustomImage from "./CustomImage";
import PageTitleBadge from "./PageTitleBadge";
import MainWrapper from "../layout/MainWrapper";
import useResize from "../../hooks/useResize";
import Button from "./Buttons/Button";
import AnchorArrow from "../icons/AnchorArrow";
import { FooterFadeInAnimation } from "../animation/animation";

// Define the interface for project items
interface ProjectItem {
    projectName: string;
    description: string;
    banner: string;
    index?: number;
    technologies: string[];
}

interface ProjectsGridProps {
    projects: ProjectItem[];
}

const Card = ({ index = 0, banner, projectName, description, technologies }: ProjectItem) => {

    const sectionRef = useRef(null)
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const isHovered = hoverIndex === index;


    useEffect(() => {
        FooterFadeInAnimation(sectionRef)
    }, [])

    return (
        <>
            <motion.div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                initial={{ scale: 1 }}
                animate={{ scale: isHovered ? 1.04 : 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    border: `1px solid ${getColor("purple", 400, isHovered ? 1 : 0.4)}`,
                    background: getColor("purple", 600, 0.8),
                    borderRadius: "8px",
                    cursor: 'pointer',
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                }}
            >
                {/* Image + Hover Items */}
                <div style={{ width: "100%", position: "relative" }}>
                    <AnimatePresence>
                        {isHovered && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="project-cards-overlay"
                                    style={{
                                        bottom: "0",
                                        right: "0",
                                        zIndex: 2,
                                    }}
                                >
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        zIndex: 2,
                                    }}
                                >
                                    <Button height={6} width={6} bg={getColor("purple", 600)} style={{ width: "40px", aspectRatio: "1", borderRadius: '50%' }}>
                                        <AnchorArrow />
                                    </Button>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>

                    <CustomImage
                        borderRadius={0}
                        imgStyle={{ objectFit: "cover" }}
                        direction="left"
                        style={{ height: "200px", width: "100%" }}
                        src={banner}
                    />
                </div>

                {/* Content */}
                <VStack align="start" ref={sectionRef} justify="center" style={{ padding: "20px" }} gap={12}>
                    <Typography
                        variant="b3"
                        family="jk"
                        style={{ transition: "color 0.4s" }}
                        color={isHovered ? getColor("purple", 300) : getColor("light")}
                    >
                        {projectName}
                    </Typography>

                    <Typography variant="b5" family="jk" color={getColor("light")}>
                        {description}
                    </Typography>

                    <HStack align="center" justify="start" style={{ flexWrap: "wrap" }} gap={16}>
                        {technologies.slice(0, 4).map((tech, techIndex) => (
                            <PageTitleBadge
                                key={techIndex}
                                size="xs"
                                bg={getColor("purple", 400)}
                                color={getColor("purple", 100)}
                                badge={false}
                            >
                                {tech}
                            </PageTitleBadge>
                        ))}
                        {technologies.length > 4 && (
                            <PageTitleBadge
                                size="xs"
                                bg={getColor("purple", 400)}
                                color={getColor("purple", 100)}
                                badge={false}
                            >
                                +{technologies.length - 4}
                            </PageTitleBadge>
                        )}
                    </HStack>
                </VStack>
            </motion.div>
        </>
    )
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    const isMobile = useResize();

    return (
        <MainWrapper>
            <VStack align="start" justify="center" gap={42}>
                <Typography
                    variant={isMobile ? "h3" : "h2"}
                    align="left"
                    family="p"
                    style={{ fontWeight: 400 }}
                    color={getColor("light")}
                    isHeading
                >
                    All Projects
                </Typography>

                <AutoLayout custom="1-4" align="start" gap={16}>
                    {/* Categories placeholder */}
                    <VStack
                        align="center"
                        justify="start"
                        style={{
                            border: `1px solid ${getColor("purple", 400, 0.4)}`,
                            borderRadius: "12px",
                            background: getColor("purple", 600, 0.8),
                            padding: "16px",
                            minHeight: "100%",
                        }}
                    >
                        <Typography variant="b2" family="jk" color={getColor("purple", 200)}>
                            Categories
                        </Typography>
                    </VStack>

                    {/* Projects Grid */}
                    <AutoLayout columns={3} gap={16} align="stretch">
                        {projects.map((project, index) => (
                            <Card 
                                banner={project?.banner}
                                key={index}
                                index={index}
                                projectName={project?.projectName}
                                description={project?.description}
                                technologies={project?.technologies}
                            />
                        ))}
                    </AutoLayout>
                </AutoLayout>
            </VStack>
        </MainWrapper>
    );
};

export default ProjectsGrid;
