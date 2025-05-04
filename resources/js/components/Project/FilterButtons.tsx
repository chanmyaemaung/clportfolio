type FilterButtonsProps = {
    currentFilter: string;
    onFilterChange: (filter: string) => void;
    categories: {
        id: string;
        label: string;
    }[];
};

export const FilterButtons = ({ currentFilter, onFilterChange, categories }: FilterButtonsProps) => {
    return (
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onFilterChange(category.id)}
                    className={`filter-btn ${currentFilter === category.id ? 'active' : ''}`}
                    data-filter={category.id}
                >
                    {category.label}
                </button>
            ))}
        </div>
    );
};
