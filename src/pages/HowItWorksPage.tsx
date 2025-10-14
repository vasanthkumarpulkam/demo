import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">How It Works</h1>

          {/* For Customers */}
          <section className="bg-white rounded-lg shadow p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-600 mb-6">For Customers</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Post Your Job</h3>
                  <p className="text-gray-600">
                    Create a detailed job posting with your requirements, budget, and timeline. 
                    Be specific about what you need to get accurate bids.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Review Bids</h3>
                  <p className="text-gray-600">
                    Qualified service providers will submit bids with their proposed pricing and timeline. 
                    Review their profiles, ratings, and previous work.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hire & Communicate</h3>
                  <p className="text-gray-600">
                    Choose the best provider for your needs and communicate directly through our messaging system. 
                    Discuss details and coordinate the work.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">4️⃣</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete & Review</h3>
                  <p className="text-gray-600">
                    Once the job is completed to your satisfaction, mark it as complete and leave a review 
                    to help other customers make informed decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* For Providers */}
          <section className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold text-primary-600 mb-6">For Service Providers</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
                  <p className="text-gray-600">
                    Sign up as a service provider and create a professional profile showcasing your skills, 
                    experience, and previous work.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Browse Jobs</h3>
                  <p className="text-gray-600">
                    Search and filter jobs by category, location, and budget. 
                    Find opportunities that match your expertise.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Submit Bids</h3>
                  <p className="text-gray-600">
                    Propose your pricing and timeline for jobs you're interested in. 
                    Explain why you're the best fit and what makes your service unique.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">4️⃣</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deliver Quality Work</h3>
                  <p className="text-gray-600">
                    Complete jobs professionally and on time. Build your reputation with positive reviews 
                    and grow your business on our platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <div className="flex justify-center space-x-4">
              <a
                href="/signup"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold"
              >
                Sign Up Now
              </a>
              <a
                href="/jobs"
                className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold"
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
