import AutoLayout from "../components/layout/AutoLayout";
import { HStack } from "../components/layout/HStack";
import MainWrapper from "../components/layout/MainWrapper";
import { VStack } from "../components/layout/VStack";
import BannerSvg from "../components/svgComponents/BannerSvg";
import TypewriterText from "../components/typography/TypewriterText";
import Typography from "../components/typography/Typography";
import CustomImage from "../components/ui/CustomImage";
import Gradient from "../components/ui/Gradient";
import ProjectCard from "../components/ui/FeaturedProjectCard";
import TeamSection from "../components/ui/TeamSection";
import { getColor } from "../constants/colors";

import card_img_1 from '../assets/images/png/card-1.png'
import card_img_2 from '../assets/images/png/card-2.png'
import card_img_3 from '../assets/images/png/card-3.png'
import card_img_4 from '../assets/images/png/card-4.png'
import arrow_img from "../assets/images/png/arrow-img.png"
import { useScrollToTop } from "../hooks/scrollHook";
import useResize from "../hooks/useResize";
import Contact from "../components/ui/Contact";
import FeaturedProjects from "../components/ui/FeaturedProjects";
import TechStack from "../components/ui/TechStack";

const tools = [
    {
        banner: card_img_1,
        heading: "SBC-Deploy",
        description: "Seamless in-house app deployment platform. Automate delivery with ease. Get 1 month free for real client deployment.",
    },
    {
        banner: card_img_2,
        heading: "SBC-UtilX",
        description: "Smart utility monitoring and analytics. Optimize usage, reduce costs, and gain insights instantly. Get started with a 1-month free trial for real-time data tracking.",
    },
    {
        banner: card_img_3,
        heading: "SBC-ERP",
        description: "All-in-one ERP solution for growing businesses. Manage operations, finance, and inventory with ease. Start with a 1-month free trial and streamline your workflow today.",
    },
    {
        banner: card_img_4,
        heading: "SBC-Toolset",
        description: "A complete dev kit with hooks, design & icon libraries, and prebuilt frameworks. Build faster with our optimized starter kits. Try it free for 1 month.",
    }
]

const Home = () => {

    const isMobile = useResize()

    useScrollToTop()

    return (
        <>
            <MainWrapper>
                <HStack align={isMobile ? 'start' : 'end'} direction={isMobile ? 'column' : 'row'} justify='start' gap={50} style={{ position: "relative" }}>
                    <div className="width-100">
                        <Gradient width={500} coordinates={{ left: '12%', top: '55%', transform: `translate(-50%, -50%)` }} />
                        <BannerSvg height={isMobile ? 160 : 300} width={isMobile ? 230 : 308} />
                        <CustomImage style={{ position: 'absolute', top: '-40%', left: isMobile ? '30%' : '16%' }} width={isMobile ? 140 : 180} borderRadius={0} src={arrow_img} />
                        <Typography
                            style={{ position: 'absolute', top: isMobile ? '-30%' : '-28%', left: isMobile ? '62%' : '28%' }}
                            variant={isMobile ? 'caption' : 'b2'}
                            family='p'
                            color={getColor('light')}
                        >
                            Hi, from{' '}
                            <TypewriterText
                                color={getColor('purple')}
                                words={['Saifee Burhani Creations Team']}
                                typingSpeed={100}
                                erasingSpeed={50}
                                delayBetweenWords={2000}
                            />
                        </Typography>
                    </div>
                    <VStack align='start' justify='center' gap={5}>
                        <Typography variant='b3' family='p' color={getColor('light')}>
                            We’re a creative
                        </Typography>
                        <Typography variant={isMobile ? 'h3' : 'h1'} family='p' style={{ fontWeight: 400 }} color={getColor('light')}>
                            Tech agency that <br /> <span style={{ color: getColor('purple') }}>builds</span> ideas into impact
                        </Typography>
                        <Typography variant='b5' family='p' color={getColor('light')}>
                            through bold design and bulletproof code
                        </Typography>
                    </VStack>

                </HStack>
            </MainWrapper>

            <MainWrapper>
                <VStack justify='between' align='start' gap={isMobile ? 28 : 48}>
                    <VStack justify='center' align='start' gap={32}>
                        <Typography variant={isMobile ? 'h4' : 'h2'} family='p' style={{ fontWeight: 400 }} color={getColor('light')}>We design and develop digital experiences that feel as good as they look</Typography>
                        <Typography variant={isMobile ? 'b4' : 'b2'} family='jk' style={{ fontWeight: 400 }} color={getColor('light')}>
                            Aliasger & Jafar us Sadiq lead a creative tech studio turning bold concepts into <span style={{ color: getColor('purple') }}>striking interfaces</span>, blending pixel-perfect design with robust, scalable code.
                        </Typography>

                    </VStack>

                    <Typography variant={isMobile ? 'b4' : 'b2'} family='jk' style={{ fontWeight: 400 }} color={getColor('light')}>We partner with ambitious brands to transform complex ideas into beautifully designed, high-performance digital experiences.
                        From strategy and design to scalable development, we build solutions that are not only functional and intuitive—but also ready to grow with your business.</Typography>
                </VStack>
            </MainWrapper>

            <MainWrapper>
                <VStack align='start' justify='center' gap={isMobile ? 0 : 30}>
                    <Typography variant={isMobile ? 'h3' : 'h2'} family='p' style={{ fontWeight: 400 }} color={getColor('light')}>SBC Tools & Systems</Typography>
                    <AutoLayout className='position-rel' columns={isMobile ? 1 : 2} align='center' gap={isMobile ? 18 : 30}>
                        <Gradient width={650} coordinates={{ left: '50%', top: '38%', transform: `translate(-50%, -50%)` }} />

                        {
                            tools?.map((value, index) => (
                                <ProjectCard key={index} banner={value.banner} heading={value.heading} description={value.description} index={index} />
                            ))
                        }
                    </AutoLayout>
                </VStack>
            </MainWrapper>

            <TechStack />

            <FeaturedProjects />

            <Contact />

            <TeamSection />

        </>
    )
}

export default Home