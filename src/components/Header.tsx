import { Link } from './Common/Link';
import { useAuth } from '../hooks/useAuth';

export const Header = () => {
  const { user, isAuthenticated, signOut } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ServiceHub
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/">Home</Link>
            <Link href="/jobs">Browse Jobs</Link>
            {isAuthenticated && user?.role === 'customer' && (
              <Link href="/post-job">Post a Job</Link>
            )}
            <Link href="/how-it-works">How It Works</Link>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link href="/messages">Messages</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/profile">{user?.name}</Link>
                <button
                  onClick={signOut}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/signin">Sign In</Link>
                <Link 
                  href="/signup" 
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

// Simple Link component if not using a router
const SimpleLink = ({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) => (
  <a href={href} className={`hover:text-primary-600 transition-colors ${className}`}>
    {children}
  </a>
);
