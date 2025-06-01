import MainWrapper from "../components/layout/MainWrapper"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import CustomImage from "../components/ui/CustomImage"
import { getColor } from "../constants/colors"
import VStack from "../components/layout/VStack"
import { useParams } from "react-router-dom"
import { detailedPageData } from "../constants/services"
import Typography from "../components/typography/Typography"
import Gradient from "../components/ui/Gradient"
import { useEffect, useRef } from "react"
import { FooterFadeInAnimation } from "../components/animation/animation"
import { useScrollToTop } from "../hooks/scrollHook"
import AutoLayout from "../components/layout/AutoLayout"
import { parseDelimitedArray } from "../utils/parseDelimitedArray"
import InfoCard from "../components/ui/Cards/InfoCard"
import FlipCard from "../components/ui/Cards/FlipCard"
import Tabs from "../components/ui/Tabs"

const ChooseUsComponent = ({ parsedChoose }) => {
    return (
        <VStack align='start' justify='center'>
            <AutoLayout columns={3} gap={24} align="stretch" className="w-100">
                {
                    parsedChoose?.map((value, index) => (
                        <InfoCard tiltOnHover key={index} iconSize='md' {...value} />
                    ))
                }
            </AutoLayout>
        </VStack>
    )
}

const ProcessComponent = ({ parsedChoose }) => {
    return (
        <VStack align='start' justify='center'>
            <AutoLayout columns={3} gap={24} align="stretch" className="w-100">
                {
                    parsedChoose?.map((value, index) => (
                        <InfoCard tiltOnHover key={index} iconSize='md' {...value} />
                    ))
                }
            </AutoLayout>
        </VStack>
    )
}



const Service = () => {

    const param = useParams();
    const sectionRef = useRef(null)

    const { id } = param
    const serviceData = detailedPageData[id]
    const { flip, choose, head, offer, process } = serviceData;

    const parsedOffer = parseDelimitedArray(offer, ['icon', 'title', 'content'])
    const parsedChoose = parseDelimitedArray(choose, ['icon', 'title', 'content'])

    const { icon, content } = flip;

    useEffect(() => {
        FooterFadeInAnimation(sectionRef)
    }, [])

    useScrollToTop()

    return (
        <>
            <MainWrapper>
                <ParallaxProvider>
                    <VStack ref={sectionRef} align='center' justify='center' gap={24} className='position-rel'>
                        <Gradient width={400} coordinates={{ left: '50%', top: '45%', transform: `translate(-50%, -50%)` }} />
                        <FlipCard
                            front={
                                <VStack align='center' justify='center'>
                                    <Parallax speed={-4}>
                                        <CustomImage borderRadius={0} imgStyle={{ objectFit: 'cover' }} src={icon} style={{ height: '120px', width: '120px' }} className="animate-float" />
                                    </Parallax>
                                </VStack>
                            }
                            back={
                                <VStack align='center' justify='center' style={{ padding: '12px' }}>
                                    <Typography variant='b4' align="center" family="p" color={getColor('purple', 100)}>
                                        {content}
                                    </Typography>
                                </VStack>
                            }
                            className='cursor-pointer'
                            padding="0"
                            radius="50%"
                            aspectRatio="1 / 1"
                            frontBg={getColor('overlay', 400)}
                            backBg={getColor('overlay', 400)}
                            height="200px"
                            width="200px"
                        />
                        {
                            head?.map((value, index) => {
                                if (index === 0) {
                                    return (
                                        <Typography variant="xl" align="center" family="jk" color={getColor('purple', 200)}>
                                            {value}
                                        </Typography>
                                    )
                                } else {
                                    return (
                                        <Typography style={{ width: '80%' }} variant='b2' align="center" family="p" color={getColor('purple', 100)}>
                                            {value}
                                        </Typography>
                                    )
                                }
                            })
                        }
                    </VStack>
                </ParallaxProvider>
            </MainWrapper>


            <MainWrapper>
                <VStack align='start' justify='center'>
                    <Typography isHeading variant="h2" family="p" color={getColor('light')}>
                        What We Offer
                    </Typography>
                    <AutoLayout columns={3} gap={24} className="w-100">
                        {
                            parsedOffer?.map((value, index) => (
                                <InfoCard tiltOnHover key={index} iconSize='md' {...value} />
                            ))
                        }
                    </AutoLayout>
                </VStack>
            </MainWrapper>

            <MainWrapper>
                <Tabs
                    tabs={[
                        { label: "Why Choose Us", content: <ChooseUsComponent parsedChoose={parsedChoose} /> },
                        { label: "Our Process", content: <ProcessComponent parsedChoose={parsedChoose} /> },
                        { label: "Technologies", content: <ChooseUsComponent parsedChoose={parsedChoose} /> },
                    ]}
                />
            </MainWrapper>
        </>
    )
}

export default Service