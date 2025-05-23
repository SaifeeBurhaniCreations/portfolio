import { useState } from "react";
import { getColor } from "../../constants/colors";
import useResize from "../../hooks/useResize";
import Send from "../icons/Send";
import AutoLayout from "../layout/AutoLayout";
import MainWrapper from "../layout/MainWrapper";
import { VStack } from "../layout/VStack";
import QuestionMark from "../svgComponents/QuestionMark";
import Typography from "../typography/Typography";
import Accordion from "./Accordian/Accordion";
import HoverButton from "./Buttons/HoverButton";
import InputField from "./Inputs/Input";
import TextArea from "./Inputs/TextArea";

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

const Form = ({ isMobile }: {isMobile: boolean}) => {

    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);


    return(
        <>
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
        </>
    )
}

const FAQ = () => {
    return (
        <>
            <VStack align='center' justify='center' gap={32}>
                <QuestionMark />
                <Accordion items={services} />
            </VStack>
        </>
    )
}

const Contact = () => {

    const isMobile = useResize()

    return (
        <>
            <MainWrapper>
                <VStack justify='center' align='center' gap={isMobile ? 0 : 48} style={{ backgroundColor: getColor('purple', 800), borderRadius: '16px', padding: isMobile ? 16 : 32 }}>
                    <AutoLayout custom={isMobile ? '1' : '2-1'} align='start' gap={24} className='w-100' >
                        <Form isMobile={isMobile} />

                        <FAQ />
                    </AutoLayout>
                    <Typography variant='b3' family='jk' color={getColor('purple', 300)}>
                        SBCreations - Building Digital Experiences That Matter.
                    </Typography>
                </VStack>
            </MainWrapper>
        </>
    )
}

export default Contact