export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  location: { text: string; lat?: number; lng?: number };
  media?: string[];
  postedBy: string;
  posterName: string;
  createdAt: Date;
  status: "open" | "awarded" | "in_progress" | "completed" | "canceled";
  awardedTo?: string;
  paymentMode: "cash";
}