import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Job } from '../types/job';
import { Bid } from '../types/bid';
import { mockJobs } from '../data/mockJobs';

interface JobContextType {
  jobs: Job[];
  isLoading: boolean;
  error: string | null;
  fetchJobs: () => Promise<void>;
  getJobById: (id: string) => Job | undefined;
  createJob: (jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt' | 'customer'>) => Promise<void>;
  updateJob: (id: string, jobData: Partial<Job>) => Promise<void>;
  deleteJob: (id: string) => Promise<void>;
  submitBid: (jobId: string, bidData: Omit<Bid, 'id' | 'createdAt' | 'updatedAt' | 'provider'>) => Promise<void>;
  acceptBid: (jobId: string, bidId: string) => Promise<void>;
  rejectBid: (jobId: string, bidId: string) => Promise<void>;
  searchJobs: (query: string, filters?: JobFilters) => Job[];
}

interface JobFilters {
  category?: string;
  budgetMin?: number;
  budgetMax?: number;
  location?: string;
  isRemote?: boolean;
  skills?: string[];
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const useJobs = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};

interface JobProviderProps {
  children: ReactNode;
}

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      setJobs(mockJobs);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch jobs');
    } finally {
      setIsLoading(false);
    }
  };

  const getJobById = (id: string): Job | undefined => {
    return jobs.find(job => job.id === id);
  };

  const createJob = async (jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt' | 'customer'>): Promise<void> => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newJob: Job = {
        ...jobData,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
        customer: {
          name: 'Current User', // TODO: Get from auth context
          avatar: undefined,
          rating: 4.5,
        },
      };
      
      setJobs(prev => [newJob, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create job');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateJob = async (id: string, jobData: Partial<Job>): Promise<void> => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setJobs(prev => prev.map(job => 
        job.id === id 
          ? { ...job, ...jobData, updatedAt: new Date() }
          : job
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update job');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteJob = async (id: string): Promise<void> => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setJobs(prev => prev.filter(job => job.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete job');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const submitBid = async (jobId: string, bidData: Omit<Bid, 'id' | 'createdAt' | 'updatedAt' | 'provider'>): Promise<void> => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newBid: Bid = {
        ...bidData,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
        provider: {
          id: 'current-user',
          name: 'Current User',
          email: 'user@example.com',
          role: 'provider',
          joinedAt: new Date(),
          isVerified: true,
        },
      };
      
      setJobs(prev => prev.map(job => 
        job.id === jobId 
          ? { ...job, bids: [...(job.bids || []), newBid] }
          : job
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit bid');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const acceptBid = async (jobId: string, bidId: string): Promise<void> => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setJobs(prev => prev.map(job => {
        if (job.id === jobId) {
          const updatedBids = job.bids?.map(bid => 
            bid.id === bidId ? { ...bid, status: 'accepted' as const } : bid
          );
          const acceptedBid = job.bids?.find(bid => bid.id === bidId);
          return {
            ...job,
            bids: updatedBids,
            status: 'in_progress' as const,
            providerId: acceptedBid?.providerId,
            provider: acceptedBid?.provider,
          };
        }
        return job;
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to accept bid');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const rejectBid = async (jobId: string, bidId: string): Promise<void> => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setJobs(prev => prev.map(job => {
        if (job.id === jobId) {
          const updatedBids = job.bids?.map(bid => 
            bid.id === bidId ? { ...bid, status: 'rejected' as const } : bid
          );
          return { ...job, bids: updatedBids };
        }
        return job;
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reject bid');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const searchJobs = (query: string, filters?: JobFilters): Job[] => {
    let filteredJobs = jobs;

    if (query) {
      const lowercaseQuery = query.toLowerCase();
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(lowercaseQuery) ||
        job.description.toLowerCase().includes(lowercaseQuery) ||
        job.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery))
      );
    }

    if (filters) {
      if (filters.category) {
        filteredJobs = filteredJobs.filter(job => job.category === filters.category);
      }
      if (filters.budgetMin !== undefined) {
        filteredJobs = filteredJobs.filter(job => job.budget.min >= filters.budgetMin!);
      }
      if (filters.budgetMax !== undefined) {
        filteredJobs = filteredJobs.filter(job => job.budget.max <= filters.budgetMax!);
      }
      if (filters.location) {
        filteredJobs = filteredJobs.filter(job => 
          job.location.city.toLowerCase().includes(filters.location!.toLowerCase()) ||
          job.location.state.toLowerCase().includes(filters.location!.toLowerCase())
        );
      }
      if (filters.isRemote !== undefined) {
        filteredJobs = filteredJobs.filter(job => job.location.isRemote === filters.isRemote);
      }
      if (filters.skills && filters.skills.length > 0) {
        filteredJobs = filteredJobs.filter(job => 
          filters.skills!.some(skill => 
            job.skills.some(jobSkill => 
              jobSkill.toLowerCase().includes(skill.toLowerCase())
            )
          )
        );
      }
    }

    return filteredJobs;
  };

  const value: JobContextType = {
    jobs,
    isLoading,
    error,
    fetchJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
    submitBid,
    acceptBid,
    rejectBid,
    searchJobs,
  };

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
};