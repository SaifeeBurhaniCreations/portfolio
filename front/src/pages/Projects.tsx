import { useEffect } from "react"
import { useRef } from "react"
import MainWrapper from "../components/layout/MainWrapper"
import { VStack } from "../components/layout/VStack"
import Typography from "../components/typography/Typography"
import PageTitleBadge from "../components/ui/PageTitleBadge"
import { getColor } from "../constants/colors"
import useResize from "../hooks/useResize"
import { FooterFadeInAnimation } from "../components/animation/animation"
import OurWorkProcess from "../components/ui/OurWorkProcess"
import AutoLayout from "../components/layout/AutoLayout"
import CustomImage from "../components/ui/CustomImage"
import about_project from "../assets/images/png/about-project.png"
import HoverButton from "../components/ui/Buttons/HoverButton"
import { HStack } from "../components/layout/HStack"
import AnchorArrow from '../components/icons/AnchorArrow'
import { useScrollToTop } from "../hooks/scrollHook"
import work_img_1 from "../assets/images/png/work-1.png"
import work_img_2 from "../assets/images/png/work-2.png"
import work_img_3 from "../assets/images/png/work-3.png"
import work_img_4 from "../assets/images/png/work-4.png"
import ProjectsGrid from "../components/ui/ProjectsGrid"
import StackCard from "../components/ui/Cards/StackCard"
import CustomCard from "../components/ui/Cards/CustomCard"


const featuredProjects = [
    {
        projectName: "OddiVille",
        description: "Odiiville is a frozen warehousing and production company specializing in high-quality frozen foods. From farm-fresh frozen corn and peas to ready-to-eat frozen momos, Odiiville ensures freshness, taste, and convenience in every bite. Discover efficient cold storage, reliable supply chains, and a wide range of frozen products crafted for households and businesses alike.",
        banner: work_img_1,
        href: "/",
        technologies: ['React', 'Node', 'MongoDB', 'Socket', 'AWS']
    },
    {
        projectName: "Cleanora",
        description: "Cleanora is a professional cleaning service company specializing in deep cleaning for terraces, rooms, halls, and offices. Whether it's a one-time refresh or regular maintenance, Cleanora ensures spotless spaces with eco-friendly products and trained staff. Enjoy a cleaner, healthier environment with fast, reliable, and affordable services tailored to your needs.",
        banner: work_img_2,
        href: "/",
        technologies: ['React', 'Node', 'MongoDB', 'Socket']
    },
    {
        projectName: "ZippyKeys",
        description: "ZippyKeys is a typing test website designed for both mobile and desktop practice. Improve your speed and accuracy with customizable tests, unique typing sounds, over 50+ vibrant themes, and multilingual support. Track your progress, challenge friends, and make typing fun and engaging wherever you are.",
        banner: work_img_3,
        href: "/",
        technologies: ['React', 'Node', 'MongoDB', 'Socket']
    },
    {
        projectName: "RentIt",
        description: "RentIt is a rental platform that connects you with trusted providers to rent anything you need—homes, offices, furniture like almirahs, cars, clothes, and more. Whether short-term or long-term, RentIt makes renting easy, affordable, and secure, all in one convenient place. Whether short-term or long-term, RentIt makes renting easy, affordable, and secure, all in one convenient place.",
        banner: work_img_4,
        href: "/",
        technologies: ['React', 'Node', 'MongoDB', 'Socket']
    },
]
const projects = [
    {
        projectName: "OddiVille",
        description: "Odiiville is a frozen warehousing and production company specializing in high-quality frozen foods. ",
        banner: work_img_1,
        href: "/",
        technologies: ['React', 'Node', 'MongoDB', 'Socket', 'AWS']
    },
    {
        projectName: "Cleanora",
        description: "Cleanora is a professional cleaning service company specializing in deep cleaning for terraces, rooms, halls, and offices.",
        banner: work_img_2,
        href: "/",
        technologies: ['React', 'Node', 'MongoDB', 'Socket']
    },
    {
        projectName: "ZippyKeys",
        description: "ZippyKeys is a typing test website designed for both mobile and desktop practice.",
        banner: work_img_3,
        href: "/",
        technologies: ['React', 'Node', 'MongoDB', 'Socket']
    },
    {
        projectName: "RentIt",
        description: "RentIt is a rental platform that connects you with trusted providers to rent anything you need—homes, offices, furniture like almirahs, cars, clothes, and more.",
        banner: work_img_4,
        href: "/",
        technologies: ['React', 'Node', 'MongoDB', 'Socket']
    },
]

