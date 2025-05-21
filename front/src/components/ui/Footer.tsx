import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import AutoLayout from '../layout/AutoLayout'
import { VStack } from '../layout/VStack'
import Typography from '../typography/Typography'
import { getColor } from '../../constants/colors'
import { HStack } from '../layout/HStack'
import Home from '../icons/Home'
import Button from './Buttons/Button'

const Footer = () => {

    const sectionRef = useRef(null)


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(sectionRef.current,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play none none reverse"
                }
            }
        )
    }, [])

    return (
        <>
            <footer className='footer w-100' ref={sectionRef} style={{ backgroundColor: getColor('purple', 800) }}>
                <AutoLayout ref={sectionRef} align='start' justify='center' custom='1-2-1' gap={48} style={{ width: "100%", height: "100%" }}>

                    <VStack justify='between' align='start' style={{ height: "100%" }} >

                        <VStack justify='center' align='start' gap={24}>
                            <Typography family='jk' variant='b4' color={getColor('light')}>Pages</Typography>
                            <div className="navlinks revert">
                                <ul>
                                    <li>
                                        <HStack align='center' justify='center' gap={6}>
                                            <Home />
                                            <Typography family='jk' variant='b4' color={getColor('light')}>Home</Typography>
                                        </HStack>
                                    </li>
                                    <li>
                                        <HStack align='center' justify='center' gap={6}>
                                            <Home />
                                            <Typography family='jk' variant='b4' color={getColor('light')}>About</Typography>
                                        </HStack>
                                    </li>
                                    <li>
                                        <HStack align='center' justify='center' gap={6}>
                                            <Home />
                                            <Typography family='jk' variant='b4' color={getColor('light')}>Projects</Typography>
                                        </HStack>
                                    </li>
                                    <li>
                                        <HStack align='center' justify='center' gap={6}>
                                            <Home />
                                            <Typography family='jk' variant='b4' color={getColor('light')}>Blogs</Typography>
                                        </HStack>
                                    </li>
                                </ul>
                            </div>
                        </VStack>

                        <Typography family='jk' variant='b4' color={getColor('light')}>2025 All Rights are Reserved</Typography>

                    </VStack>

                    <VStack justify='center' align='center' gap={24}>
                        <Typography family='jk' variant='b4' color={getColor('light')}>REACH OUT US</Typography>
                        <VStack>
                            <Typography family='jk' variant='h2' color={getColor('light')}>(+91) 83193 21198</Typography>
                            <Typography family='jk' variant='h2' color={getColor('light')}>info@sbcreations.com</Typography>
                        </VStack>
                        <Button><HStack gap={4}>Let's Connect <Home /></HStack></Button>
                    </VStack>

                    <VStack justify='between' align='end' style={{ height: "100%" }} >

                        <VStack justify='center' align='end' gap={24}>
                            <Typography family='jk' variant='b4' color={getColor('light')}>Socials</Typography>
                            <div className="navlinks revert right">
                                <ul>
                                    <li>
                                        <HStack align='center' justify='center' gap={6}>
                                            <Home />
                                            <Typography family='jk' variant='b4' color={getColor('light')}>Instagram</Typography>
                                        </HStack>
                                    </li>
                                    <li>
                                        <HStack align='center' justify='center' gap={6}>
                                            <Home />
                                            <Typography family='jk' variant='b4' color={getColor('light')}>Github</Typography>
                                        </HStack>
                                    </li>
                                    <li>
                                        <HStack align='center' justify='center' gap={6}>
                                            <Home />
                                            <Typography family='jk' variant='b4' color={getColor('light')}>LinkedIn</Typography>
                                        </HStack>
                                    </li>
                                    <li>
                                        <HStack align='center' justify='center' gap={6}>
                                            <Home />
                                            <Typography family='jk' variant='b4' color={getColor('light')}>Twitter</Typography>
                                        </HStack>
                                    </li>
                                </ul>
                            </div>
                        </VStack>

                        <HStack gap={16} w={`100%`} justify='end' align='center'>
                            <Typography family='jk' variant='b4' color={getColor('light')}>Terms & Condition</Typography>
                            <Typography family='jk' variant='b4' color={getColor('light')}>|</Typography>
                            <Typography family='jk' variant='b4' color={getColor('light')}>Privacy Policy</Typography>
                        </HStack>

                    </VStack>

                </AutoLayout>
            </footer>
        </>
    )
}

export default Footer