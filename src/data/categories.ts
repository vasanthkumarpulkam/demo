import { JobCategory } from '../types/job';

export const jobCategories: JobCategory[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Build and maintain websites and web applications',
    icon: 'globe',
    subcategories: [
      { id: 'frontend', name: 'Frontend Development', parentId: 'web-development' },
      { id: 'backend', name: 'Backend Development', parentId: 'web-development' },
      { id: 'fullstack', name: 'Full Stack Development', parentId: 'web-development' },
      { id: 'ecommerce', name: 'E-commerce', parentId: 'web-development' },
    ]
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    description: 'Create mobile apps for iOS and Android',
    icon: 'smartphone',
    subcategories: [
      { id: 'ios', name: 'iOS Development', parentId: 'mobile-development' },
      { id: 'android', name: 'Android Development', parentId: 'mobile-development' },
      { id: 'react-native', name: 'React Native', parentId: 'mobile-development' },
      { id: 'flutter', name: 'Flutter', parentId: 'mobile-development' },
    ]
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Visual design and user experience',
    icon: 'palette',
    subcategories: [
      { id: 'ui-ux', name: 'UI/UX Design', parentId: 'design' },
      { id: 'graphic-design', name: 'Graphic Design', parentId: 'design' },
      { id: 'logo-design', name: 'Logo Design', parentId: 'design' },
      { id: 'branding', name: 'Branding', parentId: 'design' },
    ]
  },
  {
    id: 'writing',
    name: 'Writing & Translation',
    description: 'Content creation and language services',
    icon: 'pen-tool',
    subcategories: [
      { id: 'content-writing', name: 'Content Writing', parentId: 'writing' },
      { id: 'copywriting', name: 'Copywriting', parentId: 'writing' },
      { id: 'translation', name: 'Translation', parentId: 'writing' },
      { id: 'editing', name: 'Editing & Proofreading', parentId: 'writing' },
    ]
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    description: 'Promote and grow your business online',
    icon: 'trending-up',
    subcategories: [
      { id: 'seo', name: 'SEO', parentId: 'marketing' },
      { id: 'social-media', name: 'Social Media Marketing', parentId: 'marketing' },
      { id: 'ppc', name: 'PPC Advertising', parentId: 'marketing' },
      { id: 'email-marketing', name: 'Email Marketing', parentId: 'marketing' },
    ]
  },
  {
    id: 'business',
    name: 'Business Services',
    description: 'Professional business consulting and support',
    icon: 'briefcase',
    subcategories: [
      { id: 'consulting', name: 'Business Consulting', parentId: 'business' },
      { id: 'accounting', name: 'Accounting', parentId: 'business' },
      { id: 'legal', name: 'Legal Services', parentId: 'business' },
      { id: 'virtual-assistant', name: 'Virtual Assistant', parentId: 'business' },
    ]
  }
];