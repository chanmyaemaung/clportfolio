export function toCapitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Example projects Data
export const projects = [
    {
        id: 1,
        title: 'E-commerce Website',
        description: 'A full-featured online shopping platform built with React and Node.js',
        image: 'https://picsum.photos/seed/project1/800/600',
        category: 'web',
        link: 'https://example.com/project1',
        technologies: ['React', 'Node.js'],
    },
    {
        id: 2,
        title: 'Mobile Banking App',
        description: 'Secure banking application for iOS and Android using React Native',
        image: 'https://picsum.photos/seed/project2/800/600',
        category: 'mobile',
        link: 'https://example.com/project2',
        technologies: ['Shopify', 'Liquid'],
    },
    {
        id: 3,
        title: 'Inventory Management System',
        description: 'Desktop application for managing inventory and sales',
        image: 'https://picsum.photos/seed/project3/800/600',
        category: 'desktop',
        link: 'https://example.com/project3',
        technologies: ['Laravel', 'PHP'],
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'Personal portfolio website built with Laravel and Inertia.js',
        image: 'https://picsum.photos/seed/project4/800/600',
        category: 'web',
        link: 'https://example.com/project4',
        technologies: ['Node.js', 'Next.js'],
    },
    {
        id: 5,
        title: 'Fitness Tracker App',
        description: 'Mobile app to track workouts and nutrition',
        image: 'https://picsum.photos/seed/project5/800/600',
        category: 'mobile',
        link: 'https://example.com/project5',
        technologies: ['Flutter', 'Dart'],
    },
    {
        id: 6,
        title: 'Accounting Software',
        description: 'Desktop accounting software for small businesses',
        image: 'https://picsum.photos/seed/project6/800/600',
        category: 'desktop',
        link: 'https://example.com/project6',
        technologies: ['Node.js', 'Express'],
    },
];
