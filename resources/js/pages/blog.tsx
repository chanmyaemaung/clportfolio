import { BlogFilterButtons, BlogGrid, BlogHeader } from '@/components/Blog';
import { ScrollRevealSection } from '@/components/UI';
import { useBlogFilter } from '@/hooks';
import { Head } from '@inertiajs/react';

const blogCategories = [
    { id: 'all', label: 'All' },
    { id: 'tech', label: 'Technology' },
    { id: 'design', label: 'Design' },
    { id: 'business', label: 'Business' },
];

// Example blogs data
const blogs = [
    {
        id: 1,
        title: 'Getting Started with React',
        excerpt: 'Learn the basics of React and how to set up your first project',
        image: 'https://picsum.photos/seed/react101/800/600',
        category: 'tech',
        date: 'Mar 15, 2023',
        slug: 'getting-started-with-react',
    },
    {
        id: 2,
        title: 'UI Design Principles',
        excerpt: 'Essential principles every designer should know for creating effective UIs',
        image: 'https://picsum.photos/seed/uidesign/800/600',
        category: 'design',
        date: 'Apr 2, 2023',
        slug: 'ui-design-principles',
    },
    {
        id: 3,
        title: 'Startup Funding Guide',
        excerpt: 'Everything you need to know about securing funding for your startup',
        image: 'https://picsum.photos/seed/funding/800/600',
        category: 'business',
        date: 'Apr 18, 2023',
        slug: 'startup-funding-guide',
    },
    {
        id: 4,
        title: 'Introduction to TypeScript',
        excerpt: 'Why TypeScript is gaining popularity and how to get started',
        image: 'https://picsum.photos/seed/typescript/800/600',
        category: 'tech',
        date: 'May 5, 2023',
        slug: 'introduction-to-typescript',
    },
    {
        id: 5,
        title: 'Color Theory in Web Design',
        excerpt: 'How to use color theory to enhance your web designs',
        image: 'https://picsum.photos/seed/colortheory/800/600',
        category: 'design',
        date: 'Jun 12, 2023',
        slug: 'color-theory-in-web-design',
    },
    {
        id: 6,
        title: 'Scaling Your Business',
        excerpt: 'Strategies for taking your small business to the next level',
        image: 'https://picsum.photos/seed/scaling/800/600',
        category: 'business',
        date: 'Jul 1, 2023',
        slug: 'scaling-your-business',
    },
];

export default function Blog() {
    const { currentFilter, isAnimating, handleFilter, filterBlogs } = useBlogFilter();
    const filteredBlogs = filterBlogs(blogs);

    return (
        <>
            <Head title="Blog" />

            <div className="container mx-auto px-4 py-12">
                <BlogHeader />

                <ScrollRevealSection>
                    <BlogFilterButtons currentFilter={currentFilter} onFilterChange={handleFilter} categories={blogCategories} />
                </ScrollRevealSection>

                <ScrollRevealSection>
                    <BlogGrid blogs={filteredBlogs} isAnimating={isAnimating} />
                </ScrollRevealSection>
            </div>
        </>
    );
}
