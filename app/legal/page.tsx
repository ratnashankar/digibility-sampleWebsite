export const metadata = {
  title: "Terms & Conditions | Digibility",
  description: "Read Digibility’s terms of service, subscription conditions, and refund rules.",
};

export default function TermsPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to Digibility. By accessing or using our services, you agree
        to these Terms and Conditions. Please read them carefully.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Service Scope</h2>
      <p>Digibility provides AI-powered digital marketing automation tools including social media management, analysis, and reporting.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Subscription & Payments</h2>
      <ul className="list-disc ml-6">
        <li>Monthly/Annual auto-renewal plans</li>
        <li>No refunds after calendar approval & credit usage</li>
        <li>Billing in INR (with GST) and USD (no GST)</li>
      </ul>
    </section>
  );
}