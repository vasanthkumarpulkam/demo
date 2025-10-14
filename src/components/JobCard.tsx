import React from 'react';
import { Job } from '../types/job';
import { MapPin, DollarSign, Calendar, Briefcase } from 'lucide-react';
import { formatCurrency, formatDate } from '../utils/formatters';

interface JobCardProps {
  job: Job;
  onClick?: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  const statusColors = {
    open: 'bg-green-100 text-green-800',
    in_progress: 'bg-blue-100 text-blue-800',
    completed: 'bg-gray-100 text-gray-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[job.status]}`}>
          {job.status.replace('_', ' ')}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
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
          {formatDate(job.createdAt)}
        </div>
        <div className="flex items-center">
          <Briefcase className="w-4 h-4 mr-1" />
          {job.bidCount} bids
        </div>
      </div>

      {job.skills && job.skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="px-2 py-1 text-gray-500 text-xs">
              +{job.skills.length - 3} more
            </span>
          )}
        </div>
      )}
    </div>
  );
};
