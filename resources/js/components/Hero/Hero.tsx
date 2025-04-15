export const Hero = () => {
    return (
        <section className="scroll-reveal-section reveal relative flex min-h-[calc(100vh-4rem)] items-center py-20">
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
                        <p className="text-primary-600 dark:text-primary-400 flex items-center justify-center gap-2 text-lg font-medium lg:justify-start">
                            Hi, I'm Chan Lay
                            <span className="wave-emoji text-2xl">👋</span>
                        </p>

                        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
                            Building digital experiences with purpose and precision
                        </h1>

                        <p className="mt-4 text-lg leading-relaxed text-gray-600 sm:mt-6 sm:text-xl dark:text-gray-300">
                            Full-stack developer specializing in e-commerce solutions, crafting high-performance websites with WordPress, Shopify, and
                            modern JavaScript frameworks.
                        </p>

                        {/* <!-- CTA Button --> */}
                        <div className="mt-8 sm:mt-10">
                            <a
                                href="./contact.html"
                                className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-white transition-colors duration-200 hover:bg-gray-800 sm:px-6 sm:py-3 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                            >
                                Let's work together
                                <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </div>

                        {/* <!-- Technologies with adjusted spacing --> */}
                        <div className="mt-8 sm:mt-12">
                            <div className="mb-6">
                                <div className="mb-3 flex items-center gap-3 sm:mb-2">
                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                        ></path>
                                    </svg>
                                    <div className="flex-1">
                                        <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            Tech Stack &amp; Expertise
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            Technologies and tools I use to bring ideas to life
                                        </p>
                                    </div>
                                    <span className="hidden h-px flex-1 bg-gray-200 sm:block dark:bg-gray-700"></span>
                                </div>
                            </div>

                            {/* <!-- Scrollable Container --> */}
                            <div className="relative -mx-4 sm:mx-0">
                                {/* <!-- Left Shadow --> */}
                                <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-12 dark:from-gray-900"></div>

                                {/* <!-- Scrollable Content --> */}
                                <div className="scrollbar-hide flex gap-3 overflow-x-auto px-4 pb-2">
                                    {/* <!-- Frontend Frameworks --> */}
                                    <div className="tech-group flex-none">
                                        <span className="tech-label">Frontend</span>
                                        <div className="flex gap-1.5">
                                            <div className="tech-card">
                                                <img src="images/technologies/react.svg" alt="React" className="tech-icon" />
                                                <span>React</span>
                                            </div>
                                            <div className="tech-card">
                                                <img src="images/technologies/vue.svg" alt="Vue" className="tech-icon" />
                                                <span>Vue</span>
                                            </div>
                                            <div className="tech-card">
                                                <img src="images/technologies/angular.svg" alt="Angular" className="tech-icon" />
                                                <span>Angular</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Backend Frameworks --> */}
                                    <div className="tech-group flex-none">
                                        <span className="tech-label">Backend</span>
                                        <div className="flex gap-1.5">
                                            <div className="tech-card">
                                                <img src="images/technologies/nodejs.svg" alt="Node.js" className="tech-icon" />
                                                <span>Node.js</span>
                                            </div>
                                            <div className="tech-card">
                                                <img src="images/technologies/nestjs.svg" alt="Nest.js" className="tech-icon" />
                                                <span>Nest.js</span>
                                            </div>
                                            <div className="tech-card">
                                                <img src="images/technologies/express.svg" alt="Express" className="tech-icon" />
                                                <span>Express.js</span>
                                            </div>
                                            <div className="tech-card">
                                                <img src="images/technologies/php.svg" alt="PHP" className="tech-icon" />
                                                <span>PHP</span>
                                            </div>
                                            <div className="tech-card">
                                                <img src="images/technologies/laravel.svg" alt="Laravel" className="tech-icon" />
                                                <span>Laravel</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- E-commerce Platforms --> */}
                                    <div className="tech-group flex-none">
                                        <span className="tech-label">E-commerce</span>
                                        <div className="flex gap-1.5">
                                            <div className="tech-card">
                                                <img src="images/technologies/shopify.svg" alt="Shopify" className="tech-icon" />
                                                <span>Shopify</span>
                                            </div>
                                            <div className="tech-card">
                                                <img src="images/technologies/wordpress.svg" alt="WordPress" className="tech-icon" />
                                                <span>WordPress</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Cross mobile platforms --> */}
                                    <div className="tech-group flex-none">
                                        <span className="tech-label">Mobile</span>
                                        <div className="flex gap-1.5">
                                            <div className="tech-card">
                                                <img src="images/technologies/flutter.svg" alt="Flutter" className="tech-icon" />
                                                <span>Flutter</span>
                                            </div>
                                            <div className="tech-card">
                                                <img src="images/technologies/react.svg" alt="React Native" className="tech-icon" />
                                                <span>React Native</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Other tech groups remain the same --> */}
                                </div>

                                {/* <!-- Right Shadow --> */}
                                <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-12 dark:from-gray-900"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
