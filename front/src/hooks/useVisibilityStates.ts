import { useState, useEffect, useRef, useCallback } from 'react';

interface UseInactivityOptions {
    /**
     * The time in milliseconds after which the user is considered inactive.
     * Defaults to 3000ms (3 seconds).
     */
    inactiveDelay?: number;
    /**
     * Optional callback function to execute when the user becomes inactive.
     */
    onInactive?: () => void;
    /**
     * Optional callback function to execute when the user becomes active again.
     */
    onActive?: () => void;
}

const useInactivity = ({
    inactiveDelay = 3000,
    onInactive,
    onActive,
}: UseInactivityOptions = {}) => {
    const [isInactive, setIsInactive] = useState(false);
    const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Function to reset the inactivity timer and mark user as active
    const resetInactivityTimer = useCallback(() => {
        if (inactivityTimeoutRef.current) {
            clearTimeout(inactivityTimeoutRef.current);
        }
        setIsInactive(false); // Mark user as active
        if (onActive && isInactive) { // Only call onActive if state was previously inactive
            onActive();
        }

        inactivityTimeoutRef.current = setTimeout(() => {
            setIsInactive(true); // Mark user as inactive after the delay
            if (onInactive) {
                onInactive();
            }
        }, inactiveDelay);
    }, [inactiveDelay, onActive, onInactive, isInactive]); // Added dependencies

    // Effect to set up event listeners for user activity
    useEffect(() => {
        // Start the timer initially
        resetInactivityTimer();

        // Define activity events
        const activityEvents = ['mousemove', 'keydown', 'scroll'];

        // Add event listeners
        activityEvents.forEach(event => {
            window.addEventListener(event, resetInactivityTimer);
        });

        // Cleanup function to remove listeners and clear timeout
        return () => {
            activityEvents.forEach(event => {
                window.removeEventListener(event, resetInactivityTimer);
            });
            if (inactivityTimeoutRef.current) {
                clearTimeout(inactivityTimeoutRef.current);
            }
        };
    }, [resetInactivityTimer]); // Dependency on resetInactivityTimer ensures the effect updates if resetInactivityTimer changes (due to options changing)

    return { isInactive, resetInactivityTimer };
};

export default useInactivity;