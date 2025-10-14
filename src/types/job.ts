export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: {
    min: number;
    max: number;
  };
  location: string;
  customerId: string;
  customerName: string;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  deadline?: string;
  skills?: string[];
  attachments?: string[];
  bidCount: number;
}

export interface JobFilters {
  category?: string;
  location?: string;
  budgetMin?: number;
  budgetMax?: number;
  search?: string;
}
