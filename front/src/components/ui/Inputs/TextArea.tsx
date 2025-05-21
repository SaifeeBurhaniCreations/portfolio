import React, { FocusEvent } from "react";
import { getColor } from "../../../constants/colors";
import { VStack } from "../../layout/VStack";
import Typography from "../../typography/Typography";

interface InputFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    isFocused?: boolean;
    color?: 'purple' | 'light' | 'gradients';
    textColor?: 'purple' | 'light' | 'gradients';
    onFocusChange?: (focused: boolean) => void;
    className?: string;
}

const TextArea: React.FC<InputFieldProps> = ({
    label,
    placeholder = "Enter a value",
    value,
    color = "purple",
    textColor = "light",
    onChange,
    onBlur,
    onFocus,
    error,
    isFocused = false,
    onFocusChange,
    className = "",
    rows = 4,
    ...props
}) => {
    const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
        onFocusChange?.(true);
        onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
        onFocusChange?.(false);
        onBlur?.(e);
    };

    const borderColor = error
        ? "red"
        : isFocused
            ? getColor(color, 300)
            : getColor(color, 400, 0.5);

    const textAreaStyles: React.CSSProperties = {
        width: "100%",
        border: `1px solid ${borderColor}`,
        backgroundColor: getColor(color, 700, 0.5),
        color: getColor(textColor),
        borderRadius: 8,
        padding: "10px 12px",
        transition: "all 0.2s ease",
        fontSize: "1rem",
        resize: "vertical",
        outline: "none",
    };

    const errorStyles: React.CSSProperties = {
        color: "red",
        fontSize: "0.875rem",
        marginTop: 4,
    };

    return (
        <VStack justify="center" align="start" gap={4} style={{ width: "100%" }}>
            {label && (
                <Typography variant="b4" family="jk" color={getColor(textColor)}>
                    {label}
                </Typography>
            )}
            {/* <div style={wrapperStyles} className={`input-wrapper ${className}`}> */}
                <textarea
                    style={textAreaStyles}
                    value={value}
                    rows={rows}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    {...props}
                />
            {/* </div> */}
            {error && <div style={errorStyles}>{error}</div>}
        </VStack>
    );
};

export default TextArea;
