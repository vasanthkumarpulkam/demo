export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'customer' | 'provider';
  phone?: string;
  location?: string;
  bio?: string;
  rating?: number;
  totalJobs?: number;
  joinedAt: Date;
  isVerified: boolean;
}

export interface UserProfile extends User {
  skills?: string[];
  portfolio?: string[];
  reviews?: Review[];
  availability?: 'available' | 'busy' | 'unavailable';
}

export interface Review {
  id: string;
  userId: string;
  jobId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  reviewer: {
    name: string;
    avatar?: string;
  };
}