export const ProjectPreview = () => {
    return (
        <section className="scroll-reveal-section reveal py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Section Header --> */}
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Featured Projects</h2>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Some of my recent work</p>
                    </div>

                    {/* <!-- View All Projects Button --> */}
                    <a
                        href="/projects.html"
                        className="hidden items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gray-100 px-5 py-2.5 text-[15px] font-medium text-gray-600 transition-all duration-200 hover:bg-gray-200 sm:inline-flex dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50"
                    >
                        View all projects
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>

                {/* <!-- Projects Grid --> */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {/* <!-- Project Card --> */}
                    <article className="project-card group">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800/50">
                            {/* <!-- Project Image --> */}
                            <img
                                src="https://ombraz.com/cdn/shop/products/classic_matteBrown_brown_visorsOn_side.jpg"
                                alt="Project Name"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* <!-- Overlay --> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </div>

                        {/* <!-- Card Content --> */}
                        <div className="mt-4 space-y-2">
                            {/* <!-- Tags --> */}
                            <div className="flex gap-2">
                                <span className="project-tag">React</span>
                                <span className="project-tag">Node.js</span>
                            </div>

                            {/* <!-- Title --> */}
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                <a href="/project/1" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                                    Project Name
                                </a>
                            </h3>

                            {/* <!-- Description --> */}
                            <p className="line-clamp-2 text-gray-600 dark:text-gray-400">
                                Brief description of the project that highlights the key features and technologies used.
                            </p>
                        </div>

                        {/* <!-- Card Footer --> */}
                        <div className="mt-4 flex items-center justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">2023</span>
                            <button className="project-link-btn" aria-label="View Project Name details">
                                View Project
                                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                    </article>

                    {/* <!-- Project Card --> */}
                    <article className="project-card group" data-category="frontend">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800/50">
                            {/* <!-- Project Image --> */}
                            <img
                                src="https://ombraz.com/cdn/shop/products/classic_matteBrown_brown_visorsOff_front.jpg"
                                alt="Project Name"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* <!-- Overlay --> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </div>

                        {/* <!-- Card Content --> */}
                        <div className="mt-4 space-y-2">
                            {/* <!-- Tags --> */}
                            <div className="flex gap-2">
                                <span className="project-tag">React</span>
                                <span className="project-tag">Node.js</span>
                            </div>

                            {/* <!-- Title --> */}
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                <a href="/project/1" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                                    Project Name
                                </a>
                            </h3>

                            {/* <!-- Description --> */}
                            <p className="line-clamp-2 text-gray-600 dark:text-gray-400">
                                Brief description of the project that highlights the key features and technologies used.
                            </p>
                        </div>

                        {/* <!-- Card Footer --> */}
                        <div className="mt-4 flex items-center justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">2023</span>
                            <button className="project-link-btn" aria-label="View Project Name details">
                                View Project
                                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                    </article>

                    {/* <!-- Project Card --> */}
                    <article className="project-card group" data-category="backend">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800/50">
                            {/* <!-- Project Image --> */}
                            <img
                                src="https://ombraz.com/cdn/shop/products/classic_tortoise_grey_visorsOff_front.jpg"
                                alt="Project Name"
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* <!-- Overlay --> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </div>

                        {/* <!-- Card Content --> */}
                        <div className="mt-4 space-y-2">
                            {/* <!-- Tags --> */}
                            <div className="flex gap-2">
                                <span className="project-tag">React</span>
                                <span className="project-tag">Node.js</span>
                            </div>

                            {/* <!-- Title --> */}
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                <a href="/project/1" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                                    Project Name
                                </a>
                            </h3>

                            {/* <!-- Description --> */}
                            <p className="line-clamp-2 text-gray-600 dark:text-gray-400">
                                Brief description of the project that highlights the key features and technologies used.
                            </p>
                        </div>

                        {/* <!-- Card Footer --> */}
                        <div className="mt-4 flex items-center justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">2023</span>
                            <button className="project-link-btn" aria-label="View Project Name details">
                                View Project
                                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                    </article>

                    {/* <!-- Add more project cards here --> */}
                </div>

                {/* <!-- View All Projects - Mobile Only --> */}
                <div className="mt-8 px-4 sm:hidden sm:px-0">
                    <a
                        href="/projects.html"
                        className="mx-auto flex w-full items-center justify-center gap-2 rounded-full bg-gray-100 px-5 py-3.5 text-[15px] font-medium text-gray-600 transition-all duration-200 hover:bg-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50"
                    >
                        View all projects
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};
