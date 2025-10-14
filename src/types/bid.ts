export interface Bid {
  id: string;
  jobId: string;
  providerId: string;
  providerName: string;
  price: number;
  proposal: string;
  createdAt: Date;
  status: "pending" | "accepted" | "rejected" | "withdrawn";
}