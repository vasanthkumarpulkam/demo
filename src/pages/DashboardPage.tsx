import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CustomerDashboard } from '../components/Dashboard/CustomerDashboard';
import { ProviderDashboard } from '../components/Dashboard/ProviderDashboard';
import { useAuth } from '../hooks/useAuth';

export const DashboardPage = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Please Sign In</h1>
            <p className="text-gray-600 mb-6">You need to be signed in to view your dashboard</p>
            <a
              href="/signin"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Sign In
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {user?.role === 'customer' ? <CustomerDashboard /> : <ProviderDashboard />}
        </div>
      </main>
      <Footer />
    </div>
  );
};
