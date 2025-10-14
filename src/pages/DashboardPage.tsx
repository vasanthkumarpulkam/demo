import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomerDashboard from '../components/Dashboard/CustomerDashboard';
import ProviderDashboard from '../components/Dashboard/ProviderDashboard';
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import { useAuth } from '../hooks/useAuth';

export default function DashboardPage() {
  const { currentUser } = useAuth();

  const renderDashboard = () => {
    if (!currentUser) return null;

    switch (currentUser.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'provider':
        return <ProviderDashboard />;
      case 'customer':
      default:
        return <CustomerDashboard />;
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {renderDashboard()}
        </div>
      </div>
      <Footer />
    </>
  );
}