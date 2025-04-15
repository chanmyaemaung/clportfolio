export const BlogPreview = () => {
    return (
        <section className="scroll-reveal-section reveal bg-gray-50 py-20 dark:bg-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Section Header --> */}
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Latest Articles</h2>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Thoughts, insights, and perspectives</p>
                    </div>

                    {/* <!-- View All Posts Button --> */}
                    <a
                        href="/blog.html"
                        className="hidden items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gray-100 px-5 py-2.5 text-[15px] font-medium text-gray-600 transition-all duration-200 hover:bg-gray-200 sm:inline-flex dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50"
                    >
                        View all posts
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>

                {/* <!-- Blog Grid --> */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {/* <!-- Blog Card 1 --> */}
                    <article className="blog-card group relative rounded-3xl border border-gray-200/50 bg-white p-4 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/50 dark:border-gray-700/50 dark:bg-gray-900 dark:hover:border-gray-600 dark:hover:shadow-gray-900/50">
                        <a href="/blog-detail.html" className="block">
                            {/* <!-- Image Container --> */}
                            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800/50">
                                <img
                                    src="https://images.pexels.com/photos/7437491/pexels-photo-7437491.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                                    alt="Blog post title"
                                    className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* <!-- Category Badge --> */}
                                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-900/90 dark:text-white">
                                    Backend
                                </span>
                            </div>

                            {/* <!-- Content --> */}
                            <div className="mt-6">
                                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                    <time dateTime="2024-02-15">Feb 15, 2024</time>
                                    <span>·</span>
                                    <span>5 min read</span>
                                </div>

                                <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mt-3 text-xl font-semibold text-gray-900 transition-colors duration-200 dark:text-white">
                                    Blog Post Title
                                </h3>

                                <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-400">Blog post description goes here...</p>
                            </div>
                        </a>
                    </article>

                    {/* <!-- Blog Card 2 --> */}
                    <article className="blog-card group relative rounded-3xl border border-gray-200/50 bg-white p-4 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/50 dark:border-gray-700/50 dark:bg-gray-900 dark:hover:border-gray-600 dark:hover:shadow-gray-900/50">
                        <a href="/blog-detail.html" className="block">
                            {/* <!-- Image Container --> */}
                            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800/50">
                                <img
                                    src="https://images.pexels.com/photos/10816120/pexels-photo-10816120.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                                    alt="Blog post title"
                                    className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* <!-- Category Badge --> */}
                                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-900/90 dark:text-white">
                                    Frontend
                                </span>
                            </div>

                            {/* <!-- Content --> */}
                            <div className="mt-6">
                                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                    <time dateTime="2024-02-15">Feb 15, 2024</time>
                                    <span>·</span>
                                    <span>5 min read</span>
                                </div>

                                <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mt-3 text-xl font-semibold text-gray-900 transition-colors duration-200 dark:text-white">
                                    Blog Post Title
                                </h3>

                                <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-400">Blog post description goes here...</p>
                            </div>
                        </a>
                    </article>

                    {/* <!-- Blog Card 3 --> */}
                    <article className="blog-card group relative rounded-3xl border border-gray-200/50 bg-white p-4 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/50 dark:border-gray-700/50 dark:bg-gray-900 dark:hover:border-gray-600 dark:hover:shadow-gray-900/50">
                        <a href="/blog-detail.html" className="block">
                            {/* <!-- Image Container --> */}
                            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800/50">
                                <img
                                    src="https://images.pexels.com/photos/6804610/pexels-photo-6804610.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                                    alt="Blog post title"
                                    className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* <!-- Category Badge --> */}
                                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-900/90 dark:text-white">
                                    DevOps
                                </span>
                            </div>

                            {/* <!-- Content --> */}
                            <div className="mt-6">
                                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                    <time dateTime="2024-02-15">Feb 15, 2024</time>
                                    <span>·</span>
                                    <span>5 min read</span>
                                </div>

                                <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mt-3 text-xl font-semibold text-gray-900 transition-colors duration-200 dark:text-white">
                                    Blog Post Title
                                </h3>

                                <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-400">Blog post description goes here...</p>
                            </div>
                        </a>
                    </article>
                </div>

                {/* <!-- View All Posts - Mobile Only --> */}
                <div className="mt-8 px-4 sm:hidden sm:px-0">
                    <a
                        href="/blog.html"
                        className="mx-auto flex w-full items-center justify-center gap-2 rounded-full bg-gray-100 px-5 py-3.5 text-[15px] font-medium text-gray-600 transition-all duration-200 hover:bg-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50"
                    >
                        View all posts
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};
