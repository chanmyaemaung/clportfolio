export const ContactForm = () => {
    return (
        <>
            {/* <!-- Contact Form --> */}
            <div className="rounded-3xl border border-gray-200/50 bg-white p-6 dark:border-gray-700/50 dark:bg-gray-900">
                <form className="space-y-6">
                    {/* <!-- Name Input --> */}
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="focus:border-primary-600 dark:focus:border-primary-400 w-full rounded-xl border border-transparent bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors duration-200 focus:outline-hidden dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    {/* <!-- Email Input --> */}
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="focus:border-primary-600 dark:focus:border-primary-400 w-full rounded-xl border border-transparent bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors duration-200 focus:outline-hidden dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                            placeholder="john@example.com"
                            required
                        />
                    </div>

                    {/* <!-- Message Input --> */}
                    <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            className="focus:border-primary-600 dark:focus:border-primary-400 w-full resize-none rounded-xl border border-transparent bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors duration-200 focus:outline-hidden dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                            placeholder="Tell me about your project..."
                            required
                        />
                    </div>

                    {/* <!-- Submit Button --> */}
                    <button
                        type="submit"
                        className="bg-primary-600 hover:bg-primary-700 w-full cursor-pointer rounded-xl px-6 py-3 font-medium text-white transition-colors duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </>
    );
};
