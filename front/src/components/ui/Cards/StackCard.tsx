// StackCard.tsx
import React, { Children } from "react";
import { StackCardProps } from "../../../types";
import MainWrapper from "../../layout/MainWrapper";




const StackCard: React.FC<StackCardProps> = ({ children }) => {

  const childArray = Children.toArray(children);


    return (
        <MainWrapper className="p-0">
            <ul id="cards-cs">
                {childArray.map((child, index) => {
                    const delay = `${index * 0.5}s`;

                    return (
                        <li
                            key={index}
                            className="card-cs"
                            id={`card-${index + 1}`}
                            style={{
                                animation: "scale 1s ease-out",
                                animationDelay: delay,
                                animationFillMode: "both",
                            }}
                        >
                            {child}
                        </li>
                    );
                })}
            </ul>
        </MainWrapper>
    );
};

export default StackCard;
