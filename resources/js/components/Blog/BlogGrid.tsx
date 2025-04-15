import { Link } from '@inertiajs/react';

type Blog = {
    id: string | number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    slug: string;
};

type BlogGridProps = {
    blogs: Blog[];
    isAnimating: boolean;
};

export const BlogGrid = ({ blogs, isAnimating }: BlogGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className="blog-card"
                    data-category={blog.category}
                    style={{
                        opacity: isAnimating ? 0 : 1,
                        transition: 'opacity 0.3s ease',
                    }}
                >
                    <div className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                                    {blog.category}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</span>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{blog.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{blog.excerpt}</p>

                            <Link
                                href={route('blog.show', blog.slug)}
                                className="mt-4 inline-flex items-center text-primary-600 hover:underline dark:text-primary-400"
                            >
                                Read More
                                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
