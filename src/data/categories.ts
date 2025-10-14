export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: 'home-improvement',
    name: 'Home Improvement',
    icon: 'Home',
    description: 'Plumbing, electrical, carpentry, and more',
    count: 234
  },
  {
    id: 'cleaning',
    name: 'Cleaning Services',
    icon: 'Sparkles',
    description: 'House cleaning, office cleaning, deep cleaning',
    count: 189
  },
  {
    id: 'tech-support',
    name: 'Tech Support',
    icon: 'Computer',
    description: 'IT support, device repair, software installation',
    count: 156
  },
  {
    id: 'tutoring',
    name: 'Tutoring',
    icon: 'GraduationCap',
    description: 'Academic tutoring, language lessons, music lessons',
    count: 142
  },
  {
    id: 'moving',
    name: 'Moving & Delivery',
    icon: 'Truck',
    description: 'Moving services, furniture delivery, courier',
    count: 98
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: 'Camera',
    description: 'Event photography, portraits, commercial',
    count: 87
  },
  {
    id: 'gardening',
    name: 'Gardening',
    icon: 'Flower',
    description: 'Lawn care, landscaping, tree trimming',
    count: 76
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: 'Car',
    description: 'Car repair, detailing, maintenance',
    count: 65
  }
];
