import { useEffect, useState } from "react";
import AutoLayout from "../components/layout/AutoLayout";
import { HStack } from "../components/layout/HStack";
import MainWrapper from "../components/layout/MainWrapper";
import { VStack } from "../components/layout/VStack";
import BannerSvg from "../components/svgComponents/BannerSvg";
import QuestionMark from "../components/svgComponents/QuestionMark";
import SBLogo from "../components/svgComponents/SBLogo";
import TechStackV2 from "../components/svgComponents/TechStackV2";
import TypewriterText from "../components/typography/TypewriterText";
import Typography from "../components/typography/Typography";
import Accordion from "../components/ui/Accordian/Accordion";
import HoverButton from "../components/ui/Buttons/HoverButton";
import CustomImage from "../components/ui/CustomImage";
import Footer from "../components/ui/Footer";
import Gradient from "../components/ui/Gradient";
import Header from "../components/ui/Header";
import InputField from "../components/ui/Inputs/Input";
import TextArea from "../components/ui/Inputs/TextArea";
import ProjectCard from "../components/ui/ProjectCard";
import TeamSection from "../components/ui/TeamSection";
import WorkDetailCard from "../components/ui/WorkDetailCard";
import { getColor } from "../constants/colors";

import card_img_1 from '../assets/images/png/card-1.png'
import card_img_2 from '../assets/images/png/card-2.png'
import card_img_3 from '../assets/images/png/card-3.png'
import card_img_4 from '../assets/images/png/card-4.png'
import work_img_1 from "../assets/images/png/work-1.png"
import work_img_2 from "../assets/images/png/work-2.png"
import work_img_3 from "../assets/images/png/work-3.png"
import work_img_4 from "../assets/images/png/work-4.png"
import arrow_img from "../assets/images/png/arrow-img.png"
import Send from "../components/icons/Send";
import StickyFooter from "../components/ui/StickyFooter";
import { useScrollToTop } from "../hooks/scrollHook";

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

const projects = [
    {
        projectName: "OddiVille",
        description: "Odiiville is a frozen warehousing and production company specializing in high-quality frozen foods. From farm-fresh frozen corn and peas to ready-to-eat frozen momos, Odiiville ensures freshness, taste, and convenience in every bite. Discover efficient cold storage, reliable supply chains, and a wide range of frozen products crafted for households and businesses alike.",
        banner: work_img_1
    },
    {
        projectName: "Cleanora",
        description: "Cleanora is a professional cleaning service company specializing in deep cleaning for terraces, rooms, halls, and offices. Whether it's a one-time refresh or regular maintenance, Cleanora ensures spotless spaces with eco-friendly products and trained staff. Enjoy a cleaner, healthier environment with fast, reliable, and affordable services tailored to your needs.",
        banner: work_img_2
    },
    {
        projectName: "ZippyKeys",
        description: "ZippyKeys is a typing test website designed for both mobile and desktop practice. Improve your speed and accuracy with customizable tests, unique typing sounds, over 50+ vibrant themes, and multilingual support. Track your progress, challenge friends, and make typing fun and engaging wherever you are.",
        banner: work_img_3
    },
    {
        projectName: "RentIt",
        description: "RentIt is a rental platform that connects you with trusted providers to rent anything you need—homes, offices, furniture like almirahs, cars, clothes, and more. Whether short-term or long-term, RentIt makes renting easy, affordable, and secure, all in one convenient place.",
        banner: work_img_4
    },
]

const contactInputs = [
    {
        field: 'input',
        label: 'Name',
        placeholder: 'Your name',
        color: 'purple',
        textColor: 'light',
    },
    {
        field: 'input',
        label: 'Email',
        placeholder: 'your.email@example.com',
        color: 'purple',
        textColor: 'light',
    },
    {
        field: 'input',
        label: 'Service Type',
        placeholder: 'Type of Service',
        color: 'purple',
        textColor: 'light',
    },
    {
        field: 'input',
        label: 'Subject',
        placeholder: `What's this about?`,
        color: 'purple',
        textColor: 'light',
    },
    {
        field: 'textarea',
        label: 'Message',
        placeholder: `Tell us about your project...`,
        color: 'purple',
        textColor: 'light',
    }
]

