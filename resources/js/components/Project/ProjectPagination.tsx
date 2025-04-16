export const ProjectPagination = () => {
    return (
        <>
            {/* <!-- Pagination --> */}
            <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800/50 dark:text-gray-400 dark:hover:bg-gray-700/50">
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white">1</button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800/50 dark:text-gray-400 dark:hover:bg-gray-700/50">
                        2
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800/50 dark:text-gray-400 dark:hover:bg-gray-700/50">
                        3
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800/50 dark:text-gray-400 dark:hover:bg-gray-700/50">
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </nav>
            </div>
        </>
    );
};
