import { useEffect, useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { getColor } from "../../constants/colors"
import Mail from "../icons/Mail"
import Phone from "../icons/Phone"
import { HStack } from "../layout/HStack"
import { VStack } from "../layout/VStack"
import Typography from "../typography/Typography"
import HoverButton from "./Buttons/HoverButton"
import AnchorArrow from "../icons/AnchorArrow"
import { inactiveTime } from "../../utils/common"

const StickyFooter = () => {
    const [visible, setVisible] = useState(false)
    const [footerVisible, setFooterVisible] = useState(false)
    const [isInactive, setIsInactive] = useState(false)

    const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const resetInactivityTimer = () => {
        if (inactivityTimeoutRef.current) {
            clearTimeout(inactivityTimeoutRef.current)
        }
        setIsInactive(false)
        inactivityTimeoutRef.current = setTimeout(() => {
            setIsInactive(true)
        }, inactiveTime)
    }

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset
            const scrolledDown = scrollY > 300
            setVisible(scrolledDown)
            if (scrolledDown) {
                resetInactivityTimer()
            }
        }

        window.addEventListener("scroll", onScroll)
        onScroll()

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        const footerEl = document.querySelector('footer')
        if (!footerEl) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setFooterVisible(entry.isIntersecting)
                if (!entry.isIntersecting) {
                    resetInactivityTimer()
                }
            },
            {
                root: null, // viewport
                threshold: 0.1, // consider visible when 10% is visible
            }
        )

        observer.observe(footerEl)

        return () => {
            if (footerEl) observer.unobserve(footerEl)
        }
    }, [])

    useEffect(() => {
        resetInactivityTimer()

        const handleUserActivity = () => {
            resetInactivityTimer()
        }

        window.addEventListener("mousemove", handleUserActivity)
        window.addEventListener("keydown", handleUserActivity)

        return () => {
            window.removeEventListener("mousemove", handleUserActivity)
            window.removeEventListener("keydown", handleUserActivity)
            if (inactivityTimeoutRef.current) {
                clearTimeout(inactivityTimeoutRef.current)
            }
        }
    }, [])

    const shouldShow = visible && !footerVisible && !isInactive

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: shouldShow ? 0 : 100, opacity: shouldShow ? 1 : 0 }}
                    exit={{ y: 100, opacity: 0 }} 
                    transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                    style={{
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 20,
                        width: "100%",
                        borderRadius: "16px",
                        background: getColor("overlay"),
                        backgroundBlendMode: "overlay, normal",
                        backdropFilter: "blur(40px)",
                        padding: "12px 80px",
                    }}
                >
                    <HStack align="center" justify="between" w="100%">
                        <VStack gap={4}>
                            <VStack gap={2} style={{ cursor: "pointer" }}>
                                <Phone color={getColor("purple", 200)} size={30} />
                                <Typography variant="b5" family="p" color={getColor("purple", 100)}>
                                    Call Us
                                </Typography>
                            </VStack>
                            <Typography variant="b3" style={{fontWeight: '700'}} family="jk" color={getColor("purple", 300)}>
                                +91 83193 21198
                            </Typography>
                        </VStack>

                        <VStack gap={4}>
                            <Typography variant="h3" family="jk" color={getColor("purple", 300)}>
                                Ready to talk ?
                            </Typography>
                            <HoverButton height={10} width={18}>
                                <HStack gap={4}>Let's Connect <AnchorArrow /></HStack>
                            </HoverButton>
                        </VStack>

                        <VStack gap={4}>
                            <VStack gap={2} style={{ cursor: "pointer" }}>
                                <Mail color={getColor("purple", 200)} size={30} />
                                <Typography variant="b5" family="jk" color={getColor("purple", 100)}>
                                    Mail Us
                                </Typography>
                            </VStack>
                            <Typography variant="b3" style={{fontWeight: '700'}} family="jk" color={getColor("purple", 300)}>
                                info@sbcws.com
                            </Typography>
                        </VStack>
                    </HStack>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default StickyFooter
