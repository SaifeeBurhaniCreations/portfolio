// Service.tsx
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import MainWrapper from "../components/layout/MainWrapper";
import CustomImage from "../components/ui/CustomImage";
import { getColor } from "../constants/colors";
import VStack from "../components/layout/VStack";
import Typography from "../components/typography/Typography";
import Gradient from "../components/ui/Gradient";
import { FooterFadeInAnimation } from "../components/animation/animation";
import { useScrollToTop } from "../hooks/scrollHook";
import AutoLayout from "../components/layout/AutoLayout";
import { parseDelimitedArray } from "../utils/parseDelimitedArray";
import InfoCard from "../components/ui/Cards/InfoCard";
import FlipCard from "../components/ui/Cards/FlipCard";
import Tabs from "../components/ui/Tabs";
import { detailedPageData } from "../constants/services";
// import FeatureShowcase from "../components/ui/FeatureShowcase";
import Timeline from "../components/ui/TimeLine/Timeline";

// Utility types
// interface ParsedCardData {
//     icon: string;
//     title: string;
//     content: string;
// }

// interface ChooseProps {
//     parsedChoose: ParsedCardData[];
// }

const ChooseUsComponent = ({ parsedChoose }: any) => (
    <VStack align="start" justify="center">
        <AutoLayout columns={3} gap={24} align="stretch" className="w-100">
            {parsedChoose.map((value: any, index: number) => (
                <InfoCard key={index} iconSize="md" {...value} />
            ))}
        </AutoLayout>
    </VStack>
);

const ProcessComponent = ({ parsedProcess }: any) => (
    <VStack align="start" justify="center">
        <Timeline events={parsedProcess} />
    </VStack>
);

const Service = () => {
    const { name } = useParams<{ name: string }>();
    const sectionRef = useRef<HTMLDivElement>(null);

    if (!name) {
        return (
            <MainWrapper>
                <Typography variant="h3" color={getColor("light")}>
                    Service not found.
                </Typography>
            </MainWrapper>
        );
    }

    const serviceData = detailedPageData[name as keyof typeof detailedPageData];

    useScrollToTop();

    useEffect(() => {
        if (sectionRef.current) {
            FooterFadeInAnimation(sectionRef);
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!serviceData) {
        return (
            <MainWrapper>
                <Typography variant="h3" color={getColor("light")}>
                    Service not found.
                </Typography>
            </MainWrapper>
        );
    }

    const { flip, choose, head, offer, process } = serviceData;
    const parsedOffer = parseDelimitedArray(offer, ["image", "icon", "title", "content"]);
    const parsedChoose = parseDelimitedArray(choose, ["icon", "title", "content"]);
    const parsedProcess = parseDelimitedArray(process, ["icon", "title", "description"]);

    return (
        <>
            <MainWrapper>
                <ParallaxProvider>
                    <VStack ref={sectionRef} align="center" justify="center" gap={24} className="position-rel">
                        <Gradient
                            width={400}
                            coordinates={{ left: "50%", top: "45%", transform: "translate(-50%, -50%)" }}
                        />
                        <FlipCard
                            front={
                                <VStack align="center" justify="center">
                                    <Parallax speed={-4}>
                                        <CustomImage
                                            borderRadius={0}
                                            imgStyle={{ objectFit: "cover" }}
                                            src={flip.icon}
                                            style={{ height: "150px", width: "150px" }}
                                            className="animate-float"
                                        />
                                    </Parallax>
                                </VStack>
                            }
                            back={
                                <VStack align="center" justify="center" style={{ padding: "12px" }}>
                                    <Typography variant="b4" align="center" family="p" color={getColor("purple", 100)}>
                                        {flip.content}
                                    </Typography>
                                </VStack>
                            }
                            className="cursor-pointer"
                            padding="0"
                            radius="50%"
                            aspectRatio="1 / 1"
                            frontBg={getColor("overlay", 400)}
                            backBg={getColor("overlay", 400)}
                            height="200px"
                            width="200px"
                        />

                        {head?.map((text: any, index: number) => (
                            <Typography
                                key={index}
                                isGradient={index === 0}
                                variant={index === 0 ? "xl" : "b2"}
                                align="center"
                                family={index === 0 ? "jk" : "p"}
                                color={getColor("purple", index === 0 ? 200 : 100)}
                                style={index !== 0 ? { width: "80%" } : {}}
                            >
                                {text}
                            </Typography>
                        ))}
                    </VStack>
                </ParallaxProvider>
            </MainWrapper>

            {/* <FeatureShowcase iconSize="md" cards={parsedOffer} /> */}

            <MainWrapper>
                <VStack align="start" justify="center">
                    <Typography isHeading variant="h2" family="p" color={getColor("light")}>What We Offer</Typography>
                    <AutoLayout columns={3} align="stretch" gap={24} className="w-100">
                        {parsedOffer.map((value, index) => (
                            <InfoCard key={index} iconSize="md" {...value} />
                        ))}
                    </AutoLayout>
                </VStack>
            </MainWrapper>

            <MainWrapper>
                <VStack align='center' style={{width: '100%'}} justify='center'>
                    <Tabs
                        tabs={[
                            { label: "Why Choose Us", content: <ChooseUsComponent parsedChoose={parsedChoose} /> },
                            { label: "Our Process", content: <ProcessComponent parsedProcess={parsedProcess} /> },
                            { label: "Technologies", content: <ChooseUsComponent parsedChoose={parsedChoose} /> },
                        ]}
                    />
                </VStack>
            </MainWrapper>
        </>
    );
};

export default Service;
