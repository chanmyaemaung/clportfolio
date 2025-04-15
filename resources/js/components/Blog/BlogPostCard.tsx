export const BlogPostCard = () => {
    return (
        <>
            {/* <!-- Blog Card --> */}
            <article
                className="blog-card rounded-3 xl group relative border border-gray-200/50 bg-white p-4 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/50 dark:border-gray-700/50 dark:bg-gray-900 dark:hover:border-gray-600 dark:hover:shadow-gray-900/50"
                data-category="devops"
            >
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
        </>
    );
};
