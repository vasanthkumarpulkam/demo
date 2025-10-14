export type JobStatus = 'open' | 'in_progress' | 'completed' | 'cancelled';
export type JobCategory = 'plumbing' | 'electrical' | 'cleaning' | 'moving' | 'painting' | 'gardening' | 'carpentry' | 'other';

export interface Job {
  id: string;
  title: string;
  description: string;
  category: JobCategory;
  budget: number;
  location: string;
  status: JobStatus;
  customerId: string;
  customerName: string;
  providerId?: string;
  providerName?: string;
  createdAt: string;
  updatedAt: string;
  deadline?: string;
  images?: string[];
  bids?: number;
}

export interface JobFilters {
  category?: JobCategory;
  minBudget?: number;
  maxBudget?: number;
  status?: JobStatus;
  search?: string;
}
