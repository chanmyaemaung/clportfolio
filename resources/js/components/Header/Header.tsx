export const Header = () => {
    const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
    return (
        <header className="bg-white shadow dark:bg-gray-800 dark:text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{appName}</h1>
            </div>
        </header>
    );
};
