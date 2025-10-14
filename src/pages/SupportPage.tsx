import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const SupportPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Support Center</h1>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How do I post a job?</h3>
                <p className="text-gray-600">
                  Sign up as a customer, click on "Post a Job" in the navigation, fill in the details 
                  about your job including title, description, category, budget, and location, then submit.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How do I become a service provider?</h3>
                <p className="text-gray-600">
                  Sign up and select "Offer my services" during registration. Complete your profile 
                  with your skills and experience, then start bidding on available jobs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How does payment work?</h3>
                <p className="text-gray-600">
                  Payment terms are agreed upon between customers and service providers. 
                  We recommend discussing payment details before starting work.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What if I'm not satisfied with the work?</h3>
                <p className="text-gray-600">
                  Contact our support team if you have issues with a service provider. 
                  We're here to help resolve disputes and ensure quality service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How do I contact a service provider?</h3>
                <p className="text-gray-600">
                  Once you receive bids on your job, you can message providers directly through 
                  our built-in messaging system to discuss details.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center text-gray-600">
            <p>You can also reach us at:</p>
            <p className="mt-2">
              <strong>Email:</strong> support@servicehub.com
            </p>
            <p>
              <strong>Phone:</strong> 1-800-SERVICE
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
