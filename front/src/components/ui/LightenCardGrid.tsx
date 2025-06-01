import { getColor } from "../../constants/colors"
import useResize from "../../hooks/useResize"
import AutoLayout from "../layout/AutoLayout"
import MainWrapper from "../layout/MainWrapper"
import VStack from "../layout/VStack"
import Typography from "../typography/Typography"
import ProjectCard from "./Cards/FeaturedProjectCard"
import Gradient from "./Gradient"
import React, { ReactNode } from "react"

type Project = {
    banner: string
    heading: string
    description: string
    button?: string
    href?: string
}

type LightenCardGridProps = {
    children: ReactNode
    description?: string
    data: Project[]
}

const LightenCardGrid: React.FC<LightenCardGridProps> = ({ children, data, description }) => {

    const isMobile = useResize()

    return (
        <>
            <MainWrapper>
                <VStack align='start' justify='center' gap={isMobile ? 0 : 30}>
                    <VStack align='start' justify='center' gap={isMobile ? 0 : 16}>
                        <Typography variant={isMobile ? 'h3' : 'h2'} family='p' style={{ fontWeight: 400 }} color={getColor('light')}>{children}</Typography>
                        {description && <Typography variant={isMobile ? 'b5' : 'b3'} family='p' style={{ fontWeight: 400 }} color={getColor('light')}>{description}</Typography>}
                    </VStack>
                    <AutoLayout className='position-rel' columns={isMobile ? 1 : 2} align='center' gap={isMobile ? 18 : 30}>
                        <Gradient width={650} coordinates={{ left: '50%', top: '38%', transform: `translate(-50%, -50%)` }} />

                        {
                            data?.map((value, index) => (
                                <ProjectCard button={value?.button} href={value?.href} key={index} banner={value.banner} heading={value.heading} description={value.description} index={index} />
                            ))
                        }
                    </AutoLayout>
                </VStack>
            </MainWrapper>
        </>
    )
}

export default LightenCardGrid