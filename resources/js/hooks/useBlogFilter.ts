import { useState } from 'react';

type Category = 'all' | 'tech' | 'design' | 'business' | string;

export const useBlogFilter = () => {
    const [currentFilter, setCurrentFilter] = useState<Category>('all');
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFilter = (filter: Category) => {
        if (isAnimating) return;

        if (filter !== currentFilter) {
            setIsAnimating(true);
            setCurrentFilter(filter);

            // Reset animation state after animation completes
            setTimeout(() => {
                setIsAnimating(false);
            }, 350);
        }
    };

    const filterBlogs = <T extends { category: string }>(blogs: T[]): T[] => {
        if (currentFilter === 'all') {
            return blogs;
        }
        return blogs.filter((blog) => blog.category === currentFilter);
    };

    return {
        currentFilter,
        isAnimating,
        handleFilter,
        filterBlogs,
    };
};
