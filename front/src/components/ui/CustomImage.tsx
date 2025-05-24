 import React, { useState, useEffect, useRef } from 'react';
import { CustomImageProps } from "../../types";
import Loader from './Loader';
import '../../assets/styles/CustomImage.css';
import { imageFadeAnimation } from '../animation/animation';


const CustomImage: React.FC<CustomImageProps> = ({
    src,
    width = "100%",
    height = "100%",
    style = {},
    imgStyle = {},
    borderRadius = 16,
    fallback = "https://via.placeholder.com/150",
    loadingIndicator = true,
    className,
    isAnimate = false,
    direction = 'left',
    onZoom = false
}) => {
    const [imageError, setImageError] = useState(false);
    const [loading, setLoading] = useState(true);
    const imgRef = useRef<HTMLImageElement>(null);

    const source = imageError ? fallback : src;

    const imageInStyle: React.CSSProperties = {
        width,
        height,
        borderRadius,
        transition: "transform 0.3s ease",
        ...imgStyle,
    };

    useEffect(() => {
        if (isAnimate && !loading && imgRef.current) {
            imageFadeAnimation(imgRef, direction)
        }
    }, [isAnimate, loading, direction]);

    const handleMouseEnter = () => {
        if (onZoom && imgRef.current) {
            imgRef.current.style.transform = "scale(1.05)";
        }
    };

    const handleMouseLeave = () => {
        if (onZoom && imgRef.current) {
            imgRef.current.style.transform = "scale(1)";
        }
    };

    return (
        <div style={{ ...style, borderRadius: borderRadius }}>
            {loading && loadingIndicator && <Loader />}

            <img
                ref={imgRef}
                className={className}
                src={source}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={imageInStyle}
                onLoad={() => setLoading(false)}
                onError={() => {
                    setLoading(false);
                    setImageError(true);
                }}
                alt=""
                loading='lazy'
            />
        </div>
    );
};

export default CustomImage;
