export const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-800 dark:text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
                <p>© {new Date().getFullYear()} CL Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};
