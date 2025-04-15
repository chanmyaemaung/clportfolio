type Project = {
    id: string | number;
    title: string;
    description: string;
    image: string;
    category: string;
    link?: string;
};

type ProjectGridProps = {
    projects: Project[];
};

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <div key={project.id} className="project-card animate-fade-in" data-category={project.category}>
                    <div className="group relative overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center text-primary-600 hover:underline dark:text-primary-400"
                                >
                                    View Project
                                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
