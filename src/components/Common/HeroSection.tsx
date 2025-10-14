import React from 'react';
import { Search } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Trusted Service Providers
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Connect with professionals for any job, big or small
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition">
                Search
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/post-job"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Post a Job
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
    </div>
  );
};
