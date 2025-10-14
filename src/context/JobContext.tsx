import React, { createContext, useState, ReactNode } from 'react';
import { Job, JobFilters } from '../types/job';
import { Bid } from '../types/bid';
import { mockJobs } from '../data/mockJobs';

interface JobContextType {
  jobs: Job[];
  filters: JobFilters;
  setFilters: (filters: JobFilters) => void;
  getJobById: (id: string) => Job | undefined;
  createJob: (job: Omit<Job, 'id' | 'createdAt' | 'updatedAt' | 'bidCount'>) => void;
  updateJob: (id: string, updates: Partial<Job>) => void;
  deleteJob: (id: string) => void;
  getBidsForJob: (jobId: string) => Bid[];
  createBid: (bid: Omit<Bid, 'id' | 'createdAt'>) => void;
}

export const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [filters, setFilters] = useState<JobFilters>({});
  const [bids, setBids] = useState<Bid[]>([]);

  const getJobById = (id: string) => {
    return jobs.find(job => job.id === id);
  };

  const createJob = (jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt' | 'bidCount'>) => {
    const newJob: Job = {
      ...jobData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      bidCount: 0
    };
    setJobs(prev => [newJob, ...prev]);
  };

  const updateJob = (id: string, updates: Partial<Job>) => {
    setJobs(prev => prev.map(job => 
      job.id === id 
        ? { ...job, ...updates, updatedAt: new Date().toISOString() }
        : job
    ));
  };

  const deleteJob = (id: string) => {
    setJobs(prev => prev.filter(job => job.id !== id));
  };

  const getBidsForJob = (jobId: string) => {
    return bids.filter(bid => bid.jobId === jobId);
  };

  const createBid = (bidData: Omit<Bid, 'id' | 'createdAt'>) => {
    const newBid: Bid = {
      ...bidData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };
    setBids(prev => [...prev, newBid]);
    
    // Update job bid count
    updateJob(bidData.jobId, {
      bidCount: getBidsForJob(bidData.jobId).length + 1
    });
  };

  return (
    <JobContext.Provider value={{
      jobs,
      filters,
      setFilters,
      getJobById,
      createJob,
      updateJob,
      deleteJob,
      getBidsForJob,
      createBid
    }}>
      {children}
    </JobContext.Provider>
  );
};
