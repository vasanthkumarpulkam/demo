import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useJobs } from '../hooks/useJobs';
import { useAuth } from '../hooks/useAuth';
import { formatCurrency, formatDate } from '../utils/formatters';
import { categories } from '../data/categories';

export const JobDetailPage = () => {
  const { getJobById } = useJobs();
  const { user, isAuthenticated } = useAuth();
  const [bidAmount, setBidAmount] = useState('');
  const [bidMessage, setBidMessage] = useState('');

  // In a real app, get job ID from URL params
  const jobId = '1';
  const job = getJobById(jobId);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Not Found</h1>
            <a href="/jobs" className="text-primary-600 hover:text-primary-700">
              Back to Jobs
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const category = categories.find(c => c.id === job.category);
  const isProvider = user?.role === 'provider';
  const canBid = isAuthenticated && isProvider && job.status === 'open';

  const handleSubmitBid = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement bid submission
    alert('Bid submitted!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-3xl">{category?.icon}</span>
                  <span className="text-gray-500">{category?.name}</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>

                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                  <span>📍 {job.location}</span>
                  <span>📅 Posted {formatDate(job.createdAt)}</span>
                  {job.deadline && <span>⏰ Deadline: {formatDate(job.deadline)}</span>}
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Description</h2>
                  <p className="text-gray-700 whitespace-pre-wrap">{job.description}</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-semibold mb-3">Budget</h2>
                  <div className="text-3xl font-bold text-primary-600">
                    {formatCurrency(job.budget)}
                  </div>
                </div>
              </div>

              {/* Bid Section */}
              {canBid && (
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-4">Submit Your Bid</h2>
                  <form onSubmit={handleSubmitBid} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Bid Amount
                      </label>
                      <input
                        type="number"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message to Customer
                      </label>
                      <textarea
                        value={bidMessage}
                        onChange={(e) => setBidMessage(e.target.value)}
                        placeholder="Explain why you're the right fit..."
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold"
                    >
                      Submit Bid
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="font-semibold mb-4">Posted By</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <div className="font-medium">{job.customerName}</div>
                    <div className="text-sm text-gray-500">Customer</div>
                  </div>
                </div>
              </div>

              {job.bids && job.bids > 0 && (
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold mb-2">Current Bids</h3>
                  <div className="text-2xl font-bold text-primary-600">
                    {job.bids}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {job.bids === 1 ? 'provider has' : 'providers have'} bid on this job
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
