import { createContext, ReactNode, useContext, useState } from 'react';

type MobileMenuContextType = {
    isOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
};

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

type MobileMenuProviderProps = {
    children: ReactNode;
};

export const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return <MobileMenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>{children}</MobileMenuContext.Provider>;
};

export const useMobileMenu = (): MobileMenuContextType => {
    const context = useContext(MobileMenuContext);
    if (context === undefined) {
        throw new Error('useMobileMenu must be used within a MobileMenuProvider');
    }
    return context;
};
