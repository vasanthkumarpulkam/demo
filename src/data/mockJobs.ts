import { Job } from "../types/job";

export const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "House Cleaning Needed",
    description: "Deep clean 3-bedroom house, including kitchen and bathrooms.",
    category: "cleaning",
    budget: 150,
    location: { text: "Austin, TX" },
    postedBy: "user1",
    posterName: "John Doe",
    createdAt: new Date(),
    status: "open",
    paymentMode: "cash"
  }
];