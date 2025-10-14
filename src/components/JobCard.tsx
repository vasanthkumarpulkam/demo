import React from 'react';
import { MapPin, Clock, DollarSign, Star, User } from 'lucide-react';
import { Job } from '../types/job';
import { formatCurrency, formatRelativeTime } from '../utils/formatters';

interface JobCardProps {
  job: Job;
  onViewJob?: (jobId: string) => void;
  onApplyJob?: (jobId: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onViewJob, onApplyJob }) => {
  const handleViewJob = () => {
    onViewJob?.(job.id);
  };

  const handleApplyJob = (e: React.MouseEvent) => {
    e.stopPropagation();
    onApplyJob?.(job.id);
  };

  return (
    <div 
      className="job-card bg-white border border-gray-200 rounded-lg p-6 cursor-pointer"
      onClick={handleViewJob}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {job.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {job.description}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <div className="flex items-center space-x-1 mb-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{job.customer.rating?.toFixed(1) || 'N/A'}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{job.customer.name}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className="skill-tag"
          >
            {skill}
          </span>
        ))}
        {job.skills.length > 3 && (
          <span className="skill-tag">
            +{job.skills.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <DollarSign className="h-4 w-4" />
            <span>
              {formatCurrency(job.budget.min)} - {formatCurrency(job.budget.max)}
              {job.budget.type === 'hourly' && '/hr'}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>
              {job.location.city}, {job.location.state}
              {job.location.isRemote && ' (Remote)'}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" />
          <span>{formatRelativeTime(job.createdAt)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className={`status-badge status-${job.status}`}>
            {job.status.replace('_', ' ')}
          </span>
          <span className={`priority-badge priority-${job.priority}`}>
            {job.priority}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {job.bids && job.bids.length > 0 && (
            <span className="text-sm text-gray-500">
              {job.bids.length} bid{job.bids.length !== 1 ? 's' : ''}
            </span>
          )}
          <button
            onClick={handleApplyJob}
            className="btn btn-primary btn-sm"
          >
            {job.status === 'open' ? 'Apply' : 'View'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;