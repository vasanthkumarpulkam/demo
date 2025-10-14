import { User } from './user';

export interface Bid {
  id: string;
  jobId: string;
  providerId: string;
  amount: number;
  type: 'fixed' | 'hourly';
  estimatedHours?: number;
  message: string;
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
  createdAt: Date;
  updatedAt: Date;
  provider: User;
  attachments?: string[];
  deliveryTime?: number; // in days
}

export interface BidResponse {
  bidId: string;
  jobId: string;
  action: 'accept' | 'reject' | 'counter';
  message?: string;
  counterAmount?: number;
}