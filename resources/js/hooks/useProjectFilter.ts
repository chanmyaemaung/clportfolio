import { useState } from 'react';

type Category = 'all' | 'web' | 'mobile' | 'desktop' | string;

export const useProjectFilter = () => {
    const [currentFilter, setCurrentFilter] = useState<Category>('all');

    const handleFilter = (filter: Category) => {
        setCurrentFilter(filter);
    };

    const filterProjects = <T extends { category: string }>(projects: T[]): T[] => {
        if (currentFilter === 'all') {
            return projects;
        }
        return projects.filter((project) => project.category === currentFilter);
    };

    return {
        currentFilter,
        handleFilter,
        filterProjects,
    };
};
