import { ProjectCard } from './ProjectCard';
import { ProjectPagination } from './ProjectPagination';

export type ProjectType = {
    id: string | number;
    title: string;
    description: string;
    image: string;
    category: string;
    link?: string;
    technologies?: string[];
};

type ProjectGridProps = {
    projects: ProjectType[];
};

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <ProjectPagination />
        </>
    );
};
