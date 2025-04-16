import { ContactForm, ContactHeader, ContactInfo } from '@/components';
import { ScrollRevealSection } from '@/components/UI';
import { Head } from '@inertiajs/react';

const ContactPage = () => {
    return (
        <div className="pb-16 pt-24">
            <Head title="Contact" />

            <div className="container mx-auto px-4 py-12">
                <ScrollRevealSection>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            <ContactHeader />

                            {/* <!-- Contact Grid --> */}
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                                <ContactForm />
                                <ContactInfo />
                            </div>
                        </div>
                    </div>
                </ScrollRevealSection>
            </div>
        </div>
    );
};

export default ContactPage;
