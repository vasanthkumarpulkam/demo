import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LegalPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Legal Information</h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Terms of Service</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    By using Service Hub, you agree to be bound by these Terms of Service. 
                    Please read them carefully.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h3>
                  <p className="mb-4">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Use License</h3>
                  <p className="mb-4">
                    Permission is granted to temporarily download one copy of the materials on Service Hub for personal, non-commercial transitory viewing only.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy Policy</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Information We Collect</h3>
                  <p className="mb-4">
                    We collect information you provide directly to us, such as when you create an account, post a job, or contact us for support.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How We Use Your Information</h3>
                  <p className="mb-4">
                    We use the information we collect to provide, maintain, and improve our services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Policy</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    We use cookies to enhance your experience on our website. By continuing to use our site, you consent to our use of cookies.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What Are Cookies</h3>
                  <p className="mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-gray-500">
                  Last updated: January 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}