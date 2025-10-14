import React from 'react';
import { useJobs } from '../../hooks/useJobs';
import { useAuth } from '../../hooks/useAuth';
import { JobCard } from '../JobCard';
import { Plus, Briefcase, Clock, CheckCircle } from 'lucide-react';

export const CustomerDashboard: React.FC = () => {
  const { jobs } = useJobs();
  const { user } = useAuth();
  
  const myJobs = jobs.filter(job => job.customerId === user?.id);
  const openJobs = myJobs.filter(job => job.status === 'open');
  const inProgressJobs = myJobs.filter(job => job.status === 'in_progress');
  const completedJobs = myJobs.filter(job => job.status === 'completed');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Jobs</h1>
        <a
          href="/post-job"
          className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Post New Job
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Open Jobs</p>
              <p className="text-3xl font-bold text-gray-900">{openJobs.length}</p>
            </div>
            <Briefcase className="w-12 h-12 text-primary-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-3xl font-bold text-gray-900">{inProgressJobs.length}</p>
            </div>
            <Clock className="w-12 h-12 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-3xl font-bold text-gray-900">{completedJobs.length}</p>
            </div>
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {myJobs.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No jobs posted yet
            </h3>
            <p className="text-gray-600 mb-6">
              Post your first job to get started and connect with service providers
            </p>
            <a
              href="/post-job"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"
            >
              <Plus className="w-5 h-5 mr-2" />
              Post Your First Job
            </a>
          </div>
        ) : (
          <div className="grid gap-6">
            {myJobs.map(job => (
              <JobCard
                key={job.id}
                job={job}
                onClick={() => window.location.href = `/jobs/${job.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