const services = [
    {
        id: '1',
        number: '01',
        title: 'What makes your agency different from competitors?',
        content: 'What sets our agency apart is our commitment to quality and adaptability. We continuously learn and work with a diverse range of technologies, including cutting-edge tools used by leading tech giants. Our team is passionate about delivering high-quality results and staying ahead of industry trends to provide innovative and reliable solutions for our clients'
    },
    {
        id: '2',
        number: '02',
        title: 'What happens after a project is completed? Do you offer ongoing support?',
        content: 'Yes, we do offer ongoing support after project completion. The support period depends on the size and scope of the project—typically, we provide up to 3 months of support for smaller projects, and between 6 months to 1 year for larger or more complex projects. We’re committed to ensuring everything runs smoothly even after delivery.'
    },
    {
        id: '3',
        number: '03',
        title: 'What information do you need from a client to get started?',
        content: 'To get started, we need a clear and detailed document outlining all the tasks and requirements, or a meeting where everything can be discussed thoroughly. We’ll also need your company logo, any branding or customization guidelines, and any content you’d like to include—such as copy, images, or other media assets.'
    },
    {
        id: '4',
        number: '04',
        title: 'What industries do you specialize in, if any?',
        content: 'We specialize in building solutions across a wide range of technologies including React.js, AngularJS, Next.js, Remix, Node.js, Express, SQL and NoSQL databases, Redis, Kafka, Docker, and Python. We also work with mobile technologies like React Native, tools like Postman, and AI/chatbot integrations. Additionally, we have experience with Webflow, WordPress, and other modern web platforms. This versatility allows us to serve clients across various industries with tailored, high-quality solutions.'
    },
    {
        id: '5',
        number: '05',
        title: 'How do you typically structure your pricing? (e.g., project-based, retainer, hourly)',
        content: 'We typically structure our pricing based on milestones. The project is divided into 2 to 4 key milestones, depending on its size and complexity. After each milestone is completed and approved, the corresponding payment is received. This approach ensures transparency, accountability, and smooth progress throughout the project.'
    },
];

const Home = () => {

    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        checkMobile(); // Initial check
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useScrollToTop()

    return (
        <>
            <Header />

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

            <MainWrapper>
                <VStack justify='center' align='center' style={{ position: 'relative' }} gap={30}>
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

            <MainWrapper>
                <VStack align='center' justify='center' gap={isMobile ? 80 : 180} >
                    {
                        projects?.map((value, index) => (
                            <WorkDetailCard
                                projectName={value.projectName}
                                banner={value.banner}
                                description={value.description}
                                key={index}
                                index={index}
                            />
                        ))
                    }
                </VStack>
            </MainWrapper>

            <MainWrapper>
                <VStack justify='center' align='center' gap={isMobile ? 0 : 48} style={{ backgroundColor: getColor('purple', 800), borderRadius: '16px', padding: isMobile ? 16 : 32 }}>
                    <AutoLayout custom={isMobile ? '1' : '2-1'} align='start' gap={24} className='w-100' >
                        <VStack justify='center' align='center' gap={24}
                            style={{
                                borderRadius: '16px',
                                background: getColor('overlay'),
                                backgroundBlendMode: 'overlay, normal',
                                backdropFilter: 'blur(40px)',
                                padding: isMobile ? 24 : 32
                            }}
                        >
                            <VStack justify='center' w={`100%`} align='start' gap={isMobile ? 24 : 64}>

                                <VStack justify='center' align='start' gap={4}>
                                    <Typography variant={isMobile ? 'h3' : 'h2'} family='p' color={getColor('light')}>
                                        Let's Connect
                                    </Typography>
                                    <Typography variant={isMobile ? 'b4' : 'b2'} family='jk' color={getColor('light')}>
                                        Reach out to us for your next digital project
                                    </Typography>
                                </VStack>

                                <VStack justify='center' align='center' gap={24} style={{ width: '100%' }}>
                                    <AutoLayout columns={isMobile ? 1 : 2} className='w-100' align='center' gap={24}>
                                        {
                                            contactInputs?.map((value, index) => {
                                                const commonProps = {
                                                    key: index,
                                                    label: value.label,
                                                    placeholder: value.placeholder,
                                                    isFocused: focusedIndex === index,
                                                    onFocusChange: (focused: boolean) => setFocusedIndex(focused ? index : -1),
                                                };

                                                switch (value.field) {
                                                    case 'input':
                                                        return <InputField {...commonProps} />;
                                                    default:
                                                        return null;
                                                }
                                            })
                                        }
                                    </AutoLayout>

                                    <AutoLayout columns={1} className='w-100' align='center' gap={24}>
                                        {
                                            contactInputs?.map((value, index) => {
                                                const commonProps = {
                                                    key: index,
                                                    label: value.label,
                                                    placeholder: value.placeholder,
                                                    isFocused: focusedIndex === index,
                                                    onFocusChange: (focused: boolean) => setFocusedIndex(focused ? index : -1),
                                                };

                                                switch (value.field) {
                                                    case 'textarea':
                                                        return <TextArea {...commonProps} rows={4} />;
                                                    default:
                                                        return null;
                                                }
                                            })
                                        }
                                    </AutoLayout>
                                </VStack>

                                <VStack align='end' justify='center' style={{ width: '100%' }}>
                                    <HoverButton>
                                        Send Message &nbsp; <Send />
                                    </HoverButton>
                                </VStack>

                            </VStack>
                        </VStack>
                        <VStack align='center' justify='center' gap={32}>
                            <QuestionMark />
                            <Accordion items={services} />
                        </VStack>
                    </AutoLayout>
                    <Typography variant='b3' family='jk' color={getColor('purple', 300)}>
                        SBCreations - Building Digital Experiences That Matter.
                    </Typography>
                </VStack>
            </MainWrapper>

            <MainWrapper>
                <TeamSection />
            </MainWrapper>
            
            <Footer />
            {!isMobile && <StickyFooter />}
        </>
    )
}

export default Home