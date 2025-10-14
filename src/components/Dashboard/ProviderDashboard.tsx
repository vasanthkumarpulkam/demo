import { useJobs } from '../../hooks/useJobs';
import { useAuth } from '../../hooks/useAuth';
import { JobCard } from '../JobCard';

export const ProviderDashboard = () => {
  const { jobs } = useJobs();
  const { user } = useAuth();

  const myJobs = jobs.filter(job => job.providerId === user?.id);
  const availableJobs = jobs.filter(job => job.status === 'open');
  const activeJobs = myJobs.filter(job => job.status === 'in_progress');
  const completedJobs = myJobs.filter(job => job.status === 'completed');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Provider Dashboard</h1>
        <p className="text-gray-600">Find jobs and manage your work</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl font-bold text-primary-600">{availableJobs.length}</div>
          <div className="text-gray-600 mt-2">Available Jobs</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl font-bold text-blue-600">{activeJobs.length}</div>
          <div className="text-gray-600 mt-2">Active Jobs</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl font-bold text-green-600">{completedJobs.length}</div>
          <div className="text-gray-600 mt-2">Completed Jobs</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl font-bold text-yellow-600">{user?.rating?.toFixed(1) || 'N/A'}</div>
          <div className="text-gray-600 mt-2">Your Rating</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="space-y-2">
          <a
            href="/jobs"
            className="block px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-center"
          >
            Browse Available Jobs
          </a>
          <a
            href="/messages"
            className="block px-4 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 text-center"
          >
            View Messages
          </a>
        </div>
      </div>

      {/* Available Jobs */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
        {availableJobs.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            <p>No jobs available at the moment</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableJobs.slice(0, 6).map(job => (
              <JobCard key={job.id} job={job} onClick={() => window.location.href = `/jobs/${job.id}`} />
            ))}
          </div>
        )}
      </div>

      {/* Active Jobs */}
      {activeJobs.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Active Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeJobs.map(job => (
              <JobCard key={job.id} job={job} onClick={() => window.location.href = `/jobs/${job.id}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
