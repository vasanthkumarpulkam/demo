export interface Bid {
  id: string;
  jobId: string;
  providerId: string;
  providerName: string;
  providerRating: number;
  amount: number;
  deliveryTime: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

export interface BidStats {
  totalBids: number;
  acceptedBids: number;
  pendingBids: number;
  rejectedBids: number;
}
