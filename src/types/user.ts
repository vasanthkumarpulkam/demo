export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: "customer" | "provider" | "admin";
  language: "en" | "es";
  skills?: string[];
  tagline?: string;
  location?: string;
  rating?: { avg: number; count: number };
  isVerified?: boolean;
  stripeCustomerId?: string;
  hasPaymentMethod?: boolean;
}