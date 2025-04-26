export const AboutExperienceTimeline = () => {
    return (
        <>
            {/* <!-- Timeline Container --> */}
            <div className="space-y-16">
                {/* <!-- Senior Developer Role --> */}
                <div className="experience-item">
                    <div className="mb-4 flex items-center">
                        <span className="text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400">2023 - PRESENT</span>
                        <div className="ml-4 grow border-t border-gray-200 dark:border-gray-700"></div>
                    </div>

                    <div className="rounded-2xl border border-gray-200/50 bg-white p-6 backdrop-blur-xl transition-colors duration-300 hover:border-primary-500/50 dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:border-primary-500/50 sm:p-8">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Senior Full Stack Developer</h3>
                        <h4 className="mb-4 font-medium text-primary-600 dark:text-primary-400">TechCorp Solutions</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                            Leading a team of developers in building enterprise-level applications. Implemented microservices architecture that
                            improved system scalability by 40%. Mentored junior developers and established coding standards.
                        </p>

                        {/* <!-- Skills Tags --> */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                React
                            </span>
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                Node.js
                            </span>
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                AWS
                            </span>
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                Docker
                            </span>
                        </div>
                    </div>
                </div>

                {/* <!-- Mid-level Developer Role --> */}
                <div className="experience-item">
                    <div className="mb-4 flex items-center">
                        <span className="text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400">2020 - 2023</span>
                        <div className="ml-4 grow border-t border-gray-200 dark:border-gray-700"></div>
                    </div>

                    <div className="rounded-2xl border border-gray-200/50 bg-white p-6 backdrop-blur-xl transition-colors duration-300 hover:border-primary-500/50 dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:border-primary-500/50 sm:p-8">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Full Stack Developer</h3>
                        <h4 className="mb-4 font-medium text-primary-600 dark:text-primary-400">Digital Innovators Inc</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                            Developed and maintained multiple client projects using modern JavaScript frameworks. Reduced application load time by 60%
                            through optimization techniques. Implemented automated testing that caught 95% of bugs before production.
                        </p>

                        {/* <!-- Skills Tags --> */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                Vue.js
                            </span>
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                Laravel
                            </span>
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                MySQL
                            </span>
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                Jest
                            </span>
                        </div>
                    </div>
                </div>

                {/* <!-- Junior Developer Role --> */}
                <div className="experience-item">
                    <div className="mb-4 flex items-center">
                        <span className="text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400">2018 - 2020</span>
                        <div className="ml-4 grow border-t border-gray-200 dark:border-gray-700"></div>
                    </div>

                    <div className="rounded-2xl border border-gray-200/50 bg-white p-6 backdrop-blur-xl transition-colors duration-300 hover:border-primary-500/50 dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:border-primary-500/50 sm:p-8">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Junior Web Developer</h3>
                        <h4 className="mb-4 font-medium text-primary-600 dark:text-primary-400">WebTech Solutions</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                            Started as a junior developer working on frontend development. Collaborated with the design team to implement responsive
                            websites. Participated in code reviews and improved coding skills.
                        </p>

                        {/* <!-- Skills Tags --> */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                HTML
                            </span>
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                CSS
                            </span>
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                JavaScript
                            </span>
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                PHP
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
