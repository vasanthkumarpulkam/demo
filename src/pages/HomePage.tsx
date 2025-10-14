import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/Common/HeroSection';
import { CategoryGrid } from '../components/Common/CategoryGrid';
import { StatsBar } from '../components/Common/StatsBar';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <CategoryGrid />
        
        {/* How It Works Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How ServiceHub Works
              </h2>
              <p className="text-lg text-gray-600">
                Three simple steps to get your job done
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Post Your Job
                </h3>
                <p className="text-gray-600">
                  Describe what you need done and set your budget
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Review Bids
                </h3>
                <p className="text-gray-600">
                  Get competitive bids from qualified service providers
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Get It Done
                </h3>
                <p className="text-gray-600">
                  Choose the best provider and get your job completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
