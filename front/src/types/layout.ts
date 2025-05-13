import { CSSProperties, ReactNode } from "react";

export interface GridProps {
    columns?: number;
    children: ReactNode;
    gap?: number;
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    className?: string;
    custom?: string;
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
    w?: number | `${number}%` | "auto";
    maxW?: number | `${number}%` | "auto";
    children: ReactNode;
    style?: CSSProperties;
}

export interface VStackProps {
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    gap?: number;
    w?: number | `${number}%` | "auto";
    maxW?: number | `${number}%` | "auto";
    children: ReactNode;
    style?: CSSProperties;
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
