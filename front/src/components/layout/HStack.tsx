import React, { Children } from "react";
import { HStackProps } from "../../types";

export const HStack: React.FC<HStackProps> = ({
    justify = "start",
    align = "center",
    gap = 0,
    w,
    maxW,
    children,
    style,
    ...props
}) => {
  const justifyStyles: Record<NonNullable<HStackProps["justify"]>, string> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const alignStyles: Record<NonNullable<HStackProps["align"]>, string> = {
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
    flexDirection: "row",
    justifyContent: justifyStyles[justify],
    alignItems: alignStyles[align],
    width: w,
    maxWidth: maxW,
    ...style,
  };

  return (
    <div style={containerStyle} {...props}>
        {childArray.map((child, index) => (
            <div
                key={index}
            >
                {child}
            </div>
        ))}
    </div>
  );
};
