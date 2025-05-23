import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { getColor } from "../../constants/colors"
import Mail from "../icons/Mail"
import Phone from "../icons/Phone"
import { HStack } from "../layout/HStack"
import { VStack } from "../layout/VStack"
import Typography from "../typography/Typography"
import HoverButton from "./Buttons/HoverButton"
import AnchorArrow from "../icons/AnchorArrow"

const StickyFooter = () => {
    const [visible, setVisible] = useState(false)
    const [footerVisible, setFooterVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset
            setVisible(scrollY > 300)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        const footerEl = document.querySelector('footer')
        if (!footerEl) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setFooterVisible(entry.isIntersecting)
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

    const shouldShow = visible && !footerVisible


    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: shouldShow ? 0 : 100, opacity: shouldShow ? 1 : 0 }}
                    exit={{ y: 100, opacity: 0 }} 
                    // transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                    style={{
                        position: "sticky",
                        bottom: 0,
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
                        <VStack gap={12}>
                            <VStack gap={2} style={{ cursor: "pointer" }}>
                                <Phone color={getColor("purple", 200)} size={40} />
                                <Typography variant="b5" family="p" color={getColor("purple", 100)}>
                                    Call Us
                                </Typography>
                            </VStack>
                            <Typography variant="b2" family="jk" color={getColor("purple", 300)}>
                                +91 83193 21198
                            </Typography>
                        </VStack>

                        <VStack gap={12}>
                            <Typography variant="h3" family="jk" color={getColor("purple", 300)}>
                                Ready to talk ?
                            </Typography>
                            <HoverButton>
                                <HStack gap={4}>Let's Connect <AnchorArrow /></HStack>
                            </HoverButton>
                        </VStack>

                        <VStack gap={12}>
                            <VStack gap={2} style={{ cursor: "pointer" }}>
                                <Mail color={getColor("purple", 200)} size={40} />
                                <Typography variant="b5" family="jk" color={getColor("purple", 100)}>
                                    Mail Us
                                </Typography>
                            </VStack>
                            <Typography variant="b2" family="jk" color={getColor("purple", 300)}>
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
