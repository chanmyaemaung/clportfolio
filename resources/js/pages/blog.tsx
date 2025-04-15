import { BlogCategoryFilter, BlogHeader, BlogPagination, BlogPostCard } from '@/components';
import { Head } from '@inertiajs/react';

const BlogPage = () => {
    return (
        <>
            <Head title="Blog" />

            <BlogHeader />

            <section className="scroll-reveal-section reveal pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <BlogCategoryFilter />

                    {/* <!-- Blog Grid --> */}
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                        {[...Array(6)].map((_, index) => (
                            <BlogPostCard key={index} />
                        ))}
                    </div>

                    <BlogPagination />
                </div>
            </section>
        </>
    );
};

export default BlogPage;
