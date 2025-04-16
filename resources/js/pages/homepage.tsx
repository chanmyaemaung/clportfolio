import { BlogOverview, Hero, ProjectOverview } from '@/components';
import { ScrollRevealSection } from '@/components/UI';
import { Head } from '@inertiajs/react';

const HomePage = () => {
    return (
        <>
            <Head title="Chan Lay" />
            <div className="container mx-auto px-4 py-12">
                <ScrollRevealSection>
                    <Hero />
                </ScrollRevealSection>
            </div>
            <ScrollRevealSection>
                <ProjectOverview />
            </ScrollRevealSection>
            <ScrollRevealSection>
                <BlogOverview />
            </ScrollRevealSection>
        </>
    );
};

export default HomePage;
