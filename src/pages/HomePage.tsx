import React from "react";
import { Link } from "react-router-dom";
import { Search, Star, Shield, Clock, Users, CheckCircle, ArrowRight, Play } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CATEGORIES } from "../data/categories";
import { useJobs } from "../context/JobContext";
import { useAuth } from "../hooks/useAuth";
import JobCard from "../components/JobCard";

export default function HomePage() {
  const { jobs } = useJobs();
  const { currentUser } = useAuth();

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Find the right
                <span className="block text-yellow-300">service for</span>
                <span className="block">every job</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Connect with skilled professionals for cleaning, moving, landscaping, 
                handyman work, and more. Get the job done right, every time.
              </p>
              
              {/* Search Bar */}
              <div className="bg-white rounded-2xl p-2 shadow-2xl mb-8">
                <div className="flex items-center">
                  <Search className="h-6 w-6 text-gray-400 ml-4" />
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="flex-1 px-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none text-lg"
                  />
                  <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                    Search
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {currentUser ? (
                  <Link
                    to="/post-job"
                    className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors text-center"
                  >
                    Post a Job
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors text-center"
                  >
                    Get Started Free
                  </Link>
                )}
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Hero Image/Illustration */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {CATEGORIES.slice(0, 4).map((cat, index) => (
                    <div key={cat.id} className="bg-white/20 rounded-2xl p-6 text-center hover:bg-white/30 transition-colors">
                      <div className="text-4xl mb-3">{cat.icon}</div>
                      <div className="font-semibold">{cat.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Jobs Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5K+</div>
              <div className="text-gray-600">Service Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From home repairs to special events, find the perfect professional for any task
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.id}
                to="/jobs"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {cat.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Service Hub Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get your work done</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Post Your Job</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Describe what you need done, set your budget, and post your job for free. 
                It takes just a few minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Bids</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Receive proposals from qualified professionals who want to help you. 
                Compare prices and reviews.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose & Pay</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Review proposals, choose the best fit, and pay securely when work is complete. 
                We guarantee your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Jobs</h2>
              <p className="text-xl text-gray-600">See what people are hiring for</p>
            </div>
            <Link
              to="/jobs"
              className="text-purple-600 hover:text-purple-700 font-semibold flex items-center"
            >
              View All Jobs
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.slice(0, 6).map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Service Hub?</h2>
            <p className="text-xl text-gray-600">We make it easy to find trusted professionals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verified Professionals</h3>
              <p className="text-gray-600 text-lg">
                All service providers are background-checked and have reviews from previous clients.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600 text-lg">
                We guarantee the quality of work or your money back. Your satisfaction is our priority.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 text-lg">
                Our support team is here to help you every step of the way, whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of satisfied customers who trust Service Hub for their projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {currentUser ? (
              <Link
                to="/post-job"
                className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                Post Your First Job
              </Link>
            ) : (
              <Link
                to="/signup"
                className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                Get Started Free
              </Link>
            )}
            <Link
              to="/how-it-works"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}