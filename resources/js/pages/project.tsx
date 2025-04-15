import { ProjectFilterButtons, ProjectGrid, ProjectHeader } from '@/components/Project';
import { ScrollRevealSection } from '@/components/UI';
import { useProjectFilter } from '@/hooks';
import { Head } from '@inertiajs/react';

const projectCategories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'desktop', label: 'Desktop' },
];

// Example projects data
const projects = [
    {
        id: 1,
        title: 'E-commerce Website',
        description: 'A full-featured online shopping platform built with React and Node.js',
        image: '/images/projects/project1.jpg',
        category: 'web',
        link: 'https://example.com/project1',
    },
    {
        id: 2,
        title: 'Mobile Banking App',
        description: 'Secure banking application for iOS and Android using React Native',
        image: '/images/projects/project2.jpg',
        category: 'mobile',
        link: 'https://example.com/project2',
    },
    {
        id: 3,
        title: 'Inventory Management System',
        description: 'Desktop application for managing inventory and sales',
        image: '/images/projects/project3.jpg',
        category: 'desktop',
        link: 'https://example.com/project3',
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'Personal portfolio website built with Laravel and Inertia.js',
        image: '/images/projects/project4.jpg',
        category: 'web',
        link: 'https://example.com/project4',
    },
    {
        id: 5,
        title: 'Fitness Tracker App',
        description: 'Mobile app to track workouts and nutrition',
        image: '/images/projects/project5.jpg',
        category: 'mobile',
        link: 'https://example.com/project5',
    },
    {
        id: 6,
        title: 'Accounting Software',
        description: 'Desktop accounting software for small businesses',
        image: '/images/projects/project6.jpg',
        category: 'desktop',
        link: 'https://example.com/project6',
    },
];

export default function Project() {
    const { currentFilter, handleFilter, filterProjects } = useProjectFilter();
    const filteredProjects = filterProjects(projects);

    return (
        <>
            <Head title="Projects" />

            <div className="container mx-auto px-4 py-12">
                <ProjectHeader />

                <ScrollRevealSection>
                    <ProjectFilterButtons currentFilter={currentFilter} onFilterChange={handleFilter} categories={projectCategories} />
                </ScrollRevealSection>

                <ScrollRevealSection>
                    <ProjectGrid projects={filteredProjects} />
                </ScrollRevealSection>
            </div>
        </>
    );
}
