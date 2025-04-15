import { ContactForm, ContactHeader, ContactInfo } from '@/components';
import { Head } from '@inertiajs/react';

const ContactPage = () => {
    return (
        <>
            <Head title="Contact" />

            <section className="scroll-reveal-section reveal pb-16 pt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <ContactHeader />

                        {/* <!-- Contact Grid --> */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                            <ContactForm />

                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
