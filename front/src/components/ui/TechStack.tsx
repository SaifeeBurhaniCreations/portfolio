import { getColor } from "../../constants/colors"
import useResize from "../../hooks/useResize"
import MainWrapper from "../layout/MainWrapper"
import { VStack } from "../layout/VStack"
import SBLogo from "../svgComponents/SBLogo"
import TechStackV2 from "../svgComponents/TechStackV2"
import Typography from "../typography/Typography"

const TechStack = () => {

    const isMobile = useResize()

    return (
        <>
            <MainWrapper>
                <VStack justify='center' align='center' style={{ position: 'relative', overflowX: 'hidden' }} gap={30}>
                    <VStack justify='center' align='center' gap={10}>
                        <Typography variant='h3' family='p' style={{ fontWeight: 400 }} color={getColor('light')}>
                            Driving innovation through <span style={{ color: getColor('purple') }} >modern technology</span>
                        </Typography>
                        <Typography variant={isMobile ? 'b5' : 'h6'} family='p' style={{ fontWeight: 400 }} color={getColor('light')}>
                            A carefully selected tech stack enables scalable, accessible, and high-performance digital solutions.
                        </Typography>
                    </VStack>
                    {/* <TechStackSvg /> */}
                    <TechStackV2 width={isMobile ? 500 : 895} height={isMobile ? 400 : 657} />
                    <SBLogo isAnimate={true} height={isMobile ? 50 : 70} width={isMobile ? 60 : 85} position={{ transform: 'translate(-50%, -50%)', top: isMobile ? '76%' : '71%', left: '49.4%', position: 'absolute' }} />
                </VStack>
            </MainWrapper>
        </>
    )
}

export default TechStack