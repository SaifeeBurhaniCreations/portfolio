import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { getColor } from "../../constants/colors";
import Typography from "../typography/Typography";
import CustomImage from "./CustomImage";
import logo from "../../assets/images/svg/sbc.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    const capsuleRef = useRef<HTMLDivElement>(null);
    const navLeftRef = useRef<HTMLDivElement>(null);
    const navRightRef = useRef<HTMLDivElement>(null);
    const autoCloseTimer = useRef<NodeJS.Timeout | null>(null);

    const capsuleTl = useRef(gsap.timeline({ paused: true }));
    const navTl = useRef(gsap.timeline({ paused: true }));

    const isCursorInside = useRef(false); // Track if cursor is inside

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (
            isMobile === null ||
            !capsuleRef.current ||
            !navLeftRef.current ||
            !navRightRef.current
        ) return;

        capsuleTl.current = gsap.timeline({ paused: true }).to(
            capsuleRef.current,
            {
                width: isMobile ? '100%' : "50%",
                paddingInline: "3rem",
                borderRadius: "40px",
                ease: "power3.inOut",
                duration: 0.6,
            },
            0
        ).reverse();

        navTl.current = gsap.timeline({ paused: true }).to(
            [navLeftRef.current, navRightRef.current],
            {
                x: 0,
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.05,
            }
        ).reverse();
    }, [isMobile]);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 0);
            closeHeaderImmediately(); // Close instantly on scroll
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const openHeader = () => {
        capsuleTl.current.play();
        navTl.current.play();
        clearAutoCloseTimer();
    };

    const closeHeader = () => {
        if (isCursorInside.current) return; // Don't close if cursor is inside
        navTl.current.reverse();
        capsuleTl.current.reverse();
    };

    const closeHeaderImmediately = () => {
        clearAutoCloseTimer();
        navTl.current.reverse();
        capsuleTl.current.reverse();
    };

    const clearAutoCloseTimer = () => {
        if (autoCloseTimer.current) {
            clearTimeout(autoCloseTimer.current);
            autoCloseTimer.current = null;
        }
    };

    const startAutoCloseTimer = () => {
        clearAutoCloseTimer();
        autoCloseTimer.current = setTimeout(() => {
            closeHeader();
        }, 3000);
    };

    const handleMouseEnter = () => {
        isCursorInside.current = true;
        clearAutoCloseTimer();
    };

    const handleMouseLeave = () => {
        isCursorInside.current = false;
        startAutoCloseTimer();
    };

    const capsuleStyle: React.CSSProperties = {
        position: "relative",
        background: isScrolled ? getColor("overlay") : "transparent",
        backgroundBlendMode: "overlay, normal",
        backdropFilter: "blur(40px)",
        border: `1px solid ${getColor("purple", 100, 0.2)}`,
        borderRadius: "50%",
        padding: "0.5rem",
        width: isMobile ? '80px' : "100px",
        height: isMobile ? '80px' : "100px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        overflow: "hidden",
        transition: "background 0.3s ease-in-out",
    };

    const navStyle: React.CSSProperties = {
        position: "absolute",
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        opacity: 0,
        transform: "translateX(100%)",
        pointerEvents: "none",
        zIndex: 1,
    };

    const logoWrapperStyle: React.CSSProperties = {
        position: "absolute",
        left: isMobile ? '48%' : "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: isMobile ? '80px' : "100px",
        height: isMobile ? '80px' : "100px",
        zIndex: 2,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        cursor: "pointer",
    };

    return (
        <header className="header" style={{ padding: "1rem 0" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            ref={capsuleRef}
                            style={capsuleStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Left Nav */}
                            <div
                                ref={navLeftRef}
                                className="navlinks-left"
                                style={{
                                    ...navStyle,
                                    left: isMobile ? "4%" : "10%",
                                    transform: "translateX(-100%)",
                                }}
                            >
                                <ul style={{ display: "flex", gap: isMobile ? '14px' : '24px' }}>
                                    <li>
                                        <NavLink to={`/`}>
                                            <Typography variant={isMobile ? 'b5' : 'b2'} color={getColor("light")}>Home</Typography>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`/about`}>
                                            <Typography variant={isMobile ? 'b5' : 'b2'} color={getColor("light")}>About</Typography>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                            {/* Logo */}
                            <div style={logoWrapperStyle} onMouseEnter={openHeader} onClick={openHeader}>
                                <NavLink to={`/`}>
                                    <CustomImage
                                        borderRadius={0}
                                        onZoom={true}
                                        src={logo}
                                        style={{ justifyContent: "center", display: "flex" }}
                                        imgStyle={{ objectFit: "contain", width: "100%" }}
                                    />
                                </NavLink>
                            </div>

                            {/* Right Nav */}
                            <div
                                ref={navRightRef}
                                className="navlinks-right"
                                style={{
                                    ...navStyle,
                                    right: isMobile ? "4%" : "8%",
                                    transform: "translateX(100%)",
                                }}
                            >
                                <ul style={{ display: "flex", gap: isMobile ? '14px' : '24px' }}>
                                    <li>
                                        <NavLink to={`/projects`}>
                                            <Typography variant={isMobile ? 'b5' : 'b2'} color={getColor("light")}>Projects</Typography>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <Typography variant={isMobile ? 'b5' : 'b2'} color={getColor("light")}>Blogs</Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
