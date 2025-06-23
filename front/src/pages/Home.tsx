import { HStack } from "../components/layout/HStack";
import MainWrapper from "../components/layout/MainWrapper";
import { VStack } from "../components/layout/VStack";
import Typography from "../components/typography/Typography";
import TeamSection from "../components/ui/TeamSection";
import { getColor } from "../constants/colors";

import project_into from '../assets/videos/projects.mp4'
import play_button from '../assets/images/png/play-button.png'
import card_img_1 from '../assets/images/png/card-1.png'
import card_img_2 from '../assets/images/png/card-2.png'
import card_img_3 from '../assets/images/png/card-3.png'
import card_img_4 from '../assets/images/png/card-4.png'
import { useScrollToTop } from "../hooks/scrollHook";
import useResize from "../hooks/useResize";
import Contact from "../components/ui/Contact";
import FeaturedProjects from "../components/ui/FeaturedProjects";
import TechStack from "../components/ui/TechStack";
import LightenCardGrid from "../components/ui/LightenCardGrid";
import { useEffect, useState } from "react";
import AnchorArrow from '../components/icons/AnchorArrow'
import AutoLayout from "../components/layout/AutoLayout";
import HoverButton from "../components/ui/Buttons/HoverButton";
import Button from "../components/ui/Buttons/Button";
import CustomImage from "../components/ui/CustomImage";

const tools = [
    {
        banner: card_img_1,
        button: 'LEARN MORE',
        href: '/',
        heading: "SBC-Deploy",
        description: "Seamless in-house app deployment platform. Automate delivery with ease. Get 1 month free for real client deployment.",
    },
    {
        banner: card_img_2,
        button: 'LEARN MORE',
        href: '/',
        heading: "SBC-UtilX",
        description: "Smart utility monitoring and analytics. Optimize usage, reduce costs, and gain insights instantly. Get started with a 1-month free trial for real-time data tracking.",
    },
    {
        banner: card_img_3,
        button: 'LEARN MORE',
        href: '/',
        heading: "SBC-ERP",
        description: "All-in-one ERP solution for growing businesses. Manage operations, finance, and inventory with ease. Start with a 1-month free trial and streamline your workflow today.",
    },
    {
        banner: card_img_4,
        button: 'LEARN MORE',
        href: '/',
        heading: "SBC-Toolset",
        description: "A complete dev kit with hooks, design & icon libraries, and prebuilt frameworks. Build faster with our optimized starter kits. Try it free for 1 month.",
    }
]

const Home = () => {

    const isMobile = useResize()

    const [isSplineReady, setIsSplineReady] = useState(false);

    useEffect(() => {
        const scriptId = "spline-viewer-script";

        // Only add if not already present
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.type = "module";
            script.src = "https://unpkg.com/@splinetool/viewer@1.9.98/build/spline-viewer.js";
            script.id = scriptId;

            script.onload = () => {
                setIsSplineReady(true); // mark as ready
            };

            document.body.appendChild(script);
        } else {
            setIsSplineReady(true);
        }

        return () => {
            // Remove script and viewer on unmount
            const script = document.getElementById(scriptId);
            if (script) script.remove();

            const viewer = document.querySelector("spline-viewer");
            if (viewer) viewer.remove();
        };
    }, []);
    

    useScrollToTop()

    return (
        <>
            {/* <MainWrapper>
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
                            We're a creative
                        </Typography>
                        <Typography variant={isMobile ? 'h3' : 'h1'} family='p' style={{ fontWeight: 400 }} color={getColor('light')}>
                            Tech agency that <br /> <span style={{ color: getColor('purple') }}>builds</span> ideas into impact
                        </Typography>
                        <Typography variant='b5' family='p' color={getColor('light')}>
                            through bold design and bulletproof code
                        </Typography>
                    </VStack>

                </HStack>
            </MainWrapper> */}

            <MainWrapper>
                <AutoLayout align="center" gap={44} order={isMobile ? [2, 1] : [1,2]} custom={isMobile ? '1' : '2-1'}>
                    <VStack align="start" justify="center" gap={24}>
                        <Typography variant={isMobile ? 'b3' : "b1"} family="jk" color={getColor('purple', 300)}>
                            full-stack. design-driven. scalable.
                        </Typography>

                        <Typography variant={isMobile ? 'h3' : 'h1'} style={{ fontWeight: 800 }} family="p" color={getColor('light')}>
                            Building powerful <span style={{ color: getColor('purple') }}>digital solutions</span> for modern businesses
                        </Typography>

                        <Typography variant="b3" style={{width: '80%'}} family="jk" color={getColor('purple', 100)}>
                            From robust code to striking design, we craft scalable web, mobile, and brand experiences.
                        </Typography>

                        <HStack align="center" justify="center" gap={16}>
                            <Button bg={getColor("purple", 400)} height={10} width={18}>
                                <HStack gap={4}>View Projects <AnchorArrow /></HStack>
                            </Button>
                            <HoverButton height={10} width={18}>
                                <HStack gap={4}>Let's Talk <AnchorArrow /></HStack>
                            </HoverButton>
                        </HStack>
                    </VStack>
                    <VStack align={isMobile ? 'center' : 'end'} justify={isMobile ? 'center' : 'end'}>
                        <div style={{ height: isMobile ? '280px' : '350px', position: 'relative' }}>
                        <CustomImage src={play_button} style={{position: 'absolute', width: isMobile ? '50px' : '80px', height: isMobile ? '50px' : '80px', left: '-4%', bottom: '-4%'}} />
                            <video
                                src={project_into}
                                width="100%"
                                height="100%"
                                className="glow-shadow"
                                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>
                    </VStack>
                </AutoLayout>
            </MainWrapper>

            <MainWrapper>
                <AutoLayout custom={isMobile ? '1' : "3-1"} order={isMobile ? [2, 1] : [1,2]} style={{overflowX: 'clip'}} className="position-rel">
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

                    {isSplineReady && (
                        <div style={{ width: '100%', height: isMobile ? '200px' : '500px' }}>
                            {/* @ts-ignore */}
                            <spline-viewer 
                                class='robot-3d'
                                // url="https://prod.spline.design/uwFhijbrs1XRDoju/scene.splinecode"
                                url="https://prod.spline.design/qQlSj89U6sM951Cs/scene.splinecode"
                            >
                            {/* @ts-ignore */}
                            </spline-viewer>
                        </div>
                    )}

                </AutoLayout>
            </MainWrapper>

            <LightenCardGrid data={tools}>
                SBC Tools & Systems
            </LightenCardGrid>

            <TechStack />


            <FeaturedProjects />

            <Contact />

            <TeamSection />

        </>
    )
}

export default Home