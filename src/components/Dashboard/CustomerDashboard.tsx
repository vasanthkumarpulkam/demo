import React from 'react';
import { useJobs } from '../../hooks/useJobs';
import { useAuth } from '../../hooks/useAuth';

const CustomerDashboard: React.FC = () => {
  const { jobs } = useJobs();
  const { currentUser } = useAuth();

  const userJobs = jobs.filter(job => job.postedBy === currentUser?.uid);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Jobs Posted</h3>
          <p className="text-3xl font-bold text-blue-600">{userJobs.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Open Jobs</h3>
          <p className="text-3xl font-bold text-green-600">
            {userJobs.filter(job => job.status === 'open').length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Completed</h3>
          <p className="text-3xl font-bold text-purple-600">
            {userJobs.filter(job => job.status === 'completed').length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Recent Jobs</h2>
        </div>
        <div className="divide-y">
          {userJobs.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <p>You haven't posted any jobs yet.</p>
              <a href="/post-job" className="text-blue-600 hover:text-blue-700 mt-2 inline-block">
                Post your first job
              </a>
            </div>
          ) : (
            userJobs.slice(0, 5).map(job => (
              <div key={job.id} className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                    <p className="text-gray-600 mt-1">{job.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>${job.budget}</span>
                      <span>{job.location.text}</span>
                    </div>
                  </div>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    job.status === 'open' ? 'bg-green-100 text-green-800' :
                    job.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {job.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;