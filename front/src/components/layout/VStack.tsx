import React, { Children } from "react";
import { VStackProps } from "../../types";

export const VStack: React.FC<VStackProps> = ({
    justify = "start",
    align = "center",
    gap = 0,
    w,
    maxW,
    children,
    style,
    ...props
}) => {
    const justifyStyles: Record<NonNullable<VStackProps["justify"]>, string> = {
        start: "flex-start",
        center: "center",
        end: "flex-end",
        between: "space-between",
        around: "space-around",
        evenly: "space-evenly",
    };

    const alignStyles: Record<NonNullable<VStackProps["align"]>, string> = {
        start: "flex-start",
        center: "center",
        end: "flex-end",
        stretch: "stretch",
        baseline: "baseline",
    };

    const childArray = Children.toArray(children);

    const containerStyle: React.CSSProperties = {
        display: "flex",
        gap,
        flexDirection: "column",
        justifyContent: justifyStyles[justify],
        alignItems: alignStyles[align],
        width: w,
        maxWidth: maxW,
        ...style,
    };

    return (
        <div style={containerStyle} {...props}>
            {childArray.map((child) => (
                child
            ))}
        </div>
    );
};
