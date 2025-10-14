import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CustomerDashboard } from '../components/Dashboard/CustomerDashboard';
import { ProviderDashboard } from '../components/Dashboard/ProviderDashboard';
import { useAuth } from '../hooks/useAuth';

export const DashboardPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    window.location.href = '/signin';
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        {user?.role === 'customer' ? <CustomerDashboard /> : <ProviderDashboard />}
      </main>
      <Footer />
    </div>
  );
};
