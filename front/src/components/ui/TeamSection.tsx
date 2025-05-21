import React from "react";
import { HStack } from "../layout/HStack";
import Instagram from "../icons/Instagram";
import LinkedIn from "../icons/LinkedIn";
import GitHub from "../icons/GitHub";
import { getColor } from "../../constants/colors";
import Typography from "../typography/Typography";
import { VStack } from "../layout/VStack";
import Gradient from "./Gradient";
import CustomImage from "./CustomImage";

const teamMembers = [
    {
        name: "Vin Diesel",
        role: "Senior App Developer",
        image: "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
        socials: {
            linkedin: "#",
            instagram: "#",
            github: "#",
        },
    },
    {
        name: "David Corner",
        role: "Front End Developer",
        image: "https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg",
        socials: {
            linkedin: "#",
            instagram: "#",
            github: "#",
        },
    }
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
                        <div className="position-rel">
                            <Gradient width={300} position={{ left: '50%', top: '50%', transform: `translate(-50%, -50%)` }} />
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
