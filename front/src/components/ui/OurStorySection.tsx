import partners from '../../assets/images/png/partners.png'
import { getColor } from "../../constants/colors";
import MainWrapper from '../layout/MainWrapper';
import VStack from '../layout/VStack';
import Typography from '../typography/Typography';
import CustomImage from './CustomImage';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import { HStack } from '../layout/HStack';
import HoverButton from './Buttons/HoverButton'
import AnchorArrow from '../icons/AnchorArrow';
import useResize from '../../hooks/useResize';
import FlipCard from './Cards/FlipCard';

const OurStorySection = () => {

    const isMobile = useResize()

    return (
        <ParallaxProvider>
            <MainWrapper>
                <HStack align='center' direction={isMobile ? 'column' : 'row'} justify='center' gap={24}>
                    <FlipCard
                        front={
                                <Parallax speed={-8}>
                                    <CustomImage src={partners} className="animate-float" />
                                </Parallax>
                            }
                            back={
                                <VStack gap={16}>
                                    <Typography align="center" variant={isMobile ? 'b6' : "b4"} family="p" color="#f3e8ff">
                                        👋 Hello from SBC
                                    </Typography>
                                    <Typography align="center" variant={isMobile ? 'b6' : "b4"} family="p" color="#f3e8ff">
                                        We're the makers of Safiee Burhani Creations. Clean code, clear purpose, strong delivery — that's what we stand for.
                                    </Typography>
                                    <Typography align="center" variant={isMobile ? 'b6' : "b4"} family="p" style={{ fontWeight: 500 }} color="#f3e8ff">
                                        💬 Fun Fact: SBC started with two laptops & a dream.
                                    </Typography>
                                </VStack>
                            }
                            width={isMobile ? '280px' : '400px'}
                            className='cursor-pointer'
                            radius="50%"
                            aspectRatio="1 / 1"
                            frontBg={getColor('overlay', 300)}
                        backBg={getColor('purple', 600, 0.9)}
                    />
                    <VStack align='start' justify='center' gap={24}>
                        <Typography isHeading variant='h2' family='p' color={getColor('light')}>
                            Our Story
                        </Typography>
                        <VStack align='center' justify='center' gap={16}>
                            <Typography variant={isMobile ? 'b4' : 'b3'} family='jk' color={getColor('purple', 100)}>
                                Founded with a vision to bridge the gap between innovative technology and meaningful user experiences, Saifee Burhani Creations has evolved from a passionate idea into a full-service digital powerhouse.
                            </Typography>
                            <Typography variant={isMobile ? 'b4' : 'b3'} family='jk' color={getColor('purple', 100)}>
                                We believe that exceptional digital products emerge from the perfect synthesis of creativity, technology, and deep understanding of human behavior. Our multidisciplinary team combines diverse expertise to create solutions that don't just look stunning—they drive tangible business results and create lasting impact.
                            </Typography>
                        </VStack>
                        <HoverButton style={{ alignSelf: 'end' }} height={isMobile ? 8 : 10} width={isMobile ? 16 : 24}>
                            <HStack gap={4}>Let's Connect <AnchorArrow /></HStack>
                        </HoverButton>
                    </VStack>
                </HStack>
            </MainWrapper>
        </ParallaxProvider>
    );
};

export default OurStorySection;
