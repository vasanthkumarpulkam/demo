import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Kitchen Sink Leak Repair',
    description: 'Need urgent help with a leaking kitchen sink. Water is dripping constantly from the pipe under the sink.',
    category: 'plumbing',
    budget: 150,
    location: 'Downtown, City Center',
    status: 'open',
    customerId: 'c1',
    customerName: 'John Doe',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    bids: 3
  },
  {
    id: '2',
    title: 'House Painting - 3 Bedrooms',
    description: 'Looking for professional painters to paint 3 bedrooms. Need quality work with good finishing.',
    category: 'painting',
    budget: 800,
    location: 'Suburbs, Green Valley',
    status: 'open',
    customerId: 'c2',
    customerName: 'Sarah Smith',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    bids: 7
  },
  {
    id: '3',
    title: 'Office Deep Cleaning',
    description: 'Need professional cleaning service for a 2000 sq ft office space. Includes carpet cleaning and window washing.',
    category: 'cleaning',
    budget: 350,
    location: 'Business District',
    status: 'in_progress',
    customerId: 'c3',
    customerName: 'Mike Johnson',
    providerId: 'p1',
    providerName: 'Clean Pro Services',
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    bids: 5
  },
  {
    id: '4',
    title: 'Electrical Outlet Installation',
    description: 'Need 4 new electrical outlets installed in the garage. Must be licensed electrician.',
    category: 'electrical',
    budget: 200,
    location: 'West Side',
    status: 'open',
    customerId: 'c4',
    customerName: 'Emily Davis',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    bids: 2
  },
  {
    id: '5',
    title: 'Garden Maintenance - Monthly',
    description: 'Looking for regular garden maintenance including lawn mowing, hedge trimming, and weeding.',
    category: 'gardening',
    budget: 120,
    location: 'North Heights',
    status: 'open',
    customerId: 'c5',
    customerName: 'Robert Wilson',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    bids: 4
  }
];
