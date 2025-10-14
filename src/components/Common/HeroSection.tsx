import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Find Local Services in Texas</h1>
        <p className="text-lg text-purple-100 mb-8">
          Connect with trusted professionals for cleaning, moving, landscaping, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Find Services
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
            Post a Job
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;