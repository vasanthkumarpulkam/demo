import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FileText, Shield, Eye } from 'lucide-react';

export const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'cookies'>('terms');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Legal Information</h1>

          {/* Tabs */}
          <div className="bg-white rounded-lg border border-gray-200 mb-6">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('terms')}
                className={`flex-1 px-6 py-4 text-sm font-medium flex items-center justify-center ${
                  activeTab === 'terms'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <FileText className="w-5 h-5 mr-2" />
                Terms of Service
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`flex-1 px-6 py-4 text-sm font-medium flex items-center justify-center ${
                  activeTab === 'privacy'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Shield className="w-5 h-5 mr-2" />
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab('cookies')}
                className={`flex-1 px-6 py-4 text-sm font-medium flex items-center justify-center ${
                  activeTab === 'cookies'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Eye className="w-5 h-5 mr-2" />
                Cookie Policy
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'terms' && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Service</h2>
                  <p className="text-sm text-gray-600 mb-6">Last updated: October 14, 2024</p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Acceptance of Terms</h3>
                  <p className="text-gray-600 mb-4">
                    By accessing and using ServiceHub, you accept and agree to be bound by the terms and provisions of this agreement.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Use License</h3>
                  <p className="text-gray-600 mb-4">
                    Permission is granted to temporarily access the materials on ServiceHub for personal, non-commercial transitory viewing only.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. User Accounts</h3>
                  <p className="text-gray-600 mb-4">
                    You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Service Provider Terms</h3>
                  <p className="text-gray-600 mb-4">
                    Service providers must provide accurate information about their services, qualifications, and availability.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Customer Terms</h3>
                  <p className="text-gray-600 mb-4">
                    Customers must provide clear job descriptions and pay agreed-upon amounts for completed services.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Dispute Resolution</h3>
                  <p className="text-gray-600 mb-4">
                    Any disputes arising from the use of our platform will be handled according to our dispute resolution process.
                  </p>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                  <p className="text-sm text-gray-600 mb-6">Last updated: October 14, 2024</p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information We Collect</h3>
                  <p className="text-gray-600 mb-4">
                    We collect information you provide directly to us, such as when you create an account, post a job, or communicate with other users.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How We Use Your Information</h3>
                  <p className="text-gray-600 mb-4">
                    We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information Sharing</h3>
                  <p className="text-gray-600 mb-4">
                    We do not share your personal information with third parties except as described in this privacy policy.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Data Security</h3>
                  <p className="text-gray-600 mb-4">
                    We implement appropriate security measures to protect your personal information against unauthorized access.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Your Rights</h3>
                  <p className="text-gray-600 mb-4">
                    You have the right to access, correct, or delete your personal information at any time.
                  </p>
                </div>
              )}

              {activeTab === 'cookies' && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Policy</h2>
                  <p className="text-sm text-gray-600 mb-6">Last updated: October 14, 2024</p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Are Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    Cookies are small text files that are placed on your device when you visit our website.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How We Use Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    We use cookies to understand how you use our services, remember your preferences, and improve your experience.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Types of Cookies We Use</h3>
                  <ul className="list-disc pl-6 text-gray-600 mb-4">
                    <li className="mb-2">Essential cookies: Required for the website to function</li>
                    <li className="mb-2">Analytics cookies: Help us understand how visitors use our site</li>
                    <li className="mb-2">Preference cookies: Remember your settings and preferences</li>
                    <li className="mb-2">Marketing cookies: Used to deliver relevant advertisements</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Managing Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    You can control and/or delete cookies as you wish through your browser settings.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
