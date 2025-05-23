import { useEffect, useRef, useState } from 'react'
import AutoLayout from '../layout/AutoLayout'
import { VStack } from '../layout/VStack'
import Typography from '../typography/Typography'
import { getColor } from '../../constants/colors'
import { HStack } from '../layout/HStack'
import AnchorArrow from '../icons/AnchorArrow'
import { FooterFadeInAnimation } from '../animation/animation'
import HoverButton from './Buttons/HoverButton'

const Pages = ({ isMobile = false }:{isMobile: boolean}) => {
    return (
        <>
            <VStack gap={12} justify='between' align='start' style={{ height: "100%" }} >

                <VStack justify='center' align='start' gap={isMobile ? 16 : 24}>
                    <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>Pages</Typography>
                    <div className="navlinks revert">
                        <ul>
                            <li>
                                <HStack align='center' justify='center' gap={isMobile ? 2 : 6}>
                                    <AnchorArrow />
                                    <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>Home</Typography>
                                </HStack>
                            </li>
                            <li>
                                <HStack align='center' justify='center' gap={isMobile ? 2 : 6}>
                                    <AnchorArrow />
                                    <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>About</Typography>
                                </HStack>
                            </li>
                            <li>
                                <HStack align='center' justify='center' gap={isMobile ? 2 : 6}>
                                    <AnchorArrow />
                                    <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>Projects</Typography>
                                </HStack>
                            </li>
                            <li>
                                <HStack align='center' justify='center' gap={isMobile ? 2 : 6}>
                                    <AnchorArrow />
                                    <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>Blogs</Typography>
                                </HStack>
                            </li>
                        </ul>
                    </div>
                </VStack>

                <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>2025 All Rights are Reserved</Typography>

            </VStack>
        </>
    )
}

const Socials = ({ isMobile = false }:{isMobile: boolean}) => {
    return (
        <>
            <VStack gap={12} justify='between' align='end' style={{ height: "100%" }} >

            <VStack justify='center' align='end' gap={isMobile ? 16 : 24}>
                <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>Socials</Typography>
                <div className="navlinks revert right">
                    <ul>
                        <li>
                            <HStack align='center' justify='center' gap={isMobile ? 2 : 6}>
                                <AnchorArrow />
                                <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>Instagram</Typography>
                            </HStack>
                        </li>
                        <li>
                            <HStack align='center' justify='center' gap={isMobile ? 2 : 6}>
                                <AnchorArrow />
                                <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>Github</Typography>
                            </HStack>
                        </li>
                        <li>
                            <HStack align='center' justify='center' gap={isMobile ? 2 : 6}>
                                <AnchorArrow />
                                <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>LinkedIn</Typography>
                            </HStack>
                        </li>
                        <li>
                            <HStack align='center' justify='center' gap={isMobile ? 2 : 6}>
                                <AnchorArrow />
                                <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>Twitter</Typography>
                            </HStack>
                        </li>
                    </ul>
                </div>
            </VStack>

            <Typography family='jk' align='right' variant={isMobile ? 'b6' : 'b4'} color={getColor('light')}>Terms & Condition | Privacy Policy</Typography>
{/* 
            <HStack gap={16} w={`100%`} justify='end' align='center'>
                <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>Terms & Condition</Typography>
                <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>|</Typography>
                <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>Privacy Policy</Typography>
            </HStack> */}

            </VStack>
        </>
    )
}

const ContactInfo = ({ isMobile = false }:{isMobile: boolean}) => {
    return (
        <>  
            <VStack justify='center' align='center' gap={isMobile ? 16 : 24}>
                <Typography family='jk' variant={isMobile ? 'caption' : 'b4'} color={getColor('light')}>REACH OUT US</Typography>
                <VStack>
                    <Typography family='jk' variant='h2' color={getColor('light')}>(+91) 83193 21198</Typography>
                    <Typography family='jk' variant='h2' color={getColor('light')}>info@sbcws.com</Typography>
                </VStack>
                <HoverButton>
                    <HStack gap={4}>Let's Connect <AnchorArrow /></HStack>
                </HoverButton>
            </VStack>
        </>
    )
}

const Footer = () => {

    const sectionRef = useRef(null)
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        checkMobile(); // Initial check
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);


    // useEffect(() => {
    //     FooterFadeInAnimation(sectionRef)
    // }, [])

    return (
        <>
            <footer className='footer w-100' ref={sectionRef} style={{ backgroundColor: getColor('purple', 800) }}>
                {
                    isMobile ? (
                        <VStack w={`100%`} align='center' gap={16} justify='center'>
                            <ContactInfo isMobile={isMobile} />
                            <HStack w={`100%`} justify='between' gap={12} align='center'>
                                <Pages isMobile={isMobile} />
                                <Socials isMobile={isMobile} />
                            </HStack>
                        </VStack>
                    ) : (
                        <AutoLayout ref={sectionRef} align='start' justify='center' custom='1-2-1' gap={48} style={{ width: "100%", height: "100%" }}>

                            <Pages isMobile={isMobile} />

                            <ContactInfo isMobile={isMobile} />

                            <Socials isMobile={isMobile} />

                        </AutoLayout>
                    )
                }
            </footer>
        </>
    )
}

export default Footer