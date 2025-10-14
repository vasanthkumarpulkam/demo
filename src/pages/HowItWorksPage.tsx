import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { UserCircle, Briefcase, MessageCircle, CheckCircle, Star, DollarSign } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">How ServiceHub Works</h1>
            <p className="text-xl text-blue-100">
              Connecting customers with service providers has never been easier
            </p>
          </div>
        </div>

        {/* For Customers */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              For Customers
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Post Your Job</h3>
                <p className="text-gray-600">
                  Describe your project, set your budget, and specify requirements. It only takes a few minutes.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Review Bids</h3>
                <p className="text-gray-600">
                  Receive competitive bids from qualified providers. Compare profiles, ratings, and proposals.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Get It Done</h3>
                <p className="text-gray-600">
                  Choose the best provider, communicate securely, and get your job completed with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* For Providers */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              For Service Providers
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <UserCircle className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Create Your Profile</h3>
                <p className="text-gray-600">
                  Showcase your skills, experience, and portfolio. Build trust with verified credentials.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Find Jobs & Bid</h3>
                <p className="text-gray-600">
                  Browse available jobs, submit competitive bids, and win projects that match your expertise.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Complete & Get Paid</h3>
                <p className="text-gray-600">
                  Deliver quality work, receive payment securely, and build your reputation with 5-star reviews.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose ServiceHub?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Star className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Verified Providers</h3>
                <p className="text-sm text-gray-600">
                  All providers are vetted and verified for your safety
                </p>
              </div>

              <div className="text-center">
                <DollarSign className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
                <p className="text-sm text-gray-600">
                  Safe and secure payment processing
                </p>
              </div>

              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Direct Communication</h3>
                <p className="text-sm text-gray-600">
                  Chat directly with providers in real-time
                </p>
              </div>

              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-gray-600">
                  100% satisfaction guarantee on all jobs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers and providers today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Sign Up Now
              </a>
              <a
                href="/jobs"
                className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition border-2 border-white"
              >
                Browse Jobs
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
