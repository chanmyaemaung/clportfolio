import { Link } from '@inertiajs/react';
import { HeroTechnologies } from './HeroTechnologies';

export const Hero = () => {
    return (
        <section className="scroll-reveal-section reveal relative flex min-h-[calc(100vh-4rem)] items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Grid container with mobile-first layout --> */}
                <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-2 lg:gap-20">
                    {/* <!-- Image Container - First on mobile, Second on desktop --> */}
                    <div className="order-1 lg:order-2 lg:justify-self-end">
                        <div className="hero-blob">
                            <div className="blob-content">
                                <img
                                    src="https://cdn.prod.website-files.com/64c40084d74dba96c7d3beb9/6728d9f30efa15a119b384f6_cmm_half_passport_enhanced-p-800.png"
                                    alt="Profile photo of Chan Lay"
                                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Text Content - Second on mobile, First on desktop --> */}
                    <div className="order-2 max-w-full text-center lg:order-1 lg:max-w-xl lg:text-left">
                        <p className="flex items-center justify-center gap-2 text-lg font-medium text-primary-600 dark:text-primary-400 lg:justify-start">
                            Hi, I'm Chan Lay
                            <span className="wave-emoji text-2xl">👋</span>
                        </p>

                        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                            Building digital experiences with purpose and precision
                        </h1>

                        <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:mt-6 sm:text-xl">
                            Full-stack developer specializing in e-commerce solutions, crafting high-performance websites with WordPress, Shopify, and
                            modern JavaScript frameworks.
                        </p>

                        {/* <!-- CTA Button --> */}
                        <div className="mt-8 sm:mt-10">
                            <Link
                                preserveScroll
                                href={route('contact')}
                                className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-white transition-colors duration-200 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 sm:px-6 sm:py-3"
                            >
                                Let's work together
                                <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </Link>
                        </div>

                        <HeroTechnologies />
                    </div>
                </div>
            </div>
        </section>
    );
};
