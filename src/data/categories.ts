import { JobCategory } from '../types/job';

export interface CategoryInfo {
  id: JobCategory;
  name: string;
  icon: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: '🔧',
    description: 'Pipe repairs, installations, and maintenance'
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: '⚡',
    description: 'Electrical repairs, wiring, and installations'
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: '🧹',
    description: 'Home and office cleaning services'
  },
  {
    id: 'moving',
    name: 'Moving',
    icon: '📦',
    description: 'Moving and relocation services'
  },
  {
    id: 'painting',
    name: 'Painting',
    icon: '🎨',
    description: 'Interior and exterior painting'
  },
  {
    id: 'gardening',
    name: 'Gardening',
    icon: '🌱',
    description: 'Lawn care and garden maintenance'
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    icon: '🪚',
    description: 'Woodwork and furniture repairs'
  },
  {
    id: 'other',
    name: 'Other',
    icon: '🛠️',
    description: 'Other services'
  }
];
