import React, { useState } from 'react';
import { CustomImageProps } from "../../types";
import Loader from './Loader';
import '../../assets/styles/CustomImage.css';

const CustomImage: React.FC<CustomImageProps> = ({
    src,
    width = "100%",
    height = "100%",
    style = {},
    imgStyle = {},
    borderRadius = 16,
    fallback = "https://via.placeholder.com/150",
    loadingIndicator = true,
}) => {
    const [imageError, setImageError] = useState(false);
    const [loading, setLoading] = useState(true);

    // Determine the image source
    const source = imageError ? fallback : src;

    const imageInStyle = {
        width,
        height,
        borderRadius,
        ...imgStyle,
    };

    return (
        <div className="custom-image" style={{ ...style }}>
            {/* Loading Indicator */}
            {loading && loadingIndicator && (
                <Loader />
            )}

            {/* Image */}
            <img
                src={source}
                className="image"
                style={imageInStyle}
                onLoad={() => setLoading(false)}
                onError={() => {
                    setLoading(false);
                    setImageError(true);
                }}
                alt=""
            />
        </div>
    );
};

export default CustomImage;
