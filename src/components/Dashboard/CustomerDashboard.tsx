import { useJobs } from '../../hooks/useJobs';
import { useAuth } from '../../hooks/useAuth';
import { JobCard } from '../JobCard';

export const CustomerDashboard = () => {
  const { jobs } = useJobs();
  const { user } = useAuth();

  const myJobs = jobs.filter(job => job.customerId === user?.id);
  const activeJobs = myJobs.filter(job => job.status !== 'completed' && job.status !== 'cancelled');
  const completedJobs = myJobs.filter(job => job.status === 'completed');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Dashboard</h1>
        <p className="text-gray-600">Manage your job postings and find service providers</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl font-bold text-primary-600">{myJobs.length}</div>
          <div className="text-gray-600 mt-2">Total Jobs Posted</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl font-bold text-blue-600">{activeJobs.length}</div>
          <div className="text-gray-600 mt-2">Active Jobs</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl font-bold text-green-600">{completedJobs.length}</div>
          <div className="text-gray-600 mt-2">Completed Jobs</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="space-y-2">
          <a
            href="/post-job"
            className="block px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-center"
          >
            Post a New Job
          </a>
          <a
            href="/messages"
            className="block px-4 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 text-center"
          >
            View Messages
          </a>
        </div>
      </div>

      {/* Recent Jobs */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Recent Jobs</h2>
        {myJobs.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            <p>You haven't posted any jobs yet</p>
            <a href="/post-job" className="text-primary-600 hover:text-primary-700 mt-2 inline-block">
              Post your first job →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myJobs.slice(0, 6).map(job => (
              <JobCard key={job.id} job={job} onClick={() => window.location.href = `/jobs/${job.id}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
