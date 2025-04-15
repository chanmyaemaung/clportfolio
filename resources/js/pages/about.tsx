import { AboutExperienceTimeline, AboutHeader } from '@/components';
import { Head } from '@inertiajs/react';

const AboutPage = () => {
    return (
        <>
            <Head title="About" />

            <AboutHeader />

            {/* <!-- Experience Timeline --> */}
            <section className="scroll-reveal-section reveal mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Professional Journey</h2>

                    <div className="mx-auto max-w-4xl">
                        <AboutExperienceTimeline />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
