import { useCallback, useState } from 'react';

type UseHoverParams = {
    id: string | number;
    onHoverChange?: (isHovered: boolean) => void;
};

const useHover = ({ id, onHoverChange }: UseHoverParams) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
        onHoverChange?.(true);
    }, [id]);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        onHoverChange?.(false);
    }, [id]);

    return {
        isHovered,
        bindHoverEvents: {
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
        },
    };
}

export default useHover