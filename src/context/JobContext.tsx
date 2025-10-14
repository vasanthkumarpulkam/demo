import React, { createContext, useState, useContext } from "react";
import { Job } from "../types/job";
import { MOCK_JOBS } from "../data/mockJobs";

interface JobContextType {
  jobs: Job[];
  postJob: (job: Job) => void;
}

const JobContext = createContext<JobContextType>({} as JobContextType);
export const useJobs = () => useContext(JobContext);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);

  const postJob = (job: Job) => setJobs([job, ...jobs]);

  return <JobContext.Provider value={{ jobs, postJob }}>{children}</JobContext.Provider>;
};