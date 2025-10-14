import { AuthProvider } from './context/AuthContext';
import { JobProvider } from './context/JobContext';
import { ChatProvider } from './context/ChatContext';
import { HomePage } from './pages/HomePage';

// Simple router - in a real app, use react-router-dom
function Router() {
  const path = window.location.pathname;

  // Lazy load pages for better performance
  switch (path) {
    case '/':
      return <HomePage />;
    case '/jobs':
      return <JobsPage />;
    case '/jobs/:id':
      return <JobDetailPage />;
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
      return <SignInPage />;
    case '/signup':
      return <SignUpPage />;
    default:
      return <HomePage />;
  }
}

// Import pages
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
import { SignIn as SignInPage } from './components/Auth/SignIn';
import { SignUp as SignUpPage } from './components/Auth/SignUp';

function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <ChatProvider>
          <Router />
        </ChatProvider>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;
