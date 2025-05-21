import React from "react";
import { HStack } from "../layout/HStack";
import Instagram from "../icons/Instagram";
import LinkedIn from "../icons/LinkedIn";
import GitHub from "../icons/GitHub";
import { getColor } from "../../constants/colors";
import Typography from "../typography/Typography";
import { VStack } from "../layout/VStack";
import sadiq from '../../assets/images/png/sadiq.png'
import aliasger from '../../assets/images/png/aliasger.png'
import Gradient from "./Gradient";


const teamMembers = [
    {
        name: "Ali asger",
        role: "Founder",
        image: aliasger,
        socials: {
            linkedin: "#",
            instagram: "#",
            github: "#",
        },
    },
    {
        name: "Jafar Us Sadiq",
        role: "Founder",
        image: sadiq,
        socials: {
            linkedin: "#",
            instagram: "#",
            github: "#",
        },
    },
];

export const TeamSection: React.FC = () => {
  return (
        <>
            <VStack justify="center" align="center" style={{position: 'relative'}} gap={24}>
                <Typography variant="h2" family="jk" color={getColor('light')}>
                    Our Team
                </Typography>

                <HStack justify="center" align="center" gap={32} style={{minHeight: '350px'}}>
                    {teamMembers.map((member, index) => (
                        <div className="position-rel" key={index}>
                            <Gradient width={300} coordinates={{ left: '50%', top: '50%', transform: `translate(-50%, -50%)` }} />
                            <div key={index} style={{background: getColor('overlay', 300)}} className="profile-card">
                                <div className="img">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="caption">
                                    <VStack justify="center" align="center" gap={12}>
                                        <VStack justify="center" align="center" gap={0}>
                                            <Typography variant="b2" color={getColor('light')} family="jk">
                                                {member.name}
                                            </Typography>
                                            <Typography variant="b5" family="jk" color={getColor('purple', 100)}>
                                                {member.role}
                                            </Typography>
                                        </VStack>
                                        <HStack justify="evenly" align="center" w={`100%`} gap={6}>
                                            <a href={member.socials.linkedin}><LinkedIn size={24} color={getColor('purple', 300)} /></a>
                                            <a href={member.socials.instagram}><Instagram size={24} color={getColor('purple', 300)} /></a>
                                            <a href={member.socials.github}><GitHub size={24} color={getColor('purple', 300)} /></a>
                                        </HStack>
                                    </VStack>
                                </div>
                            </div>
                        </div>
                    ))}
                </HStack>
            </VStack>
        </>
  );
};

export default TeamSection;
