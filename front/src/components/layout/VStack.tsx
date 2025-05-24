import React, { Children, forwardRef, ForwardedRef } from "react";
import { VStackProps } from "../../types";

export const VStack = forwardRef<HTMLDivElement, VStackProps>(({
    justify = "start",
    align = "center",
    gap = 0,
    w,
    maxW,
    children,
    style,
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...props
}, ref: ForwardedRef<HTMLDivElement>) => {
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
        justifyContent: justifyStyles[justify as keyof typeof justifyStyles],
        alignItems: alignStyles[align as keyof typeof alignStyles],
        width: w,
        maxWidth: maxW,
        ...style,
    };

    return (
        <div
            ref={ref}
            style={containerStyle}
            className={className}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...props}
        >
            {childArray.map((child, index) => (
                <React.Fragment key={index}>
                    {child}
                </React.Fragment>
            ))}
        </div>
    );
});

// Add display name for better debugging
VStack.displayName = "VStack";

// Export the component
export default VStack;
