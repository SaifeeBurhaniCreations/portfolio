import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
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
    const sectionRef = useRef(null)

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset
            setVisible(scrollY > 300) // show after scrolling 300px
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <motion.div
            ref={sectionRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
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
    )
}

export default StickyFooter
