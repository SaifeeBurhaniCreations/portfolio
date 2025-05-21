export interface CustomImageProps {
    src: string;
    width?: string | number;
    height?: string | number;
    style?: React.CSSProperties;
    imgStyle?: React.CSSProperties;
    className?: string;
    borderRadius?: number;
    fallback?: string;
    loadingIndicator?: boolean;
    isAnimate?: boolean;
    onZoom?: boolean;
    direction?: 'left' | 'right' | 'top' | 'bottom';
}


export interface loaderProps {
    size?: number;
    strokeWidth?: number;
    color?: "purple";
    style?: any
}

export interface ButtonProps {
    children: React.ReactNode;
    height?: number;
    width?: number;
    radius?: number;
    bg?: string;
    border?: string;
    onClick?: () => void;
}

export interface Position {
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
    transform?: string;
    position?: string;
}

export interface GradientProps {
    width?: number;
    size?: number;
    position?: Position;
}

export interface AnimatedLogoProps {
    position?: Position;
    isAnimate?: boolean
}

export interface ProjectCardProps {
    index: number;
    banner: string;
    heading: string;
    description: string;
    // other props
}

export interface IconProps {
    color?: string;
    size?: number;
}