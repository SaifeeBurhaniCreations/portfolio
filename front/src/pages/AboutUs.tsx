import { useEffect, useRef } from "react";
import { FooterFadeInAnimation } from "../components/animation/animation";
import { useScrollToTop } from "../hooks/scrollHook";
import useResize from "../hooks/useResize";
import MainWrapper from "../components/layout/MainWrapper";
import VStack from "../components/layout/VStack";
import PageTitleBadge from "../components/ui/PageTitleBadge";
import Typography from "../components/typography/Typography";
import { getColor } from "../constants/colors";
import OurStorySection from "../components/ui/OurStorySection";
import LightenCardGrid from "../components/ui/LightenCardGrid";
import innovation from '../assets/images/png/innovation.png'
import excellence from '../assets/images/png/excellence.png'
import collaboration from '../assets/images/png/collaboration.png'
import growth from '../assets/images/png/growth-2.png'
import CustomImage from "../components/ui/CustomImage";
import { HStack } from "../components/layout/HStack";
import Verified from "../components/icons/Verified";
import rocket from '../assets/images/png/rocket-2.png'
import vision from '../assets/images/png/vision.png'
import code from '../assets/images/png/code.png'
import star from '../assets/images/png/star.png'
import experience from '../assets/images/png/experience.png'
import AutoLayout from "../components/layout/AutoLayout";
import CountUp from "../components/ui/CountUp";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ContentInfo } from "../types";
import StackCard from "../components/ui/Cards/StackCard";
import InfoCard from "../components/ui/Cards/InfoCard";
import { useNavigate } from "react-router-dom";

const tools = [
    {
        banner: innovation,
        heading: "Innovation",
        description: "Seamless in-house app deployment platform. Automate delivery with ease. Get 1 month free for real client deployment.",
    },
    {
        banner: collaboration,
        heading: "Collaboration",
        description: "Smart utility monitoring and analytics. Optimize usage, reduce costs, and gain insights instantly. Get started with a 1-month free trial for real-time data tracking.",
    },
    {
        banner: excellence,
        heading: "Excellence",
        description: "All-in-one ERP solution for growing businesses. Manage operations, finance, and inventory with ease. Start with a 1-month free trial and streamline your workflow today.",
    },
    {
        banner: growth,
        heading: "Growth",
        description: "A complete dev kit with hooks, design & icon libraries, and prebuilt frameworks. Build faster with our optimized starter kits. Try it free for 1 month.",
    }
]

const impactsInNumbers = [
    {
        icon: rocket,
        count: 30,
        prefix: '+',
        title: 'Projects Completed'
    },
    {
        icon: experience,
        count: 3,
        prefix: '+',
        title: 'Years Experience'
    },
    {
        icon: star,
        count: 100,
        prefix: '%',
        title: 'Client Satisfaction'
    },
    {
        icon: code,
        count: 75,
        prefix: '+',
        title: 'Tech Stack Expertise'
    },
]


const contentInfo: ContentInfo[] = [
    {
        title: 'Our Mission',
        content: `At Safiee Burhani Creations, our mission is to deliver smart, scalable, and high-quality digital solutions that empower businesses and individuals. We blend creativity, technology, and strategy to solve today's problems while preparing for tomorrow — ensuring accessibility, reliability, and impact in every product we build.`,
        icon: rocket,
        points: [
            'Scalable digital solutions',
            'Future-ready technologies',
            'Quality without compromise'
        ]
    },
    {
        title: 'Our Vision',
        content: `Our vision is to simplify technology and create purposeful digital experiences that transform how people live and work. We aim to bridge innovation and usability, enabling global growth through inclusive, human-centered solutions that inspire trust, drive progress, and redefine what's possible with tech — one project at a time.`,
        icon: vision,
        points: [
            'Human-centered innovation',
            'Tech that inspires trust',
            'Simplifying digital progress'
        ]
    }
];

type CardProps = ContentInfo & { index?: number };

