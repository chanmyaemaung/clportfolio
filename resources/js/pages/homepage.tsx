import { BlogPreview, Hero, ProjectPreview } from '@/components';
import { Head } from '@inertiajs/react';

const HomePage = () => {
    return (
        <>
            <Head title="Chan Lay" />
            <Hero />
            <ProjectPreview />
            <BlogPreview />
        </>
    );
};

export default HomePage;
