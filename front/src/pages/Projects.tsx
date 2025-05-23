import MainWrapper from "../components/layout/MainWrapper"
import { VStack } from "../components/layout/VStack"
import Typography from "../components/typography/Typography"
import PageTitleBadge from "../components/ui/PageTitleBadge"
import { getColor } from "../constants/colors"

const Projects = () => {
    return (
        <>
            <MainWrapper>
                <VStack align="center" justify="center" gap={16}>
                    <PageTitleBadge>
                        Our Work
                    </PageTitleBadge>
                    
                    <Typography variant="xl" align="center" family="jk" color={getColor('purple', 200)}>
                        Showcasing Our Projects
                    </Typography>
                </VStack>
            </MainWrapper>
        </>
    )
}

export default Projects