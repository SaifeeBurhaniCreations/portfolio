export interface CustomImageProps {
    src: string;
    width?: number | `${number}%` | "auto";
    height?: number | `${number}%` | "auto";
    style?: React.CSSProperties;
    imgStyle?: React.CSSProperties;
    borderRadius?: number;
    alt?: string;
    loading?: "eager" | "lazy";
    fallback?: string;
    loadingIndicator?: boolean;
}

export interface loaderProps {
    size?: number;
    strokeWidth?: number;
    color?: "purple";
    style?: any
}