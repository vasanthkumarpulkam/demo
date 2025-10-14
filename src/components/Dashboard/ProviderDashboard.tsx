import React from 'react';
import { useJobs } from '../../hooks/useJobs';
import { JobCard } from '../JobCard';
import { DollarSign, Star, Briefcase, TrendingUp } from 'lucide-react';

export const ProviderDashboard: React.FC = () => {
  const { jobs } = useJobs();
  
  // Mock stats - replace with real data
  const stats = {
    totalEarnings: 12450,
    activeJobs: 3,
    completedJobs: 24,
    rating: 4.8
  };

  const availableJobs = jobs.filter(job => job.status === 'open');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Provider Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Earnings</p>
              <p className="text-3xl font-bold text-gray-900">${stats.totalEarnings}</p>
            </div>
            <DollarSign className="w-12 h-12 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Jobs</p>
              <p className="text-3xl font-bold text-gray-900">{stats.activeJobs}</p>
            </div>
            <Briefcase className="w-12 h-12 text-primary-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-3xl font-bold text-gray-900">{stats.completedJobs}</p>
            </div>
            <TrendingUp className="w-12 h-12 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Rating</p>
              <p className="text-3xl font-bold text-gray-900">{stats.rating}</p>
            </div>
            <Star className="w-12 h-12 text-yellow-500 fill-current" />
          </div>
        </div>
      </div>

      {/* Available Jobs */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Jobs</h2>
        <div className="grid gap-6">
          {availableJobs.slice(0, 5).map(job => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => window.location.href = `/jobs/${job.id}`}
            />
          ))}
        </div>
        {availableJobs.length > 5 && (
          <div className="mt-6 text-center">
            <a
              href="/jobs"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View all available jobs →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
