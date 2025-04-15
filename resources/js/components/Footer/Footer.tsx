import { Link } from '@inertiajs/react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section scroll-reveal-section reveal">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Main Footer Content --> */}
                <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-4">
                    {/* <!-- Brand Column --> */}
                    <div className="space-y-4">
                        <Link href={route('homepage')} className="text-primary-600 dark:text-primary-400 text-xl font-medium">
                            Chan Lay
                        </Link>
                        <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                            Full-stack developer specializing in crafting exceptional digital experiences with modern technologies.
                        </p>
                        {/* <!-- Social Links --> */}
                        <div className="flex space-x-2">
                            <a href="https://github.com/chanmyaemaung" className="footer-social-link" aria-label="GitHub Profile">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/chanlay" className="footer-social-link" aria-label="LinkedIn Profile">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/mr.mcmm" className="footer-social-link" aria-label="Instagram Profile">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Quick Links --> */}
                    <div className="space-y-4">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('project')} className="footer-link">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href={route('blog')} className="footer-link">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href={route('about')} className="footer-link">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href={route('contact')} className="footer-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Contact Section --> */}
                    <div className="space-y-4">
                        <h3 className="footer-heading">Get in Touch</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <span className="text-gray-600 dark:text-gray-400">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                </span>
                                <a href="mailto:info@chanlay.dev" className="footer-link">
                                    info@chanlay.dev
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-gray-600 dark:text-gray-400">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="footer-link">Remote. Yangon, Myanmar</span>
                            </li>
                        </ul>
                        <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                            Feel free to reach out for collaborations or just a friendly chat.
                        </p>
                    </div>

                    {/* <!-- Newsletter --> */}
                    <div className="space-y-4">
                        <h3 className="footer-heading">Stay Updated</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Subscribe to my newsletter for the latest updates and insights.</p>
                        <form className="space-y-2" aria-label="Newsletter signup form">
                            <div className="relative">
                                <label htmlFor="email-input" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email-input"
                                    name="email"
                                    className="focus:ring-primary-500 dark:focus:ring-primary-400 w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors duration-200 focus:border-transparent focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                                    placeholder="Enter your email"
                                    required
                                />
                                <div
                                    data-lastpass-icon-root=""
                                    style={{
                                        position: 'relative',
                                        height: '0px',
                                        width: '0px',
                                        float: 'left',
                                    }}
                                ></div>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-gray-900 px-4 py-2.5 font-medium text-white transition-colors duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:focus:ring-white"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* <!-- Bottom Footer --> */}
                <div className="flex flex-col items-center justify-between space-y-4 border-t border-gray-200 py-6 sm:flex-row sm:space-y-0 dark:border-gray-800">
                    {/* <!-- Copyright --> */}
                    <div className="text-sm text-gray-600 dark:text-gray-400">© {currentYear} Chan Lay. All rights reserved.</div>

                    {/* <!-- Legal Links --> */}
                    <div className="flex items-center gap-3 sm:gap-6">
                        <Link href="/privacy" className="footer-legal-link">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="footer-legal-link">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="footer-legal-link">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
