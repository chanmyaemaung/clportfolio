import { Head } from '@inertiajs/react';

const Welcome = ({ user_name }: { user_name: string }) => {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex h-screen w-full items-center justify-center dark:bg-gray-900 dark:text-white">
                <h1 className="text-9xl dark:text-purple-500">Hello, World! {user_name}</h1>
            </div>
        </>
    );
};

export default Welcome;
