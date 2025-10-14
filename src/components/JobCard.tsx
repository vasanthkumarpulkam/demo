import { Job } from '../types/job';
import { formatCurrency, formatRelativeTime } from '../utils/formatters';
import { categories } from '../data/categories';

interface JobCardProps {
  job: Job;
  onClick?: () => void;
}

export const JobCard = ({ job, onClick }: JobCardProps) => {
  const category = categories.find(c => c.id === job.category);

  const statusColors = {
    open: 'bg-green-100 text-green-800',
    in_progress: 'bg-blue-100 text-blue-800',
    completed: 'bg-gray-100 text-gray-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{category?.icon}</span>
          <span className="text-sm text-gray-500">{category?.name}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[job.status]}`}>
          {job.status.replace('_', ' ')}
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-900">{job.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
        <span className="flex items-center">
          📍 {job.location}
        </span>
        <span>{formatRelativeTime(job.createdAt)}</span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <div className="text-2xl font-bold text-primary-600">
          {formatCurrency(job.budget)}
        </div>
        {job.bids && job.bids > 0 && (
          <div className="text-sm text-gray-500">
            {job.bids} bid{job.bids > 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  );
};
