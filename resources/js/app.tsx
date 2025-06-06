import '../css/output.css';

import { LanguageProvider, MobileMenuProvider, ThemeProvider } from '@/contexts';
import Layout from '@/layouts/app.layout';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')).then((page: any) => {
            if (page.default.layout === undefined) {
                page.default.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;
            }
            return page;
        }),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider>
                <LanguageProvider>
                    <MobileMenuProvider>
                        <App {...props} />
                    </MobileMenuProvider>
                </LanguageProvider>
            </ThemeProvider>,
        );
    },
});
