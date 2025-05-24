import { getColor } from "../../constants/colors";
import useResize from "../../hooks/useResize";
import { FooterFadeInAnimation } from "../animation/animation";
import AutoLayout from "../layout/AutoLayout";
import MainWrapper from "../layout/MainWrapper";
import { VStack } from "../layout/VStack";
import Typography from "../typography/Typography";
import CustomImage from "../ui/CustomImage";
import React, { useRef, useEffect } from "react";
import rocket from '../../assets/images/png/rocket.png'
import growth from '../../assets/images/png/growth.png'
import edit from '../../assets/images/png/edit.png'
import blueprint from '../../assets/images/png/blueprint.png'
import analytics from '../../assets/images/png/analytics.png'
import development from '../../assets/images/png/development.png'
import { motion, useInView } from "framer-motion";

interface CardProps {
  letter: string;
  heading: string;
  content: string;
  icon: string;
  title: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ letter, heading, content, icon, title, index }) => {

  const sectionRef = useRef(null)

  const faderRef = useRef(null);
  const inView = useInView(faderRef, { once: true });

  useEffect(() => {
    FooterFadeInAnimation(sectionRef)
  }, [])

  return (
    <div className="layout" ref={faderRef}>
      <motion.p
        className="fader"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.8,
          delay: index * 0.4
        }}
      >
        {title}
      </motion.p>
      <div
        className="card"
        style={{
          background: getColor("overlay", 300),
          border: `1px solid ${getColor("purple", 500)}`,
        }}
      >
        <VStack ref={sectionRef} gap={16}>
          <div className="icon">
            <CustomImage borderRadius={0} src={icon} />
          </div>
          <VStack align="center" justify="center" style={{ height: "90px" }}>
            <Typography align="center" variant="b1" family="p" color={getColor("purple", 300)}>
              {letter}
            </Typography>
            <Typography align="center" variant="h4" family="jk" color={getColor("light")}>
              {heading}
            </Typography>
          </VStack>
          <Typography variant="b4" align="center" family="jk" color={getColor("purple", 100)}>
            {content}
          </Typography>
        </VStack>
      </div>
    </div>
  );
}

const cardContent: CardProps[] = [
  {
    letter: "Analyze",
    title: "A",
    heading: "Understand the Problem",
    content: "We explore your goals, users, and challenges to align clearly.",
    icon: analytics,
    index: 0,
  },
  {
    letter: "Blueprint",
    title: "B",
    heading: "Craft a Plan",
    content: "We define the roadmap, tech stack, and clear milestones.",
    icon: blueprint,
    index: 1,
  },
  {
    letter: "Create",
    title: "C",
    heading: "Design the Experience",
    content: "We craft intuitive, beautiful, and functional user experiences.",
    icon: edit,
    index: 2,
  },
  {
    letter: "Develop",
    title: "D",
    heading: "Build the Solution",
    content: "We develop secure, scalable, and high-performance solutions.",
    icon: development,
    index: 3,
  },
  {
    letter: "Execute",
    title: "E",
    heading: "Test & Launch",
    content: "We test thoroughly and launch with confidence and clarity.",
    icon: growth,
    index: 4,
  },
  {
    letter: "Fuel",
    title: "F",
    heading: "Support & Grow",
    content: "We monitor, support, and enhance your product post-launch.",
    icon: rocket,
    index: 5,
  },
];

const OurWorkProcess: React.FC = () => {
  const isMobile = useResize();

  return (
    <MainWrapper>
      <VStack align="center" justify="center" gap={isMobile ? 18 : 30}>
        <VStack align="start" justify="center" gap={isMobile ? 18 : 8}>
          <Typography
            variant={isMobile ? "h3" : "h2"}
            family="p"
            style={{ fontWeight: 400 }}
            color={getColor("light")}
          >
            Our Development Process — From Idea to Impact
          </Typography>
          <Typography
            variant={isMobile ? "b5" : "b3"}
            family="p"
            style={{ fontWeight: 400, width: "80%" }}
            color={getColor("light")}
          >
            We believe that great products are built with clarity, creativity, and care. Here's how
            we turn your vision into scalable, high-quality digital solutions:
          </Typography>
        </VStack>

        <AutoLayout columns={isMobile ? 1 : 6} align="stretch" gap={16}>
          {cardContent.map((item, idx) => (
            <Card
              key={idx}
              index={idx}
              icon={item.icon}
              title={item.title}
              letter={item.letter}
              heading={item.heading}
              content={item.content}
            />
          ))}
        </AutoLayout>
      </VStack>
    </MainWrapper>
  );
};

export default OurWorkProcess;
