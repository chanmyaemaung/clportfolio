export const HeroTechnologies = () => {
    return (
        <>
            {/* <!-- Technologies with adjusted spacing --> */}
            <div className="mt-8 sm:mt-12">
                <div className="mb-6">
                    <div className="mb-3 flex items-center gap-3 sm:mb-2">
                        <svg className="h-5 w-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Technologies and tools I use to bring ideas to life</p>
                        </div>
                        <span className="hidden h-px flex-1 bg-gray-200 dark:bg-gray-700 sm:block"></span>
                    </div>
                </div>

                {/* <!-- Scrollable Container --> */}
                <div className="relative -mx-4 sm:mx-0">
                    {/* <!-- Left Shadow --> */}
                    <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-linear-to-r from-white to-transparent dark:from-gray-900 sm:w-12"></div>

                    {/* <!-- Scrollable Content --> */}
                    <div className="scrollbar-hide flex gap-3 overflow-x-auto px-4 pb-2">
                        {/* <!-- Frontend Frameworks --> */}
                        <div className="tech-group flex-none">
                            <span className="tech-label">Frontend</span>
                            <div className="flex gap-1.5">
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/react.svg" alt="React" className="tech-icon" />
                                    <span>React</span>
                                </div>
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/vue.svg" alt="Vue" className="tech-icon" />
                                    <span>Vue</span>
                                </div>
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/angular.svg" alt="Angular" className="tech-icon" />
                                    <span>Angular</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Backend Frameworks --> */}
                        <div className="tech-group flex-none">
                            <span className="tech-label">Backend</span>
                            <div className="flex gap-1.5">
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/nodejs.svg" alt="Node.js" className="tech-icon" />
                                    <span>Node.js</span>
                                </div>
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/nestjs.svg" alt="Nest.js" className="tech-icon" />
                                    <span>Nest.js</span>
                                </div>
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/express.svg" alt="Express" className="tech-icon" />
                                    <span>Express.js</span>
                                </div>
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/php.svg" alt="PHP" className="tech-icon" />
                                    <span>PHP</span>
                                </div>
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/laravel.svg" alt="Laravel" className="tech-icon" />
                                    <span>Laravel</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- E-commerce Platforms --> */}
                        <div className="tech-group flex-none">
                            <span className="tech-label">E-commerce</span>
                            <div className="flex gap-1.5">
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/shopify.svg" alt="Shopify" className="tech-icon" />
                                    <span>Shopify</span>
                                </div>
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/wordpress.svg" alt="WordPress" className="tech-icon" />
                                    <span>WordPress</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Cross mobile platforms --> */}
                        <div className="tech-group flex-none">
                            <span className="tech-label">Mobile</span>
                            <div className="flex gap-1.5">
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/flutter.svg" alt="Flutter" className="tech-icon" />
                                    <span>Flutter</span>
                                </div>
                                <div className="tech-card">
                                    <img src="/assets/images/technologies/react.svg" alt="React Native" className="tech-icon" />
                                    <span>React Native</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Other tech groups remain the same --> */}
                    </div>

                    {/* <!-- Right Shadow --> */}
                    <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-linear-to-l from-white to-transparent dark:from-gray-900 sm:w-12"></div>
                </div>
            </div>
        </>
    );
};
