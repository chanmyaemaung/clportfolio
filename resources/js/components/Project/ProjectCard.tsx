export const ProjectCard = ({ project }: any) => {
    return (
        <>
            <article className="project-card group animate-fade-in">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800/50">
                    {/* <!-- Project Image --> */}
                    <img
                        src={project.image}
                        alt="Project Name"
                        className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    {/* <!-- Overlay --> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>

                {/* <!-- Card Content --> */}
                <div className="mt-4 space-y-2">
                    {/* <!-- Tags --> */}
                    <div className="flex gap-2">
                        {/* <span className="project-tag">React</span>
                        <span className="project-tag">Node.js</span> */}
                        {project.technologies.map((tech: string, idx: number) => (
                            <span key={idx} className="project-tag">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* <!-- Title --> */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        <a href={project.link} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                            {project.title}
                        </a>
                    </h3>

                    {/* <!-- Description --> */}
                    <p className="line-clamp-2 text-gray-600 dark:text-gray-400">{project.description}</p>
                </div>

                {/* <!-- Card Footer --> */}
                <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">2023</span>
                    <a role="link" href={project.link} className="project-link-btn cursor-pointer" aria-label="View Project Name details">
                        View Project
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </a>
                </div>
            </article>
        </>
    );
};
