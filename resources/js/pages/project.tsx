import { ProjectCard, ProjectCategoryFilter, ProjectHeader, ProjectLoadMoreButton } from '@/components';
import { Head } from '@inertiajs/react';

export default function Page() {
    return (
        <>
            <Head title="Projects" />

            <section className="scroll-reveal-section reveal py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ProjectHeader />

                    <ProjectCategoryFilter />

                    {/* <!-- Projects Grid --> */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[...Array(6)].map((_, index) => (
                            <ProjectCard key={index} />
                        ))}
                    </div>

                    <ProjectLoadMoreButton />
                </div>
            </section>
        </>
    );
}
