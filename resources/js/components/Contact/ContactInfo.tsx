export const ContactInfo = () => {
    return (
        <>
            {/* <!-- Contact Info --> */}
            <div className="space-y-8">
                {/* <!-- Contact Card --> */}
                <div className="rounded-3xl border border-gray-200/50 bg-white p-6 dark:border-gray-700/50 dark:bg-gray-900">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
                    <div className="space-y-4">
                        {/* <!-- Email --> */}
                        <div className="flex items-start gap-4">
                            <div className="rounded-xl bg-gray-100 p-2 dark:bg-gray-800">
                                <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Email</h4>
                                <a
                                    href="mailto:mr.chenlay@gmail.com"
                                    className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                                >
                                    mr.chenlay@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* <!-- Location --> */}
                        <div className="flex items-start gap-4">
                            <div className="rounded-xl bg-gray-100 p-2 dark:bg-gray-800">
                                <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    ></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Location</h4>
                                <p className="text-gray-600 dark:text-gray-400">Remote · Yangon, Myanmar</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Social Links Card --> */}
                <div className="rounded-3xl border border-gray-200/50 bg-white p-6 dark:border-gray-700/50 dark:bg-gray-900">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Connect With Me</h3>
                    <div className="flex flex-wrap items-center gap-4">
                        {/* <!-- GitHub --> */}
                        <a
                            href="https://github.com/chanmyaemaung"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-gray-600 transition-colors duration-200 hover:bg-gray-200 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-primary-400"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"></path>
                            </svg>
                            <span className="font-medium">GitHub</span>
                        </a>

                        {/* <!-- LinkedIn --> */}
                        <a
                            href="https://linkedin.com/in/chanlay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-gray-600 transition-colors duration-200 hover:bg-gray-200 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-primary-400"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                            <span className="font-medium">LinkedIn</span>
                        </a>

                        {/* <!-- Instagram --> */}
                        <a
                            href="https://instagram.com/mr.mcmm"
                            target="_blank"
                            className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-gray-600 transition-colors duration-200 hover:bg-gray-200 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-primary-400"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                            </svg>
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>

                {/* <!-- Additional Info Card --> */}
                <div className="rounded-3xl border border-gray-200/50 bg-white p-6 dark:border-gray-700/50 dark:bg-gray-900">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Working Hours</h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                        <p>Monday - Friday: 9:00 AM - 2:00 PM</p>
                        <p>Weekend: Available for urgent matters</p>
                        <p className="mt-4 text-sm">All times are in Asia/Yangon timezone</p>
                    </div>
                </div>
            </div>
        </>
    );
};
