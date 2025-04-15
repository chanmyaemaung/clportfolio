import { ScrollRevealSection } from '@/components/UI';
import { Head, Link } from '@inertiajs/react';

type BlogDetailProps = {
    blog: {
        title: string;
        content: string;
        date: string;
        category: string;
        slug: string;
    };
};

export default function BlogDetail({ blog }: BlogDetailProps) {
    return (
        <>
            <Head title={blog.title} />

            <div className="container mx-auto px-4 py-12">
                <div className="mx-auto max-w-4xl">
                    <ScrollRevealSection>
                        <Link href={route('blog')} className="mb-8 inline-flex items-center text-primary-600 hover:underline dark:text-primary-400">
                            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            Back to Blog
                        </Link>

                        <div className="mb-8 overflow-hidden rounded-2xl">
                            <img src={`https://picsum.photos/seed/${blog.slug}/1200/600`} alt={blog.title} className="h-full w-full object-cover" />
                        </div>

                        <div className="mb-6 flex items-center justify-between">
                            <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                                {blog.category}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</span>
                        </div>

                        <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{blog.title}</h1>

                        <div className="rich-text-content">
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi ullamcorper
                                metus, in pellentesque nibh dui sit amet nunc. Donec condimentum ipsum ut augue vestibulum volutpat. Nullam euismod
                                tincidunt feugiat. Aenean placerat lacus quis lacus elementum, vel fermentum dui fringilla. Nulla facilisi.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Pellentesque luctus lacus at velit sagittis fringilla. Cras non augue nec dolor mollis eleifend. Donec lobortis
                                malesuada arcu. Sed vel sapien non odio placerat venenatis. Duis et ligula eu eros dictum convallis ac vitae urna.
                                Suspendisse potenti. Cras sit amet massa eu eros eleifend vulputate. Nulla facilisi.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Blog Subheading</h2>

                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur feugiat ante est,
                                eget placerat arcu volutpat et. Morbi sodales tellus non auctor pharetra. Nulla facilisi. Donec at fermentum nulla,
                                quis tincidunt erat. Nulla facilis urna non aliquam convallis. Etiam non blandit eros.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Curabitur varius sapien eu dui vulputate, vel finibus metus fringilla. Donec libero ex, vulputate vel aliquet at,
                                convallis a lorem. Ut venenatis enim at nulla dictum, sed fringilla mauris elementum. Suspendisse potenti. Nulla
                                facilisi.
                            </p>
                        </div>
                    </ScrollRevealSection>
                </div>
            </div>
        </>
    );
}
