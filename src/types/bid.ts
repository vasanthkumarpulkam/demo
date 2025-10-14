export type BidStatus = 'pending' | 'accepted' | 'rejected';

export interface Bid {
  id: string;
  jobId: string;
  providerId: string;
  providerName: string;
  providerRating: number;
  amount: number;
  estimatedDuration: string;
  message: string;
  status: BidStatus;
  createdAt: string;
}
