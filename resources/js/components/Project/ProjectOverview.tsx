import { projects } from '@/helpers';
import { Link } from '@inertiajs/react';
import { ProjectCard } from './ProjectCard';

export const ProjectOverview = () => {
    return (
        <section className="scroll-reveal-section reveal bg-gray-60 py-20 dark:bg-gray-800/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Section Header --> */}
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Featured Projects</h2>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Some of my recent work</p>
                    </div>

                    {/* <!-- View All Projects Button --> */}
                    <Link
                        preserveScroll
                        href={route('project')}
                        className="hidden items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gray-100 px-5 py-2.5 text-[15px] font-medium text-gray-600 transition-all duration-200 hover:bg-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50 sm:inline-flex"
                    >
                        View all projects
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </Link>
                </div>

                {/* <!-- Projects Grid --> */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {projects && projects.slice(0, 3).map((project) => <ProjectCard key={project.id} project={project} />)}
                </div>

                {/* <!-- View All Projects - Mobile Only --> */}
                <div className="mt-8 px-4 sm:hidden sm:px-0">
                    <a
                        href={route('project')}
                        className="mx-auto flex w-full items-center justify-center gap-2 rounded-full bg-gray-100 px-5 py-3.5 text-[15px] font-medium text-gray-600 transition-all duration-200 hover:bg-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50"
                    >
                        View all projects
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};
