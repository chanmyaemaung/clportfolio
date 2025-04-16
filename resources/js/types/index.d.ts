type Blog = {
    id: string | number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    slug: string;
    read: string;
};

type BlogDetailProps = {
    blog: {
        title: string;
        content: string;
        date: string;
        category: string;
        slug: string;
    };
};
