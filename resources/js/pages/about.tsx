import { AboutExperienceTimeline, AboutHeader } from '@/components';
import { ScrollRevealSection } from '@/components/UI';
import { Head } from '@inertiajs/react';

const AboutPage = () => {
    return (
        <div className="pb-16 pt-24">
            <Head title="About" />

            <div className="container mx-auto px-4 py-12">
                <AboutHeader />

                {/* <!-- Experience Timeline --> */}
                <ScrollRevealSection className="mt-20">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Professional Journey</h2>

                        <div className="mx-auto max-w-4xl">
                            <AboutExperienceTimeline />
                        </div>
                    </div>
                </ScrollRevealSection>
            </div>
        </div>
    );
};

export default AboutPage;
