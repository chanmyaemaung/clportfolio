import { useLanguage } from '@/contexts';
import { memo, useEffect, useRef } from 'react';

const LanguageModal = () => {
    const { isModalOpen, closeModal, language, setLanguage } = useLanguage();
    const modalContentRef = useRef<HTMLDivElement>(null);

    // Handle ESC key press
    useEffect(() => {
        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isModalOpen, closeModal]);

    // Handle outside click to close the modal
    useEffect(() => {
        if (!isModalOpen) return;

        const handleOutsideClick = (e: MouseEvent) => {
            const modalElement = document.getElementById('langModal');
            if (modalElement && e.target instanceof Node) {
                // If the click is on the backdrop (not on the modal content)
                if (modalElement.contains(e.target) && !modalContentRef.current?.contains(e.target)) {
                    closeModal();
                }
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isModalOpen, closeModal]);

    // Trap focus within modal for accessibility
    useEffect(() => {
        if (!isModalOpen) return;

        const trapFocus = () => {
            const focusableElements = modalContentRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            );

            if (!focusableElements || focusableElements.length === 0) return;

            const firstFocusable = focusableElements[0] as HTMLElement;
            const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

            // Focus first element
            firstFocusable?.focus();

            const handleTabKey = (e: KeyboardEvent) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusable) {
                            e.preventDefault();
                            lastFocusable?.focus();
                        }
                    } else {
                        if (document.activeElement === lastFocusable) {
                            e.preventDefault();
                            firstFocusable?.focus();
                        }
                    }
                }
            };

            modalContentRef.current?.addEventListener('keydown', handleTabKey);
            return () => {
                modalContentRef.current?.removeEventListener('keydown', handleTabKey);
            };
        };

        const timeoutId = setTimeout(trapFocus, 50); // Small delay to ensure DOM is ready
        return () => clearTimeout(timeoutId);
    }, [isModalOpen]);

    const handleLanguageSelect = (lang: 'en' | 'mm' | 'jp') => {
        setLanguage(lang);
        closeModal();
    };

    // For performance optimization, only render when needed
    if (!isModalOpen && typeof window !== 'undefined' && !document.getElementById('langModal')?.classList.contains('active')) {
        return null;
    }

    return (
        <div
            id="langModal"
            className={`fixed inset-0 z-50 ${isModalOpen ? 'active' : ''}`}
            aria-modal="true"
            role="dialog"
            aria-labelledby="language-modal-title"
        >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm dark:bg-black/50"></div>

            {/* Modal Container */}
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    {/* Modal Content */}
                    <div
                        ref={modalContentRef}
                        className="modal-content relative w-full max-w-sm rounded-2xl bg-white shadow-xl backdrop-blur-xl dark:bg-gray-800"
                    >
                        {/* Header */}
                        <div className="px-6 pb-4 pt-6">
                            <div className="flex items-center justify-between">
                                <h3 id="language-modal-title" className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                    Select Language
                                </h3>
                                <button className="nav-icon-btn modal-close" onClick={closeModal} aria-label="Close dialog">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Options */}
                        <div className="px-4 pb-6">
                            <div className="space-y-1">
                                <button className="w-full" onClick={() => handleLanguageSelect('en')} aria-selected={language === 'en'}>
                                    <div
                                        className={`flex items-center ${language === 'en' ? 'justify-between' : ''} rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-700/50`}
                                    >
                                        <span className="text-[15px] font-medium text-gray-900 dark:text-gray-100">English</span>
                                        {language === 'en' && (
                                            <svg className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </button>
                                <button className="w-full" onClick={() => handleLanguageSelect('mm')} aria-selected={language === 'mm'}>
                                    <div
                                        className={`flex items-center ${language === 'mm' ? 'justify-between' : ''} rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-700/50`}
                                    >
                                        <span className="text-[15px] font-medium text-gray-900 dark:text-gray-100">မြန်မာ</span>
                                        {language === 'mm' && (
                                            <svg className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </button>
                                <button className="w-full" onClick={() => handleLanguageSelect('jp')} aria-selected={language === 'jp'}>
                                    <div
                                        className={`flex items-center ${language === 'jp' ? 'justify-between' : ''} rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-700/50`}
                                    >
                                        <span className="text-[15px] font-medium text-gray-900 dark:text-gray-100">日本語</span>
                                        {language === 'jp' && (
                                            <svg className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Memoize the component to prevent unnecessary re-renders
export const MemoizedLanguageModal = memo(LanguageModal);
export { MemoizedLanguageModal as LanguageModal };
