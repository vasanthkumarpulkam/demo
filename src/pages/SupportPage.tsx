import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SupportPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
            <p className="text-xl text-gray-600">We're here to help you succeed</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">How do I post a job?</h4>
                  <p className="text-gray-600 text-sm">Click "Post a Job" and fill out the form with your requirements.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">How do I pay for services?</h4>
                  <p className="text-gray-600 text-sm">We accept cash payments for all services.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Can I cancel a job?</h4>
                  <p className="text-gray-600 text-sm">Yes, you can cancel a job before it's started.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Email Support</h4>
                  <p className="text-gray-600 text-sm">support@servicehub.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone Support</h4>
                  <p className="text-gray-600 text-sm">1-800-SERVICE (1-800-737-8423)</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Live Chat</h4>
                  <p className="text-gray-600 text-sm">Available 24/7 on our website</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What can we help you with?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please describe your issue in detail..."
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}