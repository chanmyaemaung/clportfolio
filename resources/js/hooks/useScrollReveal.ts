import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
    const revealRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal');
                        observer.unobserve(entry.target); // Stop observing once revealed
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            },
        );

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        return () => {
            if (revealRef.current) {
                observer.unobserve(revealRef.current);
            }
        };
    }, []);

    return revealRef;
};
