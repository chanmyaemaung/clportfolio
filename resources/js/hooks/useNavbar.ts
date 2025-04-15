import { useCallback, useEffect, useState } from 'react';

export const useNavbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    const handleScroll = useCallback(() => {
        const currentScroll = window.pageYOffset;

        // Add or remove sticky class based on scroll position
        if (currentScroll > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }

        setLastScroll(currentScroll);
    }, []);

    useEffect(() => {
        // Initial check for scroll position
        handleScroll();

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return { isSticky };
};
