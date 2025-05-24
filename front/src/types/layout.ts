import { CSSProperties, ReactNode, MouseEvent } from "react";

export interface GridProps {
    columns?: number;
    children: ReactNode;
    gap?: number;
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    className?: string;
    custom?: string;
    style?: any;
    order?: number[];
}

export interface CenterProps {
    children: ReactNode;
    className?: string;
    fullScreen?: boolean;
}

export interface HStackProps {
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    gap?: number;
    direction?: 'row' | 'column' | 'column-reverse';
    w?: number | `${number}%` | "auto";
    maxW?: number | `${number}%` | "auto";
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export interface VStackProps {
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    gap?: number | string;
    w?: string | number;
    maxW?: string | number;
    children?: React.ReactNode;
    style?: CSSProperties;
    className?: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
    [key: string]: any; // For additional HTML div props
}

export type StackWrapperProps = {
    children: React.ReactNode;
    direction?: "row" | "column"; // Default: row
    gap?: string;
    className?: string;
};

export type SectionProps = {
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
};

export type BoxProps = {
    children: React.ReactNode;
    bg?: string;
    border?: string;
    shadow?: string;
    rounded?: string;
    className?: string;
    style?: CSSProperties;
    p?: string;
    m?: string;
};