const Projects = () => {

    const aboutRef = useRef(null)
    const isMobile = useResize();
    const sectionRef = useRef(null)


    useEffect(() => {
        FooterFadeInAnimation(sectionRef)
    }, [])

    useEffect(() => {
        FooterFadeInAnimation(aboutRef)
    }, [])

    useScrollToTop();
    return (
        <>
            <MainWrapper>
                <VStack ref={sectionRef} align="center" justify="center" gap={isMobile ? 12 : 24}>
                    <PageTitleBadge>
                        Our Work
                    </PageTitleBadge>
                    
                    <Typography variant={isMobile ? "h2" : "xl"} align="center" family="jk" color={getColor('purple', 200)}>
                        Showcasing Our Projects
                    </Typography>
                    <Typography variant={isMobile ? "h5" : "h3"} align="center" family="p" color={getColor('purple', 100)}>
                        Explore our portfolio of innovative digital solutions crafted with precision and passion
                    </Typography>
                </VStack>
            </MainWrapper>

            <MainWrapper>
                <AutoLayout columns={isMobile ? 1 : 2} gap={24} align="stretch">
                    <CustomImage src={about_project} isAnimate={true} style={{ height: `${isMobile ? '250px' : '300px'}` }} width={`100%`} imgStyle={{ objectFit: 'cover' }} />
                    <VStack ref={aboutRef} align="start" justify="between" gap={isMobile ? 12 : 24} style={{ height: '100%' }}>
                        <Typography
                            variant={isMobile ? "h3" : "h2"}
                            align="left"
                            family="p"
                            style={{ fontWeight: 400 }}
                            color={getColor("light")}
                        >
                            How We Work & What We Do
                        </Typography>
                        <Typography variant={isMobile ? 'b4' : 'b2'} family="jk" color={getColor('purple', 100)} >
                            At Safiee Burhani Creations, we specialize in delivering reliable, scalable, and high-quality IT solutions. Whether it's custom software, web applications, or full-stack product development, we combine modern technology with a commitment to quality—no compromises. From startups to enterprises, we partner to turn ideas into robust digital products that scale with your vision.
                        </Typography>
                        <HoverButton style={{ alignSelf: 'end' }} height={isMobile ? 8 : 10} width={isMobile ? 16 : 24}>
                            <HStack gap={4}>Let's Connect <AnchorArrow /></HStack>
                        </HoverButton>
                    </VStack>
                </AutoLayout>
            </MainWrapper>

            <OurWorkProcess />

            <MainWrapper>
                <VStack align="start" justify="center" gap={32}>
                    <Typography
                        variant={isMobile ? "h3" : "h2"}
                        align="left"
                        family="p"
                        style={{ fontWeight: 400 }}
                        color={getColor("light")}
                    >
                        Featured Projects
                    </Typography>
                    <StackCard>
                        {
                            featuredProjects?.map((item, index) => {
                                const type = (index + 1) % 2 === 0 ? 'even' : 'odd';
                                return (
                                    <CustomCard
                                        type={type}
                                        heading={item.projectName}
                                        description={item.description}
                                        technologies={item.technologies}
                                        button={item.href}
                                        image={item.banner}
                                    />
                                )
                            })
                        }
                    </StackCard>
                </VStack>
            </MainWrapper>

            <ProjectsGrid projects={projects} />
        </>
    )
}

export default Projects