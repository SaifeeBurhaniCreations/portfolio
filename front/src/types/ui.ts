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
    style?: React.CSSProperties;
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
    coordinates?: React.CSSProperties;
}

export interface AnimatedLogoProps {
    position?: Partial<React.CSSProperties>;
    isAnimate?: boolean;
    height?: number;
    width?: number;
}

export interface ProjectCardProps {
    index: number;
    banner: string;
    heading: string;
    description: string;
    // other props
}

export interface BadgeLabelProps {
    children: React.ReactNode;
    size?: 'md' | 'sm' | 'xs' | 'lg';
    isBlink?: boolean;
    badge?: boolean;
    color?: string;
    bg?: string;
}

export interface IconProps {
    color?: string;
    size?: number;
}

/** Single project data object */
export interface Project {
    projectName: string;
    description: string;
    technologies?: string[];
    href: string;
    banner: string;
}

/** Props for StackCard component */
export interface StackCardProps {
    data: Project[];
}

/** Props for individual Card */
export interface CardProps {
    type: 'even' | 'odd' | 'mob';
    heading: string;
    description: string;
    technologies?: string[];
    button: string;
    image: string;
}
