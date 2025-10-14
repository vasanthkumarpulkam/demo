export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'provider';
  avatar?: string;
  phone?: string;
  location?: string;
  bio?: string;
  skills?: string[];
  rating?: number;
  reviewCount?: number;
  joinedDate: string;
  verified: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
