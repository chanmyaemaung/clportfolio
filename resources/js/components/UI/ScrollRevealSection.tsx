import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks';

type ScrollRevealSectionProps = {
    children: ReactNode;
    className?: string;
};

export const ScrollRevealSection = ({ children, className = '' }: ScrollRevealSectionProps) => {
    const revealRef = useScrollReveal();

    return (
        <div ref={revealRef} className={`scroll-reveal-section ${className}`}>
            {children}
        </div>
    );
};
