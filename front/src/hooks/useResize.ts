import { useEffect, useState } from "react";

const useResize = () => {
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
};

export default useResize;
