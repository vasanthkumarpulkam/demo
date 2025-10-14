export const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Local Service Providers
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Connect with trusted professionals for all your home and business needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/jobs"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Jobs
            </a>
            <a
              href="/signup"
              className="px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 border-2 border-white transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
