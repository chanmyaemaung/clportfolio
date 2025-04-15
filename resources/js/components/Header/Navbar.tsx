import { Link } from '@inertiajs/react';

export const Navbar = () => {
    return (
        <nav className="nav-blur">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* <!-- Logo --> */}
                    <Link href={route('homepage')} className="text-xl font-medium text-primary-600 dark:text-primary-400">
                        Chan Lay
                    </Link>

                    {/* <!-- Desktop Navigation --> */}
                    <div className="hidden md:flex md:items-center md:space-x-3">
                        <Link href={route('project')} className="nav-link">
                            Projects
                        </Link>
                        <Link href={route('blog')} className="nav-link">
                            Blog
                        </Link>
                        <Link href={route('about')} className="nav-link">
                            About
                        </Link>
                        <Link href={route('contact')} className="nav-link">
                            Contact
                        </Link>

                        {/* <!-- Desktop Language Button --> */}
                        <button id="langBtn" className="nav-icon-btn" aria-label="Change Language">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </button>

                        {/* <!-- Theme Toggle --> */}
                        <button id="themeToggle" className="nav-icon-btn" aria-label="Toggle Theme">
                            <svg id="darkIcon" className="hidden h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="lightIcon" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                            </svg>
                        </button>
                    </div>

                    {/* <!-- Mobile Navigation --> */}
                    <div className="flex items-center space-x-2 md:hidden">
                        {/* <!-- Mobile Language Button --> */}
                        <button id="mobileLangBtn" className="nav-icon-btn" aria-label="Change Language">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </button>

                        {/* <!-- Mobile Theme Toggle --> */}
                        <button id="mobileThemeToggle" className="nav-icon-btn" aria-label="Toggle Theme">
                            <svg id="mobileDarkIcon" className="hidden h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="mobileLightIcon" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                            </svg>
                        </button>

                        {/* <!-- Mobile Menu Button --> */}
                        <button id="mobileMenuBtn" className="nav-icon-btn" aria-label="Menu">
                            <div className="hamburger-lines">
                                <span className="hamburger-line top-line"></span>
                                <span className="hamburger-line middle-line"></span>
                                <span className="hamburger-line bottom-line"></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu --> */}
                <div id="mobileMenu" className="mobile-menu hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link href={route('project')} className="mobile-link">
                            Projects
                        </Link>
                        <Link href={route('blog')} className="mobile-link">
                            Blog
                        </Link>
                        <Link href={route('about')} className="mobile-link">
                            About
                        </Link>
                        <Link href={route('contact')} className="mobile-link">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
