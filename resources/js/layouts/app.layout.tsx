import { Footer, Header } from '@/components';
import { Head } from '@inertiajs/react';
import React from 'react';

export default function Layout({ children, title }: { children: React.ReactNode; title?: string }) {
    return (
        <>
            <Head title={title} />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