const Card: React.FC<CardProps> = ({ title, icon, content, points }) => {

    const isMobile = useResize()
    
    return (
        <VStack align='center' justify='center' gap={isMobile ? 16 : 24} className='misson-vision-card w-100' style={{ background: getColor('overlay', 400), border: `1px solid ${getColor("purple", 300, 0.6)}` }}>
            <HStack className="icon-badge" align="center" justify="center" style={{ background: getColor('purple', 500, 0.4) }}>
                <CustomImage borderRadius={0} height={isMobile ? 30 : 60} width={isMobile ? 30 : 60} src={icon!} />
            </HStack>
            <Typography isAnimate variant={isMobile ? 'h3' : "h2"} family="p" color={getColor('light')}>
                {title}
            </Typography>
            <Typography isAnimate align="center" variant={isMobile ? 'b4' : "b3"} family="jk" color={getColor('purple', 100)}>
                {content}
            </Typography>
            <HStack align="center" direction={isMobile ? 'column' : 'row'} justify="center" gap={isMobile ? 16 : 24}>
                {
                    points?.map((value, index) => (
                        <PageTitleBadge size={isMobile ? 'xs' : 'md'} key={index} bg={getColor('purple', 700)} color={getColor('purple', 200)} badge={false}>
                            <Verified color={getColor('purple', 200)} size={24} /> {value}
                        </PageTitleBadge>
                    ))
                }
            </HStack>
        </VStack>
    );
};

const AboutUs = () => {

    const services = useSelector((state: RootState) => state.ServiceReducer.data);
    const navigate = useNavigate()

    const isMobile = useResize();
    const sectionRef = useRef(null)


    useEffect(() => {
        FooterFadeInAnimation(sectionRef)
    }, [])

    useScrollToTop();


    return (
        <>
            <MainWrapper>
                <VStack ref={sectionRef} align="center" justify="center" gap={isMobile ? 12 : 24}>
                    <PageTitleBadge>
                        About Us
                    </PageTitleBadge>

                    <Typography isGradient variant={isMobile ? "h2" : "xl"} align="center" family="jk" color={getColor('purple', 200)}>
                        Welcome to Our World
                    </Typography>
                    <Typography variant={isMobile ? "h5" : "b2"} align="center" family="p" color={getColor('purple', 100)}>
                        Where creativity meets technology to build digital experiences that matter
                    </Typography>
                </VStack>
            </MainWrapper>

            <OurStorySection />


            <MainWrapper>
                <VStack align='center' justify='center' gap={32} className='w-100 p-5' style={{ background: getColor('purple', 600, 0.6), border: `1px solid ${getColor("purple", 300, 0.8)}`, borderRadius: '16px' }}>
                    <Typography variant={isMobile ? 'h3' : "h2"} family="p" color={getColor('light')}>
                        Our Impact in Numbers
                    </Typography>
                    <AutoLayout columns={isMobile ? 2 : 4} align='start' className="w-100">
                        {impactsInNumbers.map((item, idx) => (
                            <VStack key={idx} align="center" justify="center" gap={isMobile ? 12 : 8}>
                                <CustomImage borderRadius={0} src={item.icon} />
                                <Typography variant={isMobile ? 'h3' : "h2"} family="p" color={getColor('light')}>
                                    <CountUp end={item.count} prefix={item.prefix} />
                                </Typography>
                                <Typography variant={isMobile ? 'b5' : "b4"} family="jk" color={getColor('purple', 100)}>
                                    {item.title}
                                </Typography>
                            </VStack>
                        ))}
                    </AutoLayout>
                </VStack>
            </MainWrapper>

            <MainWrapper>
                <VStack align="start" justify="center" gap={32}>
                    <Typography
                        isHeading
                        variant={isMobile ? "h3" : "h2"}
                        align="left"
                        family="p"
                        style={{ fontWeight: 400 }}
                        color={getColor("light")}
                    >
                        Our Mission & Vision
                    </Typography>
                    <StackCard>
                        {contentInfo?.map((item: ContentInfo, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                content={item.content}
                                icon={item.icon}
                                points={item.points}
                            />
                        ))}
                    </StackCard>
                </VStack>
            </MainWrapper>

            <LightenCardGrid data={tools} description="The fundamental principles that guide every decision we make and every solution we create">
                Our Core Values
            </LightenCardGrid>

            <MainWrapper>
                <VStack align='center' justify='center' gap={32} className='w-100'>
                    <VStack align='start' justify='center' gap={12} className='w-100'>
                        <Typography isHeading variant="h2" family="p" color={getColor('light')}>
                            What We Do
                        </Typography>
                        <Typography variant="b3" family="jk" color={getColor('light')}>
                            From concept to deployment, we offer comprehensive digital solutions that drive growth and innovation
                        </Typography>
                    </VStack>
                    <AutoLayout columns={isMobile ? 1 : 3} gap={32} align="stretch">
                        {
                            services?.map((value, index) => (
                                <InfoCard {...value} onClick={()=>navigate(`/service/${value?.url}`)} key={index} />
                            ))
                        }
                    </AutoLayout>
                </VStack>
            </MainWrapper>
        </>
    )
}

export default AboutUs