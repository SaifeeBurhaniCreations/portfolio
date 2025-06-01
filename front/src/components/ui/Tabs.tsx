import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HStack } from "../layout/HStack";
import Typography from "../typography/Typography";
import { getColor } from "../../constants/colors";

type Tab = {
    label: string;
    content: React.ReactNode;
};

interface TabsProps {
    tabs: Tab[];
    initialIndex?: number;
}

const Tabs: React.FC<TabsProps> = ({ tabs, initialIndex = 0 }) => {
    const [active, setActive] = useState(initialIndex);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // For animated glass glider
    const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const node = tabRefs.current[active];
        if (node) {
            setIndicatorProps({
                left: node.offsetLeft,
                width: node.offsetWidth,
            });
        }
    }, [active, tabs.length]);

    const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
        if (e.key === "ArrowRight") {
            const next = (idx + 1) % tabs.length;
            setActive(next);
            tabRefs.current[next]?.focus();
        } else if (e.key === "ArrowLeft") {
            const prev = (idx - 1 + tabs.length) % tabs.length;
            setActive(prev);
            tabRefs.current[prev]?.focus();
        }
    };

    return (
        <div>
            <HStack
                aria-label="Tabs"
                align="center"
                justify="center"
                className="glass-radio-group"
                style={{
                    position: "relative",
                    background: getColor('purple', 700, 0.6),
                    borderRadius: "1rem",
                    backdropFilter: "blur(12px)",
                    overflow: "hidden",
                    padding: 0,
                    border: `1px solid ${getColor('purple', 300, 0.4)}`,
                }}
            >
                {tabs.map((tab, idx) => (
                    <button
                        key={tab.label}
                        ref={(el) => (tabRefs.current[idx] = el)}
                        role="tab"
                        aria-selected={active === idx}
                        tabIndex={active === idx ? 0 : -1}
                        onClick={() => setActive(idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        style={{
                            flex: 1,
                            minWidth: 80,
                            fontSize: 14,
                            fontWeight: 600,
                            padding: "0.8rem 1.6rem",
                            cursor: "pointer",
                            background: "none",
                            border: "none",
                            color: active === idx ? "#ffffff" : "#e5e5e5",
                            position: "relative",
                            zIndex: 2,
                            transition: "color 0.3s ease-in-out",
                        }}
                    >
                        <Typography
                            variant="b3"
                            family="p"
                            color={active === idx ? "#ffffff" : "#e5e5e5"}
                            style={{ color: active === idx ? "#ffffff" : "#e5e5e5" }}
                        >
                            {tab.label}
                        </Typography>
                    </button>
                ))}

                {/* Animated glass glider */}
                <motion.div
                    layout
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                    }}
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: indicatorProps.left,
                        width: indicatorProps.width,
                        borderRadius: "1rem",
                        zIndex: 1,
                        background: getColor('purple', 500, 0.6),
                    }}
                />
            </HStack>

            {/* Tab content */}
            <div style={{ minHeight: 120, position: "relative", marginTop: 16 }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ width: "100%" }}
                    >
                        {tabs[active].content}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Tabs;
