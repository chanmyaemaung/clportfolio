export const BlogCategoryFilter = () => {
    return (
        <>
            {/* <!-- Category Filter --> */}
            <div className="relative mb-12">
                {/* <!-- Center Container --> */}
                <div className="relative mx-auto max-w-4xl">
                    {/* <!-- Left Shadow --> */}
                    <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-linear-to-r from-white to-transparent dark:from-gray-900"></div>

                    {/* <!-- Right Shadow --> */}
                    <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-linear-to-l from-white to-transparent dark:from-gray-900"></div>

                    {/* <!-- Scrollable Filter Buttons --> */}
                    <div className="scrollbar-hide flex overflow-x-auto px-4 py-2">
                        <div className="mx-auto flex gap-3">
                            <button className="filter-btn active whitespace-nowrap" data-filter="all">
                                All Posts
                            </button>
                            <button className="filter-btn whitespace-nowrap" data-filter="frontend">
                                Frontend
                            </button>
                            <button className="filter-btn whitespace-nowrap" data-filter="backend">
                                Backend
                            </button>
                            <button className="filter-btn whitespace-nowrap" data-filter="devops">
                                DevOps
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
