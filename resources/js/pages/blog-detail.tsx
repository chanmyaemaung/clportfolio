import { BlogCardDetail } from '@/components';
import { Head } from '@inertiajs/react';

export default function BlogDetail({ blog }: BlogDetailProps) {
    return (
        <div className="pb-16 pt-24">
            <Head title={blog.title} />

            <BlogCardDetail key={blog.slug} blog={blog} />
        </div>
    );
}
