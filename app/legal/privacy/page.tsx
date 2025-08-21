import React from "react"
export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col pt-[8vh]">
            <main className="flex-grow container mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-indigo-700 mb-6">Privacy Policy</h1>
                <p className="mb-4 text-gray-700">At Digibility Solutions Pvt. Ltd., we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information.</p>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">1. Information We Collect</h2>
                    <p className="text-gray-700">We may collect personal details such as name, email, company details, and payment information. We also collect analytics data to improve our platform.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">2. How We Use Information</h2>
                    <p className="text-gray-700">Your information is used to deliver services, personalize experiences, process payments, and send important updates. We may also use anonymized data to train and improve our AI systems.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">3. Data Sharing</h2>
                    <p className="text-gray-700">We do not sell your data. However, we may share information with trusted third-party providers (e.g., hosting, analytics, payment gateways) to deliver services.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">4. Data Security</h2>
                    <p className="text-gray-700">We store user data securely on global cloud infrastructure and implement encryption, access control, and monitoring for safety.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">5. User Rights</h2>
                    <p className="text-gray-700">You can request data access, correction, or deletion by contacting us at privacy@digibility.ai.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">6. Updates</h2>
                    <p className="text-gray-700">This Privacy Policy may be updated. Changes will be notified via our platform or email.</p>
                </section>
            </main>
        </div>
    )
}
