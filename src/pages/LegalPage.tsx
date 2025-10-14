import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const LegalPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms & Privacy</h1>

          {/* Terms of Service */}
          <div className="bg-white rounded-lg shadow p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h3>
              <p>
                By accessing and using ServiceHub, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2. Use License</h3>
              <p>
                Permission is granted to temporarily use ServiceHub for personal or commercial purposes. 
                This is the grant of a license, not a transfer of title.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">3. User Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Treat other users with respect</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">4. Payments and Fees</h3>
              <p>
                Payment terms are agreed upon between customers and service providers. ServiceHub 
                may charge platform fees as outlined in our fee schedule.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">5. Limitation of Liability</h3>
              <p>
                ServiceHub is a platform connecting customers with service providers. We are not 
                responsible for the quality of services provided or disputes between users.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h3>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Profile information and preferences</li>
                <li>Job postings and bid information</li>
                <li>Messages and communications</li>
                <li>Payment information</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Process transactions and send notifications</li>
                <li>Communicate with you about our services</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">3. Information Sharing</h3>
              <p>
                We do not sell your personal information. We may share information with service 
                providers who assist us in operating our platform, with your consent, or as required by law.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4. Data Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">5. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">6. Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy, please contact us at 
                privacy@servicehub.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
