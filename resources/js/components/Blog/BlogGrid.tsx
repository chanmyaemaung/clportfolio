import { BlogCard } from './BlogCard';

type BlogGridProps = {
    blogs: Blog[];
    isAnimating: boolean;
};

export const BlogGrid = ({ blogs, isAnimating }: BlogGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
            ))}
        </div>
    );
};
