export const ProjectLoadMoreButton = () => {
    return (
        <>
            {/* <!-- Load More Button --> */}
            <div className="mt-12 text-center">
                <button className="load-more-btn">
                    Load More Projects
                    <svg className="ml-2 h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </button>
            </div>
        </>
    );
};
