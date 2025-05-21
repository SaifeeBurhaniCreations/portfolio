import React, { FocusEvent, useEffect, useRef } from "react";
import { getColor } from "../../../constants/colors";
import { VStack } from "../../layout/VStack";
import Typography from "../../typography/Typography";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    isFocused?: boolean;
    color?: 'purple' | 'light' | 'gradients';
    textColor?: 'purple' | 'light' | 'gradients';
    onFocusChange?: (focused: boolean) => void;
}

const InputField: React.FC<InputFieldProps> = ({
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
    ...props
}) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        onFocusChange?.(true);
        onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        onFocusChange?.(false);
        onBlur?.(e);
    };

    useEffect(() => {
        if (inputRef?.current && document.activeElement === inputRef.current) {
            onFocusChange?.(true);
        } else onFocusChange?.(false)
    }, [inputRef]);

    const wrapperStyles: React.CSSProperties = {
        border: `1px solid ${isFocused
            ? getColor(color, 300)
            : getColor(color, 400, 0.5)}`,
        backgroundColor: getColor(color, 700, 0.5),
        color: getColor(textColor),
    };

    const inputStyles: React.CSSProperties = {
        color: getColor(textColor),
    };

    const errorTextStyles: React.CSSProperties = {
        color: "red",
        fontSize: "0.875rem",
        marginTop: 4,
    };

    if (error) {
        wrapperStyles.borderColor = "red";
    }

    return (
        <VStack justify="center" align="start" gap={4} style={{ width: "100%" }}>
            {label && (
                <Typography variant="b4" family="jk" color={getColor(textColor)}>
                    {label}
                </Typography>
            )}
            <div style={wrapperStyles} onClick={() => inputRef?.current?.focus()} className="w-100 input-wrapper">
                <input
                    ref={inputRef}
                    style={inputStyles}
                    className="custom-input"
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    {...props}
                />
            </div>
            {error && <div style={errorTextStyles}>{error}</div>}
        </VStack>
    );
};

export default InputField;
