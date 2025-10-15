import { AuthProvider } from './context/AuthContext';
import { JobProvider } from './context/JobContext';
import { ChatProvider } from './context/ChatContext';
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { PostJobPage } from './pages/PostJobPage';
import { DashboardPage } from './pages/DashboardPage';
import { MessagesPage } from './pages/MessagesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { SupportPage } from './pages/SupportPage';
import { LegalPage } from './pages/LegalPage';
import { SignIn } from './components/Auth/SignIn';
import { SignUp } from './components/Auth/SignUp';

function App() {
  // Simple routing based on pathname (in production, use React Router)
  const path = window.location.pathname;

  const renderPage = () => {
    switch (path) {
      case '/':
        return <HomePage />;
      case '/jobs':
        return <JobsPage />;
      case '/post-job':
        return <PostJobPage />;
      case '/dashboard':
        return <DashboardPage />;
      case '/messages':
        return <MessagesPage />;
      case '/how-it-works':
        return <HowItWorksPage />;
      case '/profile':
        return <ProfilePage />;
      case '/settings':
        return <SettingsPage />;
      case '/support':
        return <SupportPage />;
      case '/legal':
        return <LegalPage />;
      case '/signin':
        return <SignIn />;
      case '/signup':
        return <SignUp />;
      case '/about':
        return <HowItWorksPage />; // Redirect to How It Works for now
      case '/forgot-password':
        return <SignIn />; // Redirect to Sign In for now (can add forgot password later)
      default:
        // Check if it's a job detail page
        if (path.startsWith('/jobs/')) {
          return <JobDetailPage />;
        }
        return <HomePage />;
    }
  };

  return (
    <AuthProvider>
      <JobProvider>
        <ChatProvider>
          {renderPage()}
        </ChatProvider>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;
