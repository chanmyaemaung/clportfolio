import { ProjectFilterButtons, ProjectGrid, ProjectHeader } from '@/components/Project';
import { ScrollRevealSection } from '@/components/UI';
import { projects } from '@/helpers';
import { useProjectFilter } from '@/hooks';
import { Head } from '@inertiajs/react';

const projectCategories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'desktop', label: 'Desktop' },
];

export default function Project() {
    const { currentFilter, handleFilter, filterProjects } = useProjectFilter();
    const filteredProjects = filterProjects(projects);

    return (
        <div className="pb-16 pt-24">
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
        </div>
    );
}
