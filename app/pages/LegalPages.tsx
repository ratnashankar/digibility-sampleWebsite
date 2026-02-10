

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LegalPageProps {
  title: string;
  content: React.ReactNode;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, content }) => {
  return (
    <div className="App">
      <Header />

      <main className="min-h-screen py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 
            className="text-3xl sm:text-4xl font-bold mb-8 text-[#4E5674]"
            data-testid="legal-page-title"
          >
            {title}
          </h1>

          <div className="prose prose-lg max-w-none text-[#64748b]" data-testid="legal-content">
            {content}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const PrivacyPolicy: React.FC = () => (
  <LegalPage
    title="Privacy Policy"
    content={
      <>
        <p>Last updated: January 2025</p>
        <p>This Privacy Policy describes how Digibility collects, uses, and protects your personal information.</p>
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly, such as account details, profile information, and content preferences.</p>
        <h2>How We Use Your Information</h2>
        <p>We use your information to provide, maintain, and improve our services, and to communicate with you about updates and features.</p>
        <h2>Data Security</h2>
        <p>We implement industry-standard security measures to protect your data, including encryption and secure storage.</p>
      </>
    }
  />
);

export const TermsOfService: React.FC = () => (
  <LegalPage
    title="Terms of Service"
    content={
      <>
        <p>Last updated: January 2025</p>
        <p>By accessing or using Digibility, you agree to be bound by these Terms of Service.</p>
        <h2>Use of Service</h2>
        <p>You may use our service only for lawful purposes and in accordance with these terms.</p>
        <h2>Account Responsibilities</h2>
        <p>You are responsible for maintaining the security of your account and all activities under your account.</p>
        <h2>Termination</h2>
        <p>We may terminate or suspend your access immediately, without prior notice, for any breach of these terms.</p>
      </>
    }
  />
);

export const AcceptableUse: React.FC = () => (
  <LegalPage
    title="Acceptable Use Policy"
    content={
      <>
        <p>Last updated: January 2025</p>
        <p>This Acceptable Use Policy outlines prohibited uses of the Digibility service.</p>
        <h2>Prohibited Activities</h2>
        <ul>
          <li>Harassment, abuse, or harm to others</li>
          <li>Spam or unsolicited communications</li>
          <li>Violation of intellectual property rights</li>
          <li>Distribution of malware or harmful code</li>
        </ul>
        <h2>Enforcement</h2>
        <p>Violations of this policy may result in suspension or termination of your account.</p>
      </>
    }
  />
);

export const SubProcessors: React.FC = () => (
  <LegalPage
    title="Sub-processors"
    content={
      <>
        <p>Last updated: January 2025</p>
        <p>Digibility engages the following sub-processors to assist in providing our services:</p>
        <ul>
          <li><strong>Amazon Web Services (AWS)</strong> - Cloud hosting and infrastructure</li>
          <li><strong>Stripe</strong> - Payment processing</li>
          <li><strong>SendGrid</strong> - Email delivery</li>
          <li><strong>OpenAI</strong> - AI content generation</li>
        </ul>
        <p>All sub-processors are contractually required to maintain appropriate security and privacy standards.</p>
      </>
    }
  />
);

export const DPA: React.FC = () => (
  <LegalPage
    title="Data Processing Agreement"
    content={
      <>
        <p>Last updated: January 2025</p>
        <p>This Data Processing Agreement ("DPA") forms part of the Terms of Service between you and Digibility.</p>
        <h2>Data Processing</h2>
        <p>Digibility processes personal data on your behalf as a data processor in accordance with your instructions.</p>
        <h2>Security Measures</h2>
        <p>We implement appropriate technical and organizational measures to ensure data security, including encryption, access controls, and regular security audits.</p>
        <h2>Data Subject Rights</h2>
        <p>We assist you in fulfilling your obligations regarding data subject rights under applicable data protection laws.</p>
      </>
    }
  />
);
