import { useEffect } from "react";

const useDesktopBotpress = () => {
    useEffect(() => {
        // const isDesktop = window.matchMedia("(min-width: 768px)").matches;

        // if (!isDesktop) return;

        const injectScript = (src: string) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        };

        injectScript("https://cdn.botpress.cloud/webchat/v2.4/inject.js");
        injectScript("https://files.bpcontent.cloud/2025/04/29/06/20250429062019-XOL3FN8D.js");

        return () => {
            // Optionally remove scripts when component unmounts
            const scripts = document.querySelectorAll('script[src*="botpress"]');
            scripts.forEach((s) => s.remove());
        };
    }, []);
};

export default useDesktopBotpress;
