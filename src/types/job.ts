export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  budget: {
    min: number;
    max: number;
    type: 'fixed' | 'hourly';
  };
  location: {
    city: string;
    state: string;
    country: string;
    isRemote: boolean;
  };
  customerId: string;
  status: 'draft' | 'open' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  skills: string[];
  attachments?: string[];
  deadline?: Date;
  createdAt: Date;
  updatedAt: Date;
  customer: {
    name: string;
    avatar?: string;
    rating?: number;
  };
  bids?: Bid[];
  providerId?: string;
  provider?: {
    name: string;
    avatar?: string;
    rating?: number;
  };
}

export interface JobCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subcategories?: JobSubcategory[];
}

export interface JobSubcategory {
  id: string;
  name: string;
  parentId: string;
}