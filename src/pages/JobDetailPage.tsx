import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useJobs } from '../hooks/useJobs';
import { useAuth } from '../hooks/useAuth';
import { MapPin, DollarSign, Calendar, User, Clock } from 'lucide-react';
import { formatCurrency, formatDate } from '../utils/formatters';

export const JobDetailPage: React.FC = () => {
  const { getJobById, getBidsForJob } = useJobs();
  const { user, isAuthenticated } = useAuth();
  
  // Get job ID from URL (simplified for demo)
  const jobId = window.location.pathname.split('/').pop() || '';
  const job = getJobById(jobId);
  const bids = getBidsForJob(jobId);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h2>
            <a href="/jobs" className="text-primary-600 hover:text-primary-700">
              ← Back to jobs
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isOwner = user?.id === job.customerId;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <a href="/jobs" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
            ← Back to jobs
          </a>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {formatCurrency(job.budget.min)} - {formatCurrency(job.budget.max)}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Posted {formatDate(job.createdAt)}
                  </div>
                  {job.deadline && (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Due {formatDate(job.deadline)}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                  <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
                </div>

                {job.skills && job.skills.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Required Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bids Section */}
              {isOwner && bids.length > 0 && (
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Bids ({bids.length})
                  </h2>
                  <div className="space-y-4">
                    {bids.map(bid => (
                      <div key={bid.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{bid.providerName}</h3>
                            <p className="text-sm text-gray-600">Rating: {bid.providerRating}/5</p>
                          </div>
                          <span className="text-xl font-bold text-primary-600">
                            {formatCurrency(bid.amount)}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{bid.message}</p>
                        <p className="text-sm text-gray-500">Delivery: {bid.deliveryTime}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Posted By</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{job.customerName}</p>
                    <p className="text-sm text-gray-600">Member since 2024</p>
                  </div>
                </div>
              </div>

              {!isOwner && isAuthenticated && user?.role === 'provider' && (
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 font-semibold">
                  Submit a Bid
                </button>
              )}

              {!isAuthenticated && (
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                  <p className="text-sm text-primary-900 mb-3">
                    Sign in to submit a bid for this job
                  </p>
                  <a
                    href="/signin"
                    className="block w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 font-semibold text-center"
                  >
                    Sign In
                  </a>
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
