import { createContext, useState, ReactNode } from 'react';
import { Job, JobFilters } from '../types/job';
import { mockJobs } from '../data/mockJobs';

interface JobContextType {
  jobs: Job[];
  filters: JobFilters;
  isLoading: boolean;
  fetchJobs: () => Promise<void>;
  createJob: (job: Omit<Job, 'id' | 'createdAt' | 'updatedAt'>) => Promise<Job>;
  updateJob: (id: string, updates: Partial<Job>) => Promise<void>;
  deleteJob: (id: string) => Promise<void>;
  setFilters: (filters: JobFilters) => void;
  getJobById: (id: string) => Job | undefined;
}

export const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [filters, setFilters] = useState<JobFilters>({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      // TODO: Fetch from Firebase
      await new Promise(resolve => setTimeout(resolve, 500));
      setJobs(mockJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createJob = async (jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt'>): Promise<Job> => {
    // TODO: Create in Firebase
    const newJob: Job = {
      ...jobData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setJobs(prev => [newJob, ...prev]);
    return newJob;
  };

  const updateJob = async (id: string, updates: Partial<Job>) => {
    // TODO: Update in Firebase
    setJobs(prev =>
      prev.map(job =>
        job.id === id
          ? { ...job, ...updates, updatedAt: new Date().toISOString() }
          : job
      )
    );
  };

  const deleteJob = async (id: string) => {
    // TODO: Delete from Firebase
    setJobs(prev => prev.filter(job => job.id !== id));
  };

  const getJobById = (id: string) => {
    return jobs.find(job => job.id === id);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        filters,
        isLoading,
        fetchJobs,
        createJob,
        updateJob,
        deleteJob,
        setFilters,
        getJobById
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
