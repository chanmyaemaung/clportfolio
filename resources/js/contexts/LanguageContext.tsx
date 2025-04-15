import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'mm' | 'jp';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
    children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<Language>('en');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = '';
    };

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('preferredLanguage', lang);
    };

    useEffect(() => {
        const storedLang = localStorage.getItem('preferredLanguage') as Language | null;
        if (storedLang && (storedLang === 'en' || storedLang === 'mm' || storedLang === 'jp')) {
            setLanguage(storedLang);
        }
    }, []);

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage: handleLanguageChange,
                isModalOpen,
                openModal,
                closeModal,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
