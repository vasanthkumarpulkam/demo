import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Build a React Native Mobile App',
    description: 'I need a skilled React Native developer to build a cross-platform mobile app for my e-commerce business. The app should include user authentication, product catalog, shopping cart, and payment integration.',
    category: 'mobile-development',
    subcategory: 'react-native',
    budget: {
      min: 5000,
      max: 8000,
      type: 'fixed'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
      isRemote: true
    },
    customerId: 'customer-1',
    status: 'open',
    priority: 'high',
    skills: ['React Native', 'JavaScript', 'TypeScript', 'Firebase', 'Stripe'],
    deadline: new Date('2024-02-15'),
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    customer: {
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 4.8
    },
    bids: []
  },
  {
    id: '2',
    title: 'Design a Modern Website Landing Page',
    description: 'Looking for a talented UI/UX designer to create a modern, responsive landing page for our SaaS product. The design should be clean, professional, and conversion-focused.',
    category: 'design',
    subcategory: 'ui-ux',
    budget: {
      min: 800,
      max: 1500,
      type: 'fixed'
    },
    location: {
      city: 'New York',
      state: 'NY',
      country: 'USA',
      isRemote: true
    },
    customerId: 'customer-2',
    status: 'open',
    priority: 'medium',
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Responsive Design'],
    deadline: new Date('2024-02-10'),
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    customer: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 4.9
    },
    bids: []
  },
  {
    id: '3',
    title: 'Content Writing for Tech Blog',
    description: 'Need a skilled content writer to create 10 high-quality articles for our technology blog. Topics will include AI, machine learning, and software development trends.',
    category: 'writing',
    subcategory: 'content-writing',
    budget: {
      min: 50,
      max: 100,
      type: 'hourly'
    },
    location: {
      city: 'Austin',
      state: 'TX',
      country: 'USA',
      isRemote: true
    },
    customerId: 'customer-3',
    status: 'open',
    priority: 'low',
    skills: ['Content Writing', 'Technical Writing', 'SEO', 'Research'],
    deadline: new Date('2024-02-20'),
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12'),
    customer: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 4.7
    },
    bids: []
  },
  {
    id: '4',
    title: 'E-commerce Website Development',
    description: 'Full-stack developer needed to build a complete e-commerce website with admin panel, inventory management, and payment processing.',
    category: 'web-development',
    subcategory: 'fullstack',
    budget: {
      min: 3000,
      max: 5000,
      type: 'fixed'
    },
    location: {
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      isRemote: true
    },
    customerId: 'customer-4',
    status: 'in_progress',
    priority: 'high',
    skills: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    deadline: new Date('2024-02-28'),
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-20'),
    customer: {
      name: 'Emily Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 4.6
    },
    providerId: 'provider-1',
    provider: {
      name: 'Alex Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 4.9
    },
    bids: []
  },
  {
    id: '5',
    title: 'Social Media Marketing Campaign',
    description: 'Experienced digital marketer needed to run a 3-month social media campaign across Instagram, Facebook, and LinkedIn for our B2B software company.',
    category: 'marketing',
    subcategory: 'social-media',
    budget: {
      min: 2000,
      max: 4000,
      type: 'fixed'
    },
    location: {
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
      isRemote: true
    },
    customerId: 'customer-5',
    status: 'open',
    priority: 'medium',
    skills: ['Social Media Marketing', 'Content Strategy', 'Analytics', 'Paid Advertising'],
    deadline: new Date('2024-03-15'),
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18'),
    customer: {
      name: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 4.5
    },
    bids: []
  }
];